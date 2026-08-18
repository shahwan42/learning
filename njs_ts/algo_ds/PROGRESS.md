# Study Project — Algorithms & Data Structures (Node.js)

> **Career-leverage status (2026-08-18): JIT.** This is not an active learning queue; pull only the smallest slice demanded by a real problem or active interview search.

How data structures and algorithms actually work — for real backend code first, interviews second. Complements `../problem_solving/` (interview pattern drills): this project builds the machinery, that one drills applying it under interview conditions.

## Learner profile (assessed 2026-07-25)
- DSA theory-rusty: big-O / lists / trees / hash maps known conceptually, little hands-on practice.
- Wants all four angles: choosing structures in real code, V8 internals & performance, building from scratch, classic algorithms.
- Language: JavaScript first; ⭐-marked builds get re-implemented in TypeScript afterwards as TS practice.
- Cadence: ~30 min sessions, alternating freely with the other three study projects. One concept OR one exercise per session; never batch.
- Environment: Node v26.5.0, stdlib only (`node:test`, `node:assert`, `node:perf_hooks`) — no installs.

## Boundaries (don't duplicate siblings)
- `../problem_solving/` owns interview drills. Its foundations track covers JS *usage* costs (array idioms, Map/Set usage, comparator traps, constraints→complexity). This project owns the *mechanism* level: why those costs hold (memory layout, hashing, amortization), building structures from scratch, classic algorithms as topics, and perf tooling.
- `../study-project/` owns JS/TS language mechanics and event-loop fundamentals.
- `../design_patterns/` owns design patterns.
Cross-reference instead of re-teaching. Just-in-time refreshers go in `prerequisites/notes/`.

## Protocol (returning sessions)
1. Read this file + the active track's progress.md. Summarize where we stopped; offer continue / switch / revisit.
2. One concept per session: mental model + why it works + practical consequences; prerequisites just in time.
3. One small realistic exercise → wait for the attempt → review for correctness and idiom. Don't solve it for the learner unless asked.
4. ✅ only on demonstrated understanding: working code + a correct time/space complexity statement.
5. Notes stay concise (mental models, APIs, pitfalls) in `<track>/notes/NN-slug.md`. Park tangents in `revisit/README.md`.
6. Concise, direct, no filler. Correct mistakes plainly.

## Tracks
| Track | Status | Progress |
|---|---|---|
| [data-structures](data-structures/progress.md) | active | 0/9 |
| [algorithms](algorithms/progress.md) | not started | 0/7 |
| [perf-engineering](perf-engineering/progress.md) | not started | 0/6 |

## Recommended path (adjustable)
1. data-structures 1–2 (arrays, amortized growth) — the ground everything else sits on.
2. perf-engineering 1 (honest benchmarking) early — from then on complexity claims get verified, not trusted.
3. data-structures 3–7, interleaving perf-engineering 2–3 when profiling questions arise naturally.
4. algorithms 1–3 (binary search, sorting) any time after data-structures 2.
5. data-structures 8–9 (graphs, LRU capstone) → algorithms 4–7 (graph algorithms, DP).
6. TS re-solves: whenever a ⭐ build is ✅ and you'd rather do TS reps than a new concept.

## Current position
- **Track:** data-structures
- **Topic:** 1 — Arrays: the real story
- **State:** not started (scaffolded 2026-07-25; assessment done, nothing taught yet)

## Session log
- **2026-07-25** — Assessment (complement problem_solving / all four emphases / JS-first + TS re-solves / alternate ~30 min). Scaffolded project: 3 tracks, 22 topics. Next: teach data-structures #1.

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** ~6 build-from-scratch structures (hashmap, heap, graph/BFS-DFS, trie …), each only when it unblocks a problem_solving pattern.
- **Runs:** P3 (Aug 2027+), on demand — no standalone slot.
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
