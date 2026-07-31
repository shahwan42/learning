# Writing for Software/Product Engineers — Progress

Goal: communicate ideas clearly and efficiently in writing, at the Senior Backend/Product Engineer 3 bar.
Anchor artifact: a cross-team RFC that gets read, commented on, and adopted.

## Calibration (2026-07-26)
- Writes design docs/RFCs, ADRs, SDDs monthly. Rarely: postmortems, promo docs.
- Reported feedback: (a) too long, not to the point; (b) wording isn't smooth.
- Audience priority: squad → other backend engineers → EMs/directors.
- Process: write-then-fix, hours per one-page doc. Training unassisted writing; AI-assisted drafting parked in revisit/.
- Exercise material: real Foodics work + synthetic, both approved.
- Calibration sample (60-second director pitch for Claude API access) diagnosis:
  - No explicit ask — no decision requested, no cost, no number anywhere; closes with "Thanks"
  - Structure inverted: strongest concrete material (background agents triaging/submitting/reviewing PRs) buried mid-text; proof ("we've built AI workflows") last, as an afterthought; sentence 2 restates sentence 1
  - Mechanics: missing article ("spend *a* good portion"), count agreement ("so *many* workflows"), collocation ("so far" vs "for now"), meaning-flipping typo ("now"/"not"), casual register ("etc...", "Thanks"), inconsistent term capitalization

## Tracks
| Track | Fixes | Status |
|---|---|---|
| structure/ | "too long, not to the point" — BLUF, pyramid, evidence, cutting | in progress |
| mechanics/ | "wording isn't smooth" — concision, cohesion, tone, error log | not started (error log seeded) |
| genres/ | the PE3 bar — ADRs, SDDs, cross-team RFCs, postmortems | not started |
| process/ | "hours per page" — outline-first, revision passes, timeboxing, tooling | not started |

Default path: structure first; mechanics reviewed inline on every exercise from day one (error log tracks patterns). Genres once structure basics hold. Process woven in when the speed pain shows in exercises.

## Current
- Track: structure/
- Topic: BLUF & the ask
- Open exercise: exercises/01-bluf-pitch-rewrite.md (awaiting attempt)

## Session log
- 2026-07-26 — Assessment done, calibration sample analyzed, project scaffolded. Taught: BLUF & the ask. Assigned exercise 01 (rewrite of calibration pitch). Awaiting attempt.

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** structure (BLUF/pyramid) + genres (ADR/RFC/postmortem), ~12 of 25; mechanics reviewed inline as designed. From P2, reconciliation_in_fs_fintech's rubric-graded exercises become the writing gym, and every REAL work RFC/ADR/postmortem counts as a track exercise. Anchor artifact = the H2-2026 cross-team RFC. AI-assisted drafting stays parked (own design).
- **Runs:** P1 Weekend slot after philosophy_of_software_design finishes (~Nov 2026 – Jan 2027).
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
