# Track 1 — Provider abstraction & payment state

One payment model, N providers underneath. Routing, webhooks, and recon all lean on this being right.

| # | Topic | Gate question (answer cold → skip) | Status |
|---|-------|------------------------------------|--------|
| 1.0 | Canonical payment state machine — canonical states, mapping each PSP's status model onto them, terminal vs non-terminal, who may drive which transition | Why must the canonical machine have an explicit `unknown/needs_review` state — what feeds it, and what drains it? | pending calibration (ex 00) |
| 1.1 | The abstraction boundary — normalize vs pass through raw, capability flags per provider (partial capture? void? multi-capture?), retaining raw PSP payloads | A new PSP can't do partial capture. Where does that fact live, and how does a caller find out — integration time or request time? | not started |
| 1.2 | Idempotency across two layers — merchant→you keys vs you→PSP keys, key scope (per attempt vs per payment), storage, replay semantics, create-timeout ambiguity | Authorize times out. Walk through how a retry avoids a double charge at both layers. | pending calibration (ex 00) |
| 1.3 | Unified API & error taxonomy — intent-style vs direct charge, sync vs async answers, decline vs error vs unknown, what merchants can actually act on | Design the response for `do_not_honor` vs a PSP `503` — what differs and why? | not started |
| 1.S | Synthesis — v1 unified payments API over PSPs A+B (design doc) | — | not started |

Observability thread: state-transition metrics, time-in-state alerts, `unknown`-count as a first-class alarm.
