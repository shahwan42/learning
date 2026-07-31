# Exercise 01 — Strategy: discount engine

[`discount.ts`](discount.ts) is inherited "before" code: `calculateTotal` branches on customer type, so every new type means editing it — and in a real codebase, every other function that switches on the same type.

Refactor so **adding a new customer type never touches `calculateTotal`**.

## Requirements
1. `DiscountStrategy` — a function type: subtotal in, discount amount out.
2. One small function per type: `standard` 0 · `loyalty` 10% capped at 50 · `employee` 30% · `first_order` flat 20.
3. `export const strategies: Record<CustomerType, DiscountStrategy>` — the registry.
   Then try deleting an entry, or adding a 5th member to `CustomerType`, and watch what the compiler does.
4. `calculateTotal` looks its strategy up — no branching on type. It keeps the never-below-zero clamp (invariants belong to the caller, not the strategies).

## Stretch (optional — previews dependency injection)
`makeVipStrategy(years: number): DiscountStrategy` → 5% plus 1% per loyalty year.
A strategy that needs configuration can't receive it through the call — notice where it has to come from.

## Run (from `design_patterns/`)

```bash
npm test
```

or watch mode for just this exercise: `npx vitest 01-strategy`

Starting point: 3 tests pass (current behavior), 5 fail (`strategies` doesn't exist yet). The refactor is done when all 8 are green — the passing 3 are your safety net that behavior didn't change.

Done? Reply in chat with your solution for review. Attempt before looking anything up — a wrong attempt teaches more than a copied right one.
