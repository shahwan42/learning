# Track C — Debugging & failure patterns

**Why:** the payoff track. A and B knowledge compiles into a fixed diagnostic sequence you run instead of guessing.

**Done when:** "the API is slow/flaky" triggers a tool sequence, not a shrug — and you can prove which hop is at fault with output in hand.

| # | Topic | Status | Note |
|---|-------|--------|------|
| C1 | The toolbelt: which question each tool answers — `curl -v/-w`, `dig`, `lsof`, `ping`/`traceroute`/`mtr`, `tcpdump` | queued — needs A1–A6 | |
| C2 | Reading packet captures: tcpdump filters, following one TCP stream, spotting retransmits and resets | queued | |
| C3 | The timeout taxonomy: connect vs TLS vs read vs total; every hop has its own timer; how each expiry looks to the caller | queued | |
| C4 | Connection failures decoded: refused / timeout / reset / no-route / DNS failure — what each proves, what to check next | queued | |
| C5 | Latency forensics: `curl -w` waterfall, TTFB, handshake costs, cold vs warm paths, RTT arithmetic | queued | |
| C6 | DNS failures in production: TTLs, resolver differences (host vs container), negative caching | queued | |
| C7 | Running out of connections: ephemeral ports, TIME_WAIT pileups, accept queues, pool sizing — the 503-under-load family | queued | |
| C8 | MTU/MSS weirdness: "small requests work, big ones hang" — VPNs, fragmentation, PMTUD black holes | queued | |
| C9 | Observing the network layer: per-service golden signals — connection errors, handshake time, TTFB, retransmits | queued | |

## Completed

_(nothing yet)_

## Next

Opens after A6 (DNS). C1–C5 interleave well with Track B.
