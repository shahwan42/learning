# Track A — Foundations: how bytes move

**Why this track first:** every error string, timeout knob, and infra doc assumes this map. With it, "the network is flaky" stops being a shrug and becomes a short checklist.

**Done when:** given any network error string or slow request, you can name the pipeline phase that produced it and the one command that proves it — without guessing.

| # | Topic | Status | Note |
|---|-------|--------|------|
| A1 | The end-to-end map: DNS → TCP → TLS → HTTP as a debugging checklist | **taught — exercise pending** | [notes](notes/a1-end-to-end-map.md) |
| A2 | IP, ports, sockets: a connection is 4 numbers; what "listening" actually means; `lsof`/`netstat` | queued | |
| A3 | TCP vs UDP: streams vs datagrams; what TCP promises and what those promises cost | queued | |
| A4 | TCP lifecycle: handshake, FIN vs RST, TIME_WAIT; decoding refused / reset / timed-out | queued | |
| A5 | TCP data flow: ACKs, retransmission, windows; why throughput ≠ bandwidth | queued | |
| A6 | DNS: resolution path, the records that matter, TTL and caching; `dig` fluency | queued | |
| A7 | NAT & private networks: RFC1918, port forwarding, connection tracking — the bridge to Docker and VPCs | queued | |
| A8 | Routing, just enough to read `traceroute`: gateways, hops, where latency lives | queued | |

## Completed

_(nothing yet)_

## Next

A1 exercise review → A2.
