# Exercise 01 — Recon before launch (exec memo)

**Unit:** foundations/1 — independent records & why they disagree
**Doc type:** cross-functional memo (exec audience) · **Hard limit: 300 words**

## Scenario
You're the senior backend engineer at a fintech launching **merchant payouts** in 6 weeks: card-sale proceeds transferred by bank rail to ~2,000 merchants, twice a week. In launch planning the CTO says:

> "The ledger is double-entry and heavily tested — reconciliation is a post-launch nicety. Cut it from launch scope."

## Task
Write the memo to the CTO. Take a position (agree / disagree / partially) and make a concrete recommendation. If you argue for any recon at launch, specify the **minimum**: which two records get compared, how often, and what the comparison checks.

## Craft constraints (reviewed as strictly as the content)
- Recommendation fully stated in the **first two sentences**.
- **Skim test:** headings/bold alone must carry the argument.
- **≤300 words.** The cut is part of the work.
- Audience: technical exec, 2-minute read — cares about launch risk and cost, not implementation detail.

## JIT skeleton — the exec memo (BLUF: bottom line up front)
1. **Ask/recommendation** — 2 sentences, max.
2. **Why** — at most 3 reasons, strongest first, each 1–2 sentences with concrete stakes.
3. **Cost of doing it** — what it takes (time, people, scope).
4. **Risk of not doing it** — what happens and when we'd find out.

Skip background the reader already has. No throat-clearing ("As you know…", "In today's fast-moving…").

## Review
Two verdicts: **domain** (is the risk analysis right? is the minimal recon well-chosen?) and **craft** (against `prerequisites/notes/writing_rubric.md`).

Put your attempt below the line, or paste it in chat.

---
