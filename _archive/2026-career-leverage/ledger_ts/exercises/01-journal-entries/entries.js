// Exercise 01. See README.md.
// Convention: amounts are integer minor units. Debit = positive, credit = negative.

/**
 * True when the entry is a valid double-entry record.
 * @param {{lines: {account: string, amount: number}[]}} entry
 */
export function isBalanced(entry) {
  // TODO: at least two lines, and the amounts must sum to zero.
  throw new Error('not implemented');
}

/**
 * Sum of every line touching `account`, across all entries.
 * @param {{lines: {account: string, amount: number}[]}[]} entries
 * @param {string} account
 */
export function balanceOf(entries, account) {
  // TODO
  throw new Error('not implemented');
}

// Given to you as an example of the shape: the PSP settles the card sale into our bank.
// (It belongs between events A and B chronologically.)
const settlement = {
  id: 'e-settlement',
  occurredAt: '2026-07-25T10:05:00Z',
  description: 'PSP settles card sale to platform bank',
  lines: [
    { account: 'Assets:Bank', amount: 25000 },
    { account: 'Assets:PSPReceivable', amount: -25000 },
  ],
};

export const journal = [
  // TODO: entry A — card sale of 250.00 with a 3% platform fee, funds held by the PSP.
  settlement,
  // TODO: entry B — pay out M1's whole wallet balance to their bank.
  // TODO: entry C — refund 50.00 to the customer from our bank; the fee is not refunded.
];
