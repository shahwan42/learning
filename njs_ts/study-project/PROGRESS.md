# Study Project — Node.js / TypeScript

> **Career-leverage status (2026-08-18): JIT.** No standalone Node/TypeScript learning is scheduled. Use only when a concrete project or role needs it.

Practical curriculum for a working software engineer. Goal: productive development, not specialist mastery.

## Learner profile (assessed 2026-07-25)
- Strong in another backend language; minimal JS. Concurrency mental model is threaded/sync (request-per-worker).
- TypeScript: reads it, barely writes it.
- Goals: backend APIs & services, CLI tools/automation, later full-stack (Next.js).
- Environment: Node v26.5.0, npm 11.

## Protocol (for returning sessions)
1. Read this file + the active track's progress.md. Summarize where we stopped; offer continue / switch track / revisit.
2. One concept per lesson: mental model + why/how, prerequisites just-in-time.
3. One small realistic exercise → wait for attempt → review directly for correctness and idiom.
4. Mark a topic ✅ only after demonstrated understanding.
5. Park nonessential tangents in revisit/README.md.
6. Concise and direct. No filler, no generic praise. Correct mistakes clearly.

## Tracks

| Track | Status | Progress |
|---|---|---|
| [node-runtime](node-runtime/progress.md) | active | 1/10 |
| [typescript](typescript/progress.md) | not started | 0/9 |
| [backend-services](backend-services/progress.md) | not started | 0/9 |
| [cli-automation](cli-automation/progress.md) | not started | 0/5 |
| fullstack-next | deferred | planned after backend-services basics |

## Recommended path (adjustable)
1. node-runtime 1–5 — concurrency model, promises, modules, npm, errors
2. typescript 1–5 — enough to write typed code without fighting it
3. backend-services — interleave remaining node-runtime/typescript topics as they become relevant
4. cli-automation — anytime after node-runtime 6; good practice ground

## Current position
- **Track:** node-runtime
- **Topic:** 2 — Promises & async/await (exercise assigned before the lesson, on purpose — it exposes the gap first)
- **State:** exercise pending → [exercises/02-concurrent-awaits](exercises/02-concurrent-awaits/README.md)

## Observed learning notes
- Reasons well about the model; the gap is *writing* async JS, not understanding it. Give code-production exercises, not just prediction ones.
- Anchors well to PHP-FPM comparisons — keep using them.

## Session log
- **2026-07-25** — Assessment. Scaffolded project. Taught node-runtime #1 (event loop vs request-per-worker). Exercise 01: diagnosis correct, fix wrong (deferred blocking work via `setTimeout`, and response sent before the work). Measured the failure, taught async/await mechanics as a just-in-time prereq. Topic 1 ✅. Assigned exercise 02 (sequential vs concurrent awaits) as the bridge into topic 2.

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** ~12 node-runtime + TypeScript topics, pulled JUST-IN-TIME by ledger-capstone as the build demands them (canonical Node/TS source per Law 6). The CLI thread is dead — the capstone is the CLI.
- **Runs:** P3a onward (Aug 2027+), as capstone feeder only — no standalone slot.
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
