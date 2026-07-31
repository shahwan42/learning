# Machine & lab facts

- Container runtime is **Colima**. `docker-compose` (standalone binary) is installed; the `docker` CLI is **not**. Everything below uses `docker-compose`.
- No local `mysql`/`psql` clients. Use the client inside the container:
  `docker-compose exec mysql mysql -uroot -proot rdb`
- **TablePlus** is installed → connect `127.0.0.1:3307`, user `root`, password `root`, database `rdb`.
- Host-port map across sibling labs: `3306` + `6379` = `../study-project/lab/`; **`3307` = this project's MySQL**; `5433` reserved for this project's Postgres (commented out until a contrast topic needs it).
- Lab MySQL is **8.0** (Aurora MySQL 3.x is 8.0-compatible — day-job parity). The systems lab deliberately runs 8.4; version-specific behavior gets flagged when it matters.
- Lab ≠ Aurora: storage, replication, and failover differ fundamentally on Aurora. Track D flags each divergence where it appears.
