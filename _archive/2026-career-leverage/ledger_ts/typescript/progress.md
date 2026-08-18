# Track: TypeScript

Starts after the JS ledger works. The migration is the lesson: each type we add should
delete a test or a runtime check by making the bad state impossible.

Node 26 runs `.ts` files directly (type stripping), so there is no build step to fight
while learning. `tsc` enters later as the type *checker*, not the compiler.

## Curriculum

| # | Topic | Invariant it buys us | Status |
|---|---|---|---|
| 1 | Why TS, and `tsc --noEmit` as a checker | Compile-time contracts without a build pipeline | pending |
| 2 | Structural vs nominal typing (unlike PHP) | Explains why `Money` and `number` are the same type by default | pending |
| 3 | `strict` mode, `null`/`undefined` handling | Kills the "missing account" class of bug | pending |
| 4 | Branded types for `AccountId`, `Money`, `Currency` | Can't pass cents where an ID goes, can't add SAR to USD | pending |
| 5 | Discriminated unions for entry/event kinds | Exhaustive handling of sale/refund/payout/chargeback | pending |
| 6 | Generics and `Result<T, E>` vs throwing | Makes failure a value the caller must handle | pending |
| 7 | Runtime validation at the boundary (zod) vs static types | Types don't survive JSON; the edge needs a parser | pending |
| 8 | Making an unbalanced entry unconstructable | Moves the core invariant from a test into the type system | pending |
| 9 | Tooling: ESLint, source maps, editor ergonomics | pending |

## Completed

_(none yet)_
