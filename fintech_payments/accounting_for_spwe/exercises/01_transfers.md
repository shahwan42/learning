# Exercise 01 — Transfers & the invariant

Unit: foundations/1. No debit/credit vocabulary yet — use signed amounts: `+` into an account, `−` out of it.

A minimal wallet system with four accounts:

- `external:card_ali` — Ali's card (outside world)
- `wallet:ali`
- `wallet:coffeehouse` — a merchant wallet
- `external:bank_coffeehouse` — the merchant's bank (outside world)

Events, in order:
1. Ali tops up his wallet: SAR 500 from his card.
2. Ali pays Coffeehouse SAR 120.
3. Coffeehouse withdraws SAR 100 to its bank.

## Tasks
1. Write each event as a transaction of two legs — `(account, signed amount)` — with the legs summing to zero.
2. Give the final balance of all four accounts.
3. What do the four balances sum to, and why does that property require the `external:*` accounts to exist?
4. Ali's app shows "Balance: SAR 380". In this model, what is *stored* and what is *derived*?

Reply in chat, any format. Reviewed for correctness; then unit 2 maps this onto real debit/credit vocabulary.
