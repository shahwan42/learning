# Track A — Mechanics

The primitives, and what they actually do underneath. Each topic ends in an exercise.

## Topics
- [ ] 1. **Goroutines & the scheduler** — what `go f()` costs, G/M/P in one paragraph, why main
      exiting kills everything, how goroutines leak. → `notes/01-goroutines.md`
- [ ] 2. **Channels as handoff** — unbuffered send/receive is a rendezvous, ownership rules
      (sender closes), ranging over a channel, close vs nil semantics.
- [ ] 3. **Buffering & blocking** — capacity as a queue not a speedup, deadlock shapes, the
      `v, ok := <-ch` form, nil-channel tricks.
- [ ] 4. **select** — multiplexing, timeouts with `time.After`, `default` for non-blocking,
      why `select` in a loop is the standard worker shape.
- [ ] 5. **context** — cancellation as a broadcast channel with a reason; `WithCancel`,
      `WithTimeout`, `ctx.Err()`, propagation rules, what NOT to put in it.
- [ ] 6. **sync** — `WaitGroup` (incl. Go 1.25 `wg.Go`), `Mutex`/`RWMutex`, `Once`,
      `sync/atomic`; honest rule for choosing locks vs channels.
- [ ] 7. **The memory model, minimum viable** — happens-before, why an unsynchronized read is a
      bug even when it "works", what the race detector is checking.

## Status
- Done: —
- Current: §1 — concept explained, exercise `01-goroutines` issued, awaiting attempt
- Next: §2 Channels as handoff
