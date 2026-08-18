# Event Sourcing — Study Project

> **Career-leverage status (2026-08-18): JIT.** Event sourcing is a pattern to evaluate for a real problem, not an active default architecture curriculum.

Practical-fluency curriculum. Primary goal: **adoption judgment** — know when event sourcing fits, argue for/against it credibly, grounded by building one.

## Calibration (2026-07-26 assessment)
- Baseline: "only heard the term" — no prior ES exposure. Start every topic at mechanics.
- Prior hands-on: Laravel events + queued listeners only. No broker, no outbox/CDC, no separate read models — teach those just-in-time.
- Stack: hand-rolled event store on PHP 8.3 / MySQL 8 first, then spatie/laravel-event-sourcing. EventStoreDB as tooling exposure only (docker-compose available; `docker` CLI not installed).
- Running example domain: customer wallet / ledger (cashflow-shaped, matches work).

## Tracks
| Track | Directory | Status |
|---|---|---|
| A — Core mechanics | `core_mechanics/` | ▶ in progress (A1) |
| B — Projections & CQRS | `projections_cqrs/` | not started |
| C — Evolution & operations | `evolution_and_ops/` | not started |
| D — Adoption judgment | `adoption/` | not started |

Order: A → B → C. D is the stated goal — its topics interleave once A is done and close out the curriculum.

## Session log
- **2026-07-26** — Assessment + scaffold. Started A1 (state-stored vs event-sourced). Exercise issued, awaiting attempt.
