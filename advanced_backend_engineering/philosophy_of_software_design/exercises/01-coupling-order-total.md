# Exercise 01 — Coupling: read the change cost

**Session:** 1 — complexity & strategy (book ch. 1–3) · **Topic:** coupling as change-cost / change amplification · **Status:** awaiting attempt

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

## Review

_(mine, after your attempt)_
