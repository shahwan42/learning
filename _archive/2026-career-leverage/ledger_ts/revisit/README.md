# Revisit — parked topics

Deliberately deferred. Each line says why it matters and roughly when it stops being
optional, so nothing here is forgotten rather than merely postponed.

## Accounting

- **Multi-currency and FX gain/loss accounts.** Matters the moment the platform operates in
  two currencies: an entry can't mix currencies, so you need per-currency accounts plus a
  revaluation account. Park until the single-currency ledger is correct.
- **Tax (VAT) as a separate liability.** Real invoices split net/tax; the tax is owed to the
  government, not earned. Needed before the subscription-billing track is realistic.
- **Depreciation, amortisation, equity structure.** Real accounting, irrelevant to a
  payments ledger. Read-only curiosity.
- **Period close and locked accounting periods.** Becomes urgent once finance reports off
  your data and you can no longer accept backdated entries.

## Node

- **BigInt for money.** `Number.MAX_SAFE_INTEGER` is ~9e15 minor units — fine until interest
  or micro-fee arithmetic accumulates. Revisit when we do fee splits with rounding.
- **Streams and backpressure.** Needed for large statement/report exports, not before.
- **Worker threads / clustering.** Only when CPU-bound reporting shows up.
- **Native addons, ESM/CJS interop hell.** Encountered when a dependency misbehaves; learn
  it reactively.

## Systems

- **Event sourcing vs. an accounting ledger.** They rhyme but differ; comparison is only
  useful once the ledger exists.
- **Outbox pattern / exactly-once webhook processing.** Needed the first time an external
  PSP webhook can arrive twice.
- **Sharding and partitioning the entries table.** A scale problem; note it and move on.
- **Double-entry with hash chaining / tamper evidence.** Interesting, occasionally required
  by regulators.

## TypeScript

- **Advanced type-level programming** (conditional types, mapped types, template literal
  types). Fun, and mostly unnecessary for a ledger. Learn the 20% that models money safely.
- **Decorators and DI containers.** The Laravel reflex. Resist until there's a real reason.
