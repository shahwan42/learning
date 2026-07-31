# Prereq — async/await mechanics (taught during node-runtime #1)

## The three rules
1. `await` only works inside an `async` function. Mark the enclosing function (including callbacks) `async`.
2. `async` functions always return a promise. Callers that ignore it (like `http.createServer`) are fine — the work still happens.
3. `await p` = suspend this function, register "resume at this line" as p's continuation, return control to the event loop. Zero JS runs while suspended.

## Sync-world translation
| Threaded/PHP | Node |
|---|---|
| Blocked worker's **stack** holds request state | Suspended function's state lives on the **heap** as a continuation |
| Costs a worker/thread while waiting | Costs nothing while waiting |
| `sleep(3)` occupies a worker | `await sleep(3000)` occupies nothing |

## Deferring ≠ unblocking
`setTimeout(() => busyWork())` does **not** make code non-blocking. It moves *when* the thread is occupied, not *whether*. Worse: the freeze then lands on unrelated requests that arrive later.
- Async = **absent from the thread**.
- `setTimeout` = **later, on the thread**.

## Promise = handle on "it's done"
Without awaiting something, statements after the "work" run immediately — a handler can send its response before the work happens and never notice. The promise is what orders them.
