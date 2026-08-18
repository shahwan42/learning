# §1 Toolchain & modules

## Mental model
PHP/Python deploy *source* and resolve dependencies at *runtime* (autoloader, venv). Go resolves everything at *compile time* and emits one static binary — your code, all dependencies, and the Go runtime linked into a single file. Deployment is "copy a file". No interpreter on the server, no `composer install` step, no version drift between machines.

Mapping:
- `go.mod` ≈ `composer.json` — module identity + direct requirements
- `go.sum` ≈ `composer.lock` — checksums of everything in the graph; both get committed
- Module cache is global (`~/go/pkg/mod`), read-only, shared across projects — no per-project `vendor/` by default

## Why it works this way
`go build` starts at `package main`, walks the import graph, compiles each package (cached aggressively), statically links. An import path is just module path + subdirectory — no autoload config, no PSR-4 mapping to maintain. The compiler is fast enough that "compile step" doesn't mean "slow feedback".

## Practical consequences
- Cross-compile with env vars alone: `GOOS=linux GOARCH=amd64 go build`. This is why Go owns infra/CLI tooling — one laptop builds for every platform.
- Containers can be `FROM scratch` or distroless — there is nothing to install.
- One toolchain, no plugins: `go build / run / test / vet / fmt`. No webpack/phpunit/cs-fixer zoo.
- `gofmt` output is *the* style. Nobody debates formatting in review; diffs stay semantic.

## Commands actually used
```
go mod init <module-path>   # create go.mod
go run .                    # compile to temp + run (dev loop)
go build [-o name] .        # produce the binary
go fmt ./... && go vet ./...
go env GOOS GOARCH          # current target platform
```

## Pitfalls
- Editing code but re-running a stale built binary — rebuild, or use `go run .` during development.
- `go run` is a dev loop tool, not a deploy mechanism.
- The module path in `go.mod` is what imports refer to — it doesn't have to match the folder name.
