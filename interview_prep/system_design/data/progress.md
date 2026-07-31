# Track: Data Layer

Deepest track, and the one closest to your daily work. Ordered so each concept explains the previous one's surprises.

| # | Concept | Status |
|---|---|---|
| 1 | InnoDB storage model: clustered PK, secondary indexes, why UUID PKs hurt | ⬜ |
| 2 | B+tree mechanics: prefix rule, index-provided ordering, covering indexes, filesort | ⬜ |
| 3 | Reading plans: `EXPLAIN` / `EXPLAIN ANALYZE`, cardinality, when the optimiser is wrong | ⬜ |
| 4 | Transactions & isolation: REPEATABLE READ vs READ COMMITTED, what Laravel actually gives you | ⬜ |
| 5 | MVCC & long transactions: undo history, why the reporting query broke everything | ⬜ |
| 6 | Locking: row locks, gap locks, `FOR UPDATE`, deadlocks, hot-row contention | ⬜ |
| 7 | Replication: binlog, async vs semi-sync, lag, read-your-writes | ⬜ |
| 8 | Failover reality: RDS Multi-AZ, replica promotion, what breaks during it | ⬜ |
| 9 | Schema migrations at scale: online DDL, gh-ost/pt-osc, expand–contract | ⬜ |
| 10 | Growth ladder: bigger box → partitioning → archival → sharding (and why sharding is last) | ⬜ |
| 11 | Multi-tenant skew: hot partitions, the one merchant that is 40% of your traffic | ⬜ |

**Exit criteria:** given a slow endpoint and a production MySQL you can find the cause from plans + metrics, and you can argue schema/index/topology changes with numbers.

## Completed
_none yet_
