# Track B — HTTP & TLS: protocols you ship on

**Why:** you already use HTTP daily; this track replaces "it usually works" with wire-level understanding — enough to tune clients, read handshake failures, and pick protocol versions deliberately.

**Done when:** you can speak HTTP/1.1 to a server by hand, read TLS failures off `openssl s_client`, and justify your HTTP client's config (version, keep-alive, pool size, timeouts) instead of inheriting defaults.

| # | Topic | Status | Note |
|---|-------|--------|------|
| B1 | HTTP/1.1 on the wire: speak it by hand with `nc`; framing (Content-Length vs chunked); the headers that matter | queued — needs A1–A4 | |
| B2 | Connection reuse: keep-alive, pooling, head-of-line blocking; what curl/Guzzle actually do by default | queued | |
| B3 | TLS in practice: what the handshake establishes; certificates, chains, SNI; the standard failure zoo | queued | |
| B4 | HTTP/2: multiplexing over one connection, ALPN; what it fixes and what it hides | queued | |
| B5 | HTTP/3 & QUIC: why TCP itself became the bottleneck — awareness level | queued | |
| B6 | Caching: Cache-Control, ETag/If-None-Match, Vary; what proxies and CDNs do with your headers | queued | |
| B7 | WebSockets & long-lived connections: the Upgrade handshake; why proxies kill idle connections; SSE as the simpler cousin | queued | |

## Completed

_(nothing yet)_

## Next

Starts after Track A reaches A4 (TCP lifecycle) — B1 assumes it.
