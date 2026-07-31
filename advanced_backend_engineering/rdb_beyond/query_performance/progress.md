# Track A — Query performance

How the optimizer decides, how execution actually spends time, and how to make both visible. Starts past "what is an index" per calibration claim; A0 verifies that.

**Interleaves:** none required. A1–A2 unlock C-track; A3 makes every later lab debuggable.

| # | Topic | One-liner | Status |
|---|-------|-----------|--------|
| A0 | Calibration drill | Verify the four claimed baseline skills; sets track altitude | **issued — awaiting attempt** |
| A1 | The cost model | Statistics, index dives, histograms — what the optimizer knows, and the exact ways it lies | not started |
| A2 | Composite indexes as a discipline | Leftmost prefix, equality-then-range, covering, ICP; what each index costs writes and memory | not started |
| A3 | EXPLAIN ANALYZE & the iterator tree | Estimated vs actual, FORMAT=TREE/JSON, optimizer trace — reading where time actually went | not started |
| A4 | Join execution | Nested-loop vs hash join (8.0.18+), join order, derived-table merge vs materialize | not started |
| A5 | Sorts & temp tables | filesort reality, GROUP BY/DISTINCT strategies, when memory spills to disk | not started |
| A6 | Pagination at scale | Why OFFSET degrades, keyset/seek pagination, deferred joins | not started |
| A7 | When the optimizer is wrong | Stale stats, histograms, hints, FORCE INDEX — and when a rewrite beats all of them (OR→UNION, cast/collation traps) | not started |
| A8 | ORM-generated SQL | Eloquent chunk/cursor/lazy at the SQL level, N+1 beyond the slogan, SELECT * tax | not started |

## Notes

Written per-topic into `notes/` after each concept lands.
