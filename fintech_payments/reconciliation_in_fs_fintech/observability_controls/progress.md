# Track 4 — Observability & controls

Goal: know when recon itself is healthy, prove completeness end-to-end, and speak finance's language at close.

| # | Unit | Gate question (answer cold → done) | Exercise (doc type) | Status |
|---|------|------------------------------------|---------------------|--------|
| 1 | Health signals: match rate, unreconciled value & age, time-to-clear, file-arrival SLAs; silence-as-failure | "Match rate is 100% today. Why might that be the worst possible news?" | alerting spec: page vs ticket table + rationale | not started |
| 2 | Completeness controls: trailer/control totals, record counts, sequence gaps, stage-by-stage conservation | "How do you prove no rows were lost between the file and your database?" | ADR: control checks at each pipeline stage | not started |
| 3 | Close, audit & the finance interface: month-end close, sign-offs, evidence, force-match governance | "What does 'the books are closed' mean for your recon system?" | one-page memo to finance: engineering guarantees at close | not started |
