# Track D — Authorization

Who can do what: models, framework implementations (with critique), multi-tenancy,
and fine-grained systems. Interleaves with other tracks any time after Track A.

Legend: ☐ todo · ▶ in progress · ✅ done

| # | Topic | Status | Why it matters |
|---|---|---|---|
| D1 | AuthZ models | ☐ | RBAC / ABAC / ReBAC mental models; policy vs enforcement; where each collapses |
| D2 | Laravel gates & policies | ☐ | Internals + critique; the bypass catalog: query scoping, mass assignment, route-model binding |
| D3 | Framework critique: Django & NestJS | ☐ | Django model permissions & DRF, NestJS guards & CASL — what each gets right/wrong vs Laravel |
| D4 | Multi-tenant isolation | ☐ | Row/schema/db models, global scopes and their escape hatches, tenant context propagation |
| D5 | IDOR / BOLA | ☐ | The #1 API vulnerability class; systematic prevention; how to actually test for it |
| D6 | Fine-grained authZ | ☐ | Zanzibar/ReBAC model, OpenFGA lab, OPA/Cedar; when centralizing pays and what it costs |
| D7 | AuthZ in distributed systems | ☐ | Where decisions live, getting decision data, caching decisions safely, audit trails |

**Next: D1** (any time after Track A basics)
