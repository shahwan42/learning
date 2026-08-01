# Exercise 01 — Coupling: read the change cost

**Session:** 1 — complexity & strategy (book ch. 1–3) · **Topic:** coupling as change-cost / change amplification · **Status:** ✅ S1 closed 2026-07-31 — residue (degree×distance calculus on a proposed fix) re-asked cold at S2 opener

Realistic-ugly Laravel controller. Assume it works and is in production.

```php
class OrderController
{
    public function store(Request $request)
    {
        $order = Order::create([
            'customer_id' => $request->customer_id,
            'email'       => $request->email,
            'status'      => 1,
        ]);

        foreach ($request->items as $item) {
            $order->items()->create([
                'sku'   => $item['sku'],
                'price' => $item['price'],
                'qty'   => $item['qty'],
            ]);
        }

        $total = 0;
        foreach ($order->items as $item) {
            $total += $item->price * $item->qty;
        }

        if ($request->coupon) {
            $coupon = Coupon::where('code', $request->coupon)->first();
            $total -= $coupon->amount;
        }

        $order->total  = $total;
        $order->status = 2;
        $order->save();

        Mail::to($order->email)->send(new OrderPlaced($order));

        Http::post('https://erp.internal/orders', [
            'id'     => $order->id,
            'total'  => $total,
            'status' => 2,
        ]);

        return response()->json(['id' => $order->id, 'total' => $total]);
    }
}
```

## Your tasks

**1.** A requirement lands: *coupons can now be percentage-based, and 15% VAT must be applied to the discounted subtotal.* List every place that must change — including places outside this file. Don't write the code; write the list.

**2.** Pick the two worst coupling problems here. For each, name its **degree** and its **distance** (from the note's table), and say what breaks in practice.

**3.** Make **exactly one** change that reduces the worst degree × distance. Sketch the code — a few lines is enough. Do not refactor the whole controller; I want to see you choose.

## Attempt

_(write below)_

1. percentage-based coupons + 15% VAT:
   - new migration: extend coupons table to have type: fixed or percentage
   - new migration: orders table: add vat_percentage (should be saved with order creation in case it changes in the future), and vat_value
   - project-wide config to contain the vat_percentage
   - OrderController::store: `$request->coupon`: will contain another inside if to check for coupon type and then adjust the total accordingly
   - OrderController::store: Apply vat (15%) before saving the order's total & record the absolute value of the vat in vat_value & vat_percentage

2. two worst coupling problems:
   - sending OrderPlaced email
      - degree: order/timing
      - distance: different module
   - sending order creation to internal erp
      - degree: order / timing
      - distance: different team/repo

3. exactly one change that reduces the worst degree × distance.
   - create OrderPlaced event and move the dependents to a listener


## Review

### Attempt 1 — 2026-07-31

**Verdict: partial.** Write-path analysis is solid; the lesson's core — *who reads what you change* — went unseen. Follow-up below gates S1.

**Task 1 — got:** coupons.type migration, VAT rate in config, the controller branch + VAT math, and one standout: **snapshotting `vat_percentage`/`vat_value` on the order** — that turns a future rate change from a data-corruption risk into a non-event. Senior instinct; keep it.
**Missed — every consumer of `total`, all three visible in this very file:**
- The **ERP payload** (`erp.internal/orders`) — different team/repo. Do they need net, VAT, gross? Contract change + coordination.
- The **JSON response** — every API client must be re-examined (is displayed "total" now pre- or post-VAT?).
- The **OrderPlaced mailable** — receipts must now show the VAT breakdown (KSA e-invoicing makes this a *must*, not a nice-to-have).
The observation the task was fishing for: **`total` changed meaning** (pre-VAT → VAT-inclusive-with-breakdown). When a value's *meaning* changes, the change list is *every reader* — and from this file you can't even enumerate readers who recompute totals elsewhere. That dread is symptom #3, **unknown unknowns**, live.
Bonus miss: your own migration makes `coupon.amount` polymorphic (fixed SAR vs percent) — fresh **meaning coupling** introduced by the fix. `type` + `value` with unmixed semantics avoids it.

**Task 2 — defensible by the table, under-diagnosed — and both picks skip "what breaks in practice" (the task asked):**
- ERP pick: right target, wrong emphasis. Timing is real (POST after save, non-transactional — a failure between save and POST leaves silent divergence, no retry). But the expensive part is **meaning at team distance**: `status => 2` and `total` semantics live in code you can't see, version, or test against. High degree × max distance ⇒ the worst thing in the file.
- Email pick: the mildest of the three side effects. Stronger candidates: the **status magic ints** (meaning coupling that travels *inside the ERP payload* = cross-service distance), or the **inline total computation** (the meaning of "total" smeared across controller, ERP, API clients, and email).

**Task 3 — the trap the note names.** coupling.md, verbatim: *"Events are not automatic decoupling… wrong when you're hiding a required step."* ERP sync **is** a required business step. Moving it into an `OrderPlaced` listener keeps the order/timing coupling you named and removes it from sight — degree unchanged, visibility worse, debuggability worse. (Steelman: *queued* listeners buy failure isolation and latency off the request path — a real benefit, but a different argument than "reduces degree × distance," and only safe with retry/queue design you didn't specify.) Also: no code sketch — the task asked for a few lines.

### Follow-up (gates S1 · ~15–20 min)

1. **Task-1 delta:** add the consumer-side list (at least the three in-file readers), plus one sentence: what did `total` mean before, and what does it mean after?
2. **Task-3 redo:** a *different* single change, a few sketched lines, one sentence naming which degree drops to which — at what distance.

## Follow-up attempt

_(write below)_

1. consumer-side list:
  - email, erp, api consumer: total meant the sum of each item's price, now it means total with vat
2. total -> totalWithVat, make it a bit ovious what total means now.

### Delta review — 2026-07-31

**Item 1: closed.** All three readers named; meaning-shift stated. One precision note that matters in your domain: "sum of each item's price" omits qty **and the coupon discount** — the old meaning was *discounted* subtotal (Σ price×qty − coupon). The requirement says VAT applies to the **discounted** subtotal; discount-before-VAT vs after-VAT changes what you owe the tax authority. In fintech, that one word is an audit finding.

**Item 2: right enemy this time — credited.** A name that carries the changed meaning attacks **obscurity** (ch. 2's second cause); that's a genuine move, not a trap. But the explicitly requested sentence is missing for the second time: *which degree drops to which, at what distance.*

**Closing question (S1 closes on a good answer, one or two sentences):**
Run the calculus on your own fix. Your rename — which degree does it reduce, to which, and at what distance does the coupling it fixes actually live? Does it reach the ERP coupling you yourself named worst in task 2? If not, name one change that would.

**Your closing answer:** "my change makes the distance stay the same, but the degree get to the lowest."

### Close-out — 2026-07-31 · S1 closed with a residue

Half right. **Degree: yes** — for readers of *this file*, meaning → name, the bottom of the table. **Distance: dodged** — the question wasn't whether the rename moves distance (nothing moves distance; distance is where the two coupled parties sit). It was: *where does the coupling you fixed live?* Answer: same function — the smallest distance there is. Pain ≈ degree × distance, so the rename lowered the cheapest factor of the cheapest coupling in the picture. Good hygiene, near-zero yield.

**The ERP question (asked three times, so here is the answer): no — the rename doesn't touch it.** The wire key `'total' => …` is the contract; the ERP still knows what that number means only by convention. Meaning coupling at team distance: fully intact. And the mirror trap: rename the *payload key* instead and the same zero-cost act becomes a breaking cross-team change — that asymmetry is "as distance grows, degree must drop," felt from the other side.

**The change that reaches it: additive breakdown in the payload.** Keep `total`, add `subtotal`, `vat_amount`, `vat_rate` (and while in there: `status => 'confirmed'` instead of `2`). Additive = non-breaking, ERP migrates at its own pace; explicit fields turn human convention into documented schema — degree lowered *at the distance that actually hurts*.

**Residue → S2 opener (cold, 2 min):** given a proposed fix, state degree-from → degree-to **and** the distance at which the fixed coupling lives, before any code talk.
