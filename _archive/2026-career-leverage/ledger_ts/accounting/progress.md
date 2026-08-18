# Track: Accounting

Goal: enough accounting to design a correct ledger and talk to a finance team without
bluffing. Not exam-level. Every topic is justified by a decision it changes in code.

## Curriculum

| # | Topic | Why it matters in code | Status |
|---|---|---|---|
| 1 | Append-only log, the balance invariant, debit/credit as direction | Decides the core data model: entries + lines, balances derived not stored | **taught, unverified** |
| 2 | Account types and normal balances | Decides sign handling and what a "balance" endpoint returns | next |
| 3 | Chart of accounts for a multi-merchant platform | Decides account naming/hierarchy and per-merchant account explosion | pending |
| 4 | Journaling real flows: sale, fee, settlement, payout, refund, chargeback | The actual work; most bugs live here | pending |
| 5 | Trial balance and T-accounts | Gives you the debugging tool for a wrong balance | pending |
| 6 | Cash vs accrual, deferred revenue (subscriptions) | Decides when revenue rows are written vs recognized | pending |
| 7 | Clearing/suspense accounts and reconciliation | Decides how you model "money in flight" and unexplained variances | pending |
| 8 | Corrections: reversing entries, never mutating history | Decides your refund/void/adjustment API shape | pending |
| 9 | Balance sheet vs P&L, and what a wallet balance really is | Decides reporting queries and what finance asks you for | pending |
| 10 | POS cash: drawers, shifts, variance accounts | Decides how physical cash mismatches land in the ledger | pending |

## Completed

_(none yet — topic 1 taught, awaiting demonstrated understanding)_

## Notes

- [01 — Double-entry as an invariant](notes/01-double-entry-invariant.md)
