# Revisit — parked topics

Interesting but nonessential now. Any of these can be promoted into a track on request.

| Topic | Why it might matter later |
|---|---|
| B-trees | Why databases index with B-trees instead of BSTs (disk pages, fan-out). Strong promotion candidate after trees (#6) — very backend-relevant. |
| Tries & radix trees | How routers (e.g. Fastify) match URL paths; autocomplete, prefix search. Promote if router internals come up. |
| Consistent hashing | How caches/shards spread keys so one node dying doesn't reshuffle everything (Redis cluster, load balancers). Promote when distributed caching comes up. |
| Bloom filters & probabilistic structures | "Definitely not present" checks that skip expensive lookups (caches, DBs). Cheap to learn right after hash maps (#5). |
| Union-find (disjoint sets) | Connectivity/clustering; occasional interview appearance. |
| Skip lists | The linked list that competes with balanced trees — it's how Redis sorted sets work. |
| Immutable / persistent structures | Structural sharing — why React/Immer-style updates stay cheap. |
| String algorithms (edit distance, KMP) | Diffing and fuzzy matching; edit distance doubles as DP practice after algorithms #7. |
