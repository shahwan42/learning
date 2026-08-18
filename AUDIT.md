# 2026-08-18 career-leverage audit

## Decision standard

Every item was classified as **KEEP**, **REDUCE**, **JIT**, **ARCHIVE**, or **SOMEDAY**. The deciding question was: does this materially improve the learner’s ability to reason about, design, operate, or improve real backend/fintech systems within the next year?

| Item | Decision | Why | Surviving scope |
|---|---|---|---|
| `terminal-based` | JIT | Tool fluency is useful but its 35–40h path is not the highest return. | Fix concrete workflow friction only; retain current uncommitted A9 exercise untouched. |
| `php_mastery` | JIT | The learner already ships PHP/Laravel. | Work-triggered internals, queues, transactions, profiling. |
| `ledger_ts` | ARCHIVE | Duplicate ledger/accounting and adds a Node/TS detour. | None. |
| `writing_for_pswe` | REDUCE | Decision writing matters, but exercises should be real technical artifacts. | ADR/RFC/postmortem fragments embedded in lessons. |
| `vuejs` | ARCHIVE | Frontend breadth does not meet the objective. | None. |
| `njs_ts/study-project` | JIT | No active Node/TS need. | Smallest required slice for a real project/role. |
| `njs_ts/algo_ds` | JIT | Not current backend/fintech leverage. | Targeted refresh only. |
| `njs_ts/problem_solving` | JIT | Interview drills are premature without a search window. | Activate only for active interviewing. |
| `go_dev` | SOMEDAY | Interesting, not justified by a concrete capability or project. | Reconsider only with an explicit trigger. |
| ABE `study-project` | ARCHIVE | Broad specialist survey duplicates more applied material. | None. |
| ABE `product_eng_in_ai_era` | REDUCE | AI leverage is strategic; AI-product breadth is not. | `a_ai_workflow` applied against real engineering output. |
| ABE `multi-tenancy_at_scale` | JIT | Relevant only to an active product topology decision. | Work-triggered isolation trade-offs. |
| ABE `philosophy_of_software_design` | REDUCE | Maintainability is high leverage, but a book-length track is indirect. | Applied coupling/complexity review in code and ADRs. |
| ABE `event_sourcing` | JIT | A pattern, not a default system architecture. | Pull only when evaluating/adopting it. |
| ABE `auth_n_z` | JIT | Important but no declared near-term gap. | Active security/product need. |
| ABE `computer_networks_fundamentals` | REDUCE | Debugging value, weak standalone payoff. | HTTP/TLS/failure-path reasoning when relevant. |
| ABE `rdb_beyond` | KEEP | Transactions, locks, query plans, and migrations compound in backend/fintech work. | Concurrency, correctness, diagnosis, schema evolution. |
| `accounting_for_spwe` | KEEP | Direct foundation for defensible money-system design. | Conservation, accounts, journals, balances, transfers, reversals. |
| `reconciliation_in_fs_fintech` | KEEP | Reconciliation and controls are core financial-system truth. | Matching, exceptions, settlement, auditability, operations. |
| `payments_security` | REDUCE | Integration security has direct payoff; a broad survey does not. | Webhook authenticity, replay/idempotency, secrets, token boundaries. |
| `payments_orchestration` | REDUCE | Useful integration judgment, but should be scenario-driven. | Routing and payment-state trade-offs. |
| `fintech_for_spwe` | JIT | Rail surveys are less valuable than live system application. | Specific rail/product question only. |
| `interview_prep/system_design` | KEEP | Addresses known gaps in cost, async, replication, and failures. | Engineering design, not interview rehearsal. |
| `interview_prep/storytelling` | JIT | Formal interview practice is premature. | Preserve meaningful work facts; practise in a search window. |
| `ledger-capstone` | REDUCE | One evidence artifact is enough; a 44h TypeScript portfolio is not. | Optional 8–12h design case if real work leaves insufficient evidence. |
| Two lanes, alternation, guards, counters, monthly floor, ping | ARCHIVE | Decision and admin overhead exceed their learning value. | One phase in `CURRENT.md`; quarterly review. |
| Daily nvim drill and weekly PHP kata | ARCHIVE | Not connected tightly enough to the present objective. | None. |
| Recall and residue | KEEP (reduced) | Retrieval and continuity are cheap and useful. | One cold residue at the next lesson. |
| Git receipts/session logs | REDUCE | Persistence matters; ceremony does not. | Concise evidence row and a normal commit after reviewed work. |
| Work hooks/story bank | KEEP (reduced) | Transfer to real work is the program’s main multiplier. | One work-application/evidence line per lesson. |
| Monthly RDB incident lab | JIT | Valuable only when a current incident/diagnosis supports it. | Use a real problem or a targeted simulation. |
| Interview schedule and application guard | ARCHIVE | It dictates study before an actual need. | Job-search preparation is JIT. |

## Old vs new active curriculum

| Dimension | Old | New |
|---|---|---|
| Operating model | Two alternating lanes, guards, counters, quotas, convergence | One phase-based path with a single current queue |
| Time basis | ~351–356 planned hours / 24 months plus receipts and habits | ~90–115 intentional hours / 12 months; 1h floor, no catch-up |
| Active subject area | Terminal workflow, PHP, accounting, reconciliation, design, RDB, packs, capstone, future interview prep | Backend judgment, financial-system truth, reliable integrations, integrated AI leverage |
| Work integration | Separate lane artifacts and story-bank machinery | Work case may replace a synthetic lesson; every lesson records application/evidence |
| Interviews | Scheduled for 2027–28 | JIT when a real search starts |
| Projects | 44h public TypeScript capstone with dated guard | One optional 8–12h design case, only if it adds missing evidence |

## Archive policy

Clearly redundant/off-objective directories are moved beneath `_archive/2026-career-leverage/`. JIT and reduced resources stay in place because they remain useful references, but they are not active curricula.
