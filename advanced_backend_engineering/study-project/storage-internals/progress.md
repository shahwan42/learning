# Track A — Storage Internals (MySQL 8 / InnoDB)

**Why this track first:** most "distributed systems" incidents in a Laravel shop are actually storage incidents wearing a costume — replica lag, lock waits, connection exhaustion, a query whose plan flipped at 3am.

**Done when:** you can look at a schema + query + `EXPLAIN` output and predict pages read, locks taken, and what breaks at 100x the row count — without running it.

| # | Topic | Status | Note |
|---|-------|--------|------|
| A1 | Pages, rows, and the clustered index | **taught — exercise pending** | [notes](notes/a1-clustered-index.md) |
| A2 | Secondary indexes, covering indexes, index-only scans | queued | |
| A3 | Reading `EXPLAIN` / `EXPLAIN ANALYZE`; when the optimizer's stats lie | queued | |
| A4 | MVCC: undo logs, read views, the cost of long transactions | queued | |
| A5 | Isolation levels for real: RR vs RC, what Laravel actually gives you | queued | |
| A6 | Locking: record, gap, next-key; deadlocks; `FOR UPDATE` patterns | queued | |
| A7 | Redo log, WAL, fsync, `innodb_flush_log_at_trx_commit`, group commit | queued | |
| A8 | Buffer pool, working set, why "add RAM" works until it doesn't | queued | |
| A9 | Connections: `max_connections` math, pooling, Octane implications | queued | |
| A10 | Replication: binlog formats, replica lag, read-after-write traps | queued | |
| A11 | Online schema change: instant DDL, gh-ost/pt-osc, expand-contract deploys | queued | |
| A12 | Partitioning and sharding: when, how, and what you give up | queued | |

## Completed

_(nothing yet)_

## Next

A1 exercise review → A2.
