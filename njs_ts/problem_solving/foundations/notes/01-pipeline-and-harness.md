# 1 — The solving pipeline & test harness

## Mental model
A problem session is a fixed pipeline, not inspiration:

1. **Restate** the problem in your own words + list the constraints (input size, value ranges, duplicates? negatives? empty?).
2. **Hand-run 2–3 examples**, including one edge case, before thinking about code.
3. **State the brute force** and its big-O. It's your correctness baseline.
4. **Optimize only after that** — "can I trade memory for lookups? does sorting unlock a scan?"
5. **Code** the chosen approach.
6. **Test** against the step-2 examples; on failure, shrink the input until the bug is obvious.

Why it works: the #1 failure mode (interviews and real work alike) is coding a half-understood problem. Interviewers grade the pipeline; code is a byproduct. Naming the brute force isn't wasted time — the gap between its cost and the constraints tells you *what kind* of speedup to hunt for.

## Harness (zero install)
- `solution.js` exports the function; `solution.test.js` asserts with `node:test` + `node:assert/strict`.
- One exercise (from `problem_solving/`): `node --test exercises/01-two-sum/solution.test.js`
- Everything: `npm test` (= bare `node --test`, which scans recursively for `*.test.js`; directory args don't work in Node 26 — pass files).
- The exported function body is exactly what you'd paste into LeetCode.
- Debug with `console.log` freely; a real debugger workflow comes in interview-craft #2.

## Pitfalls
- Writing code at minute 0. If you can't restate the constraints, you don't know the problem yet.
- Skipping the brute-force statement because it's "obviously bad" — stating it is how you find the optimization.
- Treating tests as an afterthought: your hand-run examples *are* the test cases.
