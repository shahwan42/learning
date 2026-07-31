# Session 1 — The enemy: complexity & the strategic mindset

**Book:** ch. 1–3 · **Read in full:** §2.2 (symptoms), §2.3 (causes), §3.1–3.2 (tactical vs strategic)

## The one-sentence version

Complexity is anything about the structure of a system that makes it hard to understand or change — and it arrives in tiny, individually-reasonable increments, so the only defense is a standing habit of paying it down, not a heroic cleanup later.

## The three symptoms (diagnosis vocabulary)

How complexity *feels* when you hit it. Ranked worst-last:

1. **Change amplification** — a simple requirement touches many places. Annoying, but at least you know where to edit.
2. **Cognitive load** — how much you must know (and hold in your head) to change something safely. Note: *fewer lines ≠ simpler*. A clever 3-line framework call that requires an afternoon of reading is more complex than 20 boring explicit lines.
3. **Unknown unknowns** — you can't even tell what needs to change or what you'd need to know. The worst, because the failure only shows up as a bug after you ship. Good design's highest goal is the opposite property: **obviousness** — a quick guess about how to change things is *correct with confidence*.

## The two causes

Every symptom traces back to:

- **Dependencies** — code that can't be understood or changed in isolation. Can't be eliminated (every API you write creates them); the goal is *fewer, simpler, more obvious* ones.
- **Obscurity** — important information that isn't visible: vague names, missing units, a convention that lives only in someone's head. Needing lots of documentation is itself a red flag that the design is obscure.

Bridge to the earlier coupling note ([coupling.md](coupling.md)): *degree × distance* is a finer-grained ruler for exactly Ousterhout's "dependencies" cause, and "meaning coupling" (status = 2) is his "obscurity." Same enemy, two vocabularies.

## Complexity is incremental — and weighted by traffic

- No single kludge sinks a system; the accumulation of hundreds does. Which is why "it's just this once" is the lie that builds legacy code.
- Overall complexity ≈ Σ (complexity of each part × how often developers touch it). A gnarly module nobody ever opens is nearly free; mild mess on a hot path is expensive. This justifies *isolating* complexity when you can't remove it.
- Complexity is judged by the **reader**, not the writer. If reviewers say it's complex, it's complex — arguing back is data loss.

## Tactical vs strategic (ch. 3)

- **Tactical:** goal = working code, fastest path, accept small kludges. Each choice is locally rational; collectively they're how spaghetti happens. Mascot: the *tactical tornado* — prolific, management-visible, leaves a wake others silently clean up.
- **Strategic:** working code isn't enough; the real deliverable is a structure that makes the *next* change easy. Requires an investment mindset: ~10–20% of dev time on proactive design (try two designs, pick the cleaner) and reactive repair (fix the design flaw you just tripped on, don't patch around it).
- Payback is not distant: Ousterhout's estimate is 6–18 months to break even, largely because your own memory of the code evaporates in months.
- Crunch is the trap: "cleanup after the deadline" becomes never, because there's always another deadline.

## What this session does NOT claim

Strategic ≠ big design up front. The ideal design *emerges*; the investment is continuous and small, not a waterfall phase. Over-investment is a real failure mode too (the book returns to this in ch. 21, "Decide What Matters").

## Exercise

[exercises/01-coupling-order-total.md](../../exercises/01-coupling-order-total.md) — issued pre-book, kept verbatim: task 1 is a change-amplification measurement, task 2 is dependency/obscurity diagnosis, task 3 is one strategic (not heroic) investment.
