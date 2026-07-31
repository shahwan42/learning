# A1 — Isolation models: pool / bridge / silo

One decision generates almost everything else in multi-tenancy: **where does the isolation boundary live?**

| Model | The boundary is… | Concretely |
|---|---|---|
| **Pool** | a `WHERE tenant_id = ?` clause | shared DB, shared tables (Foodics: `business_id`) |
| **Bridge** | a schema | shared DB server, one schema per tenant |
| **Silo** | a database / infrastructure | a DB (or whole stack) per tenant |

Vocabulary comes from AWS's SaaS Factory material — it's the industry-standard naming.

## The trade-off, compressed
- **Pool** — marginal tenant ≈ free (a row). One migration, one backup, cross-tenant queries trivial. In exchange: isolation is a *promise every query must keep, forever*; blast radius = all tenants; noisy neighbors share everything; restoring one tenant is surgery.
- **Silo** — isolation by construction; per-tenant restore/tuning/residency trivial; blast radius = 1. In exchange: real marginal cost per tenant; N× migrations, backups, connections; fleet drift; cross-tenant analytics becomes an ETL project.
- **Bridge** — looks like a compromise; at scale often the worst of both: still shares the server (noisy neighbors stay) *and* has N-schema migration pain. Note: in MySQL, "schema" ≡ database, so bridge ≈ silo-on-one-server.

## Consequences worth keeping
- **Cost curves decide it.** Pool cost is ~flat vs tenant count; silo is linear. Tens of thousands of small tenants (restaurants) → pool is the only sane economics. Dozens of large enterprise tenants → silo is affordable and easier to sell.
- **Real platforms are hybrids ("tiering").** Pool the masses, silo the whales/regulated tenants. The interesting engineering lives in the promotion path (pool → silo for one tenant).
- **The decision ratchets.** Extracting one tenant from a pool is a data-migration project; merging silos into a pool is worse. Defaults harden — pick knowing you'll keep it.
- **Isolation ∝ ops burden.** Whatever silo makes easy (restore, residency, tuning), it makes N× repetitive. Whatever pool makes easy (migrate, deploy, query), it makes dangerous.

## Foodics through this lens
Pooled, `business_id`, tenant derived from the logged-in user. Predictable choice for tens of thousands of small tenants. The model's bills to expect: every query carries the isolation promise (→ B2), one bad migration touches everyone (→ A5), whales and noisy neighbors share your resources (→ C1, C4), single-tenant restore is hard (→ A6).
