# Current path — August 2026 to July 2027

## Now: Phase 1 — Transactional backend judgment

**Purpose:** make better decisions about data, async work, failure modes, and operating real backend systems.  
**Target effort:** ~22–28 hours, at whatever pace fits 1–3 hours/week.  
**Rule:** a live work case replaces a synthetic exercise when it tests the same capability.

### Ordered modules

1. **Cost and failure model** — resume `interview_prep/system_design/foundations/01` cold: explain a latency budget and identify the highest-risk dependency. Then move to timeout, retry, queueing, and observability scenarios.
2. **Transaction boundaries and concurrency** — `advanced_backend_engineering/rdb_beyond`: isolation/locks, idempotent writes, schema-change risk, and one query-plan diagnosis.
3. **Async integration correctness** — system-design async/reliability material: outbox, duplicate delivery, ordering, retries, and webhook failure handling.
4. **Applied AI workflow** — after every two modules, improve one real workflow (investigation, test design, review, refactor, documentation, or ADR drafting). Record the outcome, limitation, and whether it produced a better result.

### 30-minute survival choices

- Answer the current module’s residue question cold and compare it with the note.
- Analyse one production-like failure path: trigger → propagation → containment → evidence needed.
- Review a real or synthetic PR/ADR for transaction, idempotency, observability, and rollback gaps.

## Next phases

- **Phase 2: Financial-system truth** — accounting foundations/ledger engineering, balances and reversals, reconciliation and settlement controls.
- **Phase 3: Reliable integration architecture** — payments state machines, outbox/webhooks, integration security, routing trade-offs, and failure containment.
- **Phase 4: Consolidation and optionality** — an integrated design case or equivalent work artifact, concise technical writing, evidence review.

## Open lesson

- `interview_prep/system_design/foundations/01-latency-budget`: taught previously; start with a cold attempt before any reteaching.

## Evidence log

| Date | Hours | Exercise / decision | Demonstrated? | Work application | Evidence |
|---|---:|---|---|---|---|
| 2026-08-18 | 0 | Program redesign baseline | — | — | Audit and single-path roadmap adopted |

## Residue

- residue: In a money-moving API, where would you draw the transaction boundary if a database write must eventually cause an external side effect, and what duplicate/failure cases remain?

## Quarterly reviews

### October 2026

- Engineering judgment:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:
- Proof:

### January 2027

- Engineering judgment:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:
- Proof:

### April 2027

- Engineering judgment:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:
- Proof:

### July 2027

- Engineering judgment:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:
- Proof:
