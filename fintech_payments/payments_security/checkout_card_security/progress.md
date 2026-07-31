# Track 2 — Checkout & Card Security

Keeping card data out of your systems, and authenticating the cardholder when it matters.

## Topics
| # | Topic | Status | Competency check |
|---|-------|--------|------------------|
| 1 | PCI scope mental model | not started | Trace where the PAN flows in hosted-fields vs direct-API integration; map to SAQ A / A-EP / D; name three scope-creep traps (logs, support tools, analytics) |
| 2 | Tokenization | not started | PSP tokens vs network tokens, single- vs multi-use, vaulting tradeoffs; how a token leaking differs from a PAN leaking |
| 3 | 3DS2 & SCA | not started | Frictionless vs challenge flow, what liability shift actually transfers, when to force 3DS vs use exemptions; regional flavors (mada OTP) |
| 4 | Client-side attack surface | not started | Magecart/skimming anatomy; CSP, SRI, iframe isolation; PCI DSS 4.0 script-integrity requirements (6.4.3 / 11.6.1) |
| 5 | Declines & 3DS debugging | not started | Read decline/3DS error taxonomies; retry policies that don't amplify fraud; debug a failing 3DS flow from logs |

Synthesis exercise: design checkout for a platform that must never touch a PAN — including the support-tooling and logging story.
