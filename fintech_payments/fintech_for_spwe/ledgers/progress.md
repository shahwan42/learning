# Track 2 — Ledgers & correctness

Status: not started

| # | Topic | Gate question | Status |
|---|-------|---------------|--------|
| 1 | Double-entry for engineers | Why two legs per movement? Explain debit/credit as invariants, no accounting-class jargon | — |
| 2 | Ledger schema design | Accounts / transactions / entries. Why append-only? How do you fix a wrong entry? | — |
| 3 | Balances & hot accounts | Derived vs materialized balances. Make 10k concurrent debits on one account safe *and* fast | — |
| 4 | Idempotency end-to-end | Design idempotency keys across API → queue → ledger. What's the key's scope and lifetime? | — |
| 5 | Money as data | Minor units, ISO 4217 exponents, rounding rules. Split 100 SAR three ways without losing a halala | — |
| 6 | Reconciliation | Internal ledger vs PSP report vs bank statement: classify the breaks and design the recon job | — |
| 7 | Synthesis: design a wallet | Classic interview: wallet/ledger service — transfers, balance reads, statements, audit | — |
