# Reconciliation in Financial Systems & Fintech — Progress

## Learner profile (assessed 2026-07-26)
- Recon exposure: **zero** — build from first principles
- Dual goal: recon competence for **Senior Backend/Product Engineer interviews** + **document-writing practice** — every exercise is a written artifact
- Doc types (all requested): design docs/RFCs, ADRs, runbooks/postmortems, cross-functional memos/PRDs
- Writing gaps (all four): structure/flow, over-length, buried conclusions, audience switching → craft is reviewed as strictly as content, against `prerequisites/notes/writing_rubric.md`
- Anchoring: global-first (Stripe/Adyen-style PSPs, camt.053), mapped to Saudi rails (mada, SARIE, Saudi Payments) where they differ — same convention as fintech_for_spwe
- Siblings: double-entry depth lives in `../accounting_for_spwe`; card/bank-rail depth in `../fintech_for_spwe`. This project teaches minimal versions just-in-time and never blocks on them.

## Tracks (priority order)
| # | Track | Units | Status | File |
|---|-------|-------|--------|------|
| 1 | Foundations — why recon exists | 5 | **in progress** | foundations/progress.md |
| 2 | Matching engine — how recon is built | 6 | not started | matching_engine/progress.md |
| 3 | Exceptions & operations | 4 | not started | exceptions_ops/progress.md |
| 4 | Observability & controls | 3 | not started | observability_controls/progress.md |
| 5 | Interview synthesis | 3 | not started | synthesis/progress.md |

Fast-track rule: answer any unit's gate question cold → unit marked done, no lesson.

## Current position
- Track: foundations · Unit 1 (independent records & why they disagree) — taught
- Waiting on: learner's attempt at `exercises/01_recon_before_launch.md`

## Protocol (every session)
1. Read this file + the active track's `progress.md`. Summarize where we stopped; offer: continue / switch track / revisit.
2. Teaching loop: one concept (mental model, why + how, practical consequences) → prerequisites just-in-time → one exercise (always a document) → **wait for attempt** → review with **two verdicts: domain + craft** (writing_rubric.md, 7 checks) → **append/increment `prerequisites/notes/error-log.md`** → update progress only after demonstrated understanding.
3. Notes go to `<track>/notes/` **after** a unit is demonstrated, not before. Short: mental models, pitfalls, debugging — no textbook dumps.
4. Doc-type skeletons are taught just-in-time before the first exercise of that type; they land in `prerequisites/notes/`.
5. Tangents → `revisit/README.md` with a one-line why.
6. Interview flavor: one interviewer follow-up after each review. Every track ends with a synthesis document.
7. **Timebox (from matching_engine/1 onward):** every exercise carries a time budget; elapsed time recorded in the progress row. This owns the "one-pager ≤90 min" exit-gate line.

## Session log
- 2026-07-26 — Assessed (profile above). Scaffolded 5 tracks / 21 units. Taught foundations/1; issued exercise 01 (CTO memo, BLUF skeleton taught JIT).
- 2026-08-12 — **Program v3: `writing_for_pswe` merged into this project** (its MERGED.md records it). Rubric extended to 7 checks (objections; sentence mechanics); its error log relocated to `prerequisites/notes/error-log.md`; timebox rule added. This project now owns the writing exit gate: 1 real cross-team RFC rubric-graded + one-pager ≤90 min, folded into the lane-table gate.

---

## Career-leverage scope (2026-08-18)

Active in `../../CURRENT.md` Phase 2. Keep foundations, matching, exceptions, controls, and one concise operational/design artifact. The aim is to reason about independent records, settlement truth, mismatches, and auditability—not to complete a 21-unit writing/interview curriculum. A real work document can replace a synthetic exercise when it is reviewed for both domain correctness and clarity.
