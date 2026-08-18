# cashflow-console — stack map

Verified by inspection on 2026-07-25 (`/Users/as/Code/foodics/cashflow/cashflow-console`).

## Shape

```
browser ──> cashflow-console (Vue 3 SPA)
                │  GET/POST  {VITE_APP_URL}/api/*
                ▼
            cashflow-console Laravel  ← read-only proxy. Injects OAuth creds server-side.
                │  forwards verbatim
                ▼
            cashflow-api (Laravel)    ← the real backend
```

The Laravel side of `cashflow-console` is **not** a BFF with per-endpoint logic. `routes/web.php` is
three lines: two OAuth redirect routes and `Route::get('/{any}', SpaController::class)`. Everything
under `/api/*` is forwarded. Practical consequence: there is almost never a reason to open `app/` —
and a "wrong data" bug is either the SPA or `cashflow-api`, rarely the proxy.

`createWebHistory()` + the catch-all is why deep links like `/transactions?filter=...` survive a hard
refresh: Laravel returns the SPA shell for any path, the router then resolves it client-side.

## Versions / libraries that matter

| Concern | Choice |
|---|---|
| Framework | Vue **3.5**, Composition API + `<script setup lang="ts">` only |
| Routing | vue-router 4, `createWebHistory` |
| Global state | **No Pinia, no Vuex.** VueUse `createSharedComposable` / `createGlobalState` / `useStorage` |
| HTTP | `useFetch`/`useGet`/`usePost` from `@foodics/ui-common` (internal lib), configured in `api/config.ts` |
| UI kit | `@foodics/ui-common` (`FdxButton`, `useToaster`, `useViewport`, …) |
| Forms | `@vuelidate/core` + `@vuelidate/validators` |
| i18n | `vue-i18n` 11, `locales/en` + `locales/ar` (RTL is real) |
| Styling | Tailwind 3 |
| Icons/components | `unplugin-icons` + `unplugin-vue-components` → auto-imported, no import statement, typed via `components.d.ts` |
| Build | Vite 6 + `laravel-vite-plugin`, entry `resources/client/main.ts` |
| Tests | Vitest 3 + `@vue/test-utils` + jsdom; config at `resources/client/tests/vitest.config.ts` |
| Lint | oxlint (correctness) then eslint (+ perfectionist, prettier) |
| Observability | `@sentry/vue` — browser tracing w/ router, session replay, component tracking |
| Realtime | `@laravel/echo-vue` via `configs/realTime` |
| Node | 22.14.0 pinned (volta) |

## Directory contract (`resources/client/`)

| Dir | Holds | Rule of thumb |
|---|---|---|
| `main.ts` | app bootstrap: Sentry → i18n → router → mount | rarely touched |
| `api/` | **endpoint path constants only**, per domain (`transactionsApi.list`) | no fetch calls here |
| `api/config.ts` | `configUseFetch`: base URL, auth interceptor, global 401 handler | one-time infra |
| `views/` | one component per route, thin | composes components, owns page-level UI state |
| `components/<domain>/` | feature components (lists, drawers, forms) | where most work happens |
| `components/ui/`, `inputs/` | local generic widgets | check `@foodics/ui-common` first |
| `composables/` | **all logic + state + fetching**, one file per domain | the real "service layer" |
| `types/api/` | request/response shapes per endpoint | mirrors cashflow-api resources |
| `types/models.ts` | domain entities (`Transaction`, …) | |
| `enums/`, `consts/`, `configs/`, `utils/` | as named | |
| `locales/{en,ar}/` | i18n keys | **both** must be updated |
| `layouts/` | shells (authenticated / bare) | |
| `tests/` | vitest config, `__mocks__/`, some tests; others sit next to source as `*.test.ts` | |

## Conventions actually followed

- Composables return an object of `ref`/`computed`/functions. Consumers destructure.
- Domain composables are wrapped in `createSharedComposable` (one shared instance app-wide) —
  e.g. `useTransactions`, `usePhoneVerification` — or `createGlobalState` (`useAuth`).
- API paths come from `api/` constants; never inline a URL string.
- `lodash-es` only (eslint blocks `lodash`).
- Auth token lives in `localStorage` as `userToken` via `useStorage`, attached by the request
  interceptor. A 401 with `reason === 'SESSION_EXPIRED'` hard-redirects to `/login?sessionExpired=true`.
- `skipGlobalErrorHandler: true` when the component needs to render the error itself.
- Every interactive element gets a `data-testid` (used by `cashflow-e2e` Playwright suite).
- Route access is declarative in `meta`: `requiresAuth`, `requiresNotAuth`, `permissions`
  (+ `matchPermissionsStrategy`), `featureFlags` (+ strategy). The guard awaits `untilDataReady()`
  before evaluating, so permission checks don't race the bootstrap fetches.

## Commands

```bash
npm run dev        # vite dev server
npm run type-check # vue-tsc — catches template type errors CI will catch
npm run test:unit
npm run lint-fix
```

## Landmarks worth reading in order

1. `main.ts` — 30 lines, whole bootstrap
2. `api/config.ts` — the HTTP contract
3. `router/index.ts` + `router/authenticatedRoutes.ts` — access control
4. `composables/auth.ts` — the shared-state idiom, done well
5. `composables/usePagintaion.ts` + `useFilters.ts` — the list idiom (note: filename typo is real)
6. `composables/transactions.ts` → `views/TransactionsView.vue` — a full feature
