# Track: quality-ops

Testing, debugging, and the production failure modes. Interleaved with the other tracks rather than
saved for the end — Q1 and Q2 come early because they make every later lesson faster to verify.

Status legend: `[ ]` not started · `[~]` taught, exercise pending · `[x]` demonstrated

## Curriculum

- [ ] **Q1 — Vue DevTools + the debugging loop**
      Component tree, inspecting props/refs/computed live, the timeline. Source-mapped breakpoints in
      `.vue` files. Reading a Vue warning stack trace (they name the component, not the line).
- [ ] **Q2 — Unit testing components: Vitest + `@vue/test-utils`**
      `mount` vs `shallowMount`, querying by `data-testid`, `await nextTick()` / `await flushPromises()`,
      asserting emits. Why "it works in the browser but the test sees stale DOM."
- [ ] **Q3 — Testing composables**
      Test the function directly, no component needed. Mocking `useGet`/`usePost` (`tests/__mocks__/`).
      The `createSharedComposable` singleton leaking state between tests, and how to reset it.
- [ ] **Q4 — `vue-tsc` and template type safety**
      Why `npm run type-check` catches things eslint and the dev server don't. Typing `route.meta`,
      props, and API responses so a cashflow-api change breaks the build instead of production.
- [ ] **Q5 — Sentry in practice**
      What `@sentry/vue` captures automatically vs what you must capture. Reading a replay + trace to
      reconstruct a user's path. Which errors are noise (network aborts, 401 redirects) and why
      swallowing errors in a `catch` makes you blind.
- [ ] **Q6 — Common production failures in this app**
      Stale caches after deploy (asset hash mismatch → chunk load error), expired token mid-session,
      race between navigation and in-flight requests (`abort`), unbounded list accumulation,
      unhandled 422 shape change, RTL/Arabic layout breakage, memory leaks from uncleaned listeners.
- [ ] **Q7 — Performance when it matters**
      What actually costs: renders in `v-for` over large lists, `deep` watchers, non-cached computed
      misuse, `shallowRef` for big payloads, route-level code splitting, bundle analysis.

## Notes

_(written as lessons land)_
