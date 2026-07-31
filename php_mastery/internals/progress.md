# Internals — how PHP actually executes

Why this track: Octane bugs, FPM tuning, deploy strategy, and queue-worker leaks all fall out of a few engine-level models.

| # | Topic | Status |
|---|---|---|
| 01 | Shared-nothing execution model — SAPIs, request lifecycle, what dies when | ● in progress |
| 02 | Values, zvals & copy-on-write — when assignment copies; references (`&`) and why they backfire | ○ |
| 03 | Arrays are ordered hash tables — packed vs hashed, memory cost, iteration guarantees | ○ |
| 04 | Memory & GC — refcounting, cycle collector, leaks in long-running workers, WeakMap | ○ |
| 05 | OPcache, preloading & JIT — what's cached, deploy implications, what JIT can't fix | ○ |
| 06 | Autoloading & Composer internals — PSR-4 resolution, classmap optimization | ○ |
| 07 | Source → opcodes — the compile step, inspecting opcodes, what actually executes | ○ |
| 08 | Errors vs exceptions at engine level — fatals, shutdown handlers, FPM behavior | ○ |
| 09 | Streams — wrappers, contexts, filters; the core I/O abstraction | ○ |

Parked: extensions & FFI → [revisit](../revisit/README.md).
Notes: [notes/](notes/)
