# Track 6 — Production operations (cross-cutting)

Observability, debugging, and failure handling are woven through every track; this track makes them systematic.

| # | Topic | Gate question (answer cold → skip) | Status |
|---|-------|------------------------------------|--------|
| 6.0 | Metrics that matter — auth rate by PSP/scheme/BIN, latency, webhook lag, stuck-state counts, cascade rate; dashboard layout | Your payments on-call dashboard gets six charts. Name them and the alert on each. | not started |
| 6.1 | Incident playbooks — PSP degradation mid-flight, kill switches and manual routing overrides, review queues, merchant comms | PSP A's auth rate drops 40% at peak. First three actions? | not started |
| 6.2 | Debugging tooling — correlation IDs across PSP round-trips, raw payload retention vs PCI, replay tools, sandbox-vs-prod parity traps | "Customer was charged, there's no order." Trace the debugging path end to end. | not started |
| 6.S | Synthesis — on-call runbook skeleton for the orchestration service | — | not started |
