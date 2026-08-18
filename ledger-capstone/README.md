# Financial-systems design case — optional evidence project

This is the program’s **only optional project**. It exists only if real work by June 2027 has not produced enough evidence of backend/fintech judgment. It is not a language-learning project and is not a deadline-driven portfolio obligation.

## Trigger and budget

Start only after the April 2027 quarterly review identifies an evidence gap. Hard cap: **8–12 hours**. If the trigger does not fire, do not start it.

## Scope

Create one reviewable design case for a merchant-wallet payout flow:

- account model and double-entry invariants;
- API/state transitions for payment, payout, reversal, and retry;
- transaction boundary plus outbox/idempotency approach;
- reconciliation inputs, mismatches, and operational controls;
- observability, failure modes, test strategy, and key trade-offs;
- a concise ADR-style rationale.

A small prototype is optional only when it clarifies a design risk. The implementation language is chosen for speed and relevance; TypeScript is not required.

## Evidence standard

The artifact is useful only if the learner can explain the trade-offs, defend the failure handling, and connect it to a real system. A work RFC, incident analysis, or implemented production improvement that meets the same standard replaces this project.

## Exclusions

No UI, authentication, deployment theatre, framework demonstration, blog quota, or extra integrations. Those belong in `../SOMEDAY.md` unless a concrete career need changes the trade-off.
