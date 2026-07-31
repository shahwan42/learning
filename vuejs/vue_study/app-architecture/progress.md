# Track: app-architecture

How `cashflow-console` is wired. This track is deliberately shaped around *this* app's real choices,
not generic Vue advice — notably: **no Pinia**, and a bespoke fetch layer.

Status legend: `[ ]` not started · `[~]` taught, exercise pending · `[x]` demonstrated

## Curriculum

- [ ] **A1 — vue-router 4: routes, params, query as state**
      `createWebHistory` + Laravel catch-all (`SpaController`) — why a hard refresh on `/payments`
      still works. `useRoute` vs `useRouter`, `push` vs `replace`, why query params are the app's
      shareable state (`useFilters`, `useDialogWithQuery`).
- [ ] **A2 — Navigation guards, auth, permissions, feature flags**
      `router.beforeEach`, `to.meta` typing, `await untilDataReady()` — the race this solves, and what
      breaks when a guard forgets to call `next()`.
- [ ] **A3 — The data-fetching layer (`useGet` / `usePost` from `@foodics/ui-common`)**
      `data`/`isLoading`/`error`/`execute`/`onData`, reactive options, `disableAutoExecute`, `abort`.
      `api/config.ts`: base URL, auth request interceptor, the global 401 → `/login` handler, and
      `skipGlobalErrorHandler` for when you want the error locally.
- [ ] **A4 — Shared state without a store**
      `createSharedComposable` vs `createGlobalState` vs a plain module-level `ref` vs `provide`/`inject`.
      Lifetime, reset-on-logout, and the test-pollution trap shared singletons cause.
- [ ] **A5 — Lists: pagination, filters, and URL sync**
      Read `usePagination` + `useFilters` + `composables/transactions.ts` as one system. The
      accumulate-into-array pattern and its duplicate/stale-page failure modes.
- [ ] **A6 — Forms: Vuelidate + API validation errors**
      Client rules vs server 422s, mapping Laravel error bags onto fields, disabled/loading states,
      double-submit prevention.
- [ ] **A7 — i18n + RTL**
      `$t` in templates vs `useLocale().t` in script, missing-key behaviour, Arabic/RTL layout
      consequences (this app ships `locales/ar`).
- [ ] **A8 — Layouts, `ui-common` components, auto-imports**
      Where `<FdxIconPlus />` comes from with no import, `components.d.ts`, and why "just add the
      component" sometimes doesn't resolve.
- [ ] **A9 — The BFF seam**
      What the Laravel proxy adds (OAuth injection), what it does *not* (no per-route BFF logic), and
      how to decide "is this bug in console, proxy, or api?"

## Notes

_(written as lessons land)_
