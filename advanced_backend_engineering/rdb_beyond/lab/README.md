# Lab

MySQL 8.0 on host port **3307**, seeded with a cashflow-shaped dataset (~2.33M transactions, 60k accounts, 5k businesses). Business **4211** carries the A0 incident: a 300k-row retry storm since 2026-06-20 with zero settled rows. This is the paper drill's scenario at roughly 1:6 scale — expect hundreds of milliseconds where the drill narrates ~1.9s.

```bash
docker-compose up -d
```

First boot seeds for a few minutes; the container reports healthy only when done. Watch with:

```bash
docker-compose logs -f mysql
```

Connect (no local mysql client on this machine):

```bash
docker-compose exec mysql mysql -uroot -proot rdb
```

Or TablePlus: `127.0.0.1:3307`, user `root`, password `root`, database `rdb`.

Reset from scratch (drops data, re-seeds on next up):

```bash
docker-compose down -v
```

Slow query log (every query ≥100ms): `mysql-log/slow.log` on the host.

Port map across sibling labs: 3306 + 6379 = `../../study-project/lab/`; **3307 = here**; 5433 reserved for this lab's Postgres (commented out in the compose file until a contrast topic needs it).
