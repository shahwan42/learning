# Track A — Data & Isolation

The database side: where the isolation boundary lives and what that placement costs.

| # | Topic | Status |
|---|---|---|
| 1 | Isolation models — pool / bridge / silo, tiering (hybrids), the one-way ratchet | ◐ taught, exercise pending |
| 2 | Schema & indexing for pooled tenancy — `tenant_id` discipline, composite indexes, what breaks as tenants grow | ○ |
| 3 | Database-enforced isolation — Postgres RLS; MySQL's gap and its workarounds | ○ |
| 4 | Partitioning & sharding by tenant — key choice, skew, hot shards | ○ |
| 5 | Fleet migrations — online DDL (gh-ost / pt-osc), expand–contract, migrating N schemas/DBs | ○ |
| 6 | Backup & single-tenant restore — the pooled-model surgery problem | ○ |
| 7 | Tenant data lifecycle — export, deletion, archival of churned tenants | ○ |

Status legend: ○ not started · ◐ in progress · ● done (understanding demonstrated)
