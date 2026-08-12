# PHP Mastery — Progress

**Learner:** software engineer; ships Laravel features at work; strongest language Python (mental models taught by contrast).
**Baseline:** PHP 8.3 (local and assumed work runtime). 8.4/8.5 deltas flagged as they come up.
**Goal:** specialist-level mastery: internals, design, Laravel, performance.

## Tracks

| Track | Focus | Status |
|---|---|---|
| [internals](internals/progress.md) | How PHP actually executes | ● 01 in progress |
| [design](design/progress.md) | Types, modern OOP, testing, packages | **kata-fed** (weekly, from adoption — see program note) |
| [laravel](laravel/progress.md) | Framework internals, not surface usage | ○ not started (core 6 scheduled; rest JIT) |
| [performance](performance/progress.md) | Debugging, profiling, production | ○ not started |

**Default path (scheduled lessons):** internals 01–03 first (they underpin everything else), then laravel core 6 + performance rotation. The design track is *not* scheduled — it closes via the weekly kata. Adjust any time — say "switch track", "smaller exercises", "skip X".

## Now

- **internals/01 — shared-nothing execution model.** Lesson delivered; exercise in `exercises/01_shared_nothing/` awaiting attempt.

## Rules

- A topic is ✓ only after a reviewed exercise demonstrates understanding.
- Stale unit (taught >2 weeks ago) or suspected-known → attempt the exercise cold before any re-teach; a clean reviewed pass = demonstrated (Law 3), a miss opens the lesson at the miss. (internals/01 will be stale when this head activates — open it cold.)
- Interesting tangents get parked in [revisit/](revisit/README.md), not chased mid-session.

## Session log

- **2026-07-25** — Assessment: ships features regularly / all four focus areas / Laravel at work / Python background. Scaffolded project. Taught internals/01; exercise pending.

---

## Program note (refreshed 2026-08-12 — program v3, scope amendment)

REDUCED under the program; lane position, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Lane A #2 — no longer sacrificial.** Activates when `terminal-based` passes its exit gate; receipts tag `[craft]`.
- **Scheduled scope (17 topics ≈ 13h):** internals 01–03 (own rule) → laravel core 6 — {02 container, 05/06 Eloquent I–II, 07 transactions, 08 queues, 09 events}; {01, 03, 04, 10, 11, 12} pulled just-in-time when work breaks → performance 01–08.
- **Design track reclaimed (v3) — the generative thread, fed by the weekly kata from adoption day, not lessons:** one drill day per week (see `terminal-based/neovim/progress.md`) hand-writes one small PHP artifact; task = the next unchecked `design/` topic; single file + hand-written assertion, or `php -a`; lands in `exercises/katas/` (one dir, house convention); receipt tag `[kata]`. **At most one kata per month may close a design topic under Law 3**; the rest are streak-only and never count toward the ≥8/month floor. Law 9 (by-hand) governs all of it.
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
