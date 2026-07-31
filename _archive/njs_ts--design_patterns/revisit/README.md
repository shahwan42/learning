# Parked topics

Interesting, not essential yet. Revisit when the trigger shows up in real work.

| Topic | Why parked | Revisit when… |
|---|---|---|
| Visitor | Rarely earns its complexity outside AST tooling | writing a linter, codemod, or compiler pass |
| Mediator | In practice it's an event bus or an orchestrating service | component coordination logic starts sprawling |
| Memento | Undo/history niche | building undo or time-travel state |
| Flyweight | Memory micro-optimization | millions of similar objects in memory |
| Interpreter | DSL construction is specialist territory | designing a rules/query DSL |
| Bridge | Abstraction×implementation matrices are rare in TS services | two independent dimensions of variation explode |
| Prototype | `structuredClone` + spread cover the practical need | deep-clone performance work |
| Iterator (GoF) | In JS this is generators/async iterators — runtime territory | study-project node-runtime 7 (streams) |
| CQRS & event sourcing | Needs DI + events foundations first | after architecture 5 |
| Outbox / sagas (deep dive) | Distributed reliability; intro comes in architecture 5 | building multi-service transactions |
| reflect-metadata & DI container internals | How NestJS actually resolves dependencies | after architecture 2 |
| RxJS / observables | Observer maximalism; heavy dependency, niche outside Angular | a project that already uses it |
