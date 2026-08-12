# Track 5 — Remote / server ops (Ubuntu focus)
Status: **parked** (PROGRAM.md PARK table) · **Re-entry trigger: the devbox is in daily lesson use (DF9 demonstrated) — insertion at the next monthly review** · Prereq: install **lnav** when starting R6
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

**Rung 3 of the devbox pattern** (see `../PROGRESS.md`): server ops against the multipass VM first — a box you own and may break — then the identical pattern pointed at a remote VPS. **Default order once un-parked: R9 (opener) → R3 → R4 → R6 → then R2 / R7 / R8 / R5 as they become useful; R1b just-in-time when a real bastion/tunnel need appears.**

- [ ] R1. ssh mastery — **split 2026-08-12:** *R1a* (`~/.ssh/config` Host blocks, key/agent hygiene, ControlMaster) moved to a **just-in-time prerequisite at DF5/DF6** (`../prerequisites/notes/`) — the devbox needs it long before this track runs. *R1b* (ProxyJump bastions, `-L`/`-R` tunnels) stays here; its referent arrives with the VPS (or a tunneled service — see DF10's browser note).
- [ ] R2. Remote tmux — attach/reattach discipline on servers, nested-prefix strategy, clipboard back over SSH (OSC52).
- [ ] R3. systemd — systemctl status/restart/cat/enable, journalctl -u/-f/--since; reading a unit file without fear.
- [ ] R4. Processes & ports — ps/pgrep/pkill, ss -tlnp, lsof -i, signal semantics (TERM vs KILL vs HUP) and why kill -9 is a last resort.
- [ ] R5. Resource-saturation triage — *which* resource is the bottleneck: btop/htop reading, what load average actually means (runqueue incl. uninterruptible sleep), free/memory. **Disk capacity deleted from this topic — A9 (shell-search) is canonical** (Law 6/5), including its VM rep.
- [ ] R6. Logs at speed — tail -F vs -f, zgrep across rotated logs, lnav for navigating structured/multi-file logs. **PREP: install lnav.**
- [ ] R7. curl properly — request anatomy with -v, headers/data/auth flags, --json; + jq = API debugging on any box.
- [ ] R8. Moving files — rsync's delta model, --dry-run habit, when scp is enough; pulling logs/dumps safely.
- [ ] R9. Ubuntu literacy — **rung-3 opener.** apt essentials, filesystem map (/etc, /var/log, /opt, /usr/local), PATH and env on servers vs your Mac.
