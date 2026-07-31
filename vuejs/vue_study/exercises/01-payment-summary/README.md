# Exercise 01 — `usePaymentSummary`

Covers: `ref`, `computed`, derive-don't-store, reactivity loss.

## Part A — write the composable

Fill in `attempt.ts`. A "make a payment" form has an amount input. Money is handled in **halalas**
(integer minor units, 100 halalas = 1 SAR) — the API only ever speaks halalas.

Build `usePaymentSummary()` returning:

- `amountInput` — writable state bound to a text input, so it's a **string** (what `<input>` gives you)
- `amountHalalas` — the input parsed to an integer number of halalas (`"12.34"` → `1234`)
- `feeHalalas` — 0.5% of the amount, rounded up, capped at 500 halalas
- `totalHalalas` — amount + fee
- `isValid` — true only when the amount parses, is > 0, and `totalHalalas` <= a `balanceHalalas`
  argument the caller passes in
- `reset()` — clears the input

Constraints:
- No `reactive`. Refs and computeds only.
- Nothing derivable may be stored in a `ref`.
- Assume `balanceHalalas` arrives as a `Ref<number>` (the balance is fetched, so it changes).

## Part B — two questions, answer in comments at the bottom of the file

1. A colleague writes this in a component. What breaks, and why?
   ```ts
   const { amountInput, isValid } = usePaymentSummary(balance);
   if (isValid) submit();
   ```

2. Another version stores the fee instead of deriving it:
   ```ts
   const feeHalalas = ref(0);
   function setAmount(v: string) {
       amountInput.value = v;
       feeHalalas.value = calcFee(v);
   }
   ```
   Name a concrete way this produces a wrong fee on screen. Be specific about the sequence of events.

Don't look at `cashflow-console` for this one — it's about the primitives, not the conventions.
