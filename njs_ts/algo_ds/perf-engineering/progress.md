# Track: perf-engineering — measure, don't vibe

Why this track: the tooling/debugging/observability half of this project — verifying complexity claims on running code and catching the accidental O(n²) before production does. Node stdlib tools only.

Recommended: topic 1 early (right after data-structures #2); 2–3 interleave whenever a profiling question arises naturally.

| # | Topic | Why it matters | Status |
|---|---|---|---|
| 1 | Honest benchmarking | Microbenchmarks lie (JIT warmup, dead-code elimination, GC noise); `node:perf_hooks`; a small reusable harness for the whole project | ⬜ |
| 2 | CPU profiling | `node --cpu-prof` + flamegraphs; finding the hot loop in a profile instead of by staring at code | ⬜ |
| 3 | Memory & GC | Heap snapshots, retained size; the classic leaks: unbounded caches, listeners, closures | ⬜ |
| 4 | Big-O meets production | Constants and cache locality; "n is small until it isn't"; famous accidental-quadratic postmortems and how they'd be caught | ⬜ |
| 5 | Algorithms on the event loop | Long synchronous work blocks everything, health checks included; chunking vs `worker_threads` (loop mechanics live in `../../study-project/`) | ⬜ |
| 6 | Observing structures in prod | Cache hit rate, queue depth, map-size growth — metrics that catch complexity regressions before pages do | ⬜ |

Exercises: created as `NN-slug/` in `../exercises/` when assigned.

## Completed
(none yet)

## Next
Topic 1, recommended right after data-structures #2.
