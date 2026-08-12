# Writing rubric — every exercise is reviewed against this

Two verdicts per review: **domain** (is it correct?) and **craft** (is it well written?). Both must pass to mark a unit done.

Craft checks, mapped to the assessed gaps:

1. **Lead with the conclusion.** Recommendation/finding fully stated in the first two sentences. A reader who stops after paragraph one still knows what you want. *(gap: buried conclusions)*
2. **Skim test.** Headings + bolded phrases alone tell the whole story, in order. One idea per paragraph, stated in its first sentence. *(gap: structure & flow)*
3. **Length budget.** Every exercise has a hard limit. Hit it by cutting content, not by compressing into dense prose. If a sentence doesn't change what the reader does or believes, delete it. *(gap: over-long)*
4. **Audience header.** First line under the title: who this is for, what they already know, what they should do after reading. The content must honor it — no implementation detail in exec memos, no hand-waving in RFCs. *(gap: audience switching)*
5. **Concrete beats abstract.** Numbers, named systems, examples ("payouts short 2% ≈ 40k SAR/week") over generalities ("discrepancies may occur").
6. **Objections pre-empted.** The top 3 objections the named audience will raise are anticipated and answered in the text (steelman, don't strawman). *(added 2026-08-12 — carried from writing_for_pswe structure/6 at the merge)*
7. **Sentence mechanics.** Concision, one idea per sentence, given→new information flow, consistent register and term capitalization. Every review appends/increments `error-log.md` (this directory) — frequency = priority; struck-through = fixed habit. *(added 2026-08-12 — "wording isn't smooth" was half the assessed gap; the error log is its instrument)*

Doc-type skeletons (memo, ADR, design doc, RFC, runbook, postmortem, PRD) are taught just-in-time before each type's first exercise and land in this directory.
