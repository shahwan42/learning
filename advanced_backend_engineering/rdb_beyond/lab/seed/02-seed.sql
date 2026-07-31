-- Seeds ~2.33M transactions. Runs once on first boot; takes a few minutes.
-- Watch progress: docker-compose logs -f mysql
-- If the big insert ever dies on a low-memory Colima VM (rare), `docker-compose down -v`,
-- lower 2000000 below to 1000000, and boot again — everything still reproduces, just smaller.

SET SESSION cte_max_recursion_depth = 2100000;

-- 5,000 businesses
INSERT INTO businesses (id, name, country, created_at)
WITH RECURSIVE seq(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM seq WHERE n < 5000)
SELECT n, CONCAT('business_', n), ELT(1 + FLOOR(RAND() * 3), 'SA', 'AE', 'KW'), '2025-01-01'
FROM seq;

-- 60,000 accounts: ids (b-1)*12+1 .. b*12 belong to business b
INSERT INTO accounts (id, business_id, currency, balance, created_at)
WITH RECURSIVE seq(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM seq WHERE n < 60000)
SELECT n, 1 + FLOOR((n - 1) / 12), 'SAR', ROUND(RAND() * 100000, 2), '2025-01-15'
FROM seq;

-- 2,000,000 baseline transactions over 18 months, volume skewed toward low business ids.
-- Status mix ≈ 92% settled / 4.8% failed / 3.2% pending.
INSERT INTO transactions (business_id, account_id, reference, status, amount, currency, created_at, settled_at)
SELECT
  t.business_id,
  (t.business_id - 1) * 12 + 1 + FLOOR(RAND() * 12),
  CONCAT('txn_', LPAD(t.n, 12, '0')),
  t.status,
  ROUND(1 + RAND() * 1200, 2),
  ELT(1 + FLOOR(RAND() * 10), 'SAR','SAR','SAR','SAR','SAR','SAR','SAR','AED','AED','USD'),
  t.created_at,
  IF(t.status = 'settled', t.created_at + INTERVAL FLOOR(RAND() * 72) HOUR, NULL)
FROM (
  WITH RECURSIVE seq(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM seq WHERE n < 2000000)
  SELECT
    n,
    1 + FLOOR(POW(RAND(), 3) * 5000) AS business_id,
    CASE WHEN RAND() < 0.92 THEN 'settled'
         WHEN RAND() < 0.60 THEN 'failed'
         ELSE 'pending' END AS status,
    TIMESTAMP('2025-02-01') + INTERVAL FLOOR(RAND() * 777600) MINUTE AS created_at
  FROM seq
) AS t;

-- Business 4211, healthy pre-incident history: 30,000 rows, 95% settled, through 2026-06-19.
INSERT INTO transactions (business_id, account_id, reference, status, amount, currency, created_at, settled_at)
SELECT
  4211,
  50521 + FLOOR(RAND() * 12),
  CONCAT('txn_4211_', LPAD(t.n, 9, '0')),
  t.status,
  ROUND(1 + RAND() * 400, 2),
  'SAR',
  t.created_at,
  IF(t.status = 'settled', t.created_at + INTERVAL FLOOR(RAND() * 72) HOUR, NULL)
FROM (
  WITH RECURSIVE seq(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM seq WHERE n < 30000)
  SELECT n,
    CASE WHEN RAND() < 0.95 THEN 'settled'
         WHEN RAND() < 0.50 THEN 'failed'
         ELSE 'pending' END AS status,
    TIMESTAMP('2025-02-01') + INTERVAL FLOOR(RAND() * 725760) MINUTE AS created_at
  FROM seq
) AS t;

-- The A0 pathology: integration incident from 2026-06-20 onward.
-- 300,000 retry-storm rows for business 4211 — ZERO of them settled.
INSERT INTO transactions (business_id, account_id, reference, status, amount, currency, created_at, settled_at)
SELECT
  4211,
  50521 + FLOOR(RAND() * 12),
  CONCAT('txn_burst_', LPAD(t.n, 9, '0')),
  IF(RAND() < 0.5, 'pending', 'failed'),
  ROUND(1 + RAND() * 400, 2),
  'SAR',
  t.created_at,
  NULL
FROM (
  WITH RECURSIVE seq(n) AS (SELECT 1 UNION ALL SELECT n + 1 FROM seq WHERE n < 300000)
  SELECT n, TIMESTAMP('2026-06-20') + INTERVAL FLOOR(RAND() * 51840) MINUTE AS created_at
  FROM seq
) AS t;

ANALYZE TABLE businesses, accounts, transactions;
