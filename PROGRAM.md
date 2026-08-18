# Career-Leverage Program

**Horizon:** August 2026–July 2027
**Design principle:** maximise career leverage per hour, not curriculum coverage.

## Strategic statement

The goal is to become a materially stronger, more adaptable Backend/Fintech engineer while maintaining career stability: better at designing, operating, and improving financial systems; clearer about trade-offs; more effective with AI; and able to turn ambiguous work into trustworthy technical decisions.

This program assumes **3 hours/week as a target**, **1 hour/week as a successful floor**, and **5 hours/week as an occasional ceiling**. It does not contain catch-up work. A missed week is neutral; the next lesson simply continues the current phase. During difficult periods, reduce to one 30-minute exercise or stop temporarily. On return, resume normally.

The program explicitly does **not** attempt language/framework collection, frontend development, broad cloud/DevOps surveys, a comprehensive CS syllabus, a public portfolio for its own sake, or early interview drilling.

## Priorities

1. Backend engineering judgment: data, transactions, concurrency, reliability, performance, observability, integration design, testing, and maintainability.
2. Financial-system depth: ledgers, payment state, idempotency, reconciliation, settlement, auditability, and operational controls.
3. AI-assisted engineering: repeatable workflows that make investigation, implementation, review, testing, documentation, and decision-making better.
4. Communication: concise technical decisions and evidence, embedded in the work above.

## One active path

There are no lanes, alternation rules, quotas, or date guards. Work through the current phase in order, but always prefer a live work problem that exercises the phase's capability. A work problem is the lesson when it offers a real decision, investigation, design, or postmortem.

`CURRENT.md` is the operational queue and is the only file an agent needs to choose a normal next lesson.

## 12-month roadmap

| Phase | Approx. window | Focus | Evidence |
|---|---:|---|---|
| 1. Transactional backend judgment | Aug–Nov 2026 | latency/cost, database transaction boundaries, locking/isolation, idempotency, retries, observability | 3–5 reviewed scenario analyses or work decisions |
| 2. Financial-system truth | Dec 2026–Feb 2027 | double-entry invariants, balances, payment state machines, reconciliation, settlement/exceptions, audit trails | a ledger/reconciliation design and one work application |
| 3. Reliable integration architecture | Mar–May 2027 | async boundaries, outbox/queues, webhooks, consistency, failure containment, API/integration trade-offs | 2 architecture decisions and one failure-mode review |
| 4. Consolidation and optionality | Jun–Jul 2027 | system-design synthesis, technical communication, evidence packaging, targeted AI workflow improvement | a concise design case or real-work equivalent; quarterly evidence review |

AI-assisted engineering is practiced in every phase, not as a separate technology curriculum. Each month, deliberately improve one workflow and record whether it saved time, found a defect, clarified a decision, or produced a better artifact.

### Planned learning load

The roadmap contains roughly **90–115 hours** of intentional learning over 12 months: 70–90 hours of exercises/design work and 20–25 hours of review, retrieval, and quarterly reflection. Work applications may replace—not add to—study time when they meet the lesson standard.

At the 1-hour floor, complete the current phase more slowly; do not compress or skip ahead. At survival level, answer one residue question or review one decision for ~30 minutes. In a crisis, pause entirely.

## Small active curriculum

Only these sources are active:

| Area | Scope |
|---|---|
| `interview_prep/system_design` | Use as an engineering-judgment curriculum, not interview preparation: cost, data, async, reliability, design scenarios. |
| `advanced_backend_engineering/rdb_beyond` | Transactions, locks, query plans, migrations, and production diagnosis. |
| `fintech_payments/accounting_for_spwe` | Conservation, double-entry, accounts, balances, transfers, reversals. |
| `fintech_payments/reconciliation_in_fs_fintech` | Matching, exceptions, settlement controls, auditability, and operational truth. |
| `fintech_payments/payments_security` and `payments_orchestration` | Only the webhook/integration/security and routing/state-machine material named by a live design problem. |
| `advanced_backend_engineering/product_eng_in_ai_era/a_ai_workflow` | Applied AI workflows, evaluated against real engineering output. |

All other material is classified in `AUDIT.md`; it is not an alternate queue.

## Lesson protocol

Trigger: **“next lesson”**, optionally with available time (for example, “next lesson, 30 minutes”) or a work problem.

1. Read `CURRENT.md`. Resume a taught-but-undemonstrated or banked attempt first. If its last contact was over two weeks ago, start cold with the exercise/gate question.
2. If the learner offers a current work problem that fits the phase, use it. Otherwise take the first incomplete unit in the current module. For 30 minutes, choose the listed survival exercise or shrink the scenario rather than switching tracks.
3. Teach only enough mental model to make a decision. Give one realistic exercise: design, debugging, code review, data experiment, failure analysis, or short technical writing.
4. Wait for the learner’s attempt. During the attempt, provide prose, pseudocode, documentation pointers, and named functions—not runnable exercise-language code. Review the attempt directly and mark a unit demonstrated only after a reviewed pass.
5. Close the exercise or log entry with three brief learner-generated lines: `residue:`, `work application:`, and `evidence:`. `none` is valid. A non-empty work application becomes the next practical follow-up when possible.
6. Update `CURRENT.md` and the source progress/exercise file. Commit the reviewed lesson or the monthly/quarterly review; no lane tags, throughput quotas, or mandatory push ceremony.

### Reduce before abandoning

- Missed week: no catch-up.
- Difficult month: use 30-minute scenarios, cold recall, or a live work decision.
- Repeated overload: remove scope from `CURRENT.md` at the next review.
- Recurring failure is evidence that the plan needs redesign, not that the learner needs more discipline machinery.

## Progress and evidence

Track only enough to preserve continuity:

- intentional learning hours (rough total, not a target to repay);
- meaningful exercises attempted and demonstrated;
- work applications;
- useful artifacts: ADRs/RFCs, incident analyses, designs, tests, operational improvements, or validated AI workflows.

Lesson counts, course/book completion, and streaks are not success metrics.

## Quarterly review (15–30 minutes)

At the end of October, January, April, and July, answer in `CURRENT.md`:

1. Am I noticeably better at engineering judgment than three months ago?
2. Am I noticeably deeper in fintech/payment systems?
3. Is AI materially increasing my engineering leverage? What evidence shows it?
4. Was the learning system sustainable at my actual capacity?
5. What must be removed, reduced, or made JIT?
6. What concrete evidence proves progress?

The review may change the next phase’s scope, but it may not create a parallel curriculum without removing equal scope.

## Not now

`SOMEDAY.md` holds interesting ideas. JIT material is pulled only by a real work problem, a selected evidence project, or an actual job-search window. Archived curricula remain in `_archive/` for reference, not obligation.

## Change log

- **2026-08-18 — career-leverage redesign adopted.** Replaces the two-lane, 24-month program with one 12-month path. Removes alternation, guards, monthly lesson floor, weekly ping, standing drills/kata, capstone deadline, and interview-prep schedule. See `AUDIT.md` for the explicit decisions.
