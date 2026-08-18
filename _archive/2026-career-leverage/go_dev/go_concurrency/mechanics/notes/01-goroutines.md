# A§1 — Goroutines & the scheduler

## Mental model
`go f()` means: *"run `f` as an independent task; I'm not waiting."* Control returns to the caller
immediately. You get no return value, no error, no handle, no join — the only thing you get back is
"it started."

A goroutine is **not** an OS thread. It's a struct the Go runtime owns (a `g`), holding a stack that
starts at ~2 KB and grows on demand. The runtime multiplexes many goroutines onto a small set of OS
threads (default: one runnable thread per CPU core). A "context switch" between goroutines is a
function call that swaps a few registers — no kernel involvement, ~tens of nanoseconds. That's the
whole reason 100,000 goroutines is normal and 100,000 threads is not (1–8 MB stack each, kernel
scheduling).

Two words worth separating now, because they get conflated everywhere:
- **Concurrency** — the program is *structured* as independent tasks that may interleave.
- **Parallelism** — tasks literally execute at the same instant on different cores.
Go gives you concurrency as a language feature; the runtime turns it into parallelism when cores are
available. A single-core machine still runs your concurrent code correctly, just not faster.

## Why it works that way
The runtime cooperates with the scheduler at known points: channel operations, `select`, mutex
contention, syscalls, `time.Sleep`, function calls (via preemption checks), and since Go 1.14 also
asynchronously via signals — so even a tight `for {}` loop can be preempted. Practically: you never
have to yield manually, and one goroutine can't starve the others.

When a goroutine performs a blocking syscall (a disk read, a network connect), the runtime detaches
that OS thread and hands its queue of runnable goroutines to another thread. That's why blocking I/O
in Go costs you almost nothing at the application level — the *goroutine* blocks, the *thread pool*
does not. This is the mechanism behind "just write straightforward blocking code and run a lot of
it," which is the opposite of Python's async/await where blocking one coroutine blocks the loop.

## Practical consequences
1. **`main` returning kills the process, and every goroutine with it** — no draining, no
   finalizers, no waiting. Goroutines are not daemon threads that keep the process alive; there is
   no `join()`. If work must finish, *you* must arrange the waiting.
2. **Execution order is undefined.** Between `go a()` and `go b()` there is no ordering guarantee
   and no fairness promise. If your output order matters, you're expressing it wrong.
3. **`time.Sleep` is not synchronization.** Sleeping "long enough" is a race that usually wins on
   your laptop and loses on a loaded CI box. Every sleep in a lesson exercise is a placeholder
   marked as such, until §2 gives you channels.
4. **A goroutine you can't stop is a leak.** Nothing garbage-collects a blocked goroutine: its
   stack, and everything it references, stays alive for the process lifetime. Leaks look like slow
   memory growth plus a climbing `runtime.NumGoroutine()`, not a crash. Every goroutine you start
   needs an answer to "what makes this one exit?"
5. **Panics don't stay local.** An unrecovered panic in *any* goroutine takes down the whole
   process. You can't wrap `go f()` in a caller-side `recover()`; the recover has to be inside the
   goroutine.
6. **Cheap ≠ free.** ~2 KB plus scheduler bookkeeping each. `go` per item over a 5-million-row
   result set is how you OOM a service. Bounded concurrency (Track B) is the real-world default.

## The API surface, such as it is
```go
go doWork()                      // call a named function
go func() { … }()                // anonymous — note the trailing () that calls it
go doWork(id, url)               // args are evaluated NOW, in the caller, then passed
runtime.NumGoroutine()           // live count; a great metric to export
runtime.GOMAXPROCS(0)            // max goroutines running Go code simultaneously (read-only call)
```

## Pitfalls
- Forgetting the trailing `()` on a func literal — that's a compile error, not a silent bug. Good.
- Assuming a goroutine started before the next line runs. It may not have started at all yet.
- Capturing a variable you then mutate in the caller. (Go 1.22+ made `for` loop variables
  per-iteration, which killed the single most famous version of this bug, but any *other* shared
  captured variable is still shared — see `prerequisites/notes/closures-and-capture.md`.)
- Reasoning about goroutines by watching `fmt.Println` interleaving. Print order tells you almost
  nothing about scheduling; it's just whoever reached the lock on stdout first.
