# System Design — Progress

**Started:** 2026-07-26
**Learner profile:** Laravel/MySQL engineer. Goal: better backend/fintech engineering decisions now; this is not an interview-drill track.
**Scale exposure so far:** ~10⁴–10⁵ req/day, TB-scale DB, never on call, no perf/optimisation work.

## Calibration (2026-07-26)

| Probe | Result |
|---|---|
| Composite index prefix rule | ✅ correct. Missed: index-provided *ordering*, and the `IN (...) + ORDER BY + LIMIT` nuance |
| Idempotency / delivery semantics | ❌ blank |
| Replication lag / read-your-writes | ❌ blank |
| Latency orders of magnitude | ❌ blank |
| Slow-dependency → caller death | ❌ blank |

**Read:** strong at app-layer reasoning, no quantitative model of cost, no failure-propagation intuition. Start at foundations; move fast, don't skip the numbers.

## Tracks

| Track | Focus | Status |
|---|---|---|
| [foundations](foundations/progress.md) | Cost, capacity, queueing, tail latency | 🟡 active (0/6) |
| [data](data/progress.md) | InnoDB, transactions, replication, sharding | ⬜ queued (0/11) |
| [async](async/progress.md) | Queues, idempotency, outbox, ordering | ⬜ queued (0/9) |
| [reliability](reliability/progress.md) | Timeouts, retries, failure modes, observability | ⬜ queued (0/9) |
| [design](design/progress.md) | End-to-end designs, ADRs | 🔒 gated until the three above are ~60% |

Tracks interleave once foundations is done — the plan is adjustable at any point. Say "switch to X" or "go deeper on Y" whenever.

## Sequencing rationale

Foundations first because you can't reason about a trade-off without a cost model. Then data (daily-work compounding), async (idempotency/delivery), and reliability (failure propagation). Use design exercises to integrate the primitives rather than practising interview performance. Attempt a unit’s gate question cold before teaching it; a clean answer demonstrates it.

## Career-leverage scope (2026-08-18)

Active under `../../CURRENT.md` Phase 1. Keep only cost/latency, data consistency, async correctness, reliability, and financial-system design scenarios. The broad interview schedule, mocks, and application preparation are JIT for a real search window.

## Current position

- **Track:** foundations
- **Concept:** 1 — Latency hierarchy & the cost of work ([notes](foundations/notes/latency-hierarchy.md))
- **Status:** taught, awaiting attempt at [exercises/01-latency-budget.md](exercises/01-latency-budget.md)

## Session log

### 2026-07-26 — S1
- Calibration probe (6 questions). Baseline set above.
- Corrected: index-provided ordering avoids filesort; `IN` + `ORDER BY` + `LIMIT` across multiple prefix values usually cannot.
- Taught: foundations/1 — latency hierarchy.
- Issued: exercise 01. **Not yet marked complete.**
