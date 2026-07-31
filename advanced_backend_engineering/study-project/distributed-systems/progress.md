# Track B — Distributed Systems

**Framing:** you already write code that calls other services. This track is about what happens when those calls fail in the specific, boring ways they actually fail — and why "exactly once" is a delivery guarantee nobody has.

**Done when:** given any two-system interaction you can name the failure window, say whether it needs idempotency / outbox / saga, and defend the choice.

| # | Topic | Status | Note |
|---|-------|--------|------|
| B1 | The failure model: what a network call can actually do to you | queued | |
| B2 | At-least-once delivery and idempotency keys | queued | |
| B3 | The dual-write problem; transactional outbox; CDC (Debezium) | queued | |
| B4 | Sagas and compensating transactions | queued | |
| B5 | Consistency models: linearizable, read-your-writes, eventual | queued | |
| B6 | Distributed locks: Redlock's critique, fencing tokens, `Cache::lock` | queued | |
| B7 | Queue semantics: SQS vs Redis vs Kafka; ordering, partitions, rebalance | queued | |
| B8 | Retries, backoff, jitter, retry storms, DLQs, poison messages | queued | |
| B9 | Clock skew and ordering; why `updated_at` is not a version | queued | |
| B10 | Consensus in one sitting: Raft mental model, quorums | queued | |
| B11 | Distributed rate limiting and quotas | queued | |
| B12 | Putting it together: a correct cross-service workflow in Laravel | queued | |

## Completed

_(nothing yet)_
