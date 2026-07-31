# Track: Foundations

The cost model everything else is built on. Short track — 6 concepts. Without it, every "should we cache this?" conversation is vibes.

| # | Concept | Status |
|---|---|---|
| 1 | Latency hierarchy & the cost of work — [notes](notes/latency-hierarchy.md) | 🟡 taught, exercise pending |
| 2 | Back-of-envelope estimation: QPS, storage, bandwidth, connections | ⬜ |
| 3 | Little's Law & the utilisation curve — why systems cliff at ~80% | ⬜ |
| 4 | Concurrency limits: workers, pools, queue depth, and where the real ceiling is | ⬜ |
| 5 | Tail latency: why p99 is the design target; tail amplification under fan-out | ⬜ |
| 6 | Where the time actually goes: profiling one request end-to-end (Laravel + MySQL) | ⬜ |

**Exit criteria:** you can estimate a request's latency budget and a service's capacity ceiling on a whiteboard, in under five minutes, and defend the numbers.

## Completed
_none yet_

## Next
Concept 1 review → Concept 2.
