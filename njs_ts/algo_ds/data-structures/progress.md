# Track: data-structures — the machinery, not the drills

Why this track: you know these structures by name; this makes their costs mechanical instead of memorized. Each topic = mental model → what JS/V8 actually does → when to reach for it (and when not) → failure modes. "Build" = implement from scratch. ⭐ = TS re-solve candidate once ✅.

| # | Topic | Build | Why it matters | Status |
|---|---|---|---|---|
| 1 | Arrays: the real story | — | JS arrays aren't C arrays (packed vs holey, dense vs sparse); *why* index is O(1) but shift is O(n) — the mechanism behind problem_solving's foundations #3 | ⬜ |
| 2 | Dynamic growth & amortized cost | mini dynamic array ⭐ | Why push is O(1) *amortized* and what that hides; pre-allocation; amortized analysis returns for hash-map resize | ⬜ |
| 3 | Linked lists | singly linked list | O(1) splice vs O(n) access; why arrays usually still win (cache locality); where lists genuinely live (LRU, queues) | ⬜ |
| 4 | Stacks & queues | ring-buffer queue ⭐ | Queue-via-`shift()` is an accidental-O(n²) generator; the ring buffer fix; call-stack connection | ⬜ |
| 5 | Hash maps & sets | toy hash map (chaining) ⭐ | Hashing → buckets → collisions → load factor → resize; Map vs plain object for real; WeakMap vs the unbounded-cache leak | ⬜ |
| 6 | Trees & BSTs | BST insert/search | The BST invariant; why balance decides everything (sorted-insert degeneracy); trees you already use: DOM, ASTs, DB indexes | ⬜ |
| 7 | Heaps & priority queues | binary min-heap ⭐ | A complete tree living in an array; O(log n) push/pop; top-K, schedulers, and Dijkstra's engine later | ⬜ |
| 8 | Graphs: modeling & representation | adjacency list | Seeing graphs in deps, service calls, workflows; list vs matrix trade-off (traversal lives in the algorithms track) | ⬜ |
| 9 | Capstone: LRU cache | Map + doubly linked list ⭐ | Composes #3 + #5 into the most-deployed composite structure there is; classic interview problem too (bridge to problem_solving) | ⬜ |

Exercises: created as `NN-slug/` in `../exercises/` when assigned.

## Completed
(none yet)

## Next
Topic 1 — Arrays: the real story.
