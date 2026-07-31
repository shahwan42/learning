# 01 Strategy

**One decision, many swappable implementations, selected by data.**

- Shape in TS: function type + `Record<Kind, Fn>` registry + data-driven lookup.
  The union-keyed Record makes "forgot to handle the new kind" a **compile** error.
- You already use it: `array.sort(comparator)` — the comparator is a strategy.
- Classes only when a strategy has dependencies or state; the lighter middle ground is a closure
  (`makeVipStrategy(deps) => strategy`) — which is dependency injection in miniature.

## When NOT
- Two stable branches that never grow → plain `if`.
- Variation that is data, not behavior (a table of rates) → lookup table, not functions.
- One call site → the indirection costs more than the duplication.
Premature Strategy is the most common pattern overengineering.

## Seen in the wild
`Array.prototype.sort`, Passport.js (auth plugins are literally called strategies), multer storage engines, HTTP clients' retry policies.

## Production failure modes
- `Record<string, Fn>` registry → a typo'd key returns `undefined` at runtime. Union keys catch it at compile time.
- Strategies sharing mutable state → order-dependent heisenbugs. Keep them pure; inject deps explicitly.
- 8-parameter strategies → the abstraction drifted; redesign the input type instead of growing the signature.
