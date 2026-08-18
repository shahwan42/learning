# Track: core-vue

The mental models. Everything else in the app is built out of these four things: reactive state,
templates that re-render as an effect of it, components that compose, and composables that package logic.

Status legend: `[ ]` not started · `[~]` taught, exercise pending · `[x]` demonstrated

## Curriculum

- [~] **L1 — Reactivity: `ref`, `reactive`, `computed`, and the effect model**
      Why `.value` exists, why render is an effect, why destructuring kills reactivity.
- [ ] **L2 — SFC + template as a render function**
      `<script setup>`, bindings, `v-if`/`v-for`/`:key`, event handlers, why the template is compiled not interpreted.
- [ ] **L3 — `watch` / `watchEffect` and when NOT to use them**
      Derive with `computed`, react with `watch`. Flush timing, `deep`, `immediate`, cleanup, the classic
      "watcher loop" bug.
- [ ] **L4 — Components: props down, events up, `v-model`, slots**
      One-way data flow, why mutating a prop is a bug, `defineProps`/`defineEmits`/`defineModel`.
- [ ] **L5 — Lifecycle + the DOM boundary**
      `onMounted`/`onUnmounted`/`nextTick`, template refs, what runs on server vs client, cleanup discipline.
- [ ] **L6 — Composables: the unit of reuse in this codebase**
      Why a function returning refs replaces mixins/stores. Instance-per-call vs shared instance.
      Calling rules (setup scope, `getCurrentInstance`), `toValue`/`MaybeRef` argument patterns.

## Notes

- `notes/01-reactivity.md`

## Parked

See `../revisit/README.md`.
