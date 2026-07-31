# Track C — Schema design & evolution

Modeling decisions that age well, and changing schemas under live traffic without downtime.

**Interleaves:** start after A2 (index-cost vocabulary). C6 leans on B2 (metadata locks). Fleet-wide/tenant migrations stay in `../multi-tenancy_at_scale/`.

| # | Topic | One-liner | Status |
|---|-------|-----------|--------|
| C1 | Primary keys & locality | Auto-inc vs UUIDv4 vs UUIDv7/ULID — clustered-index locality, page splits, secondary-index tax | not started |
| C2 | Normalization as a tradeoff | Where 3NF earns it; deliberate denormalization with maintained invariants; generated columns | not started |
| C3 | Constraints at scale | What FKs really cost (and the case some shops make for dropping them), CHECK (8.0.16+), uniqueness patterns incl. soft-delete-scoped | not started |
| C4 | JSON columns | When they earn it, indexing via generated columns and multi-valued indexes, the EAV trap | not started |
| C5 | Time & history | Audit/history tables, the soft-delete tax on queries and indexes, effective dating | not started |
| C6 | Zero-downtime DDL | Online DDL matrix (INSTANT/INPLACE/COPY), metadata-lock pileups — the real killer, gh-ost/pt-osc, expand-contract, batched backfills | not started |
| C7 | Big-table lifecycle | What partitioning does and doesn't buy on MySQL; archival and retention | not started |

## Notes

Written per-topic into `notes/` after each concept lands.
