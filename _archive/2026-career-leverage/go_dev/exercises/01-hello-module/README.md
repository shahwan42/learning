# 01 — hello-module (Foundations §1)

Build a tiny greeting binary and prove to yourself it's self-contained.

## Task
1. In this directory: `go mod init learning/01-hello-module`
2. Write `main.go`: a program with a `-name` flag (default `"world"`) that prints
   `hello, <name> (built with <go version>)` — use `runtime.Version()` for the version.
3. `go fmt ./...` and `go vet ./...` — both clean.
4. `go build -o greet .`, run `./greet -name Ahmed`, then run it once from a *different* directory via its absolute path.
5. Cross-compile: `GOOS=linux GOARCH=amd64 go build -o greet-linux .` then run `file greet-linux` to see what you made.

## Comprehension (answer in chat, 1–2 sentences each)
- Q1: What is inside `greet` that lets it run from anywhere, on a machine with no Go installed?
- Q2: No `go.sum` appeared in this exercise. Why not — and what action would make one appear?

**Done =** paste your `main.go`, the `file greet-linux` output, and your two answers.
