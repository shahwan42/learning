# Exercise A1 — Predict and explain

No setup needed. For each scenario: state what's happening **mechanically**, using the mental model (tokens / context-is-everything / weights-vs-context / plausibility objective / sampling). One or two sentences each — in your own words.

1. Mid-session, you edit `OrderService.php` in your editor while a coding agent is working on the same repo. Its next diff clobbers your edit. Which part of the mental model explains this, and what behavior should a well-built agent have to compensate?

2. A model confidently cites `Str::maskEmail()` in Laravel. It doesn't exist. Why did it produce something so plausible instead of saying "I don't know"? What property of your question made this failure more likely?

3. "How many r's are in strawberry?" trips up some models. Why is this hard for a system that can write a working regex engine?

4. A 2-hour agent session starts strong and gets progressively dumber — repeating mistakes, forgetting decisions made an hour ago. Mechanically, what's happening? Name two fixes.

5. You run the same prompt twice and get a different function name each time. A teammate says "that proves it's broken." Give the correct interpretation, and one practical consequence for how you'd test AI-backed code.
