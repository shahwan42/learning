# 1. The conservation invariant

**Mental model:** a ledger is an append-only log of movements between buckets (accounts). Every movement is recorded on both sides — value out of one account, into another. Money in the books is never created or destroyed, only moved. Balances are *derived* by folding over the log.

**The invariant:** each transaction's legs sum to zero → the whole ledger sums to zero, forever. Any drift = detectable corruption. Double-entry is a conservation law plus a built-in checksum (Venice, ~1300s — event sourcing before computers).

**Why single-entry fails:** a bare `wallet += 100` stores the *result* and throws away the *movement*. You can't answer "why did this balance change," can't detect missing/duplicated records, can't reconcile against anyone else's books.

**The outside world gets accounts too:** to keep the sum at zero, external parties (cards, banks, PSPs) are modeled as accounts. Value entering the system is a movement *from* an external account. Their balances look odd in your books (a card account going negative) — unit 2's debit/credit vocabulary and account types make that coherent.

**Practical consequences**
- The journal (log) is the source of truth; a stored balance is a cache of it.
- The primary write is a balanced transaction — never a naked balance UPDATE.
- Two systems that both saw a movement can be reconciled leg by leg.

**Pitfalls**
- Storing only balances → un-debuggable drift, no audit trail.
- Recording one leg and leaving the source implicit → the zero-sum invariant dies, and with it the checksum.
