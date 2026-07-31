# Laravel — internals, not surface usage

Why this track: you already ship features; mastery is knowing what the framework does on your behalf and when it will betray you.

| # | Topic | Status |
|---|---|---|
| 01 | Bootstrap & HTTP kernel — `index.php` → middleware pipeline → response, in real code | ○ |
| 02 | Service container internals — bindings, reflection autowiring, contextual binding | ○ |
| 03 | Providers & boot order — register vs boot, deferred providers, package discovery | ○ |
| 04 | Facades demystified — `__callStatic` → container; testing implications | ○ |
| 05 | Eloquent I — builder → grammar → PDO, model hydration, casts/mutators | ○ |
| 06 | Eloquent II — relations, N+1 mechanics, eager loading, chunk/cursor/lazy | ○ |
| 07 | Transactions & DB discipline — locking, `afterCommit`, transaction + queue traps | ○ |
| 08 | Queues deep — `SerializesModels`, retries/backoff, failed jobs, Horizon, idempotency | ○ |
| 09 | Events & listeners — sync vs queued, observers, transactional traps | ○ |
| 10 | HTTP layer — form requests, validation internals, API resources, rate limiting | ○ |
| 11 | Testing Laravel — `RefreshDatabase` strategies, fakes (queue/event/http/time) | ○ |
| 12 | Octane & long-lived Laravel — what breaks and why | ○ |

Notes: [notes/](notes/)
