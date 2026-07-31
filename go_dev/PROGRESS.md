# Go Study Project

Practical Go for a working backend engineer. Goal: build and ship real services, CLIs, and workers — not specialist mastery.

## Learner profile (assessed 2026-07-25)
- Background: PHP/Laravel + Python, backend request/response work
- Go exposure: toured the syntax, never built anything
- Concurrency experience: minimal — treat as new material, teach prerequisites just-in-time
- Goals: backend HTTP/gRPC services, CLI tooling, workers/data processing, infra tooling
- Environment: macOS arm64, Go 1.26.5

## Tracks

| # | Track | Dir | Status |
|---|-------|-----|--------|
| 1 | Foundations | `foundations/` | in progress |
| 2 | Backend services | `services/` | not started |
| 3 | Concurrency | `concurrency/` | not started |
| 4 | CLI tooling | `cli/` | not started |
| 5 | Production & ops | `production/` | not started |

Recommended order: 1 → 2 → 3, then 4 and 5 interleave. CLI topics are light and can be pulled forward anytime. Concurrency waits until structs, interfaces, and errors feel comfortable. This table is adjustable — reorder or trim on request.

## Current focus
- Track: Foundations
- Topic: §1 Toolchain & modules
- State: concept explained, exercise `01-hello-module` issued, awaiting attempt

## How sessions run
1. One concept per step: mental model + why it works that way + practical consequences.
2. Prerequisites taught just-in-time → `prerequisites/notes/`.
3. One small realistic exercise per concept → `exercises/`. Reviewed for correctness and idiom.
4. A topic is marked done only after a demonstrated-understanding attempt — not after reading.
5. Interesting tangents get parked in `revisit/README.md`, not chased.
6. Notes stay short: mental models, APIs actually used, pitfalls. No textbook dumps.

## Returning-session checklist (for the assistant)
Read this file plus the active track's `progress.md`. Summarize where we stopped. Offer: continue, switch track, or revisit something. Don't re-teach completed topics unless asked.

## Session log
- 2026-07-25 — Assessment done. Curriculum created. Started Foundations §1 (toolchain & modules); exercise `01-hello-module` issued.
