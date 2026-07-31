# Track D — Infrastructure: proxies, containers, cloud

**Why:** this is where your requests actually live at work — every hop between the internet and your Laravel process, each able to fail independently.

**Done when:** you can trace one request edge → LB → proxy → container → app, explain every IP and port it sees along the way, and place any 502/504 without guessing.

| # | Topic | Status | Note |
|---|-------|--------|------|
| D1 | Reverse proxies: what nginx does to your request — buffering, X-Forwarded-For and real client IPs, upstream timeouts; L4 vs L7 | queued — needs B1 | |
| D2 | Load balancing: algorithms, health checks, connection draining; the 502/504 root-cause catalogue (idle-timeout mismatch and friends) | queued | |
| D3 | Docker networking: bridge networks, port publishing, container DNS; why `localhost` lies inside a container | queued | |
| D4 | AWS VPC: subnets, route tables, IGW/NAT gateway; security groups vs NACLs (stateful vs stateless) | queued | |
| D5 | Cloud load balancers: ALB vs NLB, target groups, timeout/keep-alive tuning against upstreams | queued | |
| D6 | Kubernetes networking: Services, kube-proxy, ingress, cluster DNS — enough to debug, not to operate | queued | |
| D7 | CDNs & edge: cache keys, origin pulls, TTL vs purge; deciding what belongs at the edge | queued | |
| D8 | Service-to-service: discovery, retry/timeout budgets at the infra level; service-mesh awareness | queued | |

## Completed

_(nothing yet)_

## Next

Opens after B1. Any topic can be pulled forward when a work problem calls for it — this track tolerates reordering best.
