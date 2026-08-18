import test from 'node:test';
import assert from 'node:assert/strict';

import { isBalanced, balanceOf, journal } from './entries.js';

test('isBalanced accepts a balanced entry', () => {
  const entry = {
    lines: [
      { account: 'Assets:Bank', amount: 500 },
      { account: 'Revenue:Fees', amount: -500 },
    ],
  };
  assert.equal(isBalanced(entry), true);
});

test('isBalanced rejects an unbalanced entry', () => {
  const entry = {
    lines: [
      { account: 'Assets:Bank', amount: 500 },
      { account: 'Revenue:Fees', amount: -499 },
    ],
  };
  assert.equal(isBalanced(entry), false);
});

test('isBalanced rejects a single-line entry', () => {
  assert.equal(isBalanced({ lines: [{ account: 'Assets:Bank', amount: 0 }] }), false);
});

test('every entry in the journal balances', () => {
  for (const entry of journal) {
    assert.equal(isBalanced(entry), true, `unbalanced: ${entry.description ?? entry.id}`);
  }
});

test('the journal records all four entries', () => {
  assert.equal(journal.length, 4);
});

test('balanceOf sums lines across entries', () => {
  const entries = [
    { lines: [{ account: 'Assets:Bank', amount: 300 }, { account: 'Revenue:Fees', amount: -300 }] },
    { lines: [{ account: 'Assets:Bank', amount: -100 }, { account: 'Expenses:Ops', amount: 100 }] },
  ];
  assert.equal(balanceOf(entries, 'Assets:Bank'), 200);
  assert.equal(balanceOf(entries, 'Nonexistent:Account'), 0);
});

// TODO (task 4): assert the balance of 'Assets:Bank' after all four entries.
// Work out the expected number by hand first, then write the assertion.
