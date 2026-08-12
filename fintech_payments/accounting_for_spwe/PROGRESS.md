# Accounting for Fintech SW/Product Engineers

Learner: software engineer, near-zero accounting baseline. Work context: money movement, ledger systems, reconciliation, lending/cash advance. Goals: design money schemas, debug money bugs, talk to finance, review money code. Pacing: irregular — units stay small and self-contained.

## How this works
- One concept per unit → concise note in `<track>/notes/` → one exercise in `exercises/` → reviewed in chat → status updated only after demonstrated understanding.
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

## Program note (2026-08-12 — program v3; created at lane activation)

**Lane B #1 — ACTIVE.** Lane position, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics. Receipts tag `[career]`.
- **Exit gate (reduced 2026-08-12):** foundations 1–8 + ledger_engineering 1–3 (**11 units**) + whiteboard the merchant-wallet/payout double-entry flow cold. money_movement and lending_revenue are **not scheduled** — they survive as just-in-time pulls from recon (Law 6: this project stays the canonical accounting source).
- **Lane B 20-minute fallback:** the next unchecked unit here — accounting units are deliberately small and self-contained.
- Code-bearing exercises follow Law 9 (by-hand; PHP where the domain allows).
