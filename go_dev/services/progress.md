# Track 2 — Backend services

HTTP-first; gRPC at the end. Assumes Foundations §1–8.

## Topics
- [ ] 1. net/http server — http.Handler, ServeMux routing (1.22+ patterns), middleware as wrapping
- [ ] 2. JSON APIs — encoding/json, struct tags, decoding request bodies safely, error responses
- [ ] 3. context.Context — cancellation, deadlines, request-scoped values, the misuse traps
- [ ] 4. HTTP clients — client reuse, timeouts (zero default = production incident), retries
- [ ] 5. Databases — database/sql model, pgx, pooling, transactions, migrations
- [ ] 6. Service structure — config from env, constructor injection by hand, graceful shutdown
- [ ] 7. Observability — log/slog, metrics, pprof endpoint, request-logging middleware
- [ ] 8. Auth in practice — middleware, JWT/session validation
- [ ] 9. gRPC basics — protobuf, service definitions, when it's worth it (optional)

## Status
- Done: —
- Current: —
- Next: §1 (after Foundations §8)
