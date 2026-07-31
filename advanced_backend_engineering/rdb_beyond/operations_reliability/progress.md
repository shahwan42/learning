# Track D — Operations & reliability

What production databases do when nobody's looking — RDS/Aurora-flavored, taught on vanilla MySQL in the lab with the Aurora differences flagged per topic.

**Interleaves:** independent of A–C. D2 onward adds a replica service to `lab/docker-compose.yml`.

| # | Topic | One-liner | Status |
|---|-------|-----------|--------|
| D1 | The durability chain | Redo, doublewrite, binlog, group commit; the two knobs everyone misconfigures; how Aurora rewrites this story | not started |
| D2 | Replication | Binlog formats, GTID, where lag actually comes from; Aurora replicas vs binlog replicas; read-your-writes in Laravel (sticky reads) | not started |
| D3 | Failover | What Multi-AZ vs Aurora failover actually does, DNS TTL traps, the post-failover connection storm | not started |
| D4 | Backups that restore | PITR mechanics (snapshot + log replay), Aurora backtrack vs PITR; a real restore drill in the lab | not started |
| D5 | Connections & pooling | FPM's connection-per-worker math, `max_connections`, RDS Proxy, anatomy of pool exhaustion | not started |
| D6 | Seeing inside | Slow log, performance_schema/sys essentials, Performance Insights wait events, the short list of metrics worth alerting on | not started |
| D7 | Failure catalog | MDL pileups, runaway queries, replication breaks, disk full, purge lag — reading real incidents cold | not started |

## Notes

Written per-topic into `notes/` after each concept lands.
