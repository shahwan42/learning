# Track A — Foundations

What actually happens when a request is authenticated: sessions, credentials, tokens.
Laravel is the running example; internals over configuration.

Legend: ☐ todo · ▶ in progress · ✅ done

| # | Topic | Status | Why it matters |
|---|---|---|---|
| A1 | Session anatomy & cookie mechanics | ☐ | What Set-Cookie attributes really do; Laravel's session guard end-to-end; the "random logout" bug family |
| A2 | CSRF | ☐ | Why browsers make it possible, how SameSite changed the math, when token APIs genuinely don't need it |
| A3 | Password storage & login hardening | ☐ | bcrypt/argon2 cost tuning, user enumeration, credential stuffing, rate limiting that works |
| A4 | API tokens & keys done right | ☐ | Opaque vs structured, hashing tokens at rest, Sanctum internals critique |
| A5 | JWT anatomy & the validation checklist | ☐ | Signature schemes, JWKS, alg confusion, clock skew; debugging tooling |
| A6 | Token lifecycle | ☐ | Expiry, refresh rotation, the stateless-revocation problem, SPA refresh races |
| A7 | Stateful vs stateless sessions | ☐ | The real tradeoff table; hybrid patterns; when "JWT as session" is wrong |
| A8 | MFA | ☐ | TOTP mechanics, recovery codes, remember-device, step-up intro; passkeys overview (deep dive parked) |

**Next: A1**
