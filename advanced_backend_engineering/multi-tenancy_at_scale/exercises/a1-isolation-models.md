# Exercise A1 — Isolation models

**Context:** you run a Foodics-like platform — 40,000 restaurant tenants, pooled MySQL (shared schema, `business_id`), one region, ~25 engineers.

Three things land in the same quarter. For each, state: **which model or hybrid move you'd reach for, its main operational cost, and one thing you'd refuse to do.** A few sentences each — decisions and reasons, not essays.

1. **The whale.** A 900-branch enterprise chain (20× your biggest current tenant) is in final contract talks. Their security team requires "separation of our data from other customers" and a dedicated restore SLA: their data restorable to any point in the last 30 days without touching anyone else's.

2. **Residency.** A new regulation requires tenants in one country to store data in-country. 3,000 existing tenants are there. You run one region today.

3. **Analytics.** Product wants dashboards comparing each tenant against anonymized peer benchmarks (median prep time, revenue per seat, …) computed across *all* tenants. Does your answer to #1 or #2 break this? What do you do about it?

Write answers here or reply in chat.

## Attempt

*(yours)*
