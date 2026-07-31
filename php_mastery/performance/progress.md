# Performance — debugging, profiling, production

Why this track: the specialist is the person paged when it's slow or down — and who can prove the cause.

| # | Topic | Status |
|---|---|---|
| 01 | Xdebug properly — step debugging, modes & overhead; beyond `dd()` | ○ |
| 02 | Profiling — Blackfire/XHProf/Xdebug traces, flame graphs, finding the real bottleneck | ○ |
| 03 | FPM anatomy & tuning — pm modes, worker sizing, timeout layers, anatomy of a 502/504 | ○ |
| 04 | Caching layers — Redis patterns, stampede protection, HTTP caching, opcache from the ops side | ○ |
| 05 | Concurrency — `curl_multi`, Fibers (≠ asyncio: no scheduler), Swoole/FrankenPHP, when queues win | ○ |
| 06 | Observability — structured logs (PSR-3 context), metrics, OpenTelemetry, Telescope/Pulse | ○ |
| 07 | Production failure taxonomy — memory_limit, max_children, stale opcache, connection exhaustion, queue backlog | ○ |
| 08 | Correctness under load — money/floats, timezones, encodings, races & locks | ○ |

Notes: [notes/](notes/)
