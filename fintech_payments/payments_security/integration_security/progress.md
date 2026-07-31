# Track 1 — Integration Security

Securing the seams between your platform and PSPs/banks: authenticating what comes in, never processing it twice, protecting credentials going out.

## Topics
| # | Topic | Status | Competency check |
|---|-------|--------|------------------|
| 1 | Webhook authentication | not started | Implement Stripe-style HMAC verification from scratch; explain why raw body, timestamp window, and constant-time compare each exist and what breaks without them |
| 2 | Idempotency & retries | not started | Design dedup for at-least-once delivery that survives concurrent duplicates (not just sequential ones); know where the unique constraint goes and why side-effect ordering matters |
| 3 | Event trust & state sync | not started | Explain the trust-the-event anti-pattern, fetch-on-notify, and how to handle out-of-order events without a message bus |
| 4 | API credentials & secrets | not started | Key scoping, rotation without downtime, env vs KMS, and the first hour after a key leaks |
| 5 | Outbound request security | not started | Sign your own API requests; when mTLS/IP allowlisting is worth it; SSRF via merchant-supplied callback URLs |
| 6 | Failure handling & observability | not started | DLQs, replay tooling, alerting on verification-failure spikes; distinguish "PSP is down" from "we're being probed" |

Synthesis exercise: design the complete inbound-webhook subsystem for a payments platform (auth, dedup, ordering, recovery, monitoring).

## Next
Exercise 00 (shared calibration) probes topics 1–3. Review decides where teaching starts.
