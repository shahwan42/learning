# Exercise 02 — Sequential vs concurrent awaits

Topic: node-runtime #1→#2 bridge. File: `report.mjs`.

`buildReport()` makes two independent upstream calls: `fetchUser()` (800 ms) and `fetchOrders()` (1200 ms). Neither needs the other's result.

## A — predict, then run
How long does `buildReport()` take as written? Run it:

```bash
node report.mjs
```

## B — fix
Make it take ~1200 ms instead, without changing `fetchUser` or `fetchOrders`. Both results still needed.

## C — explain
Nothing was blocking the thread in the original — every wait was a proper `await`. So why was it slow? One or two sentences.

## D — the trap
Someone "optimizes" it like this:

```js
const user = await fetchUser();
const orders = await fetchOrders();
return await Promise.all([user, orders]);
```

Does this help? Why or why not?

**Reply in chat** with your timings, your fix, and C + D.
