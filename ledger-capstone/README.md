# ledger-capstone — Scope Contract

**The 2028 portfolio artifact. Dormant until August 2027 — the first session is P3a Weekend #1, not one minute earlier.** This file is the entire scaffold; creating more structure before Aug 2027 violates PROGRAM.md Law 1.

## What it is

A **TypeScript double-entry ledger for merchant wallets, payouts, and POS reconciliation** — deliberately the author's exact work domain, so every design decision is defensible in a senior interview from lived experience. One artifact that answers "tell me about a system you designed," proves the TS second stack without a second-stack curriculum, and feeds 3–4 STAR stories.

## Merge sources (these curricula are consumed by this project — do not run them standalone)

- `ledger_ts/` — the build spine (JS→TS, CLI→HTTP, invariants). Its accounting track is dead (canonical source: `fintech_payments/accounting_for_spwe`); its node/TS tracks are dead (canonical source: `njs_ts/study-project`).
- `fintech_payments/payments_orchestration/` — multi-PSP orchestration becomes the v1 module.
- `njs_ts/study-project/` — ~12 node-runtime/TS topics pulled **just-in-time** as the build demands them.

## v0 — P3a, Aug–Sep 2027, ~14h

- CLI double-entry ledger: immutable journal, balanced-posting invariant enforced in the type system **and** in tests.
- BLUF-structured README with design rationale — the writing track's real-world exam.
- Cheap on purpose: the accounting *knowledge* is demonstrated in P2; v0 is expression, not learning.
- **Public on GitHub by Jan 2028** (P3 exit) so applications from Feb have something pinned.

## v1 — P4, Feb–May 2028, ~30h

- HTTP API + multi-PSP orchestration module + reconciliation module (settlement-file matching).
- One derived technical blog post. Pinned during applications.
- **Scope valve:** if Dec 2027 mock scores are poor, v1 shrinks to the recon module only (~15h freed for interview prep).

## Scope law

Anything beyond the modules above — UI, auth, deployment theatre, admin panels, "just one more feature" — goes to `../SOMEDAY.md`. The capstone exists to be **shown**, not to be complete. Claude Code is allowed for scaffolding: the learning target is design judgment, not typing (the unassisted-writing rule applies to prose, not code).
