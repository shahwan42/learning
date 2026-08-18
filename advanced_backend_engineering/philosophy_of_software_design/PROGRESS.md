# A Philosophy of Software Design — Progress

> **Career-leverage status (2026-08-18): REDUCE.** Use only its coupling, complexity, and module-boundary ideas while reviewing real code or writing decisions; do not complete this as a standalone book track.

**Spine:** Ousterhout, *A Philosophy of Software Design*, 2nd ed. (the epub in iBooks). This course walks the whole book in 10 concept-cluster sessions; the freeform software-design tracks it replaced live in [post_book/](post_book/README.md) and resume after the book.

**Learner profile:** Backend engineer, PHP/Laravel. Ships features confidently; design decisions currently intuitive rather than articulated. Target: practical working fluency, not specialist mastery.

**Format:** one session = one concept cluster. I teach the mental model in my own words, point to the book sections worth reading in full, issue one realistic PHP/Laravel exercise, and review your attempt. Progress updates only after demonstrated understanding.

**The game:** the book names 14 red flags. Each is *captured* when you find a real specimen in code you actually work with and log it in [RED_FLAGS.md](RED_FLAGS.md). Finish the book with all 14 captured.

---

## Session map

| # | Session | Book chapters | Track | Status |
|---|---------|--------------|-------|--------|
| 1 | The enemy: complexity & the strategic mindset | 1–3 | complexity_and_strategy | ✅ done 2026-07-31 (residue → S2 opener) |
| 2 | Modules should be deep | 4 | deep_modules | |
| 3 | Information hiding (and leakage) | 5 | deep_modules | |
| 4 | Somewhat general-purpose + pull complexity downwards | 6, 8 | deep_modules | |
| 5 | Different layer, different abstraction + together or apart? | 7, 9 | deep_modules | |
| 6 | Define errors out of existence + design it twice | 10, 11 | deep_modules | |
| 7 | Comments: the four excuses + what to actually write | 12, 13 | comments_and_names | |
| 8 | Choosing names + comments-first as a design tool | 14, 15 | comments_and_names | |
| 9 | Modifying code, consistency, obviousness | 16–18 | keeping_it_designed | |
| 10 | Perspective: trends, performance, decide what matters | 19–22 | keeping_it_designed | |

## Current position

- **Session:** 2 — Modules should be deep (ch. 4) — next
- **Opener gate (cold, 2 min):** the S1 residue — given a proposed fix, state degree-from → degree-to and the distance where the fixed coupling lives. Then S2 teaching begins; red flag #1 (Shallow Module) unlocks.
- **Pre-reading for S2:** book ch. 4 in full (it's short).
- **Red flags captured:** 0 / 14

## Session log

| Date | Session | Outcome |
|------|---------|---------|
| 2026-07-25 | (pre-book) | Profile captured; coupling-as-change-cost taught; exercise 01 issued |
| 2026-07-30 | Course rebuilt around the book | 10-session map, red-flag game; session 1 re-taught through the book's lens; exercise 01 still the gate |
| 2026-07-31 | 1 — attempt 1 | First session under the Less-Is-More program. Write path solid (vat-snapshot instinct ★); consumer-side blast radius missed (ERP/API/email — `total` changed meaning); task 3 picked the event = coupling.md's own decoupling trap. Follow-up issued, gates S1 |
| 2026-07-31 | 1 — closed ✅ | Follow-up: readers/meaning-shift demonstrated; degree ranking demonstrated; distance-reach calculus still soft after 3 asks → taught directly (additive payload breakdown; rename-at-distance = breaking change), residue re-asked cold at S2 opener. VAT-on-discounted-subtotal precision note logged |
