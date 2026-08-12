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

## Program note (refreshed 2026-08-12 — program v3)

**MERGED → `fintech_payments/reconciliation_in_fs_fintech/` — see `MERGED.md`.** This curriculum never runs as a lane item again; recon owns the rubric (7 checks), the error log, the genres, the timeboxing, and the exit gate (1 real cross-team RFC rubric-graded; one-pager ≤90 min). The error log moved to `reconciliation_in_fs_fintech/prerequisites/notes/error-log.md`. AI-assisted drafting stays parked (own design). Resurrect only via `SOMEDAY.md` + Law 1.
