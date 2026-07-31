# Track 3 — Money-Movement Integrity

Payouts and transfers that can't double-fire, be tampered with, or drain silently — whether the cause is a bug, a race, or an insider.

## Topics
| # | Topic | Status | Competency check |
|---|-------|--------|------------------|
| 1 | Authorizing money movements | not started | Who/what may trigger a payout: internal authz, maker-checker, admin-endpoint hardening, audit trails that survive the attacker |
| 2 | Exactly-once money ops | not started | Idempotency at the payout layer; why job retries + external API calls are the classic double-pay; outbox pattern; distributed-lock pitfalls |
| 3 | Balance integrity | not started | TOCTOU balance checks, isolation levels, atomic updates, DB constraints as the last line; prevent negative balances under concurrency |
| 4 | Reconciliation as a security control | not started | Detect missing/duplicated money via settlement files; break investigation workflow; why recon catches what tests don't |
| 5 | Limits & anomaly detection | not started | Velocity caps, unusual-payout alerts, kill switches — and who can flip them |

Synthesis exercise: design a payout system that a retried job, a race, or a compromised admin account cannot drain.
