# Track C — Correctness, debugging & observability

Interleaved with A and B, not saved for the end. Tooling is taught on code that is already broken.

## Topics
- [ ] 1. **`-race`** — what it detects (actual unsynchronized access at runtime), what it misses
      (code paths not executed), cost, running it in tests and CI.
- [ ] 2. **Goroutine leaks** — the four causes (blocked send, blocked receive, forgotten ticker,
      ignored context), `go.uber.org/goleak` in tests, `/debug/pprof/goroutine?debug=2` in prod.
- [ ] 3. **Deadlocks & stalls** — the runtime's "all goroutines are asleep" fatal error, why it
      never fires in a real server, block/mutex profiles, reading a goroutine dump.
- [ ] 4. **Observability** — in-flight gauge, queue depth, worker saturation, `runtime.NumGoroutine`
      as an alert, propagating trace spans across goroutines.
- [ ] 5. **Failure catalogue** — unbounded fan-out, missing context on outbound calls, send on
      closed channel, `WaitGroup` counted wrong, slow consumer, mutex held across I/O.
- [ ] 6. **Testing concurrent code** — making it deterministic, `testing/synctest` for fake time,
      `-race -count=N`, avoiding sleep-based tests.

## Status
- Done: —
- Current: —
- Next: §1 `-race` (interleaves with Mechanics §6–7)
