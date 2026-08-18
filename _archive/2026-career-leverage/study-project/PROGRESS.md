# Advanced Backend Engineering — Progress

## Learner profile

- **Stack for all exercises:** PHP 8.3 / Laravel. Database default: **MySQL 8 / InnoDB** (matches day job). Postgres contrasts noted where the behaviour genuinely differs.
- **Starting point:** strong application-level engineer; limited hands-on with storage internals, distributed failure modes, and production ops.
- **Goal:** specialist-level mastery, no deadline. Build and break real systems locally; every topic must end up whiteboard-articulable.
- **Weighting:** all four tracks, run in the order below.

## Method (the loop)

1. One concept per turn — mental model first, then why it works that way.
2. Prerequisites taught just-in-time, filed in `prerequisites/notes/`.
3. One small realistic exercise. I wait for your attempt.
4. Direct review: correctness, then idiomatic usage.
5. Progress updates only after you demonstrate understanding — not after you read.
6. Interesting-but-nonessential detours go to `revisit/README.md`.

Say **"skip"** if a concept is already solid — I'll spot-check with one question and move on.
Say **"park it"** to push something to `revisit/`.
Say **"switch to <track>"** any time.

## Tracks

| # | Track | Dir | Status |
|---|-------|-----|--------|
| A | Storage internals | [storage-internals/](storage-internals/progress.md) | **active** |
| B | Distributed systems | [distributed-systems/](distributed-systems/progress.md) | not started |
| C | Concurrency & performance | [concurrency-performance/](concurrency-performance/progress.md) | not started |
| D | Observability & failure | [observability-failure/](observability-failure/progress.md) | not started |

Tracks are not strictly sequential. A runs first because everything else (replication lag, idempotency, connection exhaustion, slow-query incidents) reduces to storage behaviour you can't reason about yet.

## Current position

- **Track:** A — Storage internals
- **Topic:** A1 — Pages, rows, and the clustered index
- **Waiting on:** your attempt at `exercises/A1-clustered-index.md`

## Session log

| Date | Covered | Outcome |
|------|---------|---------|
| 2026-07-25 | Assessment; scaffold; A1 taught | awaiting A1 exercise |

## Lab

Local environment lives in `lab/`. See [prerequisites/notes/lab-setup.md](prerequisites/notes/lab-setup.md).
Nothing needs to be running for A1 — it's a paper exercise. A2 onward wants MySQL up.
