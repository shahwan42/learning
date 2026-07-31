# 01 — Double-entry as an invariant

## Mental model

A ledger is an **append-only log of balanced facts**. Two rules:

1. Nothing is ever updated or deleted. A mistake is fixed by appending its opposite.
2. Every entry moves money *between* accounts, so within one entry the amounts cancel out.

Balances are **derived** by summing the log, never stored as the source of truth. The moment
a balance is a mutable column, you can no longer answer "why is it this number?" — and you
have two things that can disagree.

## Shape

```
Entry  { id, occurredAt, description, lines[] }   // atomic, ≥2 lines
Line   { account, amount }                        // amount in minor units, signed
```

Invariant: `sum(lines.amount) === 0` for every entry.

## Debit / credit

They mean **left** and **right**, nothing else. Not in/out, not good/bad.

Engineering translation: **debit = positive, credit = negative.** Then the whole of
double-entry bookkeeping is `sum === 0`. Keep the words at the boundary (finance-facing
reports, conversations); use signed integers inside.

## Account types and direction

| Type | Increases with | Question it answers |
|---|---|---|
| Asset | debit (+) | What do we control? |
| Liability | credit (−) | What do we owe? |
| Equity | credit (−) | What's left over for owners? |
| Revenue | credit (−) | What did we earn? |
| Expense | debit (+) | What did we consume? |

`Assets + Expenses = Liabilities + Equity + Revenue`, which under the signed convention is
just: everything sums to zero.

Consequence: a liability's natural balance is *negative* in signed form. Flip the sign at
presentation based on account type — don't fight it in storage.

## The payments-specific insight

**A merchant's wallet balance is your liability, not your asset.** The cash sits in your
bank (asset); the wallet is a promise to pay it out (liability). Keeping them as separate
accounts makes this answerable: *do we actually hold the money we owe?*

```
Assets:Bank + Assets:PSPReceivable  >=  Σ Liabilities:MerchantWallet:*
```

A single mutable `wallet_balance` column cannot express that question, which is why
informal payment systems can be solvent-looking and broke.

## Worked example — card sale with a platform fee

Sale of 100.00, platform keeps 2.5%. PSP holds the funds for now.

| Account | Amount |
|---|---|
| `Assets:PSPReceivable` | +10000 (debit) |
| `Liabilities:MerchantWallet:M1` | −9750 (credit) |
| `Revenue:ProcessingFees` | −250 (credit) |

Sum = 0. One event, three accounts, one entry.

Later, PSP settles to our bank:

| Account | Amount |
|---|---|
| `Assets:Bank` | +10000 |
| `Assets:PSPReceivable` | −10000 |

Later, we pay the merchant:

| Account | Amount |
|---|---|
| `Liabilities:MerchantWallet:M1` | +9750 (debit — the debt shrinks) |
| `Assets:Bank` | −9750 |

Note what the log now tells you that a balance column never could: fee revenue was earned
at sale time, cash arrived later, and the payout reduced a debt rather than "spending money".

## Pitfalls

- **Refund as a negative sale.** It's a separate entry with its own direction. Negative
  amounts on the wrong side destroy your gross-volume reporting.
- **Storing money as a float.** `0.1 + 0.2 !== 0.3`. Integer minor units only.
- **Two-line tunnel vision.** Fees, taxes, and tips mean 3–5 line entries are normal.
- **Mutating a posted entry.** Append a reversal instead; auditors and debuggers both need
  the original.
- **One `balance` per merchant with no cash counterpart.** Loses solvency checking.
