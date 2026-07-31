# Parked topics

Deferred, not discarded. Each entry says why it might earn its way back in.

| Topic | Why it matters / when to pull it back |
|-------|----------------------------------------|
| OSI 7-layer names beyond "L4 vs L7" | Vocabulary for talking to network engineers. The four-phase pipeline covers all debugging needs. |
| How resolvers walk the DNS hierarchy (root → TLD → authoritative) | Matters if you ever operate your own zones. A6 covers the client side, which is what breaks in practice. |
| BGP/OSPF routing internals | Network-operator territory. Traceroute literacy (A8) is the practical ceiling for app work — revisit if a cloud outage postmortem cites BGP. |
| Subnetting/CIDR arithmetic drills | D4 teaches just enough to read a VPC layout. Drills only if VPC design becomes your job. |
| Congestion-control algorithms (CUBIC vs BBR) | A5 covers observable behavior. Algorithm internals matter for CDN/transport tuning roles. |
| gRPC and HTTP-based RPC framing | Pull into Track B the day work adopts it between services. |
| Service mesh internals (Envoy, Istio) | D8 gives awareness. Go deeper only if work adopts a mesh. |
| IPv6 operations (dual-stack, happy eyeballs details) | A2 gives address literacy; operational IPv6 parked until it shows up at work. |
| ARP, Ethernet, switching | Surfaces briefly inside D3 (Docker bridges). Rarely debugged directly in cloud work. |
