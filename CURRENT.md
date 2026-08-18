# Current path — August 2026 to July 2027

This file tracks capabilities and evidence, not source-course completion. A source file is used only when it is the smallest useful way to close an unresolved capability gap. If a capability is demonstrated, leave its remaining source units incomplete without penalty.

## Now: Phase 1 — Transactional backend judgment

**Purpose:** make and defend better decisions about data, async work, failure modes, and operating real backend systems.

### Start-of-phase diagnostic — do this next

You own a money-moving API. A request records a payment, needs a PSP action, and must return promptly. The PSP has a 1% timeout rate and can send duplicate webhooks; the database is transactional, but the PSP is not. In 20–30 minutes, state:

1. what runs synchronously and what crosses an async boundary;
2. the transaction boundary and idempotency keys/ownership;
3. how duplicate requests and deliveries behave;
4. the timeout/retry/failure-containment policy; and
5. the minimum signals needed to operate the flow.

Defend the trade-offs and name what you would *not* build yet. This is a diagnostic, not a test to cram for. It identifies the weakest important capability below. A live work case with the same decisions may replace it.

### Phase 1 capabilities

| Capability | Lightweight gate | Demonstrated pass | Valid evidence / useful sources |
|---|---|---|---|
| **P1. Cost and failure reasoning** — reason from latency, dependency behavior, queueing, and tail risk to a bounded design. | Given a request path and latency/SLO constraints, what budget and failure protections would you choose? | Identifies the critical path and risky dependency; defends timeout, bounded work, backpressure/queue choice, and user-visible degradation. | Latency/failure analysis, incident review, ADR. Sources: `interview_prep/system_design/foundations`, `reliability`. |
| **P2. Transactional correctness** — choose a transaction boundary that preserves a business invariant despite retries and partial failure. | A DB write must cause an external side effect: where is the boundary, what is atomic, and what can repeat? | States invariant, commit point, idempotency ownership, isolation/locking need, recovery path, and why a simpler design is or is not safe. | Money API design, code review, transaction experiment, ADR. Sources: `advanced_backend_engineering/rdb_beyond`, system-design `data`. |
| **P3. Async delivery judgment** — decide when async/outbox is justified and handle duplicate, ordering, retry, and poison-message cases. | For an event/webhook workflow, what is sync vs async, and how do repeated/out-of-order events change state? | Defends the boundary, delivery contract, idempotency/reconciliation strategy, retry limits, and terminal-failure handling. | Sequence/state diagram, webhook review, design exercise, work integration. Sources: system-design `async`/`reliability`, `payments_orchestration`, `payments_security`. |
| **P4. Observable failure containment** — design enough signals and controls to find, limit, and recover from a bad path. | A dependent service slows or an event backlog grows: what breaks first, what do you observe, and how do you contain it? | Names leading signals, correlation/audit data, alert condition, containment action, recovery/replay decision, and uncertainty. | Incident analysis, dashboard/alert proposal, postmortem, ADR. Sources: system-design `reliability`, `rdb_beyond`. |

**Phase gate:** make and defend a coherent decision for the diagnostic (or an equivalent work case) that covers P1–P4. Weak parts remain the next lesson; a strong capability no longer needs its source track.

### Smallest next-step rule

After the diagnostic, pick the weakest important capability. Use one 30–60 minute exercise that exposes that gap; do not progress through P1–P4 mechanically. The existing latency-budget exercise is a candidate source, not an obligation.

### 30-minute survival choices

- Answer one capability gate cold, then compare against its pass standard.
- Analyse one failure path: trigger → propagation → containment → evidence needed.
- Review one PR/ADR for transaction, idempotency, observability, rollback, and “simpler alternative” gaps.

## Later phase capabilities

Each phase begins with its diagnostic before selecting source material.

### Phase 2 — Financial-system truth

**Diagnostic:** Sketch a wallet transfer and later reversal. Which entries, balances, state transitions, independent records, and mismatches must exist?

| Capability | Lightweight gate | Demonstrated pass | Valid evidence / useful sources |
|---|---|---|---|
| **F1. Financial invariants/data model** — model money so conservation and balance meaning remain true. | What accounts and entries change for a transfer, pending state, completion, and reversal? | Produces balanced entries; distinguishes available/pending/posted balances; preserves immutability and explains the invariant. | Ledger/reversal design, schema/code review. Sources: `accounting_for_spwe`. |
| **F2. Financial state and recovery** — make state transitions explicit and safely repeatable. | A payout fails after initiation: which state is true, what can retry, and what is never mutated? | Defends legal transitions, idempotency, reversal/compensation, audit history, and operator recovery. | State machine, API design, incident analysis. Sources: `accounting_for_spwe`, Phase 1 async material. |
| **F3. Reconciliation and control** — use independent evidence to discover and resolve financial disagreement. | Ledger says paid; PSP settlement file disagrees. How do you match, classify, investigate, and close the break? | Defines match keys/tolerances, exception ownership, investigation evidence, adjustment controls, and proof of resolution. | Reconciliation exception playbook, control design, real payment-flow review. Sources: `reconciliation_in_fs_fintech`. |

### Phase 3 — Reliable integration architecture

**Diagnostic:** Add a second PSP or downstream provider under latency, failure, security, and operational constraints. What contract and architecture stay simplest while safe?

| Capability | Lightweight gate | Demonstrated pass | Valid evidence / useful sources |
|---|---|---|---|
| **I1. Integration contract/security** — define a trustworthy boundary for API and webhook traffic. | What must a webhook receiver authenticate, persist, reject, and safely replay? | Defends authenticity, replay/duplicate defenses, secret/token ownership, state authority, and audit data. | Webhook review, contract/API design. Sources: `payments_security`, system-design `async`. |
| **I2. Consistency and failure trade-offs** — choose delivery, retry, routing, and reconciliation behavior deliberately. | Which provider action is sync/async, what happens on timeout, and when does failover risk duplicate money movement? | Explains consistency need, outbox/retry/failover limits, idempotency/reconciliation, and user/operator outcomes. | Integration ADR, sequence diagram, failure-mode review. Sources: `payments_orchestration`, system-design `async`/`reliability`. |
| **I3. Complexity judgment** — choose the simplest architecture that is safe enough. | Is a provider abstraction/routing layer justified now? What concrete trigger would change the answer? | Makes explicit trade-offs, rejects premature abstraction, names assumptions and a reversible evolution path. | ADR, design review, provider-change proposal. Sources: `payments_orchestration`, `philosophy_of_software_design` (JIT). |

### Phase 4 — Consolidation and optionality

**Diagnostic:** Produce or defend one end-to-end financial-system decision for a skeptical engineer/operator. Where is the uncertainty, what evidence is missing, and how would you reduce it?

| Capability | Lightweight gate | Demonstrated pass | Valid evidence / useful sources |
|---|---|---|---|
| **S1. End-to-end system judgment** — connect financial invariants, data, async boundaries, operations, and trade-offs. | Given a money flow, what is the smallest coherent end-to-end design and where can it fail? | Presents coherent data/state/failure/operations choices; identifies uncertainty and a proportionate validation plan. | Real system design, architecture review, optional design case. Sources: any active source as needed. |
| **S2. Decision communication** — make a recommendation understandable and defensible under challenge. | Write a one-page recommendation: decision, alternatives, risks, rollout/rollback, and open questions. | Clear recommendation; decision-grade trade-offs; evidence/assumptions separated; can answer follow-up challenges. | RFC, ADR, postmortem, design review. Sources: archived writing material only as JIT reference. |
| **S3. AI-amplified engineering** — use AI in a bounded workflow with verified engineering value. | Which workflow will AI improve, how will output be checked, and what result would count as better? | Learner owns the judgment; records outcome/limitation; shows a material improvement such as a caught defect, faster investigation, stronger tests, or clearer decision. | Reviewed investigation/test/refactor/documentation artifact. Source: `product_eng_in_ai_era/a_ai_workflow`. |

## Evidence log

One row per meaningful reviewed exercise, work decision, or phase diagnostic—enough to remember what was proved, not to count completions.

| Date | Capability | Exercise / decision | Demonstrated? | Work application | Evidence |
|---|---|---|---|---|---|
| 2026-08-18 | — | Capability-based program baseline | — | — | Redesign adopted; Phase 1 diagnostic is next |

## Residue

- residue: In a money-moving API, where would you draw the transaction boundary if a database write must eventually cause an external side effect, and what duplicate/failure cases remain?

## Quarterly reviews

### October 2026

- Demonstrated capabilities and evidence:
- Better engineering decisions observed:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:

### January 2027

- Demonstrated capabilities and evidence:
- Better engineering decisions observed:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:

### April 2027

- Demonstrated capabilities and evidence:
- Better engineering decisions observed:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:

### July 2027

- Demonstrated capabilities and evidence:
- Better engineering decisions observed:
- Fintech depth:
- AI leverage evidence:
- Sustainability:
- Remove/reduce/JIT:
