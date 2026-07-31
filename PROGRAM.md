# PROGRAM.md — The "Less Is More" Constitution

**24-month learning program · Aug 2026 → Jul 2028 · adopted 2026-07-31**

This file is the single source of truth for what gets studied, when, and why. Individual curricula keep their own PROGRESS.md session mechanics, but **slot ownership, scope, and sequencing are decided here**. When a curriculum's ambitions conflict with this file, this file wins.

## Goals this program serves

1. **By Jul 2027:** A-rating / top-performer recognition at Foodics (drivers: delivery velocity, visible initiative, domain expertise) + daily tools mastered permanently (no more editor/terminal/diff switching — ever).
2. **By Jul 2028:** Senior/Staff Backend/Product Engineer offer, remote ≥$8K/month or EU relocation. Interview ramp Oct 2027, applications Q1–Q2 2028.
3. **Standing:** health first — gym and family always outrank study.

## The budget (the whole point)

~4h/week × 48 productive weeks/year × 2 years = **384h capacity. 320h planned, 64h (17%) slack.**
The directory held ~870 topics ≈ 650–870h. This program **deliberately abandons ~600 of them**. That is the design, not a failure. Roughly 260–300 demonstrated topics is a *successful* program.

---

## Verdicts (all sub-curricula)

### KEEP — owns a slot at some phase, runs to its own exit gate

| Curriculum | Phase/slot | Notes |
|---|---|---|
| `terminal-based` tracks 1–4 + nvim drill | P1 Weekday-A + daily drill | The only proven project. Tracks 5–6 parked (own clause: pull forward when work demands) |
| `advanced_backend_engineering/philosophy_of_software_design` | P1 Weekend (first ~10 sessions) | Finite, book-based; red-flags game → PR-review vocabulary |
| `fintech_payments/accounting_for_spwe` | P2 Weekday-A | Canonical accounting source (recon + ledger both defer to it) |
| `fintech_payments/reconciliation_in_fs_fintech` | P2 Weekend | Every exercise = rubric-graded RFC/ADR/runbook: domain + writing + publishable artifacts at once |
| `interview_prep/system_design` | P3 (foundations P3a, rest P3b Weekend) | Keeps its own gates. Baseline: 1/6 probe |
| `njs_ts/problem_solving` | P3 Weekday-A → P4 maintenance | Keeps its own rules (4 patterns unlock interview-craft; spaced repetition) |
| `interview_prep` storytelling + mock table | Instruments from month 1; formal units P3b | Story bank fed monthly from the /eod log |

### REDUCE — only the named scope survives; the rest is dead weight, never scheduled

| Curriculum | Surviving scope | When |
|---|---|---|
| `php_mastery` | internals 01–03 → laravel + performance rotation (~24/40). Design thread folds into philosophy practice | P1 Weekday-B |
| `abe/rdb_beyond` | ~12 topics: indexes/EXPLAIN, transactions/isolation, locking, replication. **Docker lab (port 3307) kept permanently as incident-rehearsal instrument** | P2 Weekday-B |
| `abe/multi-tenancy_at_scale` | ~5 topics nearest the Foodics `business_id` model | P2 Weekday-B (late) |
| `fintech_payments/payments_security` | ~5 units: tokenization, PCI scope, webhook signing, 3DS, secrets | P2 Weekday-B (late) |
| `fintech_payments/fintech_for_spwe` | 3 KSA-rails units (mada/SARIE/SADAD) in P2; interview track in P3b | P2 / P3b |
| `abe/auth_n_z` | ~6 topics | P3b breadth queue |
| `writing_for_pswe` | structure (BLUF/pyramid) + genres (ADR/RFC/postmortem), ~12/25. From P2, recon exercises become the writing gym; every real work doc counts as an exercise. AI-assist stays parked | P1 Weekend (after philosophy) |
| `njs_ts/study-project` | ~12 node-runtime/TS topics, pulled just-in-time by the capstone. CLI thread dead | P3a+ (capstone feeder) |
| `njs_ts/algo_ds` | ~6 structures, only where they unblock a problem_solving pattern | P3 (on demand) |
| `vuejs/vue_study` | Work-ticket-driven only, cap ~8 topics. **Never owns a slot** | P1–P2, inside work time |

**Conditional:** `abe/product_eng_in_ai_era` — activates (~6 units) only if the Claude-API work initiative is approved, attached to that deliverable. Otherwise parks at the P2 boundary.

### MERGE → `ledger-capstone/` (the 2028 portfolio artifact)

`ledger_ts` (build spine) + `fintech_payments/payments_orchestration` (multi-PSP module) + njs_ts feeders → **one TypeScript double-entry ledger for merchant wallets, payouts, POS recon**. Scope contract: `ledger-capstone/README.md`. First session Aug 2027; not one minute earlier.

### PARK — archived alive; re-entry only at a phase boundary with the named trigger

| Curriculum | Re-entry trigger |
|---|---|
| `abe/study-project` | Post-Jul-2028 staff-depth phase (its own charter: "no deadline") |
| `abe/computer_networks_fundamentals` | Gate-only: a unit runs only if it blocks a failed P3 system-design gate |
| `abe/event_sourcing` | A real work RFC proposes event sourcing |
| `go_dev` (incl. `go_concurrency`) | Deliberate stack re-bet after Jul 2028 |
| `terminal-based` tracks 5–6 (remote-ops, db-docs) | Work demands (server task / heavy DB-TUI need) |

### KILLED — moved to `_archive/` (regenerable in an afternoon if ever truly needed)

`vim_nvim` (duplicate of terminal-based/neovim) · `njs_ts/design_patterns` (lowest-yield 20h; judgment comes from Ousterhout + capstone reviews) · `nodejs_from_scratch` (pre-system scratch).

---

## Roadmap

### P1 "Tools + Spine" — Aug 2026 → Jan 2027 · 82h/96h

| Allocation | Hours |
|---|---|
| Nvim daily drill (10 min/day; ignite via N1 in week 1–2) | 18 |
| Weekday-A: terminal-based (shell-search → tmux → git → chezmoi) | 20 |
| Weekday-B: php_mastery (internals 01–03, then laravel/performance) | 18 |
| Weekend: philosophy (10 sessions, done ~Nov) → writing (structure + RFC genre → the real cross-team RFC) | 22 |
| vuejs work tickets | 4 |

### P2 "Domain Depth = A-Rating" — Feb → Jul 2027 · 82h/96h (Ramadan ≈ Feb–Mar: amnesty)

| Allocation | Hours |
|---|---|
| Weekday-A: accounting_for_spwe (double-entry → ledger → money movement) | 20 |
| Weekday-B: rdb_beyond (wks 1–14) → multi-tenancy + payments_security (wks 15–24) | 22 |
| Weekend: reconciliation units (the writing gym) | 26 |
| KSA rails (3 units) | 4 |
| Drill maintenance + vuejs tickets | 10 |

### P3 "Interview Ramp" — Aug 2027 → Jan 2028 · 86h/96h

**P3a (Aug–Sep, 28h):** Weekend = capstone v0 (14h) · Weekday-A = problem_solving patterns 1–4 (8h) · Weekday-B = system_design foundations — the genuine gap (6h).
**P3b (Oct–Jan, 58h):** Weekend = system_design data/async/reliability **cold-gate-first** (expect ~40–50% of units to close cold off P2 work), design track unlocks ~Nov at its own 60% gate, then 45-min design reps (26h) · Weekday-A = patterns 5–8 + spaced rep (14h) · Weekday-B = breadth queue: fintech_for_spwe interview track → auth_n_z → storytelling formal units (12h) · 3 mocks Dec–Jan (6h).

### P4 "Applications + Ship" — Feb → Jul 2028 · 70h/96h (the 26h slack IS interview/application time)

| Allocation | Hours |
|---|---|
| Weekend: capstone v1 → public + blog post | 30 |
| Weekday-A: problem_solving spaced-rep maintenance | 12 |
| Weekday-B: company-specific design + mock loops + storytelling polish | 16 |
| Story bank finalization + negotiation prep | 6 |
| Drill maintenance | 6 |

---

## Weekly rhythm

Slots (session days set 2026-07-31): **Weekday-A** (Mon, 45–60m) · **Weekday-B** (Wed, 45–60m) · **Weekend** (Fri or Sat, 90–120m) · **Drill** (10 min daily, attached to an existing anchor). WFH days (Sun/Tue/Thu): micro-habits only, zero sessions.

**Session ritual:** every session ends with a git commit + push of that session's notes, exercise attempts, and PROGRESS.md updates — **the commit is the session's receipt** (this is what the monthly review counts). Remote: private repo on personal GitHub (`github.com/shahwan42/learning`). Reminders fire Mon/Wed/Fri 06:30 via the `study-session-reminder` scheduled task.

| Slot | P1 | P2 | P3a | P3b | P4 |
|---|---|---|---|---|---|
| Weekday-A | terminal-based | accounting | problem_solving | problem_solving | problem_solving (maint.) |
| Weekday-B | php_mastery | rdb_beyond → tenancy/security | system_design foundations | breadth queue | company prep |
| Weekend | philosophy → writing | reconciliation | capstone v0 | system_design | capstone v1 |

---

## Laws

1. **Intake law.** No new curriculum, track, or topic list may be created unless equal-or-larger scope is parked/killed in the same commit. Shiny new things get one line in `SOMEDAY.md`, reviewed only at phase boundaries. This program design was the last sanctioned meta-work; the only recurring meta-work is the monthly review.
2. **Three-slot cap.** Max 3 slot-owning tracks at any time. No track gets a session without owning a slot — no "just peeking". Ownership changes only at phase boundaries or a monthly review.
3. **Demonstrated-only counting.** A topic counts when its exercise is done and reviewed. Consumed-but-not-demonstrated = zero.
4. **Minimum-viable week (streak protection).** Drill on ≥4 days + any ONE session ≥25 min = green week. Pre-declared amnesty weeks (gym start +2 weeks, Ramadan, travel, sick kids) are drill-only and green by decree. Missed hours are burned slack, never debt — no catch-up spirals. Two consecutive sub-MVW non-amnesty weeks → schedule a 30-min replan (a calendar event, not guilt).
5. **Park/kill triggers.** Slot-owner with 0 demonstrations for 6 consecutive weeks → auto-parked, slot reassigned. Deferred at 2 consecutive monthly reviews → parked. Parked a full phase with no pull from work or interviews → killed (archived). Discovered duplicate → kill the non-canonical copy immediately.
6. **Canonical sources** (ends the 5×-idempotency duplication). Accounting/double-entry → `accounting_for_spwe`. Node/TS platform → `njs_ts/study-project`. InnoDB/indexes/isolation/replication → `rdb_beyond`. Idempotency/outbox/delivery semantics → recon + rdb_beyond. Nvim/terminal → `terminal-based`. Everyone downstream runs **gate-first**.
7. **Cold-gate-first law (P3 accelerator).** Every interview-prep unit begins with its gate question attempted cold; the lesson opens only on failure. This is the payback for sequencing domain depth before interview prep.
8. **Tiebreaks.** Energy for one thing → gym wins. Family displaces study with zero make-up. No sessions after 11pm. Study never borrows sleep.

## Monthly review ritual (30 min, first Weekend block of each month — replaces that day's content)

1. Count topics **demonstrated** per track; update the curricula's PROGRESS.md files.
2. Burn-rate vs phase plan; confirm next month's slot ownership.
3. Park/kill trigger check (law 5).
4. Story-bank distillation (+20 min, same sitting): extract 1–2 STAR-shaped stories from the /eod daily log → `interview_prep/storytelling/`.

## Work-side actions (the A-rating is won at work; study only amplifies)

| When | Action |
|---|---|
| **Week 1 (Aug 2026)** | 30-min manager conversation: "What does an A look like on this team this cycle?" Write it down; derive 3 measurable proxies; re-touch monthly in 1:1s |
| Monthly | Story-bank distillation (in the review ritual) |
| H2 2026 | The initiative = the writing track's anchor artifact: one cross-team RFC on a live cashflow pain. Also re-run the failed 60-second director pitch using the diagnosis already on file |
| Dec 2026 | Mid-cycle checkpoint with manager: "Am I tracking to A?" (7 months of runway to correct) |
| H1 2027 | Publish the best 3 recon-curriculum artifacts (runbook/ADR/RFC) internally. If the Claude-API pitch lands, that feature is the initiative (activates product_eng_in_ai_era) |
| Monthly in P2 | Reproduce one real production incident in the rdb_beyond lab — rehearsal + story generation |
| Ongoing | Volunteer for recon/payments incidents; answer domain questions in public channels — expertise must leave a trail. Every real RFC/ADR/postmortem gets rubric-graded afterward (counts as a writing exercise) |
| Q4 2027 | CV/LinkedIn refresh + referral warm-up (not study hours) |

## Milestones / exit criteria

**P1 exit (Jan 31, 2027)**
- Nvim daily-driver decision passed: 4 consecutive weeks of all real editing in nvim with no velocity complaint, **or** a documented revert — both outcomes close the editor question. Then the **tools contract freezes until Aug 2028** (editor/terminal/diff/multiplexer, one page, no revisiting).
- terminal-based tracks 1–3 demonstrated + chezmoi bootstrap proven on a clean machine.
- php internals 01–03 + ≥10 further topics. Philosophy 10/10, red-flags game run against 2 real cashflow PRs.
- 1 real cross-team RFC shipped and rubric-graded; one-pager drafting ≤90 min; director pitch re-run.
- A-criteria in writing (week 1) + Dec checkpoint held.

**P2 exit (Jul 31, 2027)**
- Whiteboard merchant-wallet/payout double-entry cold (accounting ≥20/28). Recon ≥15/21 with **3 artifacts published internally**.
- Full EXPLAIN/lock diagnosis on the 2.3M-row lab cold; 3 real incidents reproduced. Tenancy 5 + security 5 + KSA rails 3 (can narrate a mada/SARIE settlement flow).
- Review outcome recorded. Controllables: criteria confirmed, 2 legible initiatives shipped, evidenced go-to status. The rating is influenced, not controlled — a documented near-miss does not stall the program.
- Story bank ≥12 raw stories.

**P3 exit (Jan 31, 2028)**
- system_design's own criterion: a **recorded 45-min fintech design out loud with quantitative estimates + failure analysis**; ≥3 designs at that level; 6-probe recalibration target 6/6 (baseline 1/6).
- problem_solving ≥8 patterns / ~30–35 problems; interview-craft unlocked by its own rule; spaced-rep log green.
- **Capstone v0 public on GitHub** (CLI, tests, BLUF README) — applications start Feb with something pinned.
- 8–10 staff-scope stories to rubric; 3 mocks scored (the empty table finally has rows); CV/portfolio ready.

**P4 exit (Jul 31, 2028)**
- Capstone v1 public + 1 derived blog post. ≥25–30 targeted applications or 8–10 loops; ≥2 final rounds.
- Target: Senior+ offer, remote ≥$8K/mo or EU relocation. **Fallback decision Jun 2028:** extend the search into H2 2028 vs leverage the A-rating internally and re-apply later — the assets (capstone, story bank, interview skill, recon depth) persist either way.

## Risks → mitigations

| Risk | Mitigation |
|---|---|
| Gym-start energy dip | Amnesty weeks (start +2); gym-wins tiebreak; never borrow sleep |
| Editor switch during the delivery-critical A-year | Additive 10-min ramp; PHPStorm always available; Jan '27 decision point; revert-counts-as-success; hard freeze after |
| Curriculum-collecting relapse (the proven failure mode: 21 curricula in 48h, then nothing) | Intake law; SOMEDAY.md valve; demonstrated-count makes collecting visible and worthless |
| Interview hours underestimated | P2 pre-pays system_design data/async (~10h gate harvest); P4 carries 26h slack; valve: if Dec '27 mocks are poor, capstone v1 shrinks to the recon module (~15h freed to prep) |
| >3 concurrent tracks | Structural: 3 slots, single owners, phase tables pre-decide |
| Burnout / family seasons | 48-week arithmetic excludes 4 wk/yr; MVW; slack-not-debt rule |
| A-rating doesn't land despite execution | Exit criteria are controllables; the Year-2 path is deliberately independent of the rating outcome |

## Week-1 checklist (Aug 2026)

- [ ] Manager conversation: written A-criteria + 3 measurable proxies
- [ ] Study session: `terminal-based` A1 (how the shell runs a command) — already prepared
- [ ] N1 (vim grammar) to ignite the 10-min daily drill
- [ ] Put the monthly review in the calendar (first weekend block of every month)

## Directory map after reorganization (2026-07-31)

- `PROGRAM.md` — this constitution · `SOMEDAY.md` — intake pressure valve · `_archive/` — killed curricula (moved, never deleted)
- `ledger-capstone/README.md` — capstone scope contract (dormant until Aug 2027)
- Parked projects carry a `PARKED.md` with their re-entry trigger; reduced projects carry a program note at the end of their PROGRESS.md
- Everything else runs by its own PROGRESS.md mechanics **within the slots assigned here**
