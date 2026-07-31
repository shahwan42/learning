# 01 — Event loop & single-threaded concurrency

## Mental model
- **PHP-FPM / threaded servers:** concurrency = many workers. Each owns one request start-to-finish and may block freely. A blocked worker hurts only its own request.
- **Node:** ONE thread runs all your JS, for all requests. Concurrency = interleaving. JS never waits — waiting is delegated to the runtime (libuv + OS). Your code only runs the "what happens next" pieces.
- **Event loop** = a scheduler: repeatedly picks up completed events (I/O finished, timer fired) and runs the JS registered for them, one at a time, each to completion.

## Why this design
Server work is mostly *waiting* (DB, HTTP, disk). One thread juggling 10k in-flight waits is far cheaper than 10k blocked workers (memory, context switches). The price: your JS must never hog the thread.

## Practical consequences
1. **Blocking JS blocks every request.** CPU loops, `*Sync` fs calls, giant `JSON.parse` — the whole process freezes. Sync APIs are fine in scripts/startup, poison in request handlers.
2. **`await` yields the thread.** Other requests run during your awaits — that's literally where the concurrency comes from.
3. **No memory races, but logical races.** Two handlers never execute JS at the same instant, so no locks. But state can change across your own `await` points (check-then-act bugs).
4. **`async` makes waiting concurrent, not computing.** CPU-bound work needs worker_threads or a separate process — the keyword does nothing for a hot loop.
5. **One process serves everyone.** A crash kills all in-flight requests, not one (→ errors topic).

## Pitfalls in the wild
- `readFileSync` / `execSync` inside request handlers.
- "async" functions that are actually CPU-bound.
- Event-loop lag as invisible latency: p99 spikes because *something else* blocked the loop, not the slow endpoint itself.
- **Deferring blocking work instead of removing it.** Wrapping a busy-wait in `setTimeout` changes *when* the thread is occupied, not *whether* — and displaces the freeze onto unrelated requests. Measured in exercise 01: `/health` took 1994 ms while a *finished* request's deferred busy-wait was still spinning. See [async-await-mechanics](../../prerequisites/notes/async-await-mechanics.md).

## The question to ask about any handler
Not "how long does this take?" but **"how long does this hold the thread?"** Occupancy, not duration. `await sleep(3000)` = 3s duration, 0s occupancy.
