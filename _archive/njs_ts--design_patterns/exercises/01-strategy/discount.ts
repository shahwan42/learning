// BEFORE state — works, but every new customer type means editing calculateTotal.
// Refactor per README.md. The tests expect a `strategies` export.

export type CustomerType = 'standard' | 'loyalty' | 'employee' | 'first_order';

export function calculateTotal(subtotal: number, type: CustomerType): number {
  let discount = 0;
  if (type === 'loyalty') {
    discount = Math.min(subtotal * 0.1, 50);
  } else if (type === 'employee') {
    discount = subtotal * 0.3;
  } else if (type === 'first_order') {
    discount = 20;
  }
  return Math.max(subtotal - discount, 0);
}

// TODO 1: define a DiscountStrategy function type (subtotal in, discount out)
// TODO 2: implement one small function per customer type
// TODO 3: export const strategies: Record<CustomerType, DiscountStrategy> = { ... }
// TODO 4: rewrite calculateTotal to look the strategy up — no if/else on type
//
// Stretch (previews dependency injection):
//   export function makeVipStrategy(years: number): DiscountStrategy
//   → 5% plus 1% per loyalty year. Note what you had to do to give a strategy
//     configuration without changing the DiscountStrategy signature.
