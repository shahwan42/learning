# A0 — Calibration drill

You claimed all four baseline markers. This verifies them and sets the track's starting altitude — it's placement, not a test, and it's not teaching yet. **Closed book** (no docs, no AI): a wrong answer here just aims the curriculum; a looked-up answer mis-aims it.

~45 minutes. If one part drags well past that, stop and say which — that's exactly the signal I need. Everything is answerable on paper from what's inline. Optional: the lab reproduces the whole scenario live (business 4211, ~1:6 scale — see `../lab/README.md`).

Write answers inline under each part, or reply in chat.

---

## Shared context

```sql
CREATE TABLE transactions (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  business_id BIGINT UNSIGNED NOT NULL,
  account_id  BIGINT UNSIGNED NOT NULL,
  reference   VARCHAR(64)     NOT NULL,
  status      ENUM('pending','settled','failed') NOT NULL DEFAULT 'pending',
  amount      DECIMAL(13,2)   NOT NULL,
  currency    CHAR(3)         NOT NULL,
  created_at  DATETIME(6)     NOT NULL,
  settled_at  DATETIME(6)     NULL,
  UNIQUE KEY uq_reference (reference),
  KEY idx_business_created (business_id, created_at),
  KEY idx_status (status),
  KEY idx_account (account_id)
) ENGINE=InnoDB;
```

Facts: 48M rows total; ~92% `settled` overall. Business **4211** is the largest at ~1.9M rows. Since **2026-06-20** its payment integration has been broken: every attempt since then is `pending` or `failed` — a ~1.55M-row retry storm, **zero settled**. Before that date its history is settled-rich.

---

## Part 1 — Read the plan

The merchant dashboard's "recent settled transactions" query:

```sql
SELECT id, account_id, amount, currency, created_at
FROM transactions
WHERE business_id = 4211
  AND status = 'settled'
  AND created_at >= '2026-01-01'
ORDER BY created_at DESC
LIMIT 20;
```

Typical businesses: 3–8 ms. Business 4211: **1.9 s and climbing daily.**

```
           id: 1
  select_type: SIMPLE
        table: transactions
   partitions: NULL
         type: range
possible_keys: idx_business_created,idx_status
          key: idx_business_created
      key_len: 16
          ref: NULL
         rows: 1723410
     filtered: 33.33
        Extra: Using index condition; Using where; Backward index scan
```

**Answer:**

a. Narrate what the engine does entry-by-entry once it starts reading `idx_business_created`, and say precisely where the 1.9 s is spent. Why does this query get slower every day?
b. The plan looks healthy — `range`, backward scan, `LIMIT 20`. Why doesn't the LIMIT save it for this business when it does for every other business?
c. What does `rows: 1723410` actually count — and give two distinct reasons `filtered: 33.33` is wrong here.

---

## Part 2 — Design the indexes

Two more hot queries on the same table:

```sql
-- Q2: ops dashboard, per account
SELECT id, reference, status, amount, created_at
FROM transactions
WHERE account_id = ? AND status IN ('pending','failed')
ORDER BY created_at DESC
LIMIT 50;

-- Q3: finance rollup, per business
SELECT currency, DATE_FORMAT(created_at, '%Y-%m') AS ym,
       COUNT(*) AS cnt, SUM(amount) AS volume
FROM transactions
WHERE business_id = ? AND status = 'settled'
  AND created_at >= '2026-01-01'
GROUP BY currency, ym;
```

**Answer:**

a. Propose the minimal index set serving Part 1's query plus Q2 and Q3. Give DDL.
b. For Part 1's query specifically: both `(business_id, status, created_at)` and `(business_id, created_at, status)` contain the same columns. One fixes the 1.9 s, one barely helps. Which and why — be precise about which columns *navigate* the B+tree versus merely *filter* entries already being read.
c. Which existing indexes would you drop, and what does every index you keep cost on this table's write path?
d. *(Stretch)* Q2's `IN ('pending','failed')` combined with `ORDER BY created_at DESC` has a wrinkle that a single equality wouldn't. What is it, and why is it survivable at `LIMIT 50`?

---

## Part 3 — The withdrawal race

Production code, InnoDB defaults (REPEATABLE READ). Two concurrent withdrawal requests hit the same account: one for 80.00, one for 70.00. The account holds 100.00.

```php
DB::transaction(function () use ($accountId, $amount) {
    $balance = DB::table('accounts')->where('id', $accountId)->value('balance');

    if ($balance < $amount) {
        throw new InsufficientFundsException();
    }

    DB::table('accounts')->where('id', $accountId)
        ->update(['balance' => $balance - $amount]);

    DB::table('ledger_entries')->insert([/* ... */]);
});
```

**Answer:**

a. Write the interleaving timeline (T1/T2 step by step) that corrupts the balance. What is the final stored balance, and how much money actually left the account?
b. Why does REPEATABLE READ not prevent this? Name the two different kinds of read involved and what each one sees.
c. Give two production-grade fixes with one tradeoff each. (A third honorable mention welcome.)
d. Would switching the connection to SERIALIZABLE fix it in InnoDB? What new behavior does that buy you, at what cost?
e. *(Flag, skip freely)* Under Postgres REPEATABLE READ this same code fails differently. How?

---

## Part 4 — One analytical statement

Finance wants, for business 4211, **June 2026, settled rows only**: per account, a running balance in chronological order — and only each account's **3 most recent** transactions returned, newest first.

Columns: `account_id, id, created_at, amount, running_total, rn`.

One SQL statement. No app-side loops. Ties in `created_at` must be deterministic.

**Answer:**

```sql

```

---

*Review criteria, in order: correctness → precision of mechanism (the "why") → idiom. After review, Track A's altitude locks in and real teaching starts.*
