# Track 5 — Operability

Design decisions that only show their cost at 3am. Included because "good design" that you can't debug in production isn't good design.

## Curriculum (draft)

| # | Topic | Status |
|---|-------|--------|
| 1 | Failure as a design input: timeouts, retries, and what retry implies | |
| 2 | Idempotency — designing operations that survive being run twice | |
| 3 | Error taxonomy: expected vs. exceptional, and where each is handled | |
| 4 | Designing for observability: correlation IDs, structured logs, span boundaries | |
| 5 | Where transactions belong — and why queued jobs inside transactions break | |
| 6 | Common Laravel production failure modes (N+1, queue retries, event listeners swallowing errors) | |
| 7 | Debugging a design problem you can't reproduce locally | |

## Completed

_none_
