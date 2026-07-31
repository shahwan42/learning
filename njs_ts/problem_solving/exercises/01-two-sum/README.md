# 01 — Two Sum (brute force)

Topic: foundations #1 — run the full pipeline on an easy problem.

## Problem (LeetCode #1)
Given an integer array `nums` and an integer `target`, return the **indices** of the two numbers that add up to `target`.

- Exactly one valid answer exists.
- You may not use the same index twice (equal values at different indices are fine).
- The two indices may be returned in any order.

Constraints: `2 ≤ nums.length ≤ 10⁴`; values and target may be negative.

## Your job
1. Pipeline first: at the top of `solution.js`, fill in the one-line plan and the time/space complexity comment.
2. Implement **the brute force** (nested loops). The optimal version is deliberately postponed to foundations #5.
3. Make the tests pass:

```bash
node --test exercises/01-two-sum/solution.test.js
```

## Done when
Tests are green, the complexity comment is filled in, and you can say *why* it's that complexity.
