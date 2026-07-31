# Auth N+Z — Study Project

Authentication & authorization for practical backend development. Sibling of
`../study-project/` (systems) and `../software_design/` (design). Exercises: PHP 8.3 /
Laravel primary; Django/NestJS appear in critique exercises only. Labs run on
docker-compose (Keycloak, OpenFGA).

## Calibration (assessed 2026-07-26)

- Hands-on with all of: session auth, API tokens/JWT, OAuth2/OIDC, SSO/IdPs — but
  self-assessed **wire-up level**: configures guards/middleware, internals fuzzy.
  So every topic starts at mechanics; broad exposure is not assumed knowledge.
- Drivers: fintech-grade production security standards; how authn/z changes across
  topologies (MPA, SPA, BFF, API, monolith, microservices, M2M, network layout);
  debugging & incidents; security instincts; enterprise integrations.
- AuthZ scope: solid basics → multi-tenant → fine-grained, plus cross-framework
  critique (Laravel vs Django vs NestJS).
- Practical fluency, not specialist mastery. No deadline.

## Teaching loop

One concept per session: mental model + why it works → one small realistic exercise →
wait for the attempt → direct review → progress updated only on demonstrated
understanding. Prerequisites taught just-in-time (`prerequisites/notes/`). Tangents
parked in `revisit/README.md`.

## Tracks

| Track | Scope | Status |
|---|---|---|
| [A — Foundations](a_foundations/progress.md) | sessions, cookies, CSRF, credentials, tokens, JWT, MFA | ▶ next: A1 |
| [B — OAuth2 / OIDC / SSO](b_oauth_oidc/progress.md) | delegation flows, resource servers, enterprise SSO, attack surface | ☐ not started |
| [C — Topologies](c_topologies/progress.md) | auth across MPA/SPA/BFF/mobile/microservices/M2M; fintech profiles; ops | ☐ not started |
| [D — Authorization](d_authorization/progress.md) | RBAC→ReBAC, framework critique, multi-tenancy, IDOR, policy engines | ☐ not started |

Recommended order: **A → B → C**, with **D interleaving any time after A**. C is the
destination — A and B exist so C's tradeoffs are judgeable rather than memorizable.

## Conventions

- Exercises live in `exercises/<id>_<slug>/` (e.g. `exercises/a1_session_anatomy/`).
- Build exercises: Laravel. Critique exercises: read/review Django or NestJS code, no setup.
- Machine: `docker-compose` available but `docker` CLI not installed; no local
  mysql/redis CLIs; TablePlus installed.
- Notes hold durable mental models, APIs, and pitfalls — not session transcripts.
  Written when a topic completes.

## Session log

- **2026-07-26** — Project created, assessment done. Nothing taught yet; A1 queued.

---

## Program note (2026-07-31 — Less-Is-More program)

REDUCED under the 24-month program. Slot ownership, laws, and sequencing live in `PROGRAM.md` at the learning root; this file keeps only session mechanics.
- **Surviving scope:** ~6 topics, interview-breadth selection only.
- **Runs:** P3b breadth queue (Weekday-B), Oct 2027 – Jan 2028.
- Everything else here is dead weight — never scheduled; resurrect only via `SOMEDAY.md` + Law 1.
