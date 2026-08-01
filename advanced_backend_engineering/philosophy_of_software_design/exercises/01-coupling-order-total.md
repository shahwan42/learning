# Exercise 01 — Coupling: read the change cost

**Session:** 1 — complexity & strategy (book ch. 1–3) · **Topic:** coupling as change-cost / change amplification · **Status:** attempt 1 reviewed — follow-up pending (gates S1)

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
