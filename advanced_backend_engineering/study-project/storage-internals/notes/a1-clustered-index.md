# A1 — Pages, rows, and the clustered index

## Mental model

**Everything is 16KB pages.** The page is the unit of disk I/O, of buffer-pool caching, and of most internal bookkeeping. Nothing smaller than a page ever moves between disk and memory. "This query reads 200 bytes" is never true.

**The table *is* the primary key's B+tree.** InnoDB has no separate heap. Leaf pages of the PK tree contain the full rows, sorted by PK. Saying "clustered index" and "table" is saying the same thing twice.

> Postgres differs here: it has a heap plus independent indexes, all of which store a `ctid` pointing into the heap. Most of the reasoning below is InnoDB-specific. Don't port it blindly.

**A secondary index leaf stores `(indexed columns, primary key)`** — not a physical row pointer. So a non-covering secondary lookup is *two* tree descents: find the PK in the secondary tree, then descend the clustered tree to get the row. This single fact explains most of A2 and A3.

## The arithmetic worth memorising

Internal (non-leaf) nodes hold only keys + 6-byte child pointers, so fanout is enormous. For an 8-byte `BIGINT` PK, entries are ~14–16 bytes → **~1000 entries per internal page**.

| Depth | Rows covered (fanout 1000, ~100 rows/leaf) |
|-------|--------------------------------------------|
| 2 | ~100 K |
| 3 | ~100 M |
| 4 | ~100 B |

So a well-shaped table holds 100M rows in a **3-level tree**. A point lookup touches 3 pages — but the root (1 page) and level-2 (1000 pages ≈ 16MB) are effectively always resident, so it costs **~1 real disk read**.

Both multipliers are yours to ruin:

- **Fat PK** shrinks fanout. `CHAR(36)` under `utf8mb4` occupies **144 bytes** in an index entry, not 36 — fanout drops from ~1000 to ~110.
- **Fat rows** shrink rows-per-leaf. A row averaging 4KB gives ~3 rows per leaf instead of ~100.

Do both and your "3-level tree" is 5 or 6 levels, and every level is a cache miss candidate.

## The PK is copied into every secondary index

A 16-byte `BINARY(16)` PK versus an 8-byte `BIGINT`, across 5 secondary indexes and 100M rows, is ~4GB of extra index that has to fit in your 64GB buffer pool alongside the data. The choice is paid five times, not once.

## Insert order is the whole ballgame

- **Sequential PK** (auto-increment, ULID, UUIDv7): every insert lands in the rightmost leaf. High fill factor (~15/16 of the page), almost no page splits, one hot page in memory.
- **Random PK** (UUIDv4): every insert lands in a random leaf. That leaf must be read in (a disk read on a table larger than the buffer pool), then likely **split** — one full page becomes two half-full pages. Steady-state fill drops to ~50–70%, the index is ~1.5× larger on disk, and the write working set is the entire table instead of one page.

Same rows, same schema shape, 5–10× the write cost at scale. This is the highest-value thing on the page.

### Laravel specifics

- `$table->id()` → `BIGINT UNSIGNED AUTO_INCREMENT`. Correct default; don't be clever.
- Need opaque public identifiers? Use `$table->ulid()` / UUIDv7, or keep `id` as the PK and add a unique `public_id`. The trait matters: `HasUlids` and `HasVersion7Uuids` are time-ordered; `HasVersion4Uuids` is not. `HasUuids` uses `Str::orderedUuid()` (timestamp-prefixed) — check what your Laravel version actually emits before trusting it.
- If you must store a UUID, store `BINARY(16)`, not `CHAR(36)`. See the 144-byte note above.

## Off-page (overflow) storage

InnoDB requires at least 2 rows per page, so the inline row limit is roughly **8126 bytes** (half a page, minus overhead). Under `ROW_FORMAT=DYNAMIC`, when a row exceeds it, the longest variable-length columns are pushed to overflow pages, leaving a 20-byte pointer in the leaf.

The trap runs both ways:

- A 4KB `JSON`/`TEXT` column stays **inline** — it is under the threshold — and quietly cuts your rows-per-leaf from 100 to 3. Every scan now reads 30× the pages.
- A 40KB column goes off-page, so scans stay fast, but `SELECT *` pays extra page reads per row to chase the pointer.

`SELECT *` on a table with a wide column is not a style complaint; it's a page-count multiplier.

## Pitfalls

- Assuming rows are stored in insert order. They're in PK order. `ORDER BY id` is free; `ORDER BY created_at` is a sort unless indexed.
- `DELETE` does not shrink the tablespace — it leaves holes in pages. Only a rebuild (`OPTIMIZE TABLE`, which is an online DDL rebuild in 8.0) reclaims it. A table that's 60% deleted rows still costs 100% of the page reads on a scan.
- Composite natural keys as PK. Elegant in the ERD, expensive in every secondary index.
- Benchmarking on a dataset that fits in the buffer pool. Every conclusion you draw is about RAM, not about your database.

## Verify it yourself

```sql
-- rows, avg row length, index sizes
SELECT table_name, table_rows, avg_row_length, data_length, index_length
FROM information_schema.tables WHERE table_schema = 'lab';

-- actual pages read for a query
SHOW STATUS LIKE 'Innodb_buffer_pool_read_requests';  -- logical page accesses
SHOW STATUS LIKE 'Innodb_data_reads';                  -- physical reads
```

Run the pair before and after a query; the deltas are the real page counts. This is the ground truth that `EXPLAIN`'s `rows` estimate only guesses at.
