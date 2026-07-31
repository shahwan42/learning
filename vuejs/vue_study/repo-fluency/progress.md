# Track: repo-fluency

Goal: open a ticket against `cashflow-console`, find the right files in minutes, change them without
collateral damage, and know which of the three layers a bug lives in.

Status legend: `[]` not started · `[~]` taught, exercise pending · `[x]` demonstrated

## Curriculum

- [ ] **R1 — The map** (`notes/stack-map.md` — already written, read it early)
      Directory-by-directory: what belongs in `views/` vs `components/` vs `composables/` vs `api/` vs
      `types/api/`. The naming and layering conventions actually followed.
- [ ] **R2 — Trace a feature end-to-end**
      Pick Transactions. Route → view → components → composable → `api/` path constant → proxy →
      cashflow-api endpoint. Do it with devtools + network tab open, not by reading alone.
- [ ] **R3 — Reading a `.vue` file fast**
      Skim order: `defineProps`/`defineEmits` → composables used → template root. What to ignore.
- [ ] **R4 — Add a column / field / filter to an existing page**
      The smallest real change. Touch points: type in `types/api/`, mapping in the composable, cell in
      the component, `locales/en` + `locales/ar` keys, `data-testid`.
- [ ] **R5 — Add a new page**
      Route entry + `meta` (auth/permissions/feature flag) + view + composable + api constants + i18n.
- [ ] **R6 — Ship a CRUD slice end-to-end**
      List + filters + pagination + create drawer with validation + optimistic-ish refresh + toasts.
      The capstone; requires A3, A5, A6.
- [ ] **R7 — Working alongside cashflow-api**
      Contract-first: agreeing the response shape, `include=` relations, writing `types/api/` from the
      API resource, and what to do when the API changes under you.

## Notes

- `notes/stack-map.md` — the wiring diagram + conventions (read this first)
