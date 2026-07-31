# Track: node-runtime

How Node actually runs your code. Foundation for everything else.

Legend: ☐ not started · ▶ in progress · ✅ done (understanding demonstrated)

1. ✅ **Event loop & single-threaded concurrency** — vs request-per-worker; blocking; why async exists
   - Solid: diagnosis (one thread, blocked handler stalls unrelated requests), CPU-bound needs another process/worker.
   - Gap found: deferring blocking work with `setTimeout` mistaken for unblocking it — *ordering* vs *thread occupancy*. Corrected; see [async-await-mechanics](../prerequisites/notes/async-await-mechanics.md).
   - Writing async code (not just reasoning about it) is unproven → carried into topic 2.
2. ▶ Promises & async/await — what a promise actually is; execution order; microtasks vs timers
3. ☐ Modules — ESM vs CommonJS, import resolution, package.json `"type"`
4. ☐ npm & packages — package.json, lockfiles, semver, node_modules, scripts, npx
5. ☐ Errors & crashes — throw vs reject, unhandled rejections; one error can kill all in-flight requests
6. ☐ Core API tour — fs/promises, path, process, env vars, URL, fetch, AbortController & timeouts
7. ☐ Streams & backpressure — practical level: piping, when you need them, when you don't
8. ☐ CPU-bound work — worker_threads, child_process, when to reach for each
9. ☐ Debugging — --inspect, VS Code debugger, reading Node stack traces, common crash signatures
10. ☐ Observability — structured logging (pino), health checks, event-loop lag, memory basics

## Exercises
- [01-event-loop-blocking](../exercises/01-event-loop-blocking/README.md) → topic 1 — ✅ done (A/D correct; C taught, `solution.mjs` in folder)
- [02-concurrent-awaits](../exercises/02-concurrent-awaits/README.md) → topic 2 — **pending**

## Next up
Review exercise 02, then teach topic 2 properly (promise states, microtask vs timer ordering).
