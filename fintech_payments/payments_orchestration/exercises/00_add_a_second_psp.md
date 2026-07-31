# Exercise 00 — Calibration: add a second PSP

**Scenario.** You run card payments for a POS/e-commerce platform in KSA. Today: one PSP ("A" — think Checkout.com), integrated directly. The business wants PSP "B" (think Tap or Moyasar) added this quarter: some merchants routed to B by rule, and B as fallback when A is unhealthy.

**Deliverable** — short design doc, design-only, bullets fine, diagrams optional. Target 30–45 min.

1. **Canonical state machine.** States + transitions for a card payment (auth → capture model). Mark which transitions are driven by API responses vs webhooks.
2. **Routing point.** Where in the flow the A-vs-B decision happens, what inputs it reads, and where the decision gets recorded.
3. **The hard case.** The authorize call to A times out — no response. Spell out exactly what your system does next, including whether/when cascading to B is safe, and why.
4. **Idempotency.** Your API takes an `Idempotency-Key` from the merchant. Show how it maps to what you send A/B, and what happens when the merchant retries after the timeout in (3).

Don't polish. Wrong-but-committed answers calibrate better than hedged ones.

**Review criteria:** unknown-state handling, cascade-safety reasoning, key scope (per attempt vs per payment), state-machine guard awareness.
