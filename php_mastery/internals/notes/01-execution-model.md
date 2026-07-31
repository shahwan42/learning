# 01 — Shared-nothing execution model

**Mental model: every request is a brand-new universe.** The OS process survives; your program's state does not. FPM keeps processes warm, but everything userland creates — globals, statics, singletons, Laravel's booted container — is allocated during the request and freed in one sweep at the end.

Python contrast: a gunicorn worker imports modules once; module-level state persists for the worker's lifetime. PHP-FPM has no in-process place to keep cross-request state — and the ecosystem is shaped by that.

## Lifecycle (same for FPM and `php -S`)

```
process start:  MINIT          extensions init — once per process
per request:    RINIT → compile* → execute → RSHUTDOWN → free request arena
process end:    MSHUTDOWN
```
\* compile is skipped when opcache already holds the file: **code** is shared across requests, **data** never is.

## Consequences you code against daily

- No in-process cache or connection pool → Redis, APCu (shared memory), persistent connections, PgBouncer.
- Memory leaks are irrelevant in a web request (one-sweep free) but fatal in queue workers — a worker is one endless "request" (hence `queue:work --max-jobs/--max-time`).
- `static`/singletons are request-scoped under FPM but **process-scoped under Octane/Swoole/FrankenPHP worker mode** — the classic Octane bug class (stale state, cross-request data bleed).
- Framework bootstrap cost is paid on every request → why opcache, preloading, and Octane exist.
- Deploys are simple: no in-process state to drain — reload FPM, handle opcache.

## Pitfalls

- "State resets because each request is a new process" — false. `php -S` serves every request from the same PID and state still resets: teardown is per-request, not per-process.
- Porting Python habits: module-level caches / in-process memoization are dead under FPM and dangerous under Octane.
