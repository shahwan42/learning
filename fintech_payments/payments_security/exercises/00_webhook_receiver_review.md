# Exercise 00 — Calibration: review a webhook receiver

A payments platform credits merchant balances when the PSP reports a successful payment.

PSP contract:
- Webhooks signed with HMAC-SHA256 over `"<t>.<raw body>"`, header `X-PSP-Signature: t=<unix seconds>,v1=<hex>`
- Delivery is **at-least-once**; retries on any non-2xx for up to 72 hours
- API available: `GET /v1/payments/:id` (authenticated with your secret key)

The endpoint below is in production today.

```ts
import express from "express";
import crypto from "crypto";
import { db, notifyMerchant } from "./deps";

const app = express();
app.use(express.json());

const WEBHOOK_SECRET = "whsec_live_9f3ab52c11e4"; // from the PSP dashboard

app.post("/webhooks/psp", async (req, res) => {
  const header = req.header("X-PSP-Signature") ?? "";
  const t = header.match(/t=(\d+)/)?.[1];
  const v1 = header.match(/v1=([0-9a-f]+)/)?.[1];

  const signedPayload = `${t}.${JSON.stringify(req.body)}`;
  const expected = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(signedPayload)
    .digest("hex");

  if (v1 !== expected) return res.status(400).send("bad signature");

  const event = req.body;
  console.log("psp webhook", JSON.stringify(event));

  if (event.type === "payment.succeeded") {
    const { payment_id, merchant_id, amount } = event.data;
    const merchant = await db.merchants.findOne({ id: merchant_id });
    await db.merchants.update(
      { id: merchant_id },
      { balance: merchant.balance + amount },
    );
    await notifyMerchant(merchant_id, `Payment ${payment_id} received: ${amount}`);
  }

  res.status(200).send("ok");
});

app.listen(8080);
```

## Task
1. List every security or correctness problem you find. There are several — some exploitable, some that fire by accident under normal operation.
2. Rank your top 3 by production blast radius: what goes wrong, and who or what triggers it.
3. Rewrite the handler fixing them. Any TS style; keep the fake `db` API and invent minimal helpers (assume you can add tables/columns).

Reply in chat, or put your rewrite in `exercises/00/`.

No hints beyond the PSP contract above.
