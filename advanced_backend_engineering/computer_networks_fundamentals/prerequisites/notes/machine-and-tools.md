# Machine & tools (macOS)

Exercises run on macOS — Linux-first guides need translation. Install nothing upfront; tools arrive just-in-time.

## Ships with macOS (Track A needs nothing else)

`curl`, `dig`, `host`, `nc`, `ping`, `traceroute`, `tcpdump` (needs `sudo`), `openssl` (LibreSSL build — a few flags differ from OpenSSL), `lsof`, `netstat`, `ifconfig`, `route`.

## Linux ↔ macOS translation

| Linux habit | macOS equivalent |
|-------------|------------------|
| `ss -tlnp` | `lsof -iTCP -sTCP:LISTEN -n -P` |
| `ip addr` / `ip route` | `ifconfig` / `netstat -rn`, `route get <host>` |
| `ss -s` counters | `netstat -s` |

## Install when first needed (brew)

- `mtr` — traceroute+ping combined (Track C).
- `wireshark` — GUI capture analysis when tcpdump output gets dense (C2).
- `docker` CLI — Colima is the runtime and `docker-compose` exists, but the `docker` CLI itself is **not installed** (`brew install docker`). Needed for D3 labs.

## Colima quirk (matters in Track D)

Containers live inside the Colima VM. Published ports are reachable from macOS via the VM's forwarding, and packet captures of container traffic happen *inside* the VM or containers — the mac's own interfaces never see bridge-network traffic.
