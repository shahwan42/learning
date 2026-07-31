# L1 — Reactivity

## Mental model

Vue reactivity is **read-tracking + write-notification**, nothing more.

1. An **effect** is a function Vue runs while watching which reactive values it reads.
   A component's render is an effect. So are `computed` getters, `watch`, `watchEffect`.
2. While an effect runs, every reactive read registers a dependency: `dep → effect`.
3. A write to that value notifies its deps and schedules them to re-run.

That's the whole engine. Every confusing behaviour later is a consequence of "tracking happens at
**read time**, inside an effect."

Backend analogy: it's an in-memory pub/sub where subscription is implicit — you subscribe by reading.

## Why `.value` exists

JS has no way to intercept reads/writes of a plain variable. `let x = 1; x = 2` is invisible to any
library. So Vue needs a **container** whose property access it can intercept:

```ts
const count = ref(0);   // roughly { get value() { track(); ... }, set value(v) { ...; trigger(); } }
count.value++;          // read + write both observable
```

- `ref(x)` — works for any type, including primitives. Always `.value` in JS.
- `reactive(obj)` — an ES `Proxy` around an object. No `.value`, but only works for objects, is deep,
  and **cannot be reassigned** (`state = {...}` throws the proxy away).

Templates auto-unwrap top-level refs, so `{{ count }}` not `{{ count.value }}`. That asymmetry is the
#1 source of early confusion; the rule is "`.value` in script, bare in template."

**In this codebase: prefer `ref` almost always.** `cashflow-console` uses `ref` + `computed`; `reactive`
barely appears. Fewer footguns, and refs survive being passed around and returned from composables.

## `computed` — derived state

```ts
const total = computed(() => subtotal.value + fee.value);
```

- **Lazy**: the getter doesn't run until something reads `total.value`.
- **Cached**: re-reads return the cached value until a dependency changes. A method call in a template
  re-runs on every render; a `computed` doesn't. That's the real performance difference.
- The getter must be **pure**. No fetches, no mutating other state, no side effects. If you need a side
  effect, that's `watch` (L3).
- `computed` is read-only unless you pass `{ get, set }`.

Rule that prevents most bad Vue code: **if a value can be derived, derive it.** Don't keep a
`ref` you have to remember to update. Two refs that must agree will eventually disagree.

## Consequences you will actually hit

**1. Destructuring a `reactive` object kills reactivity.**
```ts
const state = reactive({ amount: 0 });
const { amount } = state;   // dead: plain number, copied out of the proxy
```
The proxy can only track `state.amount`. Once you've read the primitive out, there's no container left.
Fix: keep it as `state.amount`, or `toRefs(state)`, or just use separate `ref`s.

**2. Destructuring refs out of a returned object is FINE.**
```ts
const { isLoading, data } = usePagination(...);  // still refs, still reactive
```
Because you're copying the ref *objects*, not their values. This is exactly why every composable in
`cashflow-console` returns an object of refs/computeds. `.value` is what preserves reactivity across
function boundaries.

**3. Reading outside an effect tracks nothing.**
```ts
const params = { page: page.value };            // snapshot, frozen forever
const params = computed(() => ({ page: page.value }));  // re-derives
```
Real example — `composables/usePagintaion.ts` wraps `fetchOptions` in a `computed` precisely so a
`currentPage` change produces new params instead of a stale snapshot.

**4. Updates are batched, DOM is async.**
Multiple writes in one tick coalesce into one re-render, flushed on a microtask. So right after
`count.value++`, the DOM is not updated yet — you need `await nextTick()`. This bites in tests
constantly (L5/quality-ops).

**5. `ref` is deep by default.**
`ref({ a: { b: 1 } })` wraps the inner object in a `reactive` proxy on access. Mutating `a.b` triggers.
For large API payloads you never mutate, `shallowRef` skips that cost. Micro-optimisation; parked.

## Repo tie-ins

- `composables/auth.ts` — `isAuthenticated = computed(() => Boolean(currentUserToken.value))`.
  Derived, not stored. Nobody has to remember to flip a boolean on login/logout.
- `composables/usePagintaion.ts` — `items`, `hasNextPage` are `computed` off `data`; `computed`
  `fetchOptions` feeds params back into the fetch.
- `composables/useFilters.ts` — `appliedFilters` is a `ref<F>` mutated in place (`delete` / assign),
  which is why its `watch` needs `{ deep: true }`.

## Pitfalls

| Symptom | Cause |
|---|---|
| UI doesn't update | Read a value out of a proxy/ref into a plain variable; or reassigned a `reactive` |
| Forgot `.value` in script | Silent bug: comparing a ref object to a number is always false, `if (someRef)` is always truthy |
| Template shows `[object Object]` | Bound a non-unwrapped nested ref, or bound an object where you wanted a field |
| Something recomputes constantly | Side effect inside a `computed`, or `computed` returning a fresh object identity each run |
| DOM assertion fails right after a write | Didn't `await nextTick()` |

`if (someRef)` being always-truthy has no TypeScript error and no runtime error. It is the single most
common self-inflicted Vue bug for people coming from other languages.
