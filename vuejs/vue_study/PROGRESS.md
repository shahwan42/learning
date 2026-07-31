# Vue Study — Progress

**Learner:** backend engineer (Laravel/PHP). Solid: modern JS, TypeScript, browser devtools, frontend build tooling.
Zero prior Vue. Goal: contribute fullstack features to `cashflow-console` (Vue 3 SPA) + `cashflow-api`.
**Not** aiming for frontend-specialist mastery. Practical competence, real debugging.

**Target repo:** `/Users/as/Code/foodics/cashflow/cashflow-console` (see `repo-fluency/notes/stack-map.md`)

## Tracks

| Track | Purpose | Status |
|---|---|---|
| `core-vue/` | Reactivity, SFCs, components, composables — the mental models | in progress |
| `app-architecture/` | Router+guards, shared state, data-fetching layer, forms, i18n, permissions | not started |
| `repo-fluency/` | Navigate cashflow-console, trace UI → BFF → API, change things safely | not started |
| `quality-ops/` | Vitest, devtools, Sentry, common production failures, perf | not started |

Tracks are not strictly sequential. `repo-fluency` starts as soon as `core-vue` L1–L4 land, because
reading real code accelerates everything else.

## Current position

**Track:** core-vue
**Lesson:** L1 — Reactivity: refs, reactive, computed, and the effect model
**Awaiting:** attempt at `exercises/01-payment-summary/`

## Rules of engagement

- One concept per lesson, mental model first, then why it works, then consequences.
- Prerequisites taught just-in-time, never up front.
- One small realistic exercise per lesson. No progress marked until the attempt is reviewed and correct.
- Interesting-but-nonessential detail goes to `revisit/README.md`, not into the lesson.
- Reviews are direct. Wrong is called wrong.

## Session log

### 2026-07-25 — Session 1
- Assessment: zero Vue, strong JS/TS/devtools/tooling, all four goals selected.
- Inspected `cashflow-console`. Confirmed Vue 3.5 SPA + vue-router 4, **no Pinia**, VueUse-based shared
  state, `@foodics/ui-common` fetch layer, Vitest, Sentry. Recorded in `repo-fluency/notes/stack-map.md`.
- Built curriculum, 4 tracks.
- Taught L1 (reactivity). Exercise 01 issued. **Stopped here, awaiting attempt.**

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** Work-ticket-driven only, cap ~8 topics: a topic opens only when a real cashflow-console ticket requires it (matches its own 'not aiming for frontend-specialist mastery' charter).
- **Runs:** P1–P2 inside work time. Never owns a study slot.
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
