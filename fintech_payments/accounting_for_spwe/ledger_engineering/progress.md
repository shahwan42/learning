# Track 2: Ledger engineering

Goal: turn double-entry into schemas, code, and operational practice that survives production.

| # | Unit | Status |
|---|------|--------|
| 1 | Ledger schema — immutable journal, entry legs, derived balances | — |
| 2 | Money as data — minor units, rounding, allocating splits (the penny problem) | — |
| 3 | Idempotency — double-posting protection, retries, exactly-once illusions | — |
| 4 | Balance semantics — available vs pending vs settled; holds | — |
| 5 | Concurrency — hot accounts, locking, ordering | — |
| 6 | Multi-currency — per-currency accounts, FX conversion entries | — |
| 7 | Observability — invariant checks, drift detection, audit trails | — |

Real-world reference points used along the way: TigerBeetle, Stripe & Modern Treasury ledger write-ups, Postgres append-only journal patterns.
