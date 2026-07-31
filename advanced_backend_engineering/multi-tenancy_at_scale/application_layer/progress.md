# Track B — Application Layer

Keeping tenant context correct everywhere code runs — and evaluating the tooling.

| # | Topic | Status |
|---|---|---|
| 1 | Tenant context: resolution & propagation — request, queued jobs, scheduler, console, websockets | ○ |
| 2 | Query scoping — Laravel global scopes; default-safe vs default-unsafe designs; how leaks actually happen | ○ |
| 3 | Shared resources beyond the DB — cache keys, filesystem/buckets, sessions, broadcast channels | ○ |
| 4 | Leak prevention & testing — isolation tests, review checklist, static-analysis options | ○ |
| 5 | `stancl/tenancy` — architecture (bootstrappers, DB switching), what it buys, when it's overkill | ○ |
| 6 | `spatie/laravel-multitenancy` vs hand-rolled — the "make current" pattern; comparison with a custom layer | ○ |
| 7 | Background work — tenant-aware queues, all-tenant batch jobs, scheduling for N tenants | ○ |

Status legend: ○ not started · ◐ in progress · ● done (understanding demonstrated)
