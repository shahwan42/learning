# Track: gof-in-typescript

The classic patterns, re-idiomized: functions, closures, and modules first; classes when they earn it.
Every topic covers: mental model · why it exists · when it's overengineering · where you've already seen it in real frameworks · production failure modes.

Order = practical frequency, not GoF taxonomy.

Legend: ☐ not started · ▶ in progress · ✅ done (understanding demonstrated)

1. ▶ **Strategy** — swappable behavior; functions as strategies; `Record` registries end switch-sprawl
2. ☐ **Factory** — factory functions; when `new` leaks implementation; abstract factory (briefly)
3. ☐ **Singleton & module scope** — Node's module cache is a singleton factory; test pollution; when shared state bites
4. ☐ **Observer** — EventEmitter done right: typed events, listener leaks (`MaxListenersExceededWarning`), sync-emit surprises
5. ☐ **Decorator** — wrapping for cache/retry/log; TS `@decorators` vs the GoF pattern; NestJS usage
6. ☐ **Adapter** — isolating third-party SDKs; ports at boundaries; the testing payoff
7. ☐ **Chain of Responsibility** — Express/Fastify middleware IS this; build a mini pipeline to demystify `next()`
8. ☐ **Command** — jobs and queues (BullMQ shape); serializable commands; undo
9. ☐ **State** — lifecycles (order/payment) as discriminated unions; make illegal states unrepresentable
10. ☐ **Builder** — fluent APIs, config/query builders; vs object literals with defaults
11. ☐ **Facade & Proxy** — one simple front for a messy subsystem; JS `Proxy`; how ORMs do lazy loading
12. ☐ **Template Method vs higher-order functions** — the inheritance-vs-composition fork, settled

Parked GoF patterns (Visitor, Mediator, Memento, Flyweight, Interpreter, Bridge, Prototype, Iterator) → [`../revisit/README.md`](../revisit/README.md) with reasons and triggers.

## Exercises
- [01-strategy](../exercises/01-strategy/README.md) → topic 1 — **pending**

## Next up
Review exercise 01 → topic 2 (Factory).
