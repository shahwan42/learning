# Revisit — parked topics

Things worth knowing that would derail the current thread. Each entry says **why it matters** so future-you can judge whether to pull it forward.

| Topic | Parked from | Why it matters |
|-------|-------------|----------------|
| InnoDB adaptive hash index | A1 | A hidden in-memory hash over hot B+tree pages. Occasionally the cause of mystery contention (`btr_search_latch`); off by default in MySQL 8.0.34+. Pure trivia until it bites you. |
| Compression: `ROW_FORMAT=COMPRESSED` vs page compression | A1 | Real disk savings, real CPU and buffer-pool cost. Relevant only once you're disk-bound. |
| Fractal trees / LSM trees (RocksDB, MyRocks) | A1 | The other major storage-engine family. Write-optimised instead of read-optimised. Worth a session after A8 so the B+tree tradeoffs have something to contrast against. |
| `innodb_page_size` tuning (4K/8K/32K/64K) | A1 | Almost never the right knob, but explains a class of "why is this SSD-friendly benchmark lying" results. |

## How to add

One row. Topic, where it came from, and the consequence of not knowing it. If you can't write the third column, it's not worth parking.
