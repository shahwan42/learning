# Track C — Concurrency & Performance

**Framing:** PHP's shared-nothing model hides concurrency from you at the language level and hands you the entire bill at the process level. This track makes the bill visible: worker math, queueing theory, profiling, and tail latency.

**Done when:** you can size an FPM/queue-worker pool from first principles, read a flame graph, and explain why p99 collapses long before CPU hits 100%.

| # | Topic | Status | Note |
|---|-------|--------|------|
| C1 | PHP's execution model: shared-nothing, opcache, what it costs you | queued | |
| C2 | FPM process model, `pm` settings, worker starvation | queued | |
| C3 | Little's Law and utilization: why p99 explodes at 80% | queued | |
| C4 | Octane / Swoole / RoadRunner: long-lived workers, state leakage | queued | |
| C5 | Concurrency you *do* have: fibers, `curl_multi`, `Concurrency` facade, batched jobs | queued | |
| C6 | Backpressure and bounded queues | queued | |
| C7 | Profiling: Excimer / XHProf / Blackfire; reading flame graphs | queued | |
| C8 | Load testing: k6, open vs closed models, coordinated omission | queued | |
| C9 | Caching: stampedes, singleflight, TTL jitter, negative caching | queued | |
| C10 | Memory: arrays vs generators, `cursor()` vs `get()`, chunking | queued | |
| C11 | The ORM tax: N+1, eager-load traps, when to drop to raw SQL | queued | |
| C12 | Tail latency: timeout budgets, deadline propagation, hedging | queued | |

## Completed

_(nothing yet)_
