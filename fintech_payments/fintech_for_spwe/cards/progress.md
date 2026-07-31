# Track 1 — Cards & acquiring

Status: **in progress** · started 2026-07-26

Done = you can answer the gate question cold, interview-style. `—` not started · `◐` in progress · `✓` done · `»` fast-tracked (answered cold).

| # | Topic | Gate question | Status |
|---|-------|---------------|--------|
| 0 | Calibration: trace a payment | Trace a 100 SAR online card payment end-to-end. Where is the money at each step? | ◐ assigned |
| 1 | Four-party model & the acquiring stack | Issuer / acquirer / network / PSP — who carries which risk, and why do fees exist at all? | — |
| 2 | Auth → capture → clearing → settlement | Why is "payment succeeded" four different events? What is an auth hold, and when does it lie? | — |
| 3 | Payment state machines & webhooks | Design the payment states and an idempotent webhook consumer that survives out-of-order + duplicate events | — |
| 4 | The timeout problem | Your charge request timed out. Did it happen? What must the client, PSP, and your DB each do? | — |
| 5 | Refunds, voids, reversals | Why can a refund fail after a successful charge? Void vs refund vs reversal — when does each apply? | — |
| 6 | 3DS / SCA | What does 3DS actually exchange, and when exactly does fraud liability shift? | — |
| 7 | Chargebacks & disputes | Full dispute lifecycle with deadlines. What must engineering have stored to win representment? | — |
| 8 | Fees & interchange | Interchange++ vs blended. On a 100 SAR sale, who earns what and who set those prices? | — |
| 9 | Tokenization & PCI scope | Network tokens vs PSP tokens. What specifically keeps a codebase out of PCI scope? | — |

MENA mapping woven in: mada as domestic scheme + local acquirers/PSPs (t1), mada online + 3DS in KSA (t6), SAMA PSP licensing (deferred to track 4). Co-badge routing rules → parked in revisit.
