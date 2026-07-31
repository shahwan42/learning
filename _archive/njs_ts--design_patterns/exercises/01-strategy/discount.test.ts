import { describe, expect, it } from 'vitest';
import { calculateTotal, strategies } from './discount.ts';

// The 5 registry tests fail until TODO 3. The 3 calculateTotal tests already
// pass — keep them green while you refactor.

describe('strategies compute the discount amount', () => {
  it('standard: none', () => {
    expect(strategies.standard(100)).toBe(0);
  });

  it('loyalty: 10%', () => {
    expect(strategies.loyalty(200)).toBe(20);
  });

  it('loyalty: capped at 50', () => {
    expect(strategies.loyalty(1000)).toBe(50);
  });

  it('employee: 30%', () => {
    expect(strategies.employee(100)).toBe(30);
  });

  it('first_order: flat 20, even when the subtotal is smaller', () => {
    expect(strategies.first_order(15)).toBe(20);
  });
});

describe('calculateTotal', () => {
  it('subtracts the discount for the type', () => {
    expect(calculateTotal(200, 'loyalty')).toBe(180);
  });

  it('never returns a negative total', () => {
    expect(calculateTotal(15, 'first_order')).toBe(0);
  });

  it('standard pays full price', () => {
    expect(calculateTotal(100, 'standard')).toBe(100);
  });
});

// Stretch — uncomment after implementing makeVipStrategy:
// import { makeVipStrategy } from './discount.ts';
//
// describe('stretch: configured strategy', () => {
//   it('vip: 5% + 1% per loyalty year', () => {
//     expect(makeVipStrategy(3)(100)).toBe(8);
//   });
// });
