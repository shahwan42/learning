# Track: architecture

Patterns composed at service scale — where the gof track pays off. Heavy on testing seams, debugging, and where observability attaches.
Mechanics of HTTP/DB/deploy live in `../../study-project/backend-services/`; this track is the design layer above them.

Legend: ☐ not started · ▶ in progress · ✅ done (understanding demonstrated)

1. ☐ **Layering & dependency direction** — handler/service/data; where types live; import cycles as design smells
2. ☐ **Dependency injection** — composition root; manual wiring vs containers (Awilix, NestJS); the testing payoff
3. ☐ **Repository & data-access seams** — vs ActiveRecord (Eloquent-style); when Repository is pure ceremony
4. ☐ **Pipelines for cross-cutting concerns** — auth/validation/logging/metrics as composed middleware, not copy-paste
5. ☐ **Events & message-driven decoupling** — in-process events → queues; delivery guarantees; outbox (intro)
6. ☐ **Plugin architecture** — hooks and registries; how Fastify/Vite/ESLint stay extensible
7. ☐ **Error-handling design** — operational vs programmer errors; Result vs throw; error boundaries (crash mechanics: sibling node-runtime 5)
8. ☐ **Capstone: refactoring to patterns** — messy service → pattern judgment; where logs/metrics/traces attach (decorators, pipeline, AsyncLocalStorage)

## Exercises
(none yet)
