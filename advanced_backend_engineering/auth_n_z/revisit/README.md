# Revisit — parked topics

Deferred, with why they'd matter. Pull one in when it becomes load-bearing.

| Topic | Parked because | Would matter when |
|---|---|---|
| WebAuthn / passkeys internals | A8 covers the model only, not the ceremony/attestation details | Building passwordless login for real |
| SAML internals (XML-DSig, canonicalization attacks) | B6 teaches "enough to integrate" | An enterprise customer forces a SAML edge case |
| SCIM provisioning | Adjacent to SSO, not auth core | Customers demand automated user sync |
| JWE (encrypted JWTs) | Signing covers most real needs | Claims must be hidden from the client itself |
| HSM / KMS internals | Using them is enough at this level | Designing key ceremonies or compliance demands it |
| Kerberos / Active Directory | Corporate-network auth, different world from this stack | Integrating with on-prem AD |
| OAuth 2.1 / GNAP | Still consolidating; Track B teaches current best practice, which is what 2.1 codifies | It ships / an SDK adopts it |
