# Track 5 — Reconciliation & money ops

After orchestration says "captured": does the money, net of fees, actually arrive — and can finance prove it?

| # | Topic | Gate question (answer cold → skip) | Status |
|---|-------|------------------------------------|--------|
| 5.0 | Multi-PSP recon model — three-way match (internal / PSP report / bank statement), report formats and timing per PSP | What are the three sources you match, and the two most common *legitimate* mismatch causes? | not started |
| 5.1 | Fees & net settlement — gross vs net payout, fee verification against contract pricing, FX in payouts | A PSP pays out net. How do you book the fee, and how do you check it matches the contract? | not started |
| 5.2 | Refunds, disputes, chargebacks across PSPs — lifecycle differences, evidence flows, money movement | A chargeback lands on an already-refunded payment. Walk the money and the states. | not started |
| 5.3 | Feeding the ledger — the events orchestration must emit for a truthful ledger; the close-the-month test | What must orchestration emit so finance closes the month without opening PSP dashboards? | not started |
| 5.S | Synthesis — recon pipeline design across 3 PSPs | — | not started |

Cross-ref: ledger mechanics themselves belong to `../fintech_for_spwe/` track 2 (ledgers) — not re-taught here.
