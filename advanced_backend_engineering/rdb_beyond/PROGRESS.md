# Relational Databases — Beyond Tutorials

> **Program status (2026-08-18): source material, not a curriculum to finish.** Use only to close an unresolved capability in `../../CURRENT.md`; phase diagnostics and capability pass standards decide what to study and when to stop.

Practical-fluency curriculum (not specialist mastery). One concept + one exercise per session; progress updates only after demonstrated understanding. Sibling of `../study-project/` (systems), `../multi-tenancy_at_scale/`, `../auth_n_z/`, `../computer_networks_fundamentals/`, `../software_design/`.

## Calibration (2026-07-26 assessment)

- **Engine:** MySQL 8 / InnoDB first (day job); Postgres flagged only where behavior genuinely differs.
- **Prod context:** AWS managed (RDS/Aurora) — ops topics use RDS/Aurora realities, lab uses vanilla MySQL 8.0 (Aurora MySQL 3.x tracks 8.0).
- **Baseline:** self-claimed confident on all four markers (EXPLAIN, composite indexes, isolation & locking, window functions/CTEs). **Unverified** — `exercises/a0-calibration.md` is the placement drill; curriculum altitude locks in after its review.
- **Priorities:** all four selected → all four tracks run, order below.
- **Stack facts (from siblings):** PHP 8.3 / Laravel exercises; `docker-compose` present, `docker` CLI not installed (Colima runtime); TablePlus installed; no local mysql/psql clients.

## Scope contract with sibling projects

- Page/B+tree/buffer-pool **internals at mastery depth** → `../study-project/` track A. Here: only the internals that change daily decisions.
- Tenant isolation, `business_id` indexing, RLS, noisy neighbors, **fleet** migrations → `../multi-tenancy_at_scale/`. Here: single-database concerns.
- This project: developer-facing fluency beyond tutorials — the optimizer, concurrency correctness, schema evolution, and single-DB ops on RDS/Aurora.

## Method (the loop)

1. One concept per turn — mental model first, then why it works that way.
2. Prerequisites just-in-time, filed in `prerequisites/notes/`.
3. One small realistic exercise. I wait for your attempt.
4. Direct review: correctness first, then idiomatic usage.
5. Progress updates only after you demonstrate understanding.
6. Nonessential detours → `revisit/README.md`.

Say **"skip"** (spot-check + move on), **"park it"** (→ revisit), or **"switch to <track>"** any time.

## Tracks

| # | Track | Dir | Status |
|---|-------|-----|--------|
| A | Query performance | [query_performance/](query_performance/progress.md) | **active — awaiting A0 calibration** |
| B | Concurrency & correctness | [concurrency_correctness/](concurrency_correctness/progress.md) | not started |
| C | Schema design & evolution | [schema_evolution/](schema_evolution/progress.md) | not started |
| D | Operations & reliability | [operations_reliability/](operations_reliability/progress.md) | not started |

Suggested path: **A0 → A-track**, B interleaves early (B1 pairs well after A1), C after A2 (needs index-cost vocabulary), D any time — D2+ adds a replica to the lab. Money-safe-writes material concentrates in B (cashflow-relevant).

## Current position

- **Track:** A — Query performance
- **Topic:** A0 — Calibration drill (placement, not teaching)
- **Waiting on:** your attempt at `exercises/a0-calibration.md` — paper-first, lab optional

## Session log

| Date | Covered | Outcome |
|------|---------|---------|
| 2026-07-26 | Assessment; scaffold; lab written (port **3307**); A0 drill issued | awaiting A0 attempt |

## Lab

`lab/` — MySQL 8.0 on host port **3307** (3306 belongs to `../study-project/lab/`), seeded cashflow-shaped dataset (~2.3M transactions incl. the A0 pathology). See [lab/README.md](lab/README.md). Nothing needs to run for A0.

---

## Career-leverage scope (2026-08-18)

Keep this as an active reference for transaction boundaries, isolation/locking, query-plan diagnosis, safe schema evolution, and production investigation. It supports `CURRENT.md` Phase 1; do not work through it as a complete database curriculum. The lab is optional and runs only when a real diagnosis or tightly matched scenario justifies it.
