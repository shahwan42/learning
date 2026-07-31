# Track 3 — Webhooks & async correctness

The PSP's version of events arrives late, twice, out of order, or not at all. Your job: converge anyway.

| # | Topic | Gate question (answer cold → skip) | Status |
|---|-------|------------------------------------|--------|
| 3.0 | Normalization & verification — per-PSP signature schemes, canonical event model, dedupe keys | Two PSPs report the "same" capture differently. Show the canonical event and its dedupe key. | not started |
| 3.1 | Ordering & races — out-of-order delivery, webhook vs API-response races, state-machine guards vs event buffering | A refund webhook arrives before the capture was recorded. What does your system do? | not started |
| 3.2 | Effect-once processing — idempotent consumers, outbox for downstream fan-out, retries, poison queue | Handler crashes after the DB write but before the ack. Redelivery happens — why is it safe? | not started |
| 3.3 | Pull as backstop — polling/sweepers for stuck states, webhook-lag alerting, replay tooling | Design the sweeper for payments stuck in `authorizing`: cadence, query, action. | not started |
| 3.S | Synthesis — async event pipeline for 3 PSPs, including replay | — | not started |

Tooling thread: webhook tunnels/CLIs for local dev, provider event logs, dead-letter dashboards.
