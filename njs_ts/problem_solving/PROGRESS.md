# Study Project — Problem Solving (LeetCode-style, Node.js)

Pattern-based problem solving for a working engineer. Goal: steady interview readiness (no deadline) plus sharper algorithmic judgment for daily work.

## Learner profile (assessed 2026-07-25)
- DSA: theory only, rusty — knows big-O / lists / trees / hash maps conceptually, little puzzle-solving practice.
- JS is still new (Node/TS track runs in parallel at `../study-project/`), so JS-for-DSA idioms are taught, never assumed.
- Language: JavaScript by default; occasional TypeScript re-solves as TS practice.
- Cadence: ~30 min most days → one concept OR one problem per session. Never batch concepts.
- Environment: Node v26.5.0, stdlib only (`node:test`, `node:assert`) — no installs.

## Protocol (for returning sessions)
1. Read this file + the active track's progress.md. Summarize where we stopped; offer continue / switch / revisit.
2. One concept per session: mental model + why it works, prerequisites just in time.
3. One exercise → wait for the attempt → review directly for correctness and idiom. Don't solve it for the learner unless asked.
4. Mark ✅ only after demonstrated understanding: working code + a correct time/space complexity statement.
5. Park nonessential tangents in `revisit/README.md`.
6. Concise, direct, no filler. Correct mistakes plainly.

## Tracks

| Track | Status | Progress |
|---|---|---|
| [foundations](foundations/progress.md) | active | 0/7 |
| [patterns-linear](patterns-linear/progress.md) | not started | 0/11 |
| [patterns-recursive](patterns-recursive/progress.md) | not started | 0/11 |
| [interview-craft](interview-craft/progress.md) | locked until ~4 patterns-linear topics done | 0/5 |

## Recommended path (adjustable)
1. foundations 1–7 — JS as a problem-solving tool; everything else assumes it.
2. patterns-linear — highest interview ROI; arrays/strings dominate question banks.
3. interview-craft 1–2 interleaved once a few patterns feel comfortable.
4. patterns-recursive — trees/graphs/DP; needs recursion legs first.
5. Ongoing: after finishing any pattern, re-solve one older problem cold (spaced repetition).

## Current position
- **Track:** foundations
- **Topic:** 1 — The solving pipeline & test harness
- **State:** taught; exercise pending → [exercises/01-two-sum](exercises/01-two-sum/README.md)

## Session log
- **2026-07-25** — Assessment (theory-rusty / interviews-eventually / JS + occasional TS / ~30 min daily). Scaffolded project. Taught foundations #1 (pipeline + node:test harness). Assigned exercise 01 (Two Sum, brute force); awaiting attempt.
