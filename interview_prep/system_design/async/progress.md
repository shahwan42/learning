# Track: Async & Event-Driven

Your probe-2 blank (double charge on retry) lives here. Highest-value track for payment-adjacent systems.

| # | Concept | Status |
|---|---|---|
| 1 | Delivery semantics: at-most-once, at-least-once, why "exactly-once delivery" is a myth | ⬜ |
| 2 | Idempotency for real: idempotency keys, natural keys, dedupe tables, idempotent writes | ⬜ |
| 3 | The dual-write problem & the transactional outbox | ⬜ |
| 4 | Queue mechanics: Redis vs SQS vs Kafka models, visibility timeout, ack, DLQ | ⬜ |
| 5 | Ordering & partitioning: per-key ordering, what concurrency costs you | ⬜ |
| 6 | Backpressure, poison messages, retry storms, DLQ triage | ⬜ |
| 7 | Event schema evolution & consumer contracts | ⬜ |
| 8 | Sagas & compensation vs distributed transactions | ⬜ |
| 9 | Scheduled/recurring work: locks, drift, missed windows, overlapping runs | ⬜ |

**Exit criteria:** you can design a side-effecting job that is safe under arbitrary crashes, duplicates, and reordering — and explain exactly which failure each mechanism covers.

## Completed
_none yet_
