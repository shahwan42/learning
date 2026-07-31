# Track C — Auth Across Topologies

The stated core goal: how authn/z decisions change with system shape — MPA, SPA, BFF,
mobile, monolith, microservices, machine-to-machine — at fintech-grade standards.

Legend: ☐ todo · ▶ in progress · ✅ done

| # | Topic | Status | Why it matters |
|---|---|---|---|
| C1 | The topology map | ☐ | One decision framework: "where does identity terminate?" across every client/server shape (keystone mental model) |
| C2 | Server-rendered MPA | ☐ | Why session cookies are still right; scaling session state; production Laravel config |
| C3 | SPA + API | ☐ | The token-storage debate settled (memory vs localStorage vs cookies); XSS blast radius; CORS + credentials debugging |
| C4 | BFF & token handler | ☐ | Why fintechs put a backend in front of the browser; what the pattern costs |
| C5 | Mobile & native clients | ☐ | System browser + PKCE, secure storage, app-to-API specifics |
| C6 | Microservices: edge vs zero trust | ☐ | Gateway vs per-service validation; identity propagation options and their failure modes |
| C7 | Service-to-service identity | ☐ | Client credentials vs mTLS vs workload identity (SPIFFE, cloud IAM); secrets distribution |
| C8 | Partner & machine surface | ☐ | API keys done right, webhook signing + replay protection, idempotency interplay |
| C9 | Fintech-grade profiles | ☐ | FAPI, sender-constrained tokens (DPoP / mTLS-bound), step-up auth, audit requirements |
| C10 | Auth observability & ops | ☐ | What to log and never log, metrics that catch incidents early, key rotation, token-leak playbook |

**Next: C1** (after Tracks A–B; C1 can be previewed earlier on request)
