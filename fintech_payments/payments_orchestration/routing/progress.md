# Track 2 — Routing, failover & retries

Deciding who processes each attempt — and what a *safe* second attempt even means.

| # | Topic | Gate question (answer cold → skip) | Status |
|---|-------|------------------------------------|--------|
| 2.0 | Decline taxonomy — hard vs soft declines, scheme response codes, the retryable-where matrix (same PSP / other PSP / never) | Which declines must never cascade to another provider, and what does retrying them cost you? | not started |
| 2.1 | Routing rules — hard constraints first (scheme, currency, BIN, merchant contract), then preference (cost, auth rate, availability); rules engine vs code; recording the decision | A mada card at a KSA merchant: which routing constraints are fixed before any "smart" logic gets a say? | not started |
| 2.2 | Failover & cascading — clean vs ambiguous failure, per-provider circuit breakers, health signals, cascade budgets | PSP A returns 504 on authorize. Under what conditions may you cascade to B, and what must happen first? | pending calibration (ex 00) |
| 2.3 | Measuring routing — auth-rate uplift, per-BIN/scheme cuts, A/B across providers, confounders | Provider B shows +3% auth rate over A. Give two reasons that number might be a lie. | not started |
| 2.S | Synthesis — routing policy doc for 3 PSPs: constraints, preferences, failover, measurement plan | — | not started |

Failure-mode thread: retry storms during PSP brownouts, cascade double-charges, circuit-breaker flapping.
