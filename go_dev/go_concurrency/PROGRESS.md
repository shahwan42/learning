# Go Concurrency — Study Project

Practical concurrency for a backend engineer. Target: confidently write, review, and debug
concurrent Go in production services. Not runtime-internals mastery.

## Learner profile (assessed 2026-07-25)
- Background: PHP/Laravel + Python, request/response backend work. Mostly synchronous.
- Go: can read it, hasn't written it → teach Go idioms just-in-time, don't assume.
- Concurrency: new material. Locks, races, cancellation are all first exposure.
- Goals (all four, in this priority order):
  1. Workers / data pipelines
  2. Parallel I/O (fan out to N APIs/queries, aggregate)
  3. HTTP/gRPC service internals (context, timeouts, shared state)
  4. Debugging prod concurrency bugs (races, leaks, goroutine dumps, pprof)
- Env: macOS arm64, Go 1.26.5.
- Sibling project: `../` (general Go course). Its `concurrency/` track is left as-is; this project
  supersedes it in practice.

## Tracks

| # | Track | Dir | Status |
|---|-------|-----|--------|
| A | Mechanics — the primitives and what they really do | `mechanics/` | in progress |
| B | Patterns — how real services use them | `patterns/` | not started |
| C | Correctness & debugging — races, leaks, observability | `debugging/` | not started |
| D | Capstone — build an aggregator endpoint and a queue worker | `capstone/` | not started |

Order: A → B, with C interleaved from A§7 onward (the race detector arrives the moment shared
state does). D last. Adjustable — say the word to reorder, trim, or go deeper anywhere.

## Current focus
- Track: A — Mechanics
- Topic: A§1 Goroutines & the scheduler
- State: concept explained; exercise `01-goroutines` issued; awaiting attempt.

## How sessions run
1. One concept at a time: mental model → why it works that way → practical consequences.
2. Missing Go prerequisites taught inline, notes land in `prerequisites/notes/`.
3. One small realistic exercise per concept in `exercises/`. I wait for your attempt, then review
   it directly for correctness and idiom.
4. A topic is checked off only after you demonstrate understanding — not after reading the note.
5. Interesting-but-nonessential tangents go to `revisit/README.md` instead of derailing the lesson.
6. Notes stay short: mental model, the API actually used, the pitfalls. No documentation dumps.

## Returning-session checklist (for the assistant)
Read this file + the active track's `progress.md` + the current exercise dir. Summarize where we
stopped in a few lines. Offer: continue, switch track, or revisit. Don't re-teach completed topics.

## Session log
- 2026-07-25 — Assessed. Project created (4 tracks). Started A§1 goroutines; exercise
  `01-goroutines` issued.
