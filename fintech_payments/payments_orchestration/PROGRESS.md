# Payments Orchestration — Progress

## Learner profile (assessed 2026-07-26)
- Context: building **multi-PSP integration/routing at work** (in-house, production — not vendor evaluation)
- Experience: multiple PSPs shipped; all four core areas already touched (idempotency/webhooks, routing/failover, vaulting/tokenization, reconciliation)
- ⇒ **Depth over breadth**: no fundamentals, calibrate via exercises, fast-track aggressively
- Stack: **TypeScript** for code exercises, **design-only** (state machines, API sketches, ADRs) where architecture is the point
- Anchoring: global patterns mapped to KSA/MENA reality where they differ (mada scheme rules, SAMA data residency, local acquirer quirks)
- Style: concise mental models, why > what, one exercise per topic, no filler, correct mistakes plainly
- Sibling project: `../fintech_for_spwe/` (interview prep). Card/rails fundamentals live there — cross-reference, don't re-teach.

## Tracks (priority order — reorderable on request)
| # | Track | Status | File |
|---|-------|--------|------|
| 1 | Provider abstraction & payment state | **in progress** | abstraction/progress.md |
| 2 | Routing, failover & retries | not started | routing/progress.md |
| 3 | Webhooks & async correctness | not started | webhooks_async/progress.md |
| 4 | Vaulting, tokens & PCI scope | not started | vaulting_tokens/progress.md |
| 5 | Reconciliation & money ops | not started | recon_money_ops/progress.md |
| 6 | Production operations (cross-cutting) | not started | operations/progress.md |

Fast-track rule: every topic has a **gate question**. Answer it cold → marked done, no lesson. With this profile, expect to gate out of several.

## Current position
- Track: abstraction · calibration pending
- Waiting on: attempt at `exercises/00_add_a_second_psp.md` (calibrates depth across tracks 1–3 at once)

## Protocol (every session)
1. Read this file + the active track's `progress.md`. Summarize where we stopped; offer: continue / switch track / revisit.
2. Teaching loop: one concept (mental model, why + how, practical consequences, **failure modes**) → prerequisites just-in-time → one small realistic exercise → **wait for attempt** → direct review → update progress **only after demonstrated understanding**.
3. Notes go to `<track>/notes/` (or `prerequisites/notes/`) **after** demonstration, not before. Short: mental models, APIs, pitfalls, debugging. No textbook dumps.
4. Tangents → `revisit/README.md` with a one-line why.
5. Every topic covers: how it breaks in production, how you detect it (observability), and real tooling names.
6. Each track ends with a synthesis design exercise shaped like the work problem.

## Session log
- 2026-07-26 — Assessment done (profile above). Scaffold created. Assigned Exercise 00 (calibration: add a second PSP behind a unified API). Depth map: pending attempt review.
