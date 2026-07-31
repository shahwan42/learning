# Track B — Patterns

The shapes real services use. Every topic maps to something you'd actually ship.

## Topics
- [ ] 1. **errgroup** — "do N things, fail together": `Group.Go`, `Wait`, `WithContext`,
      `SetLimit`. The default answer for parallel I/O.
- [ ] 2. **Fan-out / fan-in** — parallel calls into a fixed-size result slice (no mutex needed),
      vs collecting through a channel. Partial failure policy.
- [ ] 3. **Bounded worker pool** — N workers on one job channel; why bounded beats
      goroutine-per-item; backpressure and where queues belong.
- [ ] 4. **Pipelines** — stage → channel → stage, cancellation propagation, always-drain rule,
      avoiding leaked producers.
- [ ] 5. **Timeouts, retries, backoff** — per-attempt context, jitter, budget vs attempt caps,
      idempotency, why retries amplify outages.
- [ ] 6. **Rate limiting & dedupe** — `golang.org/x/time/rate`, ticker-based throttles,
      `singleflight` for cache stampedes.
- [ ] 7. **Graceful shutdown** — signal → cancel context → stop intake → drain in-flight →
      hard deadline. `http.Server.Shutdown` wired end to end.
- [ ] 8. **Concurrency inside an HTTP/gRPC server** — one goroutine per request, propagating
      `r.Context()`, safe shared state, no goroutines outliving the request.

## Status
- Done: —
- Current: —
- Next: §1 errgroup (starts after Mechanics §5 context)
