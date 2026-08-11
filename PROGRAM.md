# PROGRAM.md — The "Less Is More" Constitution

**24-month learning program · Aug 2026 → Jul 2028 · adopted 2026-07-31 · v2 (single-path serial mode) 2026-08-11**

This file is the single source of truth for what gets studied, when, and why. Individual curricula keep their own PROGRESS.md lesson mechanics, but **queue position, scope, and sequencing are decided here**. When a curriculum's ambitions conflict with this file, this file wins.

## Goals this program serves

1. **By Jul 2027:** A-rating / top-performer recognition at Foodics (drivers: delivery velocity, visible initiative, domain expertise) + daily tools mastered permanently (no more editor/terminal/diff switching — ever).
2. **By Jul 2028:** Senior/Staff Backend/Product Engineer offer, remote ≥$8K/month or EU relocation. Interview ramp Oct 2027, applications Q1–Q2 2028.
3. **Standing:** health first — gym and family always outrank study.

## The budget (the whole point)

~4h/week × 48 productive weeks/year × 2 years = **384h capacity. 320h planned, 64h (17%) slack.**
The directory held ~870 topics ≈ 650–870h. This program **deliberately abandons ~600 of them**. That is the design, not a failure. Roughly 260–300 demonstrated topics is a *successful* program. v2 changes how time is scheduled, not how much exists.

## Why v2 (2026-08-11)

Enjoyment is streak fuel — a scheduling input, not a reward. A program that gets abandoned delivers zero. v2 therefore: (a) runs **one curriculum at a time** instead of three parallel slots, (b) replaces fixed session days with a **pull cadence** ("next lesson", any day, any chat), (c) lets the queue start with the most-enjoyed curriculum, and (d) protects the dated career goals with **mechanical date guards** instead of judgment calls.

---

## The Queue

Exactly **one active curriculum** — the head. It runs to its exit gate at whatever pace pulls happen, then the next item activates (see Queue-head handoff). Tail order is freely reorderable at any monthly review; the **head** is displaced only by its exit gate, a date guard, or the stall fuse (Law 4). Abandoning a head mid-flight pays Law-5 park prices.

| # | Curriculum | Exit gate | ~h |
|---|---|---|---|
| 1 | `terminal-based` (tracks 1–4) — **ACTIVE** | Tracks 1–4 demonstrated + DF14 rebuild-ritual capstone | 33–38 |
| 2 | `fintech_payments/accounting_for_spwe` | ≥20/28 + whiteboard merchant-wallet/payout double-entry cold | 20 |
| 3 | `writing_for_pswe` (reduced ~12 units) | Surviving units + 1 real cross-team RFC rubric-graded; one-pager drafting ≤90 min | 10 |
| 4 | `fintech_payments/reconciliation_in_fs_fintech` | ≥15/21 + **3 artifacts published internally** | 26 |
| 5 | `advanced_backend_engineering/rdb_beyond` (reduced ~12) | Cold EXPLAIN/lock diagnosis on the 2.3M-row 3307 lab | 22 |
| 6 | `advanced_backend_engineering/philosophy_of_software_design` | 10/10 sessions + 14 red flags captured + game run vs 2 real cashflow PRs | ~14 |
| 7 | Small packs: `abe/multi-tenancy_at_scale` ~5 · `fintech_payments/payments_security` ~5 · `abe/auth_n_z` ~6 · KSA rails 3 (`fintech_payments/fintech_for_spwe`) | Their unit counts; can narrate a mada/SARIE settlement flow | ~12 |
| 8 | `php_mastery` (reduced) | internals 01–03 + ~24/40 | 18 |
| 9 | `ledger-capstone` **v0** | v0 public on GitHub per README (CLI, tests, BLUF README) | ~14 |
| 10 | Interview prep: `njs_ts/problem_solving` → `interview_prep/system_design` → `interview_prep/storytelling` (+ breadth: `fintech_for_spwe` interview track; `njs_ts/algo_ds` on demand) | Their own recorded criteria: ≥8 patterns/~30–35 problems + spaced-rep green · 3 recorded 45-min designs + 6/6 probe recalibration · 8–10 staff-scope stories + 3 mocks scored + CV ready | ~60 |
| 11 | `ledger-capstone` **v1** | v1 public + 1 derived blog post (scope valve: shrinks to recon module if Dec '27 mocks are poor) | ~30 |

**Order rationale.** Positions 2–4 are the goal-1 chain: accounting is the canonical dependency, writing runs directly before recon so recon's exercises are rubric-graded artifacts from day one, and recon produces the 3 internally-published artifacts the Jul-2027 rating case rests on. Philosophy is mid-flight (S1 closed) but nothing in goal 1 depends on it; its S2 residue re-ask is written into the exercise file and survives the wait. **Conditional (mechanical):** if terminal-based's exit gate closes on or before **2026-11-30**, philosophy runs at position 2 instead — the calendar can then afford enjoyment order. Packs and php (7–8) are **sacrificial**: if the late date guards fire, they park.

**Head inventory** lives in the active curriculum's PROGRESS.md (currently: 50 lessons ≈ 35–40h, reference exit window Dec 2026–Feb 2027). The monthly review compares demonstrated count against that line. Optional cut if guards loom (decided at a review, not now): git track 10→5 core topics, Module B to just-in-time.

**Feeders (never queue items):** `njs_ts/study-project` (~12 node/TS topics pulled just-in-time by the capstone) · `njs_ts/algo_ds` (only where a problem_solving pattern needs it) · `vuejs/vue_study` (work-ticket-driven, inside work time, cap ~8).

## Date guards

Mechanical: **date + condition + action**. Checked at every pull (protocol step 0) and every monthly review; a guard that fires preempts at the next lesson boundary. **Guard-paused ≠ parked**: the paused curriculum's Law-5 clock suspends, and it resumes after the preempting block's exit gate.

- **2027-01-05** — if `accounting_for_spwe` is not yet active → it preempts.
- **2027-04-01** — if `reconciliation_in_fs_fintech` is not yet active → it preempts (skipped items resume in order afterward).
- **2027-06-01** — if <3 recon artifacts are published internally → remaining recon lessons are selected artifact-first until 3 are out.
- **2027-09-01** — if capstone v0 has not started → it preempts as a **time-boxed block**: v0 scope only, hard stop at v0-public or 8 weeks, whichever first. (Satisfies the README's Aug-2027 date lock; v0 must precede interview prep so applications have a public artifact.)
- **2027-10-15** — if interview prep is not yet active → it preempts. Once problem_solving patterns 1–4 are demonstrated, **spaced-rep joins the standing habits** (a drill, not a queue block).
- **Accepted consequence, written down:** if the late guards fire, packs/php park; the interview-prep exit package (recorded designs + mocks) re-dates to Mar 31 2028; applications compress to Q2 2028 — still inside goal 2, consuming the program's slack.

## Pull protocol (how every lesson runs, defined once here)

Trigger: saying **"next lesson"** (or naming a topic) in any chat, any day — there are no fixed study days.

0. **Check date guards** — a fired guard's curriculum IS the active one.
1. Read the active curriculum's PROGRESS.md → take the next unchecked topic per its local default order (or the explicitly requested topic).
2. One self-contained lesson, **10–60 min**: mental model → one realistic exercise → attempt → direct review.
3. `[x]` only on demonstrated understanding (Law 3). Failed/partial attempt stays `[ ]`/`[~]` and resumes next pull.
4. Update the track's progress file + session log, then **auto `git add` / `commit` / `push`** — no asking. **Every pull commits**: attempt + review notes are receipted whether or not the topic closes; demonstration controls only the `[x]`. The commit is the lesson's receipt (remote: `github.com/shahwan42/learning`).

A weekly throughput ping (`study-session-reminder` task, repurposed 2026-08-11) reports lessons demonstrated this month vs the ≥8 floor; retire it after two consecutive floor-passing months.

## Queue-head handoff (runs once per exit gate passed)

1. Record the exit in the finishing curriculum's PROGRESS.md + the Program log below.
2. Activate the next queue item; refresh its program note (delete its stale slot-era "Runs:" lines **at that moment, not before**).
3. Run the Law-1 SOMEDAY.md review.
4. Check date guards.

Until refreshed at handoff, stale slot/phase lines inside per-curriculum files are superseded by this file.

---

## Verdicts (all sub-curricula)

### KEEP — owns a queue position, runs to its own exit gate

| Curriculum | Queue | Notes |
|---|---|---|
| `terminal-based` tracks 1–4 + nvim drill | **#1 (active)** + daily drill habit | The only proven project. Tracks 5–6 parked (pull forward when work demands) |
| `advanced_backend_engineering/philosophy_of_software_design` | #6 (or #2 via the 2026-11-30 conditional) | Finite, book-based; red-flags game → PR-review vocabulary |
| `fintech_payments/accounting_for_spwe` | #2 | Canonical accounting source (recon + ledger both defer to it) |
| `fintech_payments/reconciliation_in_fs_fintech` | #4 | Every exercise = rubric-graded RFC/ADR/runbook: domain + writing + publishable artifacts at once |
| `interview_prep/system_design` | #10 | Keeps its own gates. Baseline: 1/6 probe |
| `njs_ts/problem_solving` | #10 → spaced-rep habit | Keeps its own rules (4 patterns unlock interview-craft; spaced repetition) |
| `interview_prep` storytelling + mock table | #10; story bank fed monthly from the /eod log (habit) | |

### REDUCE — only the named scope survives; the rest is dead weight, never scheduled

| Curriculum | Surviving scope | Queue |
|---|---|---|
| `php_mastery` | internals 01–03 → laravel + performance rotation (~24/40). Design thread folds into philosophy practice | #8 (sacrificial) |
| `abe/rdb_beyond` | ~12 topics: indexes/EXPLAIN, transactions/isolation, locking, replication. **Docker lab (port 3307) kept permanently as incident-rehearsal instrument** | #5 |
| `abe/multi-tenancy_at_scale` | ~5 topics nearest the Foodics `business_id` model | #7 (sacrificial) |
| `fintech_payments/payments_security` | ~5 units: tokenization, PCI scope, webhook signing, 3DS, secrets | #7 (sacrificial) |
| `fintech_payments/fintech_for_spwe` | 3 KSA-rails units (mada/SARIE/SADAD); interview track later | #7 / inside #10 breadth |
| `abe/auth_n_z` | ~6 topics | #7 (sacrificial) |
| `writing_for_pswe` | structure (BLUF/pyramid) + genres (ADR/RFC/postmortem), ~12/25. From #4 onward, recon exercises are the writing gym; every real work doc counts as an exercise. AI-assist stays parked | #3 |
| `njs_ts/study-project` | ~12 node-runtime/TS topics, pulled just-in-time by the capstone. CLI thread dead | feeder |
| `njs_ts/algo_ds` | ~6 structures, only where they unblock a problem_solving pattern | feeder |
| `vuejs/vue_study` | Work-ticket-driven only, cap ~8 topics. **Never a queue item** | habit, inside work time |

**Conditional:** `abe/product_eng_in_ai_era` — activates (~6 units, inserted as a short queue item) only if the Claude-API work initiative is approved, attached to that deliverable. Parks permanently if the initiative hasn't landed by Jul 2027.

### MERGE → `ledger-capstone/` (the 2028 portfolio artifact)

`ledger_ts` (build spine) + `fintech_payments/payments_orchestration` (multi-PSP module) + njs_ts feeders → **one TypeScript double-entry ledger for merchant wallets, payouts, POS recon**. Scope contract: `ledger-capstone/README.md`. Queue #9 (v0) and #11 (v1); the 2027-09-01 guard enforces the README's Aug-2027 date lock; not one minute earlier.

### PARK — archived alive; re-entry = insertion into the queue at a monthly review after the named trigger fires (never a parallel lesson)

| Curriculum | Re-entry trigger |
|---|---|
| `abe/study-project` | Post-Jul-2028 staff-depth era (its own charter: "no deadline") |
| `abe/computer_networks_fundamentals` | Gate-only: a unit runs only if it blocks a failed system_design gate during interview prep |
| `abe/event_sourcing` | A real work RFC proposes event sourcing |
| `go_dev` (incl. `go_concurrency`) | Deliberate stack re-bet after Jul 2028 |
| `terminal-based` tracks 5–6 (remote-ops, db-docs) | Work demands (server task / heavy DB-TUI need) |

### KILLED — moved to `_archive/` (regenerable in an afternoon if ever truly needed)

`vim_nvim` (duplicate of terminal-based/neovim) · `njs_ts/design_patterns` (lowest-yield 20h; judgment comes from Ousterhout + capstone reviews) · `nodejs_from_scratch` (pre-system scratch).

---

## Laws

1. **Intake law.** No new curriculum, track, or topic list may be created unless equal-or-larger scope is parked/killed in the same commit. Shiny new things get one line in `SOMEDAY.md`, reviewed only at queue-head transitions or SOMEDAY.md's fixed dates, whichever comes first. The v2 redesign was sanctioned meta-work; the only recurring meta-work is the monthly review.
2. **One-Path rule.** Exactly one active curriculum; zero *lessons* for any other except date-guard preemption — no "just peeking". **Standing habits are exempt** (this list is exhaustive): daily 10-min nvim drill · vuejs work-ticket pulls · monthly rdb incident-lab rep (activates only once `rdb_beyond` builds the 3307 lab; until then, log incident candidates in the story bank) · monthly story-bank distillation · spaced-rep for completed queue items. Demonstrations produced by real work may be logged against any curriculum — Law 3 credit needs no lesson.
3. **Demonstrated-only counting.** A topic counts when its exercise is done and reviewed. Consumed-but-not-demonstrated = zero.
4. **Minimum-viable week + stall fuse (streak protection).** Drill on ≥4 days + **≥1 lesson pulled to its review step (pass or fail)** = green week. Pre-declared amnesty weeks (gym start +2 weeks, Ramadan, travel, sick kids) are drill-only and green by decree. Missed hours are burned slack, never debt — no catch-up spirals. **Stall fuse:** 4 consecutive 0-lesson non-amnesty weeks → a 30-min replan whose only allowed outcomes are resume / reorder queue / park the head (next item activates). **Throughput floor:** <8 demonstrated lessons in a non-amnesty month, two months running → the monthly review must record one of: queue reorder toward the nearest date guard / scope cut (REDUCE) / guard re-date. Green weeks do not waive the floor.
5. **Park/kill triggers.** Active curriculum stalls → the Law-4 fuse decides (park = next queue item activates). A queued item demoted at 2 consecutive monthly reviews past a date guard that wanted it → forced park decision. Parked ~6 months with no pull from work or interviews → killed (archived). Discovered duplicate → kill the non-canonical copy immediately. Guard-paused curricula accrue no clock.
6. **Canonical sources** (ends the 5×-idempotency duplication). Accounting/double-entry → `accounting_for_spwe`. Node/TS platform → `njs_ts/study-project`. InnoDB/indexes/isolation/replication → `rdb_beyond`. Idempotency/outbox/delivery semantics → recon + rdb_beyond. Nvim/terminal → `terminal-based`. Everyone downstream runs **gate-first**.
7. **Cold-gate-first law (interview-prep accelerator).** Every interview-prep unit begins with its gate question attempted cold; the lesson opens only on failure. This is the payback for sequencing domain depth before interview prep in the queue.
8. **Tiebreaks.** Energy for one thing → gym wins. Family displaces study with zero make-up. No lessons after 11pm. Study never borrows sleep.

## Monthly review ritual (30 min, standing calendar event, first weekend of each month)

Pull mode has nothing to displace — the review is its own event.

1. Count topics **demonstrated** from lesson receipts (active curriculum + habit threads); update PROGRESS.md files.
2. Burn-rate vs the active item's hour estimate, the date-guard horizon, and the ≥8/month throughput floor.
3. Queue check: head progress vs exit gate · free tail reorder · park/kill triggers (Law 5) · date guards. Guards are evaluated here too; one that fired mid-month already preempted at the next lesson boundary. **Promotion moves tail items only** — the head is displaced only by exit gate, guard, or fuse.
4. Story-bank distillation (+20 min, same sitting): extract 1–2 STAR-shaped stories from the /eod daily log → `interview_prep/storytelling/`.

## Work-side actions (the A-rating is won at work; study only amplifies)

| When | Action |
|---|---|
| **Week 1 (Aug 2026)** | 30-min manager conversation: "What does an A look like on this team this cycle?" Write it down; derive 3 measurable proxies; re-touch monthly in 1:1s |
| Monthly | Story-bank distillation (in the review ritual) |
| H2 2026 | The initiative = the writing track's anchor artifact: one cross-team RFC on a live cashflow pain. Also re-run the failed 60-second director pitch using the diagnosis already on file |
| Dec 2026 | Mid-cycle checkpoint with manager: "Am I tracking to A?" (7 months of runway to correct) |
| H1 2027 | Publish the best 3 recon-curriculum artifacts (runbook/ADR/RFC) internally — **this row is what the 2027-04-01 and 2027-06-01 date guards protect**. If the Claude-API pitch lands, that feature is the initiative (activates product_eng_in_ai_era) |
| Monthly (once the 3307 lab exists) | Reproduce one real production incident in the rdb_beyond lab — rehearsal + story generation |
| Ongoing | Volunteer for recon/payments incidents; answer domain questions in public channels — expertise must leave a trail. Every real RFC/ADR/postmortem gets rubric-graded afterward (counts as a writing exercise) |
| Q4 2027 | CV/LinkedIn refresh + referral warm-up (not study hours) |

## Calendar checkpoints

Per-curriculum completion criteria live in the Queue's exit-gate column. Only date-anchored commitments remain here; each maps to a guard or a work-side action.

- **Dec 2026** — manager mid-cycle checkpoint (work-side table).
- **Jan 2027** — nvim daily-driver decision: 4 consecutive weeks of all real editing in nvim with no velocity complaint, **or** a documented revert — both outcomes close the editor question. Then the **tools contract freezes until Aug 2028** (editor/terminal/diff/multiplexer, one page, no revisiting). Habit-based; unaffected by queue order.
- **Jul 2027** — rating review recorded + ≥3 recon artifacts published internally (guard-backed) + story bank ≥12 raw stories. Controllables: criteria confirmed, 2 legible initiatives shipped, evidenced go-to status. The rating is influenced, not controlled — a documented near-miss does not stall the program.
- **Jan 2028** — capstone v0 public on GitHub (re-dated only by the 2027-09-01 guard's 8-week box).
- **Feb 2028** — applications begin (≥25–30 targeted or 8–10 loops; ≥2 final rounds by Jul).
- **Jun 2028** — fallback decision: extend the search into H2 2028 vs leverage the A-rating internally and re-apply later — the assets (capstone, story bank, interview skill, recon depth) persist either way.

## Risks → mitigations

| Risk | Mitigation |
|---|---|
| Gym-start energy dip | Amnesty weeks (start +2); gym-wins tiebreak; never borrow sleep |
| Editor switch during the delivery-critical A-year | Additive 10-min ramp; PHPStorm always available; Jan '27 decision point; revert-counts-as-success; hard freeze after |
| Curriculum-collecting relapse (the proven failure mode: 21 curricula in 48h, then nothing) | Intake law; SOMEDAY.md valve; demonstrated-count makes collecting visible and worthless |
| Interview hours underestimated | Domain queue items pre-pay system_design data/async (~10h gate harvest); the final months carry the program's slack; valve: if Dec '27 mocks are poor, capstone v1 shrinks to the recon module (~15h freed to prep) |
| More than one concurrent curriculum (the old >3-tracks failure) | Structural: One-Path rule; the Queue pre-decides order |
| **Depth-before-deadline (serial mode's own risk)** | Goal-1 chain at queue #2–4 + the 2027-01/04/06 guards + throughput floor — mechanical, not judgment |
| **Slow-bleed: happy-path pulls while the calendar drains** | ≥8/month floor + weekly throughput ping + head inventory as the review's denominator |
| **Back-half pile-up (guards firing late)** | Capstone v0 time-boxed before interview prep; packs/php named sacrificial; re-date path written down |
| Burnout / family seasons | 48-week arithmetic excludes 4 wk/yr; MVW; slack-not-debt rule |
| A-rating doesn't land despite execution | Exit criteria are controllables; the Year-2 path is deliberately independent of the rating outcome |

## Directory map

- `PROGRAM.md` — this constitution · `SOMEDAY.md` — intake pressure valve · `_archive/` — killed curricula (moved, never deleted)
- `ledger-capstone/README.md` — capstone scope contract (dormant until the 2027-09-01 guard or queue arrival)
- Parked projects carry a `PARKED.md` with their re-entry trigger; reduced projects carry a program note at the end of their PROGRESS.md (refreshed at queue-head handoff; stale slot-era lines are superseded by this file until then)
- Everything else runs by its own PROGRESS.md mechanics **within the queue order assigned here**

## Program log

- **2026-07-31** — v1 adopted: Less-Is-More program, 3 parallel slots (Weekday-A/B, Weekend), 4 phases (P1–P4) with per-phase hour tables, Mon/Wed/Fri reminders. Superseded by v2; see git history for the full v1 text.
- **2026-08-11** — **v2 adopted: single-path serial mode.** One active curriculum (the Queue), pull cadence ("next lesson", any day, 10–60 min, auto-commit receipt), enjoyment as a scheduling input, mechanical date guards protecting both goals. Slot/phase machinery deleted. First application: `terminal-based` Track 4 redesigned as "Reproducible environments" (Linux-first: multipass Ubuntu VM + devcontainers, chezmoi spine) + shell-search A9 (disk-space forensics, built-ins only) added; A9 is the recommended first pull. Review basis: three-agent audit (goal-integrity, constitutional coherence, curriculum content).
