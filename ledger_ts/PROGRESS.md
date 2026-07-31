# Ledger Study Project

Root dir doubles as the `ledger_js/` from the original plan. Plain Node first, TypeScript
migration of the same codebase later.

## Learner profile

- Primary language: PHP / Laravel. New to the Node runtime.
- TypeScript: none written yet.
- Accounting: has shipped payments/finance code, no formal accounting vocabulary.
- SQL: ORM-mediated, has not written explicit transactions / isolation levels.
- Sessions: 1–2 hrs, irregular cadence.

## Target system

One ledger, four money flows layered on it as the curriculum advances:

1. **Merchant wallets** — platform holds funds it owes to merchants.
2. **Payouts / settlement** — moving held funds to merchant bank accounts.
3. **POS cash reconciliation** — cash drawers, shift counts, variances.
4. **Subscription billing** — invoices, deferred revenue, recognition over time.

Build order: in-memory CLI double-entry ledger → persisted service with an HTTP API.
Production concerns (idempotency, concurrency, currency, reconciliation jobs) enter when
they become the natural next problem, not upfront. See `revisit/README.md`.

## Tracks

| Track | Purpose | Status |
|---|---|---|
| [accounting](accounting/progress.md) | Double-entry model, chart of accounts, real-world journal flows | **active** |
| [node](node/progress.md) | Runtime model, modules, async, errors, testing, debugging | active (just-in-time) |
| [systems](systems/progress.md) | Persistence, transactions, API, concurrency, observability | not started |
| [typescript](typescript/progress.md) | Types as invariants, migrating the JS ledger | not started |

## Current position

- **Accounting:** concept 1 taught — the ledger as an append-only log of balanced entries.
- **Node:** prerequisite delivered — running a file, ESM, `node:test`.
- **Awaiting:** exercise 01 attempt (`exercises/01-journal-entries/`).

## Session log

### Session 1 — 2026-07-25

- Assessment complete, profile above.
- Scaffolded tracks and curriculum.
- Taught: append-only ledger, the balance invariant, debit/credit as direction,
  account types, and why a merchant wallet is a liability rather than an asset.
- Node prerequisites given just-in-time: `package.json` + `type: module`, `node --test`.
- Assigned exercise 01. **No topic marked complete yet** — pending the attempt.
