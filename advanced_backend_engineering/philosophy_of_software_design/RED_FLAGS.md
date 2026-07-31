# Red Flag Field Guide 🚩

Ousterhout names these throughout the book. A flag counts as **captured** only when you find a real specimen in code you work with (cashflow repos count; toy code doesn't), and log it here: file/class, one line on why it qualifies, one line on what would fix it. No refactor required — spotting is the skill.

| # | Red flag | One-line meaning | Unlocked in | Captured |
|---|----------|------------------|-------------|----------|
| 1 | Shallow Module | Interface nearly as complex as the functionality it hides | S2 (ch 4) | |
| 2 | Information Leakage | One design decision knowable from multiple modules | S3 (ch 5) | |
| 3 | Temporal Decomposition | Structure mirrors the order things happen, not what knowledge belongs together | S3 (ch 5) | |
| 4 | Overexposure | Common-case callers forced to learn about rare cases | S3 (ch 5) | |
| 5 | Pass-Through Method | Method that does almost nothing but call a similar method | S5 (ch 7) | |
| 6 | Repetition | Same nontrivial snippet appearing again and again | S5 (ch 9) | |
| 7 | Special-General Mixture | General-purpose mechanism contaminated with a specific use case | S5 (ch 9) | |
| 8 | Conjoined Methods | Can't understand one method without reading another | S5 (ch 9) | |
| 9 | Comment Repeats Code | Comment adds nothing you can't see in the code beside it | S7 (ch 13) | |
| 10 | Implementation Documentation Contaminates Interface | Interface docs force readers to learn internals | S7 (ch 13) | |
| 11 | Vague Name | Name so generic it carries no information | S8 (ch 14) | |
| 12 | Hard to Pick Name | No precise name exists — usually a sign the design is muddled | S8 (ch 14) | |
| 13 | Hard to Describe | A complete comment for it would have to be long — design smell | S8 (ch 15) | |
| 14 | Nonobvious Code | Meaning or behavior can't be understood on a quick read | S9 (ch 18) | |

## Captures

_(log below — newest first)_
