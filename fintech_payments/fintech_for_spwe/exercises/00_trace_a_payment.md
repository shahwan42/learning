# Exercise 00 — Trace a payment (calibration)

Assigned 2026-07-26 · Track: cards · Topic 0
Deliberately given **before** any lesson: your cold answer maps where your depth actually is.

## Scenario
A customer in Riyadh buys 100 SAR of goods on an e-commerce site.
Card: a Visa **credit** card issued by SNB. The merchant integrates a PSP
(Moyasar/HyperPay/Stripe-style) that sits on top of a local acquiring bank.

## Answer in bullets — imprecision is fine, wrong guesses beat omissions
1. **Authorization**: list the actors the auth request passes through, in order, from checkout click to "approved" on screen.
2. The instant the customer sees "payment successful": **has any money moved anywhere?** Where does the 100 SAR "live" right now?
3. By the time the merchant can actually spend the money: list every balance/ledger you think changed along the way (who owes whom — fees can be hand-waved as ~2.5% total).
4. Mark the steps you were **least sure** about. That's calibration data, not failure.
