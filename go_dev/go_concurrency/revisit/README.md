# Revisit later

Parked deliberately. Each line says why it matters, so future-you can judge whether to pick it up.

- **GOMAXPROCS & container CPU limits** — a Go process in Kubernetes sees the node's CPU count, not
  its cgroup limit, causing throttling. Go 1.25+ is cgroup-aware; older versions need
  `automaxprocs`. Matters at deploy time, not while learning.
- **Work-stealing & scheduler internals (G/M/P, spinning, handoff)** — explains latency tails and
  why goroutine count ≠ parallelism. Not needed to write correct code.
- **`sync.Pool`** — allocation reuse under high throughput. An optimization; only after profiling.
- **Lock-free / `atomic.Pointer` structures** — occasionally right in hot paths, easy to get
  subtly wrong. Read-only knowledge for now.
- **Channel internals (hchan, sudog queues)** — good intuition for why unbuffered channels are a
  handoff and why a closed channel wakes everyone. Interesting, not load-bearing.
- **`testing/synctest` deeply** — fake-clock testing of timeouts and retries. Will touch it
  lightly in Debugging §6; full study can wait.
- **Distributed concurrency (idempotency keys, exactly-once myths, outbox)** — the next layer once
  in-process concurrency is solid. Different problem domain.
- **Erlang/actor and structured-concurrency comparisons** — useful for judgment about Go's design
  choices; pure background reading.
