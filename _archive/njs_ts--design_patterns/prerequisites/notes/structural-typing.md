# Structural typing & function types (why TS patterns look different)

**TS asks "does it have the right shape?", never "did it declare the right name?".**
Nominal languages (PHP/Java): a class must state `implements DiscountContract`. TS: anything shape-compatible qualifies — object literals, plain functions, closures, classes.

Consequences for patterns:
- A function type alias **is** an interface: most single-method GoF interfaces collapse into one.
- No `implements` ceremony → strategies, observers, commands are often plain functions.
- A closure over dependencies ≈ an instance with private fields and one method. This equivalence is half of why GoF shrinks in TS.
- `Record<UnionKey, T>` requires every union member → registries are compile-time exhaustive.

```ts
type DiscountStrategy = (subtotal: number) => number; // this IS the interface
const tenPercent: DiscountStrategy = (s) => s * 0.1;  // conforms by shape alone
```

Pitfalls:
- Accidental compatibility: two same-shaped but unrelated types interchange silently (branded types fix this — parked).
- `Record<string, T>` lookups return `T | undefined` under `noUncheckedIndexedAccess` (typos surface at runtime). Union-keyed Records don't have this hole — prefer them for registries.
