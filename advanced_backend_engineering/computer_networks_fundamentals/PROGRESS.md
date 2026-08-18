# Computer Networks Fundamentals — Progress

> **Career-leverage status (2026-08-18): REDUCE.** Use HTTP/TLS and failure-path reasoning when a live debugging/design case calls for it; no broad network survey.

## Learner profile

- **Context:** PHP 8.3 / Laravel backend engineer; AWS infra at work. macOS (Colima for containers).
- **Starting point (assessed 2026-07-26):** fluent with HTTP/REST semantics; everything below HTTP — TCP, DNS, TLS — a trusted black box.
- **Goal:** practical fluency for development and production debugging. Explicitly **not** network-specialist mastery — no packet-header memorization, no routing-protocol internals.
- **Weighting:** all four goal areas selected (debug production, infra literacy, protocol depth, foundations) → four tracks, evenly weighted.
- **Exercise style:** real-tool labs — curl, dig, tcpdump, nc, openssl against real traffic; PHP socket scripts when they teach something; docker-compose when a scenario needs multiple hosts.

## Method (the loop)

1. One concept per turn — mental model first, then why it works that way.
2. Prerequisites taught just-in-time, filed in `prerequisites/notes/`.
3. One small realistic exercise. I wait for your attempt.
4. Direct review: correctness, then idiomatic usage.
5. Progress updates only after you demonstrate understanding — not after you read.
6. Interesting-but-nonessential detours go to `revisit/README.md`.

Say **"skip"** if a concept is already solid — I'll spot-check with one question and move on.
Say **"park it"** to push something to `revisit/`.
Say **"switch to <track>"** any time.

## Tracks

| # | Track | Dir | Status |
|---|-------|-----|--------|
| A | Foundations — how bytes move | [foundations/](foundations/progress.md) | **active** |
| B | HTTP & TLS — protocols you ship on | [http-tls/](http-tls/progress.md) | not started |
| C | Debugging & failure patterns | [debugging/](debugging/progress.md) | not started |
| D | Infrastructure — proxies, containers, cloud | [infra-cloud/](infra-cloud/progress.md) | not started |

Order: A first — its pipeline map is the skeleton every other topic hangs on. After ~A6, B and C interleave freely. D assumes B1 (proxies speak HTTP) and lands last or on demand when a work problem calls for it.

## Current position

- **Track:** A — Foundations
- **Topic:** A1 — The end-to-end map
- **Waiting on:** your attempt at `exercises/A1-end-to-end-map.md`

## Session log

| Date | Covered | Outcome |
|------|---------|---------|
| 2026-07-26 | Assessment; scaffold; A1 taught | awaiting A1 exercise |

## Environment

See [prerequisites/notes/machine-and-tools.md](prerequisites/notes/machine-and-tools.md). Nothing to install for Track A — every tool ships with macOS.
