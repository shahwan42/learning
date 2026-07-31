import { test } from 'node:test';
import assert from 'node:assert/strict';
import { twoSum } from './solution.js';

// Order-insensitive: [1, 0] and [0, 1] both accepted.
const sorted = (pair) => [...pair].sort((a, b) => a - b);

test('basic pair', () => {
  assert.deepEqual(sorted(twoSum([2, 7, 11, 15], 9)), [0, 1]);
});

test('answer is not the first elements', () => {
  // 3 + 3 = 6 would reuse index 0 — must find 2 + 4 instead.
  assert.deepEqual(sorted(twoSum([3, 2, 4], 6)), [1, 2]);
});

test('duplicate values at different indices are allowed', () => {
  assert.deepEqual(sorted(twoSum([3, 3], 6)), [0, 1]);
});

test('negative numbers', () => {
  assert.deepEqual(sorted(twoSum([-1, -2, -3, -4, -5], -8)), [2, 4]);
});
