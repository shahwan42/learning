# Track 3 — Concurrency

Taught slowly — assessed as new material. Unlocks the workers/data-processing goal.

## Topics
- [ ] 1. Goroutines — what the scheduler actually does, why they're cheap, how they leak
- [ ] 2. Channels — communication and ownership, buffered vs unbuffered, close semantics
- [ ] 3. select — timeouts, cancellation, combining channels
- [ ] 4. sync package — WaitGroup, Mutex; choosing channels vs locks honestly
- [ ] 5. errgroup — structured concurrency for "do N things, fail together"
- [ ] 6. Race conditions — the `-race` detector, shared-state bugs, aliasing traps
- [ ] 7. Worker pools & pipelines — bounded concurrency, backpressure
- [ ] 8. Capstone: a real worker — queue consumer with graceful shutdown, retries, metrics

## Status
- Done: —
- Current: —
- Next: §1 (after Services §3, since context comes up immediately)
