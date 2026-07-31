# Prerequisites

Assessment: modern JS, TypeScript, browser devtools, and frontend build tooling are all solid.
So this directory is intentionally thin. It holds **only** the gaps that show up when a strong
backend/JS engineer meets Vue, taught just-in-time when a lesson needs them.

## Queue (taught on demand, not up front)

| Topic | Triggered by | Status |
|---|---|---|
| ES `Proxy` — get/set traps, and what a proxy cannot see | L1 reactivity (covered inline) | done |
| Microtask queue vs task queue → why DOM updates are async | L1 / L5 `nextTick` | partial |
| `import.meta.env` + Vite env var inlining at build time (`VITE_` prefix, not runtime config) | A3 fetch config | pending |
| Tailwind: only the utility subset this repo actually uses; `text-title-1`-style design tokens | first component exercise | pending |
| `.vue` SFC compilation — what the compiler emits for `<script setup>` and templates | L2 | pending |
| Auto-import magic (`unplugin-vue-components`, `unplugin-icons`) and `components.d.ts` | A8 | pending |
| Laravel API response envelope (`data`/`links`/`meta`) as the frontend sees it | A5 pagination | pending |

Nothing here is worth reading ahead of time. If a lesson needs it, it gets a paragraph, not a chapter.
