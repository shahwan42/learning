# Track C — Platform & Scale

What breaks when tenants share infrastructure, and how large SaaS contains it.

| # | Topic | Status |
|---|---|---|
| 1 | The noisy-neighbor problem — contention surfaces (DB, connections, workers, cache), detection | ○ |
| 2 | Per-tenant rate limiting & quotas — token buckets per tenant, tiers, enforcement points | ○ |
| 3 | Fair background-work scheduling — one tenant floods the queue; per-tenant queues, weighted fairness | ○ |
| 4 | Hot tenants & skew — the 1000× tenant; pool→silo promotion; placement | ○ |
| 5 | Cell-based architecture — cells/stamps, tenant→cell routing, blast radius | ○ |
| 6 | Connections & pooling at scale — many-tenant connection math; ProxySQL / PgBouncer concepts | ○ |

Status legend: ○ not started · ◐ in progress · ● done (understanding demonstrated)
