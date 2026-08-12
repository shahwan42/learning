# Design — modern PHP, types, testing, packages

Why this track: specialist PHP is written against the type system plus static analysis, not just the runtime.

**Kata-fed (v3, 2026-08-12):** this is the generative track — it closes via the weekly hand-written PHP kata (Law 9; mechanics in `../PROGRESS.md`), not scheduled lessons. The kata's task is always the next unchecked topic below; katas land in `../exercises/katas/`.

| # | Topic | Status |
|---|---|---|
| 01 | The type system as enforced — `strict_types`, coercion rules, runtime (not compile-time) checks, variance | ○ |
| 02 | Modern class design — promoted constructors, `readonly`, enums, first-class callables, named args | ○ |
| 03 | Value objects & immutability — withers, `DateTimeImmutable`, money/IDs | ○ |
| 04 | Traits vs interfaces vs composition — trait pitfalls, when composition wins | ○ |
| 05 | Generics via static analysis — `@template`, typed collections | ○ |
| 06 | PHPStan as a design tool — levels, baselines, custom rules, CI | ○ |
| 07 | Testing discipline — PHPUnit/Pest, test doubles, mutation testing (Infection) | ○ |
| 08 | Exception design — hierarchies, domain exceptions, retryable vs terminal | ○ |
| 09 | Attributes & reflection — how frameworks use them; build an attribute-driven behavior | ○ |
| 10 | PSRs & package design — the ones that matter (3, 4, 7/15/18, 11), semver, constraints | ○ |
| 11 | Security-critical idioms — injection, `unserialize`/phar, password hashing, secrets | ○ |

Notes: [notes/](notes/)
