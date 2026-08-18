# Accounting for Fintech SW/Product Engineers

> **Program status (2026-08-18): source material, not a curriculum to finish.** Use only to close an unresolved capability in `../../CURRENT.md`; phase diagnostics and capability pass standards decide what to study and when to stop.

Learner: software engineer, near-zero accounting baseline. Work context: money movement, ledger systems, reconciliation, lending/cash advance. Goals: design money schemas, debug money bugs, talk to finance, review money code. Pacing: irregular — units stay small and self-contained.

## How this works
- One concept per unit → concise note in `<track>/notes/` → one exercise in `exercises/` (attempt lands in the file) → reviewed → status updated only after demonstrated understanding.
- Every review closes with the three-line block — `residue:` (the next `[career]` pull opens with it, cold) · `edges:` (one cross-layer edge from memory → its Law-6 home) · `work hook:` (this week, or "none"). See `../../AGENTS.md`.
- Stale unit (taught >2 weeks ago) or suspected-known → attempt the exercise cold before any re-teach; a clean reviewed pass = demonstrated (Law 3), a miss opens the lesson at the miss.
- Interesting-but-nonessential detail is parked in `revisit/README.md`.
- Prerequisites taught just-in-time land in `prerequisites/notes/`.
- Curriculum is adjustable — reorder, skip, or go deeper on request.
- Returning session? Read this file, summarize position, offer: continue / switch track / revisit.

## Tracks
| # | Track | Focus | Progress |
|---|-------|-------|----------|
| 1 | [foundations](foundations/progress.md) | double-entry core | 0/8 |
| 2 | [ledger_engineering](ledger_engineering/progress.md) | ledgers in real systems | 0/7 |
| 3 | [money_movement](money_movement/progress.md) | payments, settlement, reconciliation | 0/7 |
| 4 | [lending_revenue](lending_revenue/progress.md) | loans, cash advance, fees, GL handoff | 0/6 |

Recommended path: foundations 1–5 → ledger_engineering 1–3 → interleave tracks 2 & 3 → lending after money_movement 1–4.

## Current position
- **Track:** foundations
- **Unit:** 1 — The conservation invariant (taught; exercise pending)
- **Next action:** learner attempts `exercises/01_transfers.md`

## Session log
- 2026-07-26 — Assessment: near-zero baseline; all four work areas; all four goals; irregular pacing. Project scaffolded. Taught foundations/1, issued exercise 01.
- 2026-08-12 — **Activated as Lane B head** (program v3 adoption). Exit gate reduced (program note below). Next action unchanged: attempt `exercises/01_transfers.md` — it is the first `[career]` receipt.

---

## Career-leverage scope (2026-08-18)

Active in `../../CURRENT.md` Phase 2. Keep the smallest sequence that makes financial state defensible: conservation, account roles, balanced journals, balances, transfers, reversals, and ledger invariants. `money_movement` and `lending_revenue` are JIT unless a live product decision needs them. Use realistic payment/reconciliation scenarios rather than completing every unit.
