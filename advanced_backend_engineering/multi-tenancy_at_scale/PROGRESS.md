# Multi-tenancy at Scale — Study Project

Practical-fluency curriculum (not specialist mastery). One concept + one exercise per session; progress updates only after demonstrated understanding. Sibling of `../study-project/` (systems) and `../software_design/`.

## Calibration (2026-07-26 assessment)
- Daily context: Foodics — pooled model (shared DB + shared schema, `business_id` column), tenant resolved from the logged-in user. Custom-built tenancy layer.
- Goals: (1) understand decisions baked into the codebase, (2) edge cases as tenant count grows, (3) exposure to topics years away from hands-on.
- Stack: PHP 8.3 / Laravel; MySQL 8 **and** PostgreSQL where it earns it (RLS). Evaluate `stancl/tenancy` and `spatie/laravel-multitenancy` against the hand-rolled approach.
- Baseline: works in a multi-tenant codebase daily but self-rated "no idea" on all four markers (isolation models, tenant_id indexing, noisy-neighbor containment, fleet migrations) → start from vocabulary.

## Tracks
| Track | Dir | Status |
|---|---|---|
| A — Data & Isolation | `data_isolation/` | ● active — A1 taught, exercise pending |
| B — Application Layer | `application_layer/` | ○ not started |
| C — Platform & Scale | `platform_scale/` | ○ not started |
| D — Operations | `operations/` | ○ not started |

Suggested path: A1 → A2 → B1 → B2, then interleave by interest. After A1 the tracks are largely independent.

## Current position
**Track A, Topic 1 — Isolation models (pool / bridge / silo).** Taught 2026-07-26. Exercise issued: `exercises/a1-isolation-models.md` — awaiting attempt.

## Session log
- **2026-07-26** — Assessment done, project scaffolded. Taught A1 (isolation models, tiering, the ratchet). Exercise issued, not yet reviewed.

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** ~5 topics closest to the Foodics business_id shared-schema model — RFC fuel and visible expertise.
- **Runs:** P2 Weekday-B slot, late (~weeks 15–24, Apr–Jul 2027), after rdb_beyond.
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
