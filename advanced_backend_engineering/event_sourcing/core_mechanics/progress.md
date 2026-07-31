# Track A — Core mechanics

Hand-roll the moving parts in PHP/MySQL before touching a package. Outcome: explain what an event store *is*, build a toy one, and stop conflating Laravel events with event sourcing.

| # | Topic | Status |
|---|---|---|
| A1 | State-stored vs event-sourced — the mental-model flip; why Laravel events ≠ ES | ▶ in progress |
| A2 | Anatomy of an event store — streams, envelopes, versions, append-only MySQL table | next |
| A3 | Rebuilding state — replay/fold; write a rehydrator | |
| A4 | Aggregates & invariants — decide/apply split, commands vs events | |
| A5 | Optimistic concurrency — expected version, racing-writers demo | |
| A6 | Same concepts in spatie/laravel-event-sourcing | |
