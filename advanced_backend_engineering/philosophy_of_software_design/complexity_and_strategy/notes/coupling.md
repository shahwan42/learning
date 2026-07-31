# Coupling as change-cost

## Mental model

> Coupling is not "A uses B". Coupling is **what you must know about B to change A correctly** — and therefore what must change *together*.

If two things always change together, they are coupled, whether or not there's an `import` between them. If two things import each other but never change together, the coupling is cheap. Diffs are the ground truth, not the dependency graph.

## The two axes

Coupling is never zero. Judge it on two axes and you get an actionable answer.

**Degree** — how much you must know. Worst to best:

| Degree | Example | Why it's expensive |
|---|---|---|
| Shared mutable state | two services mutating the same row/static/singleton | change is invisible in signatures; order-dependent bugs |
| Order / timing | "call `reserveStock()` before `charge()`" | nothing enforces it; breaks silently on refactor |
| Meaning / convention | `status = 2` means shipped; `'type' => 'pct'` | knowledge lives in humans; grep is your only tool |
| Position | `calc($base, $tax, $discount)` — arg order, array shape | swap two args, still compiles |
| Type | takes a `Money`, an interface | compiler/PHPStan catches breakage |
| Name | you renamed a method, callers update | mechanical, tool-assisted |

**Distance** — how far apart in the system: same function → same class → same module → different module → different service → different team/repo.

**The rule:** `pain ≈ degree × distance`.

Order coupling between two lines of the same private method is fine — nobody will ever see them apart. Meaning coupling between a controller in your app and a consumer in the ERP system is a permanent tax. So: **as distance grows, degree must drop.** That single sentence resolves most "should I extract this?" arguments.

## Direction matters as much as amount

Dependencies should point **toward what changes less often**.

- Stable: business rules, value objects (`Money`, `OrderStatus`), invariants.
- Volatile: HTTP request shape, DB schema, vendor SDKs, notification channels, report formats.

If your pricing rules import the Stripe SDK, a Stripe upgrade is a pricing-rules risk. If Stripe's adapter imports your pricing rules, it isn't. Same total coupling, arrow reversed, completely different change cost.

## Laravel-specific traps

- **Eloquent models become the coupling supernode.** Every layer talks to `Order`, so every layer knows the column names. A schema rename becomes a codebase-wide change. The model is your DB schema wearing a trench coat.
- **Facades hide coupling from signatures.** `Mail::to(...)` inside a service means the dependency is invisible to readers, to PHPStan, and to your tests. Constructor-injected dependencies are *the same amount* of coupling, but declared.
- **Events are not automatic decoupling.** Firing `OrderPlaced` instead of calling three services replaces explicit call coupling with *order/timing + meaning* coupling that no tool can see. You've moved the coupling somewhere harder to debug. Events are right when the publisher genuinely must not care who listens; wrong when you're hiding a required step.
- **Magic ints/strings for status** are meaning coupling by default. PHP 8.1 enums drop it to type coupling for free.

## How to measure it (real tooling)

Which files actually change together — the empirical coupling map:

```bash
git log --format='%h' --name-only --no-merges -- '*.php' | awk 'NF' | sort | uniq -c | sort -rn | head -30
```

Better: co-change pairs. If `OrderController.php` and `InvoiceService.php` appear in 80% of each other's commits, they are one module pretending to be two.

- **PHPStan / Larastan at level 6+** turns a chunk of meaning-and-position coupling into type coupling that fails in CI.
- **Deptrac** enforces "this layer may not depend on that layer" as a build step. This is how dependency direction stops being a code-review opinion.
- **Symptom to watch in review:** a one-line requirement producing a six-file diff. That's *shotgun surgery* — the name for coupling you can feel.

## Common failure

Reducing coupling by adding an interface *with one implementation that mirrors it exactly*. You added a file and an indirection, and changed nothing about what must change together — the interface changes whenever the class does. Coupling reduction is real only when it changes the answer to "what else must I edit?"

## Vocabulary for reviews

- **Shotgun surgery** — one change, many files.
- **Connascence** — the academic name for degree-of-coupling; useful because it gives you precise words (*connascence of meaning*, *of timing*) instead of "tightly coupled".
- **Stable dependencies principle** — depend in the direction of stability.
