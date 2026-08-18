# Prereq — func values, closures, and what gets captured

Needed because almost every goroutine you write is `go func() { … }()`.

## Functions are values
```go
f := func(n int) int { return n * 2 }   // assign a func to a variable
fmt.Println(f(21))                      // 42
```
A func literal used immediately gets called with a trailing `()`:
```go
func() { fmt.Println("now") }()          // declared and called
go func() { fmt.Println("soon") }()      // declared and started as a goroutine
```

## Closures capture variables, not values
A func literal referencing an outer variable captures the **variable itself** — same storage, not a
snapshot. That's the mechanism you'll use constantly, and the one that bites.

```go
count := 0
inc := func() { count++ }   // shares `count` with the enclosing scope
inc(); inc()
fmt.Println(count)          // 2
```

Consequence with goroutines: two goroutines closing over the same variable are touching the same
memory, which is a data race unless synchronized (Mechanics §6–7).

## The loop-variable trap (mostly, but not entirely, historical)
```go
for _, url := range urls {
    go func() { fmt.Println(url) }()   // Go ≥1.22: fine — `url` is a NEW variable each iteration
}
```
Before Go 1.22, `url` was one variable reused across iterations, so goroutines often all printed the
last element. You're on 1.26, so this specific bug is gone — but you'll see the old defensive style
in every codebase and blog post written before 2024:
```go
for _, url := range urls {
    url := url                        // shadow copy — redundant now
    go func() { fmt.Println(url) }()
}
for _, url := range urls {
    go func(u string) { fmt.Println(u) }(url)   // explicit param — still fine, still clear
}
```
Passing as a parameter has a real advantage worth keeping: arguments are evaluated **at `go` time**,
in the caller, which makes "what value does this goroutine see" impossible to misread.

The trap that did *not* go away: a variable declared **outside** the loop.
```go
var result string
for _, url := range urls {
    go func() { result = fetch(url) }()   // race: all goroutines write one variable
}
```

## `defer` inside a goroutine
`defer` runs when the enclosing **function** returns — for a goroutine, that means when the
goroutine finishes. It's how you guarantee cleanup regardless of the exit path:
```go
go func() {
    defer fmt.Println("goroutine done")
    …
}()
```
Deferred calls have their arguments evaluated immediately, at `defer` time, but run last. That pair
of rules is the basis of `defer wg.Done()` and `defer mu.Unlock()`, both coming shortly.
