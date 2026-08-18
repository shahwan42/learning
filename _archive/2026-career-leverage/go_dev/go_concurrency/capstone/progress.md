# Track D — Capstone

Two builds that together cover all four of your stated goals. Reviewed like a PR: correctness,
idiom, failure modes.

## Topics
- [ ] 1. **Parallel aggregator endpoint** — one HTTP handler fans out to 3 dependencies with
      per-dependency timeouts, partial-result policy, request-scoped cancellation. No leaks under
      client disconnect.
- [ ] 2. **Queue worker** — consume jobs, bounded pool, per-job timeout, retry with backoff,
      metrics (in-flight, queue depth, failures), graceful shutdown that drains then hard-stops.
- [ ] 3. **Hardening pass** — `-race`, `goleak`, a load run; read the goroutine dump; fix what it
      shows.

## Status
- Done: —
- Current: —
- Next: §1 (after Patterns §7)
