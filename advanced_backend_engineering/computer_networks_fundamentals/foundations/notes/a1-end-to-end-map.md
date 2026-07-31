# A1 — The end-to-end map

**Mental model:** one HTTPS request is not one operation — it's a fixed four-phase pipeline. Each phase has its own protocol, its own error vocabulary, and its own tool.

| Phase | Job | Failure smell | Tool that proves it |
|-------|-----|---------------|---------------------|
| 1. DNS | name → IP address | `could not resolve host`, `getaddrinfo ENOTFOUND` | `dig` |
| 2. TCP | IP + port → byte stream (3-way handshake) | `connection refused` / `connection timed out` | `nc -vz host port` |
| 3. TLS | byte stream → authenticated, encrypted channel | certificate errors, `handshake failure` | `openssl s_client` |
| 4. HTTP | request → response (methods, headers, status codes exist only here) | 4xx/5xx, hang waiting for response | `curl -v` |

**refused vs timed out** (memorize this one): *refused* = a machine answered "nobody is listening on that port" (host reachable, service down/wrong port). *Timed out* = nothing answered at all (firewall drop, black hole, wrong network). This one distinction settles half of all "is it the firewall or the service?" arguments.

## Why it's layered

Each layer consumes the service of the one below and is blind to its implementation — HTTP doesn't know if TCP ran over Wi-Fi or fiber; TCP doesn't know it's carrying TLS. Two consequences:

- **Substitutability:** HTTP/3 swapped TCP for QUIC without websites changing. Same reason the stack survived 50 years.
- **Failures localize:** an expired certificate cannot cause a DNS error. So you never "debug the network" — you binary-search the pipeline.

## Practical consequences

- Error strings are phase names in disguise. Read the phase off the error before theorizing.
- Every phase costs ≥1 round trip before the first HTTP byte. That's why caching/reuse exists at *every* phase — DNS cache, TCP keep-alive, TLS session resumption — and why warm requests are fast.
- Client timeout knobs map to phases: Guzzle `connect_timeout` covers phases 2–3; `timeout` covers the whole pipeline. curl: `--connect-timeout` vs `--max-time`.
- A `504` means phases 1–4 all *succeeded* against something — a proxy — which then couldn't get an answer from what's behind it. Status codes can come from any box on the path, not just your app.
- "L4 vs L7 load balancer" = operates at phase 2 vs phase 4. Only OSI vocabulary needed for now.

## Timing the phases

```
curl -sS -o /dev/null -w 'dns  %{time_namelookup}\ntcp  %{time_connect}\ntls  %{time_appconnect}\nttfb %{time_starttransfer}\ntotal %{time_total}\n' https://example.com
```

Values are **cumulative from start**, not per-phase — subtract neighbors to get each phase's cost.

## Pitfalls

- Blaming the app for phase-1–3 failures (or DNS for phase-4 ones). The error text already told you.
- Assuming a status code came from your app. Proxies and load balancers speak fluent HTTP.
- Testing with a warm cache/connection and concluding "it's fast" — first-request cost is a different measurement.
