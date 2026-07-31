# Exercise 01 — Latency budget

**Track:** foundations/1 · **Status:** issued 2026-07-26, awaiting attempt

## Scenario

Laravel API in `eu-west-1`. Endpoint `POST /orders/{id}/close`. All MySQL data is warm in the buffer pool. Per request it does, **in this order, all synchronously**:

1. One Redis `GET` (session lookup), same AZ.
2. `SELECT` the order by primary key.
3. Loads its line items **one query per item** — this order has 12 line items.
4. One `SELECT` for merchant settings (indexed, warm).
5. One `UPDATE` on the order, then `COMMIT`.
6. HTTP call to an internal `loyalty` service, same region. Loyalty itself does 2 warm indexed queries, then returns.
7. HTTP call to the payment provider's API in `us-east-1`. Their server-side processing is 120 ms.

Ignore PHP execution time and JSON serialisation.

## Tasks

**a)** Estimate p50 total latency. Show the line-by-line breakdown, not just the total.

**b)** Which single item dominates? By what factor over the second-largest?

**c)** Name the two changes that buy the most, and estimate the new total. For each, state what you gave up.

**d)** One sentence: why is "put Redis in front of the merchant settings query" a weak move here?

## Rules

Order-of-magnitude answers. Don't look anything up — the point is whether the model is in your head. Wrong-but-reasoned beats right-but-guessed; show the reasoning either way.
