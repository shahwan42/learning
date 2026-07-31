-- Cashflow-shaped lab schema.
-- Indexes on `transactions` are DELIBERATELY imperfect — A0/A2 diagnose and fix them.
-- Foreign keys are DELIBERATELY absent — C3 makes the case both ways.

CREATE TABLE businesses (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(80) NOT NULL,
  country     CHAR(2)     NOT NULL,
  created_at  DATETIME    NOT NULL
) ENGINE=InnoDB;

CREATE TABLE accounts (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  business_id BIGINT UNSIGNED NOT NULL,
  currency    CHAR(3)         NOT NULL DEFAULT 'SAR',
  balance     DECIMAL(15,2)   NOT NULL DEFAULT 0,
  version     INT UNSIGNED    NOT NULL DEFAULT 0,   -- optimistic-locking exercises (B3)
  created_at  DATETIME        NOT NULL,
  KEY idx_business (business_id)
) ENGINE=InnoDB;

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

-- Empty on purpose; Track B seeds and uses it.
CREATE TABLE ledger_entries (
  id             BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  account_id     BIGINT UNSIGNED NOT NULL,
  transaction_id BIGINT UNSIGNED NOT NULL,
  direction      ENUM('debit','credit') NOT NULL,
  amount         DECIMAL(13,2)   NOT NULL,
  created_at     DATETIME(6)     NOT NULL,
  KEY idx_account_created (account_id, created_at)
) ENGINE=InnoDB;
