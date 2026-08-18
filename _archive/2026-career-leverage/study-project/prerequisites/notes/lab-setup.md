# Lab setup

Detected on this machine: PHP 8.3.32 (CLI), Composer, Colima (running, docker runtime), TablePlus.
**Missing:** the `docker` CLI itself — Colima provides the daemon, not the client.

```bash
brew install docker && docker ps
```

`docker-compose` is already present at `/opt/homebrew/bin/docker-compose`.

## Bring up the lab

```bash
cd study-project/lab && docker compose up -d
```

Gives you:

| Service | Port | Credentials |
|---------|------|-------------|
| MySQL 8.4 | 3306 | `root` / `root`, db `lab` |
| Redis 7 | 6379 | none |

MySQL is configured with a deliberately **small buffer pool (64MB)** and `innodb_flush_log_at_trx_commit=1`. Both are on purpose: a small buffer pool makes I/O behaviour visible on a laptop-sized dataset, and full durability makes fsync cost measurable. We'll change both later and watch what happens.

Connect:

```bash
docker compose exec mysql mysql -uroot -proot lab
```

Slow query log is on with `long_query_time=0` — every statement is logged, which is what you want in a lab and never what you want in production.

## Not needed yet

Kafka, Jaeger/Tempo, Prometheus/Grafana, k6, Blackfire. They arrive in tracks B, C, and D. Adding them now would just be a Compose file you never read.
