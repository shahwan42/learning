# Track B — OAuth2 / OIDC / SSO

Delegated access and federated identity: the flows, why each step exists, and how they
break. Keycloak (docker-compose) is the lab IdP.

Legend: ☐ todo · ▶ in progress · ✅ done

| # | Topic | Status | Why it matters |
|---|---|---|---|
| B1 | The delegation problem | ☐ | What OAuth2 is and is NOT (not authentication); the four roles; why passwords-for-APIs died |
| B2 | Authorization code + PKCE, line by line | ☐ | Every redirect and parameter's job (state, nonce, verifier); hand-rolled against Keycloak with curl |
| B3 | OIDC on top | ☐ | ID token vs access token (the universal confusion), claims, discovery; Socialite vs a real OIDC client |
| B4 | Client types & the grant zoo | ☐ | Confidential vs public, client credentials, device flow; why implicit and ROPC are dead |
| B5 | Protecting a resource server | ☐ | JWKS vs introspection, audience & scope checks; lab: Laravel API behind Keycloak |
| B6 | Enterprise SSO | ☐ | OIDC vs SAML (enough SAML to integrate), SP- vs IdP-initiated, multi-IdP tenanting |
| B7 | OAuth attack surface | ☐ | redirect_uri games, token leakage, mix-up attacks, callback CSRF; find-the-vuln exercises |
| B8 | Token exchange & delegation chains | ☐ | On-behalf-of, the act claim; feeds directly into Track C microservices |

**Next: B1** (after Track A, or on request)
