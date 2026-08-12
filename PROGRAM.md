# PROGRAM.md — The "Less Is More" Constitution

**24-month learning program · Aug 2026 → Jul 2028 · adopted 2026-07-31 · v2 (single-path serial) 2026-08-11 · v3 (two-lane mode) 2026-08-12**

This file is the single source of truth for what gets studied, when, and why. Individual curricula keep their own PROGRESS.md lesson mechanics, but **lane position, scope, and sequencing are decided here**. When a curriculum's ambitions conflict with this file, this file wins.

## Goals this program serves

1. **By Jul 2027:** A-rating / top-performer recognition at Foodics (drivers: delivery velocity, visible initiative, domain expertise) + daily tools mastered permanently (no more editor/terminal/diff switching — ever).
2. **By Jul 2028:** Senior/Staff Backend/Product Engineer offer, remote ≥$8K/month or EU relocation. Interview ramp Oct 2027, applications Q1–Q2 2028.
3. **Standing:** health first — gym and family always outrank study.

## The budget (the whole point)

~4h/week × 48 productive weeks/year × 2 years = **384h capacity**, spent on two things:

| Row | Hours |
|---|---|
| Curriculum (both lanes + converged endgame; sums the lane tables below) | ~242–247 (+8 if terminal track 5's trigger fires) |
| Standing habits at the Law-4 floor (drill ~69 · reviews + story bank ~20 · rdb lab ~10 · spaced-rep ~10; the kata rides inside the drill, +0) | ~109 |
| **Total vs capacity** | **~351–356 / 384 → ~8% slack** |

The directory held ~870 topics ≈ 650–870h. This program **deliberately abandons ~600 of them**. That is the design, not a failure. Honest caveat, written down: at the *observed* rate of the program's first 12 days (~0.8 lessons/week), nothing lands anywhere — no structure fixes a rate problem. The ≥8/month floor, the weekly ping, and the monthly burn-rate review own that; two consecutive floor failures force a REDUCE (the named sacrificials) or the banked extension (Law 1). *(v3 also corrects v2's "320h planned" line — its own queue summed to ~259h.)*

## Why v2 (2026-08-11)

Enjoyment is streak fuel — a scheduling input, not a reward. A program that gets abandoned delivers zero. v2 therefore: (a) ran **one curriculum at a time** instead of three parallel slots, (b) replaced fixed session days with a **pull cadence** ("next lesson", any day, any chat), (c) let the queue start with the most-enjoyed curriculum, and (d) protected the dated career goals with **mechanical date guards** instead of judgment calls.

## Why v3 (2026-08-12)

The learner re-weighted the program: enjoyment and job-security obligations now count **equally** — v2 serialized the entire career chain behind the enjoyment head. v3 therefore: (a) splits the queue into **two fixed lanes** — Craft and Career — alternating pull-by-pull, so the goal-1 chain starts *now* instead of after terminal's exit gate; (b) merges `writing_for_pswe` into recon (recon's exercises were already the writing gym — this is where most of the goal-1 date improvement actually comes from); (c) cuts accounting's gate to the 11 units recon depends on; (d) adds **Law 9 (by-hand)** and points the weekly kata at php's generative design track, so "write PHP by hand" starts in week one rather than when php_mastery activates; (e) rewrites the mid guards as **progress guards** (counts, not "is active" checks that two lanes would disarm); and (f) freezes further amendments (Law 1) — three constitutions in 13 days is the old failure mode wearing better prose. Review basis: three-agent adversarial audit (goal arithmetic, constitutional coherence, execution realism). The 3-month end-date extension the learner authorized is **banked, not spent** (Law 1 records the option); all v2 dates stand.

---

## The Two Lanes

Two fixed-composition lanes, each an ordered queue with exactly **one active head**. Within a lane, the head runs to its exit gate, then the next item activates (Lane-head handoff). Tail order within a lane is freely reorderable at any monthly review; a **head** is displaced only by its exit gate, a date guard, or the stall fuse (Law 4). Abandoning a head mid-flight pays Law-5 park prices.

**Lane A — Craft** (enjoyment; the proven streak fuel)

| # | Curriculum | Exit gate | ~h |
|---|---|---|---|
| A1 | `terminal-based` tracks 1–4 — **ACTIVE** (A9 open) | Tracks 1–4 demonstrated + DF14 rebuild ritual (network-off, driven from the Mac host). Track 5 joins the gate if its trigger fires (PARK table) | 33–38 (+8) |
| A2 | `php_mastery` — internals 01–03 → laravel core 6 → performance | internals 01–03 + laravel {02,05,06,07,08,09} + performance 01–08 demonstrated (design track closes via the kata habit, not lessons) | ~13 |

**Lane B — Career** (guard-backed)

| # | Curriculum | Exit gate | ~h |
|---|---|---|---|
| B1 | `fintech_payments/accounting_for_spwe` — **ACTIVE at adoption** | foundations 1–8 + ledger_engineering 1–3 (**11 units**) + whiteboard merchant-wallet/payout double-entry cold. money_movement/lending_revenue = JIT pulls from recon (Law 6) | ~12 |
| B2 | `fintech_payments/reconciliation_in_fs_fintech` — artifact-first, **writing embedded** | ≥15/21 + **3 artifacts published internally** + 1 real cross-team RFC rubric-graded + one-pager ≤90 min (timeboxed exercises own this) | ~32 |
| B3 | `advanced_backend_engineering/philosophy_of_software_design` | 10/10 sessions + 14 red flags captured + game run vs 2 real cashflow PRs (S2 opener staged: the S1 residue re-ask) | ~14 |
| B4 | `advanced_backend_engineering/rdb_beyond` (reduced ~12) | Cold EXPLAIN/lock diagnosis on the 2.3M-row 3307 lab | 22 |
| B5 | Small packs: `abe/multi-tenancy_at_scale` ~5 · `fintech_payments/payments_security` ~5 · `abe/auth_n_z` ~6 · KSA rails 3 (`fintech_payments/fintech_for_spwe`) | Their unit counts; can narrate a mada/SARIE settlement flow | ~12 |

**Converged endgame (single-path; activates at convergence, below):**

| # | Item | Exit gate | ~h |
|---|---|---|---|
| E1 | `ledger-capstone` **v0** | v0 public on GitHub per README (CLI, tests, BLUF README) | ~14 |
| E2 | Interview prep: `njs_ts/problem_solving` → `interview_prep/system_design` → `interview_prep/storytelling` (+ breadth: `fintech_for_spwe` interview track; `njs_ts/algo_ds` on demand) | Their own recorded criteria: ≥8 patterns/~30–35 problems + spaced-rep green · 3 recorded 45-min designs + 6/6 probe recalibration · 8–10 staff-scope stories + 3 mocks scored + CV ready | ~60 |
| E3 | `ledger-capstone` **v1** | v1 public + 1 derived blog post (scope valve: shrinks to recon module if Dec '27 mocks are poor) | ~30 |

**Sacrificial set** (if late guards fire, these park): **B3–B5** — philosophy, rdb_beyond, the packs. `php_mastery` left the set in v3. rdb's 3307 lab survives any park as the standing incident-rehearsal instrument.

**Alternation (the equal-priority mechanic).**
- The next lesson comes from the lane **opposite the most recent pull receipt**: `git log -1 --grep='^\[\(craft\|career\)\]' --format=%s`. **No match → Lane A** (bootstrap and permanent fallback).
- Only pull receipts carry lane tags `[craft]` / `[career]`. Kata receipts are `[kata]`, work-sourced Law-3 demonstrations `[work]`, review/constitutional commits `[meta]` — all **invisible to alternation**. A commit touching both lanes is `[meta]`.
- **Soft default:** if the default lane's head needs prep that isn't done (PREP lines in track files) or is bigger than tonight's window, pull the other lane — alternation exists to make the 9pm decision, not to block it. Never 3 consecutive same-lane pulls except under guard suspension.
- Each lane names a **20-minute fallback** in its head's PROGRESS.md — Lane A: lowest unchecked shell Module A topic; Lane B: next accounting unit.
- **Monthly balance check** (the real enforcement): if either lane is >2:1 ahead on demonstrated lessons, the next two pulls go to the trailing lane. Mostly reachable after guard suspensions — that is its job.

**Convergence** (pre-declared): the lanes merge and single-path resumes for the endgame when **Lane A's queue empties (by exit gate or by park), or the 2027-09-01 capstone guard fires, or the 2027-10-15 interview guard fires — whichever is first.** Lane A's unfinished items are then **guard-paused, not parked**: Law-5 clocks suspend, no kill risk. Craft persists as habits (drill, kata — and by then the terminal is daily reality, not study).

**Feeders (never lane items):** `njs_ts/study-project` (~12 node/TS topics pulled just-in-time by the capstone) · `njs_ts/algo_ds` (only where a problem_solving pattern needs it) · `vuejs/vue_study` (work-ticket-driven, inside work time, cap ~8).

## Date guards

Mechanical: **date + condition (a count or a state) + action (named lane effect)**. Checked at every pull (protocol step 0) and every monthly review; a guard that fires acts at the next lesson boundary. **Guard-paused ≠ parked**: a paused/starved curriculum's Law-5 clock *and its lane's Law-4 fuse counter* suspend; it resumes when the guard clears.

**Dated amnesty rows** (Law 4; no guard may be placed inside them): Ramadan 1448 = **2027-02-08 → 2027-03-09** · Ramadan 1449 = **2028-01-28 → 2028-02-26**.

- **2027-01-05** — if `accounting_for_spwe` has <1 demonstrated unit → alternation suspends in Lane B's favour until accounting's exit gate. (Satisfied in practice at adoption; kept as backstop.)
- **2027-04-01** — if `reconciliation_in_fs_fintech` has **<8 units demonstrated** → alternation suspends in Lane B's favour **until 3 artifacts are published internally**.
- **2027-06-01** — if <3 recon artifacts are published internally → remaining recon lessons are selected artifact-first **and alternation suspends in Lane B's favour** until 3 are out.
- **2027-09-01** — if capstone v0 has not started → **convergence fires**; v0 preempts as a **time-boxed block**: v0 scope only, hard stop at v0-public or 8 weeks, whichever first. (Satisfies the README's Aug-2027 date lock; v0 must precede interview prep so applications have a public artifact.)
- **2027-10-15** — if interview prep is not yet active → **convergence fires** (if it hasn't already); interview prep preempts. Once problem_solving patterns 1–4 are demonstrated, **spaced-rep joins the standing habits** (a drill, not a lane block).
- **Accepted consequence, written down:** if the late guards fire, packs/philosophy/rdb park; the interview-prep exit package (recorded designs + mocks) re-dates to Mar 31 2028; applications compress to Q2 2028 — still inside goal 2, consuming the program's slack.

## Pull protocol (how every lesson runs, defined once here)

Trigger: saying **"next lesson"** (or naming a topic) in any chat, any day — there are no fixed study days.

0. **Check date guards** — a fired guard suspends alternation toward Lane B (or fires convergence) per its table row.
1. **Pick the lane:** opposite of the most recent `[craft]`/`[career]` receipt (no match → Lane A). Soft default applies: unmet PREP or too-big head → the other lane, and never 3 consecutive same-lane pulls outside a suspension.
2. Read that lane's head PROGRESS.md → take the next unchecked topic per its local default order (or the explicitly requested topic). Short on time → the lane's named 20-minute fallback.
3. One self-contained lesson, **10–60 min**: mental model → one realistic exercise → attempt → direct review → close-out block (`residue:` · `edges:` · `work hook:` — one line each, "none" legal; conventions in `AGENTS.md`). Law 9 governs how code is written.
4. `[x]` only on demonstrated understanding (Law 3). Failed/partial attempt stays `[ ]`/`[~]` and resumes next pull.
5. Update the track's progress file + session log, then **auto `git add` / `commit` / `push`** — no asking. **Every pull commits**: attempt + review notes are receipted whether or not the topic closes; demonstration controls only the `[x]`. The commit is the lesson's receipt (remote: `github.com/shahwan42/learning`), and its subject starts with the lane tag: `[craft] A9 disk forensics: exercise attempted + reviewed`.

A weekly throughput ping (`study-session-reminder` task) reports lessons demonstrated this month vs the ≥8 floor **with the per-lane split**; retire it after two consecutive floor-passing months.

## Lane-head handoff (runs once per exit gate passed, within its lane)

1. Record the exit in the finishing curriculum's PROGRESS.md + the Program log below.
2. Activate the next item in that lane; refresh its program note (delete its stale slot-era "Runs:" lines **at that moment, not before**).
3. Run the Law-1 SOMEDAY.md review.
4. Check date guards.

Lane activation by constitutional amendment (as at v3 adoption, for `accounting_for_spwe`) runs steps 2–4. Until refreshed at handoff, stale slot/phase/queue lines inside per-curriculum files are superseded by this file.

---

## Verdicts (all sub-curricula)

### KEEP — owns a lane position, runs to its own exit gate

| Curriculum | Lane | Notes |
|---|---|---|
| `terminal-based` tracks 1–4 + nvim drill | **A1 (active)** + daily drill habit | The only proven project. Devbox pattern (seat ⇄ devbox) defined in its PROGRESS.md. Track 5 parked on the devbox trigger; track 6 parked on work demand |
| `php_mastery` (reshaped, below) | **A2** — no longer sacrificial | The day-job stack; design track reclaimed as the kata's feed |
| `fintech_payments/accounting_for_spwe` | **B1 (active)** — reduced gate (11 units) | Canonical accounting source (recon + ledger both defer to it) |
| `fintech_payments/reconciliation_in_fs_fintech` | **B2** | Every exercise = rubric-graded RFC/ADR/runbook: domain + writing + publishable artifacts at once. Owns the writing gate since the v3 merge |
| `advanced_backend_engineering/philosophy_of_software_design` | **B3** (sacrificial) | Finite, book-based; red-flags game → PR-review vocabulary; game runs against real work PRs (work-time-compatible, Law 2) |
| `interview_prep/system_design` | **E2** | Keeps its own gates. Baseline: 1/6 probe |
| `njs_ts/problem_solving` | **E2** → spaced-rep habit | Keeps its own rules (4 patterns unlock interview-craft; spaced repetition) |
| `interview_prep` storytelling + mock table | **E2**; story bank fed monthly from the /eod log (habit) | |

### REDUCE — only the named scope survives; the rest is dead weight, never scheduled

| Curriculum | Surviving scope | Lane |
|---|---|---|
| `php_mastery` | internals 01–03 → laravel core 6 ({02, 05, 06, 07, 08, 09}; {01, 03, 04, 10, 11, 12} JIT) → performance 01–08. **Design track reclaimed from the philosophy fold** — it closes via the weekly kata (Law 2 habit), not scheduled lessons | **A2** |
| `fintech_payments/accounting_for_spwe` | Gate = 11 units (foundations + ledger_engineering 1–3); money_movement/lending_revenue survive only as JIT pulls from recon | **B1** |
| `abe/rdb_beyond` | ~12 topics: indexes/EXPLAIN, transactions/isolation, locking, replication. **Docker lab (port 3307) kept permanently as incident-rehearsal instrument** | B4 (sacrificial) |
| `abe/multi-tenancy_at_scale` | ~5 topics nearest the Foodics `business_id` model | B5 (sacrificial) |
| `fintech_payments/payments_security` | ~5 units: tokenization, PCI scope, webhook signing, 3DS, secrets | B5 (sacrificial) |
| `fintech_payments/fintech_for_spwe` | 3 KSA-rails units (mada/SARIE/SADAD); interview track later | B5 / inside E2 breadth |
| `abe/auth_n_z` | ~6 topics | B5 (sacrificial) |
| `njs_ts/study-project` | ~12 node-runtime/TS topics, pulled just-in-time by the capstone. CLI thread dead | feeder |
| `njs_ts/algo_ds` | ~6 structures, only where they unblock a problem_solving pattern | feeder |
| `vuejs/vue_study` | Work-ticket-driven only, cap ~8 topics. **Never a lane item** | habit, inside work time |

**Conditional:** `abe/product_eng_in_ai_era` — activates (~6 units, inserted as a short Lane B item) only if the Claude-API work initiative is approved, attached to that deliverable. Parks permanently if the initiative hasn't landed by Jul 2027.

### MERGE

- **→ `ledger-capstone/`** (the 2028 portfolio artifact): `ledger_ts` (build spine) + `fintech_payments/payments_orchestration` (multi-PSP module) + njs_ts feeders → **one TypeScript double-entry ledger for merchant wallets, payouts, POS recon**. Scope contract: `ledger-capstone/README.md`. Endgame E1 (v0) and E3 (v1); the 2027-09-01 guard enforces the README's Aug-2027 date lock; not one minute earlier.
- **→ `reconciliation_in_fs_fintech`** (v3): `writing_for_pswe` dissolves into recon — structure units become recon prerequisites, genres taught just-in-time per doc type, mechanics via the error log (relocated to recon's prerequisites) updated at every review, timing via timeboxed exercises. Rubric extended to 7 checks. Writing's exit gate (1 real cross-team RFC rubric-graded; one-pager ≤90 min) transfers to B2's gate. `writing_for_pswe/MERGED.md` records it. AI-assisted drafting stays parked.

### PARK — archived alive; re-entry = insertion into a lane at a monthly review after the named trigger fires (never a third concurrent lane)

| Curriculum | Re-entry trigger |
|---|---|
| `abe/study-project` | Post-Jul-2028 staff-depth era (its own charter: "no deadline") |
| `abe/computer_networks_fundamentals` | Gate-only: a unit runs only if it blocks a failed system_design gate during interview prep |
| `abe/event_sourcing` | A real work RFC proposes event sourcing |
| `go_dev` (incl. `go_concurrency`) | Deliberate stack re-bet after Jul 2028 |
| `terminal-based` track 5 (remote-ops) | **The devbox is in daily lesson use (DF9 demonstrated)** — insertion at the next monthly review; extends A1's exit gate to tracks 1–5 (+8h, pre-priced in the budget) |
| `terminal-based` track 6 (db-docs) | Work demands (heavy DB-TUI need) |

### KILLED — moved to `_archive/` (regenerable in an afternoon if ever truly needed)

`vim_nvim` (duplicate of terminal-based/neovim) · `njs_ts/design_patterns` (lowest-yield 20h; judgment comes from Ousterhout + capstone reviews) · `nodejs_from_scratch` (pre-system scratch).

---

## Laws

1. **Intake law.** No new curriculum, track, or topic list may be created unless equal-or-larger scope is parked/killed in the same commit. **The settlement currency is scope — topics, tracks, curricula. Never time: the program's end date is not a payment instrument.** The end date may be extended at most **once**, by ≤3 months (learner-authorized 2026-08-12, banked), only at a monthly review with a named external driver recorded in the Program log, never in the same commit as an intake, and routed around the Ramadan amnesty rows. Shiny new things get one line in `SOMEDAY.md`, reviewed only at lane-head transitions or SOMEDAY.md's fixed dates, whichever comes first. **Amendment freeze:** no further change to this file until **20 demonstrated lessons under v3 or three monthly reviews, whichever is later** — sole exceptions: a fired date guard, a Law-4 fuse outcome. The v2 and v3 redesigns were sanctioned meta-work; the only recurring meta-work is the monthly review.
2. **Two-Lane rule.** Exactly two active curricula — one head per fixed lane; zero *lessons* for anything else except date-guard preemption — no "just peeking". **Standing habits are exempt** (this list is exhaustive): daily 10-min nvim drill (one designated day per week is the **PHP kata**, Law 9) · vuejs work-ticket pulls · monthly rdb incident-lab rep (activates only once `rdb_beyond` builds the 3307 lab; until then, log incident candidates in the story bank) · monthly story-bank distillation · spaced-rep for completed lane items. Demonstrations produced by real work may be logged against any curriculum — Law 3 credit needs no lesson (tag `[work]`).
3. **Demonstrated-only counting.** A topic counts when its exercise is done and reviewed. Consumed-but-not-demonstrated = zero.
4. **Minimum-viable week + stall fuses (streak protection).** Drill on ≥4 days + **≥1 lesson in either lane pulled to its review step (pass or fail)** = green week. Pre-declared amnesty weeks (gym start +2 weeks, the dated Ramadan rows, travel, sick kids) are drill-only and green by decree. Missed hours are burned slack, never debt — no catch-up spirals. **Fuses:** program-wide — 4 consecutive 0-lesson non-amnesty weeks → a 30-min replan (resume / reorder a lane / park a head; next item in that lane activates). Per-lane — 6 consecutive weeks with no pull in that lane → the same replan scoped to that lane; a lane starved by a guard suspension accrues no fuse time, and a guard-backed lane's fuse outcome is "next two pulls are Lane B", never "park the head". **Throughput floor:** <8 demonstrated lessons in a non-amnesty month, two months running → the monthly review must record one of: lane reorder toward the nearest date guard / scope cut (REDUCE) / the banked extension (Law 1). Green weeks do not waive the floor. Kata receipts do not count toward the floor (Law 9).
5. **Park/kill triggers.** A lane head stalls → the Law-4 fuse decides (park = next item in that lane activates). An item demoted within its own lane at 2 consecutive monthly reviews past a date guard that wanted it → forced park decision. Parked ~6 months with no pull from work or interviews → killed (archived). Discovered duplicate → kill the non-canonical copy immediately. Guard-paused curricula accrue no clock (Law-5 or fuse).
6. **Canonical sources** (ends the 5×-idempotency duplication). Accounting/double-entry → `accounting_for_spwe`. Node/TS platform → `njs_ts/study-project`. InnoDB/indexes/isolation/replication → `rdb_beyond`. Idempotency/outbox/delivery semantics → recon + rdb_beyond. Nvim/terminal → `terminal-based`. **Writing craft/genres → recon** (rubric: `reconciliation_in_fs_fintech/prerequisites/notes/writing_rubric.md`). **PHP language/runtime → `php_mastery`** (an accounting exercise never turns into a PHP lesson). Everyone downstream runs **gate-first**.
7. **Cold-gate-first law (interview-prep accelerator).** Every interview-prep unit begins with its gate question attempted cold; the lesson opens only on failure. This is the payback for sequencing domain depth (Lane B) ahead of the endgame.
8. **Tiebreaks.** Energy for one thing → gym wins. Family displaces study with zero make-up. No lessons after 11pm. Study never borrows sleep.
9. **By-hand law.** Code that lands in your file is typed by your fingers, from your head or from a doc — never copied from a model's output. That is the whole law.
   - **Ban:** LLM-generated code reaching the artifact — paste, transcription, or dictation; any model, any channel.
   - **Allowed:** reference docs, prior notes, your own earlier code, LSP/editor completion, asking anything.
   - **The assistant during an attempt:** prose, pseudocode, a named function, a doc pointer — never runnable code in the exercise's language. (`array_reduce`'s signature: yes, that's the manual. "Here's the reduce": no.)
   - **The assistant after the verdict:** anything, including corrected code — reviews stay as rich as `philosophy_of_software_design/exercises/01-coupling-order-total.md`, the house standard. Adopting reviewed code = re-type it by hand; it gets a second look.
   - **Fixtures exempt:** setup blocks, seed data, test harnesses may be pasted; the law covers the code the exercise is *about*. (This clause absorbs `ledger-capstone/README.md`'s "scaffolding allowed" line — scaffolding is fixtures; the ledger's domain code is by-hand. On any residual conflict, this law wins.)
   - Where the exercise domain permits a language choice → **PHP**. Fixed-language exercises (TS capstone, SQL in rdb) keep by-hand, drop the PHP clause.
   - **Editor stays free until the Jan-2027 nvim decision** (PHPStorm always available; revert-counts-as-success); from that decision on, the chosen editor.
   - A by-hand attempt that would cross 60 min or 11pm (Law 8) is banked and resumed next pull; the topic stays `[~]`.
   - **Receipt:** one line in the exercise file — `by-hand: yes | no (reason)`. A lapse is logged, never voids the `[x]` — Law 9 governs method, Law 3 governs counting.
   - **The kata** (the drill's weekly PHP day): one small hand-written PHP artifact, task = the next unchecked topic in `php_mastery/design/progress.md`; single file + hand-written assertion, or `php -a`; receipt tag `[kata]`. **At most one kata per month may close a design topic under Law 3**; the rest count toward the habit streak only, never toward the ≥8/month floor.

## Monthly review ritual (30 min, standing calendar event, first weekend of each month)

Pull mode has nothing to displace — the review is its own event.

1. Count topics **demonstrated** from lesson receipts, per lane (heads + habit threads); update PROGRESS.md files.
2. Burn-rate vs each head's hour estimate, the date-guard horizon, and the ≥8/month throughput floor.
3. Lane check: each head's progress vs its exit gate · free tail reorder within lanes · park/kill triggers (Law 5) · date guards · **balance check** (>2:1 → next two pulls to the trailing lane). Guards are evaluated here too; one that fired mid-month already acted at the next lesson boundary. **Promotion moves tail items only** — a head is displaced only by exit gate, guard, or fuse.
4. Story-bank distillation (+20 min, same sitting): extract 1–2 STAR-shaped stories from the /eod daily log → `interview_prep/storytelling/`.

## Work-side actions (the A-rating is won at work; study only amplifies)

| When | Action |
|---|---|
| **Week 1 (Aug 2026)** | 30-min manager conversation: "What does an A look like on this team this cycle?" Write it down; derive 3 measurable proxies; re-touch monthly in 1:1s |
| Monthly | Story-bank distillation (in the review ritual) |
| H2 2026 | The initiative = the writing gate's anchor artifact: one cross-team RFC on a live cashflow pain. Also re-run the failed 60-second director pitch using the diagnosis already on file |
| Dec 2026 | Mid-cycle checkpoint with manager: "Am I tracking to A?" (7 months of runway to correct) |
| H1 2027 | Publish the best 3 recon artifacts (runbook/ADR/RFC) internally — **this row is what the 2027-04-01 and 2027-06-01 guards protect**. **Cheapest route, named:** three *real work documents* — a recon runbook, a match-key/tolerance ADR, the H2-2026 RFC — rubric-graded afterward (`[work]`, Law 2/3); the artifact case must not depend on study throughput alone. If the Claude-API pitch lands, that feature is the initiative (activates product_eng_in_ai_era) |
| Monthly (once the 3307 lab exists) | Reproduce one real production incident in the rdb_beyond lab — rehearsal + story generation |
| Ongoing | Volunteer for recon/payments incidents; answer domain questions in public channels — expertise must leave a trail. Every real RFC/ADR/postmortem gets rubric-graded afterward (counts as a recon-writing exercise) |
| Q4 2027 | CV/LinkedIn refresh + referral warm-up (not study hours) |

## Calendar checkpoints

Per-curriculum completion criteria live in the lane tables' exit-gate column. Only date-anchored commitments remain here; each maps to a guard or a work-side action. All v2 dates stand — the banked extension (Law 1) is the only instrument that may move the 2028 rows.

- **Dec 2026** — manager mid-cycle checkpoint (work-side table).
- **Jan 2027** — nvim daily-driver decision: 4 consecutive weeks of all real editing in nvim with no velocity complaint, **or** a documented revert — both outcomes close the editor question. Then the **tools contract freezes until Aug 2028** (editor/terminal/diff/multiplexer, one page, no revisiting). Habit-based; unaffected by lane order. The same checkpoint decides whether day-job work moves into the devbox (terminal-based PROGRESS.md).
- **Jul 2027** — rating review recorded + ≥3 recon artifacts published internally (guard-backed) + story bank ≥12 raw stories. Controllables: criteria confirmed, 2 legible initiatives shipped, evidenced go-to status. The rating is influenced, not controlled — a documented near-miss does not stall the program.
- **Jan 2028** — capstone v0 public on GitHub (re-dated only by the 2027-09-01 guard's 8-week box).
- **Feb 2028** — applications begin (≥25–30 targeted or 8–10 loops; ≥2 final rounds by Jul).
- **Jun 2028** — fallback decision: extend the search into H2 2028 vs leverage the A-rating internally and re-apply later — the assets (capstone, story bank, interview skill, recon depth) persist either way.

## Risks → mitigations

| Risk | Mitigation |
|---|---|
| Gym-start energy dip | Amnesty weeks (start +2); gym-wins tiebreak; never borrow sleep |
| Editor switch during the delivery-critical A-year | Additive 10-min ramp; PHPStorm always available; Jan '27 decision point; revert-counts-as-success; hard freeze after |
| Curriculum-collecting relapse (the proven failure mode: 21 curricula in 48h, then nothing) | Intake law (scope-only settlement + amendment freeze); SOMEDAY.md valve; demonstrated-count makes collecting visible and worthless |
| Interview hours underestimated | Domain lane items pre-pay system_design data/async (~10h gate harvest); the final months carry the program's slack; valve: if Dec '27 mocks are poor, capstone v1 shrinks to the recon module (~15h freed to prep) |
| More than one concurrent curriculum (the old >3-tracks failure) | Structural: exactly two lanes of **fixed** composition; alternation read from the last receipt tag (no per-pull choice); per-lane fuse + program-wide fuse; pre-declared convergence; amendment freeze |
| **Two lanes halve each chain's rate (v3's own risk)** | Goal-1 chain is Lane B #1–2 with a reduced accounting gate + the 2027-01/04/06 progress guards + the work-sourced artifact route + throughput floor — mechanical, not judgment |
| **Slow-bleed: happy-path pulls while the calendar drains** | ≥8/month floor + weekly per-lane ping + head inventories as the review's denominator |
| **Back-half pile-up (guards firing late)** | Capstone v0 time-boxed before interview prep; B3–B5 named sacrificial; re-date path written down |
| Burnout / family seasons | 48-week arithmetic excludes 4 wk/yr; MVW; slack-not-debt rule; dated Ramadan amnesty rows |
| A-rating doesn't land despite execution | Exit criteria are controllables; the Year-2 path is deliberately independent of the rating outcome |

## Directory map

- `PROGRAM.md` — this constitution · `SOMEDAY.md` — intake pressure valve · `_archive/` — killed curricula (moved, never deleted)
- `ledger-capstone/README.md` — capstone scope contract (dormant until the 2027-09-01 guard or endgame arrival)
- Parked projects carry a `PARKED.md` with their re-entry trigger; merged projects a `MERGED.md`; reduced projects carry a program note at the end of their PROGRESS.md (refreshed at lane-head handoff; stale slot/phase/queue lines are superseded by this file until then)
- Everything else runs by its own PROGRESS.md mechanics **within the lane order assigned here**

## Program log

- **2026-07-31** — v1 adopted: Less-Is-More program, 3 parallel slots (Weekday-A/B, Weekend), 4 phases (P1–P4) with per-phase hour tables, Mon/Wed/Fri reminders. Superseded by v2; see git history for the full v1 text.
- **2026-08-11** — **v2 adopted: single-path serial mode.** One active curriculum (the Queue), pull cadence ("next lesson", any day, 10–60 min, auto-commit receipt), enjoyment as a scheduling input, mechanical date guards protecting both goals. Slot/phase machinery deleted. First application: `terminal-based` Track 4 redesigned as "Reproducible environments" (Linux-first: multipass Ubuntu VM + devcontainers, chezmoi spine) + shell-search A9 (disk-space forensics, built-ins only) added; A9 is the recommended first pull. Review basis: three-agent audit (goal-integrity, constitutional coherence, curriculum content).
- **2026-08-12** — **v3 adopted: two-lane mode.** Craft and Career lanes with tag-driven alternation (equal priority by learner decision); writing merged into recon; accounting gate cut to 11 units; Law 9 (by-hand) + weekly PHP kata aimed at the reclaimed design track; php_mastery de-sacrificed to A2; guards rewritten as progress guards + Ramadan amnesty rows; devbox pattern defined in terminal-based (seat ⇄ devbox; track 5 re-triggered on DF9); amendment freeze until 20 demonstrated v3 lessons or 3 monthly reviews. The learner-authorized ≤3-month extension is **banked, unspent**. Review basis: three-agent adversarial audit (goal arithmetic, constitutional coherence, execution realism). Next pulls: `[craft]` A9 → `[career]` accounting-01 → `[craft]` N1, target ≤7 days.
- **2026-08-12 (later)** — **Flow layer added + owner-authorized same-day erratum.** `AGENTS.md` operating manual (agent-portable flow: lesson loop, close-out block, resume rules, retention conventions) + `CLAUDE.md` shim; erratum to this file, authorized before any v3 lesson ran: Law 9's two role bullets reworded assistant-neutral, protocol step 3 gains the close-out clause. **The Law-1 freeze applies from this commit forward.** Review basis: three-agent flow audit (retention/practice · interconnection/application/enjoyment · portability/structure/calm).
