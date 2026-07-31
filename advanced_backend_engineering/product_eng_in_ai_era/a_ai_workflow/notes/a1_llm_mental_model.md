# A1 — The LLM mental model

**One sentence:** an LLM is a stateless function — tokens in → probability distribution over the next token — sampled repeatedly until a stop condition. Five consequences of that sentence explain ~90% of daily behavior.

## 1. Tokens, not text
Input/output is chopped into tokens (~4 chars, ~0.75 English words each). You pay per token in both directions; context limits are token counts. The model never sees characters — so sub-token tasks (letter counting, exact arithmetic on long digit strings) are structurally hard even for models that write working compilers.

## 2. The context window is the model's entire world
No memory between calls, no background state, no filesystem. A "conversation" is an illusion the client maintains by re-sending the full transcript every turn. Consequences:
- "It forgot X" always means "X wasn't in the tokens sent on this call."
- Long agent sessions degrade as the window fills with stale noise.
- Every context feature (CLAUDE.md, compaction, RAG, file reads) is just deciding **which tokens to send**.

## 3. Two kinds of knowledge: weights vs context
- **Weights** = lossy compression of training data, frozen at a cutoff date.
- **Context** = exact, current, and treated as authoritative by the model.

This is why pasting the real error message beats describing it, why RAG exists, and why an agent that reads your files outperforms a chat window you paste snippets into. Moving facts from weights (unreliable) to context (reliable) is the core move behind most AI engineering.

## 4. Hallucination is structural, not a bug
The training objective is *plausible next token*; truth is only a correlate of plausible. Where training data is thin, the model interpolates confidently — producing plausible-shaped falsehoods like specific-looking API names. Calibrate trust:
- Trust **falls** with specificity: exact signatures, version numbers, config keys → verify.
- Trust **rises** with verifiability: code you can run/test is cheap to trust-but-verify.

## 5. Output is sampled
The distribution is (mostly) deterministic; the pick from it is random (temperature). Same input → different outputs across runs. "It worked once" is one draw from a distribution — this seeds the whole evals track (C).

## Why this is the durable layer
Models, tools, and vendors churn monthly. The stateless-token-predictor shape hasn't changed since GPT-3, and it explains agents, RAG, prompt caching, context engineering, and evals alike. When a new tool appears, ask: *what tokens does it put in the window, and what does it do with the sampled output?*

**Exercise:** `exercises/a1_predictions.md`
