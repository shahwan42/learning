# Track: Node.js

Taught just-in-time, framed against PHP/Laravel. Only what the ledger forces us to learn.

## Curriculum

| # | Topic | PHP contrast that matters | Status |
|---|---|---|---|
| 1 | Running a file, `package.json`, ESM imports, `node:test` | No autoloader, no PSR-4, no framework entrypoint | **taught, unverified** |
| 2 | Process lifecycle and the event loop | PHP-FPM dies per request; Node keeps state between requests | next |
| 3 | Numbers are float64 → money as integer minor units | PHP has the same trap; here it's fatal and unguarded | pending |
| 4 | Plain data + functions instead of Eloquent models | No active record, no magic accessors, no container | pending |
| 5 | Errors: `throw` vs rejected promises, async stack traces | No global exception handler unless you install one | pending |
| 6 | Async: `await` sequencing vs `Promise.all` concurrency | No implicit blocking I/O; everything is a promise | pending |
| 7 | Tests with `node:test` + assertions | PHPUnit habits mostly transfer, the runner doesn't | pending |
| 8 | CLI plumbing: `process.argv`, stdin, exit codes | No artisan; you build the entrypoint | pending |
| 9 | Debugging: `node --inspect`, breakpoints, structured logs | No xdebug, no dd() | pending |
| 10 | npm, semver, lockfiles, and dependency risk | Composer analogues and where they differ | pending |

## Completed

_(none yet)_

## Notes

- [01 — Running Node, ESM, and tests](notes/01-running-node.md)
