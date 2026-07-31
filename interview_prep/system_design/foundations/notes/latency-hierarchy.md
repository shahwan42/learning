# Latency hierarchy & the cost of work

**Mental model:** a request's latency is not "how fast is my code" — it's *which tier of the cost hierarchy you touch, times how many times you touch it*. Almost every real performance problem is a **count** problem, not a **speed** problem.

## The numbers (memorise exponents, not digits)

| Operation | Order of magnitude |
|---|---|
| L1 cache reference | 1 ns |
| Main memory read | 100 ns = 0.0001 ms |
| NVMe SSD random read | 100 µs = 0.1 ms |
| `fsync` to SSD | 0.5–2 ms |
| Same-AZ network round trip | 0.25–0.5 ms |
| Redis `GET`, same AZ (incl. network) | ~0.2 ms |
| MySQL indexed point lookup, **warm** buffer pool | 0.2–0.5 ms |
| MySQL indexed point lookup, **cold** (hits disk) | 1–5 ms |
| Cross-AZ, same region | 0.5–2 ms |
| Cross-region (eu-west ↔ us-east) | 70–100 ms |
| Cross-continent worst case (EU ↔ Sydney) | 250–300 ms |
| HDD seek | 10 ms |

Anchor fact: light in fibre ≈ 200,000 km/s → **~1 ms round trip per 100 km**, before any processing. No vendor, no protocol, no amount of money changes this. Geography is a hard constraint in your architecture.

## Why the shape matters more than the values

Three cliffs, each ~1000×:
`memory (100 ns)` → `SSD / local network (100 µs)` → `cross-region (100 ms)`

Design pressure always sits at the cliff you cross most often per request.

## Practical consequences

- **N+1 queries.** 100 lookups × 0.3 ms = 30 ms of *serialised* latency plus 100× round-trip and parse overhead. Each query is fast. The design is slow. Fix the count (eager load, `IN`, join), not the query.
- **Latency adds, it doesn't average.** Five sequential internal service calls = 5 × (RTT + callee's own work). A "fast" 20 ms service called five times deep is a 100 ms floor.
- **Cross-region sync calls are architecture-defining.** At 100 ms RTT you get *one*, maybe two, per request. This is the entire reason multi-region systems go async, or read from a local replica. It is not a preference.
- **`fsync` is the write-throughput ceiling.** Every `COMMIT` durably hits disk. That's why bulk inserts inside one transaction crush a loop of autocommitted inserts — you paid one fsync instead of N.
- **Non-obvious: Redis is not meaningfully faster than a warm indexed MySQL lookup.** ~0.2 ms vs ~0.3 ms — both are memory reads plus a network hop. Caching a warm point lookup buys you nothing and costs you an invalidation bug. Caching earns its keep when it replaces *expensive* work (joins, aggregations, scans, a remote API call) or when it removes **load** from a DB that's near its capacity ceiling. "Add a cache" is a load argument or a work-elimination argument, never a latency argument against a warm point read.
- **Connection setup is not free.** TLS handshake ≈ 2 RTT; a fresh MySQL connection is several round trips plus auth. Under high request rates, unpooled connections can cost more than the queries. This is why persistent connections and pooling exist.

## Pitfalls

- Quoting p50 in a design discussion. Users experience p99, and p99 is where queueing lives (foundations/3, /5).
- Optimising the slowest single operation when the win is in a repeated cheap one.
- Assuming "the DB is slow." A warm indexed lookup runs at memory speed. If MySQL is slow the real cause is usually cold pages, a bad plan, lock waits, or queueing — all different fixes.
- Treating a same-region service hop as free. It's ~100× a memory read and it can *fail*, which memory can't.

## Tooling & debugging

- `EXPLAIN ANALYZE` (MySQL 8.0.18+) — actual per-node timings, not estimates.
- `performance_schema`, `SHOW ENGINE INNODB STATUS` — where the server really spent time.
- Laravel: `DB::listen()`, Telescope, Clockwork — **query count per request** is the metric that catches N+1.
- Distributed tracing (OTel/Datadog/Jaeger) — a flame chart makes "latency adds" visible instantly; look for staircase patterns (sequential) vs stacked bars (parallel).

## Open question parked
Why utilisation makes all these numbers worse non-linearly → foundations/3.
