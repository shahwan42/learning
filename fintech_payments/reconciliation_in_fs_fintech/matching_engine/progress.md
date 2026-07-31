# Track 2 — The matching engine: how recon systems are built

Goal: design the core system — data in, matches out — including the failure modes that make it hard (late files, corrections, time, scale).

| # | Unit | Gate question (answer cold → done) | Exercise (doc type) | Status |
|---|------|------------------------------------|---------------------|--------|
| 1 | Ingesting the other side: settlement files & bank statements (SFTP, CSV/fixed-width, camt.053), control totals, re-sent/late/truncated files, idempotent loads | "The PSP re-sends yesterday's settlement file with 3 corrected rows. What must your ingestion do?" | design-doc section: ingestion pipeline + failure-mode table | not started |
| 2 | Match keys: deterministic IDs (ARN/RRN, references), composite keys, date windows; 1:1, 1:N (payout batches), N:M | "Why is amount+date a dangerous match key, and when is it acceptable?" | ADR: match-key hierarchy for card settlement | not started |
| 3 | Tolerances & systematic differences: fees deducted at source, FX, rounding — match against expectations, not raw equality | "PSP pays 97.10 on a 100.00 sale. Break or not — and how does the system know?" | ADR: tolerance & expected-fee policy | not started |
| 4 | Match lifecycle & state model: unmatched(ours/theirs) → matched/partial/exception; re-matching on late data; audit trail | "Why must matches be reversible, and what does that force in your schema?" | design-doc section: state machine + schema + invariants | not started |
| 5 | Time: cutoffs, timezones, settlement calendars; closing a day and reopening it | "Why does your 'Friday' disagree with the PSP's 'Friday', and what fixes it?" | RFC: recon periods & reopening closed days | not started |
| 6 | Scale: incremental vs full recon, bucketing/sort-merge, SQL-first designs | "10M rows/day from 3 sources — sketch a matching approach that isn't O(n²)." | track synthesis: assemble units 1–5 into ONE ≤3-page design doc (editing exercise) | not started |
