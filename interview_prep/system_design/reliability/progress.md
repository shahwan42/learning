# Track: Reliability & Operability

Probe 5 (slow dependency killed the caller) is concept 1–5 territory. This track is what separates "designed it" from "ran it".

| # | Concept | Status |
|---|---|---|
| 1 | Timeouts: connect vs read vs total, deadline propagation, the missing-default trap | ⬜ |
| 2 | Retries: when they help, when they amplify; backoff + jitter; retry budgets | ⬜ |
| 3 | Circuit breakers & bulkheads: isolating a slow dependency | ⬜ |
| 4 | Load shedding, admission control, graceful degradation | ⬜ |
| 5 | Named failure modes: cascading, metastable, thundering herd, cache stampede | ⬜ |
| 6 | SLIs/SLOs/error budgets that actually drive decisions | ⬜ |
| 7 | Observability: RED & USE, cardinality traps, structured logs, tracing, what to alert on | ⬜ |
| 8 | Debugging production: a repeatable method under pressure | ⬜ |
| 9 | Deploys as a failure source: migrations, flags, rollback safety | ⬜ |

**Exit criteria:** you can take an existing service and enumerate how it dies, then close the top three paths with concrete config and code.

## Completed
_none yet_
