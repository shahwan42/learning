# Revisit — deferred topics

Parked deliberately. Each line says **why it matters** so future-you can judge whether it's worth
pulling forward. Nothing here blocks shipping features in `cashflow-console`.

## Parked from L1 (reactivity)

- **`shallowRef` / `shallowReactive` / `markRaw`** — skip deep proxying. Matters only when a `ref` holds a
  large API payload or a non-plain object (a chart instance, a `Map`) and deep tracking costs render time
  or breaks the object. Relevant later for `chart.js` instances and big transaction lists.
- **`reactive` and `toRefs`** — this repo barely uses them, but you'll meet them in older Vue 3 code and
  in library docs. Needed only for reading unfamiliar code.
- **`customRef`, `effectScope`, `triggerRef`** — reactivity internals. `effectScope` is how VueUse
  implements `createSharedComposable`, so it's worth one paragraph when we hit A4.
- **`watchSyncEffect` / flush timing (`pre`/`post`/`sync`)** — matters when a watcher must run before or
  after DOM update. Comes up in Q2 if a test asserts DOM after a watcher fires.

## Parked, general

- **Options API** (`data`/`methods`/`computed` objects) — Vue 2 style. Not in this codebase. Only needed
  if you read old tutorials or a legacy Foodics repo. Most Vue content online still uses it; knowing it
  exists is enough to avoid copying it in.
- **SSR / Nuxt / hydration** — this app is a pure client-side SPA. Zero relevance until that changes.
- **`<Suspense>`, async components, `defineAsyncComponent`** — relevant to route-level code splitting
  and bundle size (Q7), not to correctness.
- **Teleport** — for modals escaping overflow/z-index containers. `ui-common` drawers likely handle it;
  becomes relevant if a dialog renders clipped.
- **`KeepAlive`** — caching a route component's state across navigation. Would come up if "going back to
  the list loses my filters" ever becomes a requirement.
- **Custom directives, render functions, JSX** — rarely justified in app code.
- **Web sockets / `@laravel/echo-vue`** — the realtime layer (`configs/realTime`, `useRealtime`,
  notifications, `billRefreshManager`). Genuinely used in this app, but it's a second-order concern;
  scheduled after A5.
- **Playwright / `cashflow-e2e`** — the separate E2E repo. Belongs after Q2/Q3, and it's why every
  element carries a `data-testid`.
- **Chart.js / `vue-chartjs`** — dashboard + analytics views. Isolated concern, learn on demand.
- **PDF rendering (`pdfjs-dist`), Lottie animations** — feature-specific, learn on demand.
