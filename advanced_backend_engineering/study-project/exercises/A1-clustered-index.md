# Exercise A1 — Predict the shape of a real table

Paper exercise. **Do not run anything.** The point is to predict, then later verify. Estimates within ~2× are fine; the reasoning is what I'm reviewing.

## Scenario

Multi-tenant POS backend. MySQL 8, InnoDB, `ROW_FORMAT=DYNAMIC`, default `utf8mb4` collation. 16KB pages.

```sql
CREATE TABLE payments (
  id            CHAR(36)        NOT NULL,   -- UUIDv4, generated in PHP
  branch_id     BIGINT UNSIGNED NOT NULL,
  order_id      BIGINT UNSIGNED NOT NULL,
  amount_cents  INT             NOT NULL,
  method        VARCHAR(20)     NOT NULL,
  metadata      JSON            NULL,       -- gateway response, ~4 KB average
  created_at    DATETIME        NOT NULL,
  PRIMARY KEY (id),
  KEY idx_branch_created (branch_id, created_at),
  KEY idx_order (order_id)
);
```

200 million rows. Buffer pool is 16 GB. The table does not fit in it.

## Questions

**1. Where does `metadata` live, and what does that do to the leaf pages?**
Is a 4KB JSON value stored inline in the clustered-index leaf or pushed off-page? Give the threshold you're reasoning from, then estimate rows per leaf page and the resulting depth of the clustered index.

**2. What is physically stored in one `idx_branch_created` leaf entry?**
List the bytes. Then estimate the on-disk size of that index for 200M rows.

**3. Predict the access path.**

```sql
SELECT id, amount_cents
FROM payments
WHERE branch_id = 42 AND created_at >= '2026-07-01';
```

Assume it matches 50,000 rows. Describe what InnoDB actually does, and estimate the number of *page* reads. Then: **change one thing in the schema** so this query gets dramatically cheaper, and say what the new page count is.

**4. The team proposes: `id BIGINT UNSIGNED AUTO_INCREMENT` as PK, and `uuid BINARY(16)` as a unique secondary index.**
Give two concrete wins with rough magnitudes, and one thing that genuinely gets *worse* or riskier.

## Answer here

Write your answers below (or reply in chat — either is fine).

---
