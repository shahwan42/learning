# Exercise 01 — Your first journal entries

Time: one sitting. Work in `entries.js`. Run `node --test` from the repo root.

## Scenario

You are the platform. Merchant **M1** sells through your POS, you hold their funds, and you
pay them out to their bank. Three events happen in order:

**A.** A customer pays **250.00** by card. Your PSP holds the money. Your platform fee is
**3%**, which you earn immediately.

**B.** You pay out M1's entire wallet balance to their bank account. (Assume the PSP has
already settled the sale into your bank — that entry is given to you in `entries.js` as an
example of the shape.)

**C.** The customer returns the item and you refund them **50.00** from your bank account.
Your platform does **not** refund its fee.

## Tasks

1. `isBalanced(entry)` — true when the entry's lines sum to zero. Reject entries with fewer
   than two lines.
2. Write entries **A, B and C** as data in `journal`. Use signed minor units: debit is
   positive, credit is negative. Pick your own account names, but stay consistent and use
   the `Type:Subtype:Id` convention.
3. `balanceOf(entries, account)` — sum every line touching that account.
4. Add a test asserting the balance of `Assets:Bank` after all entries.

Then tell me, in chat:

- What is the balance of M1's wallet account after all three entries?
- Its sign is the interesting part — what does it mean in plain business language?

## Constraints

- No floats anywhere. Integers only.
- Don't mutate an entry after creating it, and don't "fix" A when the refund happens in C.
- Amounts are in minor units (halalas/cents): 250.00 → `25000`.

## What I'm looking for

Correct accounting first, idiomatic JS second. If you're unsure whether something is a debit
or a credit, write down what the account *is* (owed / controlled / earned) and derive it —
don't guess and don't pattern-match on the example.
