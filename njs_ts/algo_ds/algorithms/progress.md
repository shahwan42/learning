# Track: algorithms — classics, production-flavored

Why this track: the named algorithms behind everyday tools (sort, bisect, dependency ordering, routing) — how and why they work, where they show up in real systems. Interview drilling stays in `../../problem_solving/`; recursion mechanics are refreshed just in time here and drilled next door in patterns-recursive.

Unlocks: start any time after data-structures #2. Topics 4–6 want data-structures #7–8 first.

| # | Topic | Why it matters | Status |
|---|---|---|---|
| 1 | Binary search & invariant thinking | Halving + a loop invariant beats memorized templates; off-by-one discipline; git bisect, binary-search-on-the-answer | ⬜ |
| 2 | Sorting I: the landscape | Insertion/merge mental models; why comparison sorts can't beat n log n; stability and why it matters for real records | ⬜ |
| 3 | Sorting II: in production | Quicksort and its pivot failure modes; what `Array.prototype.sort` actually runs (TimSort); counting/radix when comparisons are optional | ⬜ |
| 4 | Graph traversal: BFS & DFS | Queue vs stack = breadth vs depth; dependency walking, crawling, cycle detection | ⬜ |
| 5 | Topological sort | Build order, task scheduling, import-cycle detection — the most backend-useful graph algorithm | ⬜ |
| 6 | Shortest paths: Dijkstra | Cheapest path on weighted graphs; runs on your own min-heap from data-structures #7; when plain BFS suffices | ⬜ |
| 7 | Dynamic programming = disciplined caching | Memoization as the caching you already do; overlapping subproblems; recognizing the DP shape (heavy drilling → problem_solving) | ⬜ |

Exercises: created as `NN-slug/` in `../exercises/` when assigned.

## Completed
(none yet)

## Next
Locked until data-structures #2 (recommended), or on request.
