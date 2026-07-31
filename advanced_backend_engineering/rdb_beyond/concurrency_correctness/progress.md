# Track B — Concurrency & correctness

Transactions, locking, and race-proof writes — the money-safe core. InnoDB-first; Postgres MVCC contrast where it changes the answer.

**Interleaves:** B1 pairs well after A1. `../study-project/` A-track owns undo/redo internals at depth; here they appear only as far as they explain visible behavior.

| # | Topic | One-liner | Status |
|---|-------|-----------|--------|
| B1 | InnoDB MVCC in practice | Read views, consistent vs current reads — why REPEATABLE READ isn't what the textbook says | not started |
| B2 | The lock taxonomy | Record/gap/next-key/insert-intention; reading `performance_schema.data_locks` live | not started |
| B3 | Read-modify-write races | Lost updates and write skew; atomic conditional updates vs `FOR UPDATE` vs optimistic versioning | not started |
| B4 | Deadlocks | How they form, reading the InnoDB status report, ordering discipline, retry policy | not started |
| B5 | Queues in SQL | `FOR UPDATE SKIP LOCKED`, contention-aware claiming, the outbox pattern | not started |
| B6 | Idempotency at the DB layer | Unique keys as guards; upsert semantics and their races (`ON DUPLICATE KEY`, `INSERT IGNORE` traps) | not started |
| B7 | Transaction scope in production | Long-transaction costs (undo growth, history list length, purge lag); Laravel `DB::transaction`, `afterCommit`, retries | not started |
| B8 | Money-safe writes, end to end | Append-only ledger shape, derived balances, invariants — capstone on the lab's `ledger_entries` | not started |

## Notes

Written per-topic into `notes/` after each concept lands.
