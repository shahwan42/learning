# Track 4 — Vaulting, tokens & PCI scope

Who holds the card, which token works where, and what that does to your compliance surface.

| # | Topic | Gate question (answer cold → skip) | Status |
|---|-------|------------------------------------|--------|
| 4.0 | Token taxonomy — PAN, PSP token, vault token, network token; portability of each | A card is saved via PSP A; the next payment routes to PSP B. Which token makes that work, and how? | not started |
| 4.1 | Vault placement — PSP vault vs third-party (VGS, Basis Theory) vs own CDE; SAQ/PCI scope per option; SAMA data-residency angle | What changes in your PCI scope when the vault moves from the PSP to your own infra? | not started |
| 4.2 | Network tokens in practice — provisioning, cryptograms, lifecycle/card-updater, auth-rate effects | The plastic expired but the network token still authorizes — why, and what does that change for recovery/dunning flows? | not started |
| 4.3 | Authentication in orchestration — 3DS ownership (PSP-run vs standalone 3DS server), portability of auth results across PSPs, exemptions | You run 3DS with PSP A, then try to authorize on PSP B. What breaks? | not started |
| 4.S | Synthesis — ADR: vault architecture for the multi-PSP setup | — | not started |
