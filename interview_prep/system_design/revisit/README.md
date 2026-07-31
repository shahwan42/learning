# Revisit — deferred topics

Parked deliberately. Each line says *why it matters* and *what has to be true before it's worth your time*.

| Topic | Why it matters | Unpark when |
|---|---|---|
| Consensus (Raft/Paxos) internals | Explains how etcd/Zookeeper/Kafka controllers avoid split-brain; the reason "just use a leader election" is not free | After replication (data/7). You'll consume consensus systems long before you'd build one |
| CAP / PACELC formalism | Common interview vocabulary; mostly a *labelling* exercise on top of concepts you'll already own | After consistency models. Learning it first produces slogans, not reasoning |
| CRDTs & conflict resolution | Real answer for offline-first / multi-writer (POS terminals that keep selling while the network is out) | After idempotency and ordering (async/2, async/5) |
| Columnar stores & OLAP (ClickHouse, Redshift) | Where reporting queries belong once they stop fitting on OLTP MySQL | After data/5 — you need to feel the pain of analytics on OLTP first |
| Index-merge, loose index scan, optimiser internals | Explains the `IN (...) + ORDER BY + LIMIT` case you hit in calibration | After data/3 (reading plans) |
| Vector clocks, Dynamo-style quorums | Background for Cassandra/DynamoDB tunable consistency | After data/7 |
| Service mesh, Envoy, sidecars | Where timeouts/retries/breakers get pushed out of app code | After reliability/1–3. Meaningless before you can configure them by hand |
| io_uring, kernel bypass, NUMA | Real but far below your current bottleneck | Not until you're latency-bound in µs, which you are not |
