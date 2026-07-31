# Revisit — parked topics

Real but nonessential-for-now. Each entry says why it matters, so future-you can judge whether to pull it forward.

| Topic | Why it matters | Pull forward when |
|---|---|---|
| Connascence, full taxonomy (static vs dynamic, contranascence) | Precise review vocabulary; the degree table in `foundations/notes/coupling.md` is the useful 80% | You want to argue design in writing/ADRs |
| DDD tactical patterns (aggregates, repositories as collections, domain events) | Powerful for complex invariants; overkill and cargo-culted in most CRUD services | You hit a domain with real multi-entity invariants |
| Deptrac configuration in depth | Makes layering CI-enforced instead of a review opinion | After track 2 (boundaries) — pointless before you have layers |
| CQRS / event sourcing | Solves specific read/write asymmetry and audit needs; usually a large accidental cost | You have a genuine read-model or audit-trail requirement |
| Hexagonal architecture as a full project layout | The ports/adapters *idea* lands in track 2; the full folder ceremony is a separate decision | Greenfield service, or after track 4 |
| Formal SOLID drilling | Mostly derivable from coupling/cohesion/direction; learning it as five slogans produces over-abstraction | You need the shared vocabulary for a specific team/review culture |
