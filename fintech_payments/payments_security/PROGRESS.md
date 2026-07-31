# Securing Online Payments & Money Movements — Progress

## Learner profile (assessed 2026-07-26)
- SWE; self-assessed hands-on in all four probe areas (PSP integration, card data/PCI, 3DS/OTP, crypto plumbing) — **depth unverified until Exercise 00 is reviewed**
- Goal: **practical development** — build, review, and debug payment flows securely; not specialist (QSA/pentest) mastery
- Context: **platform-wide** — money in (checkout/POS), held balances, money out (payouts)
- Exercise stack: **Node/TypeScript**
- Sibling project: `../fintech_for_spwe/` (payment rails + interview prep). Rails mechanics live there; securing them lives here. Cross-reference, never duplicate.
- Style: concise mental models, why > how > what, one exercise per topic, no filler, correct mistakes plainly

## Tracks (priority order — adjustable, nothing dropped)
| # | Track | Status | File |
|---|-------|--------|------|
| 1 | Integration security (webhooks, APIs, secrets) | **in progress** | integration_security/progress.md |
| 2 | Checkout & card security (PCI, tokens, 3DS) | not started | checkout_card_security/progress.md |
| 3 | Money-movement integrity (payouts, balances, recon) | not started | money_movement/progress.md |
| 4 | Fraud & abuse (defender side) | not started | fraud_abuse/progress.md |

Fast-track rule: demonstrate a topic's competency check cold and it's marked done — no lesson.

## Current position
- Track: integration_security · calibration
- Waiting on: learner's attempt at `exercises/00_webhook_receiver_review.md`

## Protocol (every session)
1. Read this file + the active track's `progress.md`. Summarize where we stopped; offer: continue / switch track / revisit something.
2. Teaching loop: one concept (mental model, why + how, practical consequences) → prerequisites just-in-time → one small realistic exercise → **wait for attempt** → direct review → update progress **only after demonstrated understanding**.
3. Notes go to `<track>/notes/` (or `prerequisites/notes/`) **after** a topic is demonstrated, not before. Short: mental models, APIs, pitfalls, debugging, observability — no textbook dumps.
4. Interesting tangents get parked in `revisit/README.md` with a one-line why.
5. Every topic ties to real-world tooling, common failures, and how you'd detect them in production.

## Session log
- 2026-07-26 — Assessment done (profile above). Scaffold + curriculum created. Assigned Exercise 00 (calibration: security review of a webhook receiver). Depth map pending review.

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** ~5 units: tokenization, PCI-DSS scope, webhook signing, 3DS, secrets handling.
- **Runs:** P2 Weekday-B slot, late (~weeks 15–24, Apr–Jul 2027).
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
