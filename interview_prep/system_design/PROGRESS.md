# System Design — Progress

**Started:** 2026-07-26
**Learner profile:** Laravel/MySQL engineer. Goals: better decisions at work now → specialist depth → staff/architect credibility. **Interview ramp Oct 2027, active applications Q1–Q2 2028** (Less-Is-More program, root `PROGRAM.md`).
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

Foundations first because you can't reason about *any* tradeoff without a cost model — probe 4 showed there isn't one yet. Then data (your daily work, and where your existing knowledge compounds fastest), then async (probe 2's gap — the highest-value gap for a payments-adjacent codebase), then reliability (probe 3 and 5). Design comes last on purpose: interview designs are hollow without the primitives. **Program note (2026-07-31):** this project runs in Phase 3 — foundations from Aug 2027 (P3a), the rest from Oct 2027 (P3b). The data track ≈ `rdb_beyond` and the async track ≈ reconciliation/outbox material demonstrated in Phase 2, so **attempt every unit's gate question cold first** (PROGRAM.md, Law 7); the lesson opens only on failure.

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
