# Track 5 — Remote / server ops (Ubuntu focus)
Status: queued · Prereq: install **lnav** when starting R6
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

- [ ] R1. ssh config mastery — ~/.ssh/config Host blocks, ProxyJump bastions, ControlMaster connection reuse, -L/-R tunnels, key/agent hygiene.
- [ ] R2. Remote tmux — attach/reattach discipline on servers, nested-prefix strategy, clipboard back over SSH (OSC52).
- [ ] R3. systemd — systemctl status/restart/cat/enable, journalctl -u/-f/--since; reading a unit file without fear.
- [ ] R4. Processes & ports — ps/pgrep/pkill, ss -tlnp, lsof -i, signal semantics (TERM vs KILL vs HUP) and why kill -9 is a last resort.
- [ ] R5. Resources — btop/htop reading, what load average actually means, free/memory, df/du/ncdu disk-space hunts.
- [ ] R6. Logs at speed — tail -F vs -f, zgrep across rotated logs, lnav for navigating structured/multi-file logs.
- [ ] R7. curl properly — request anatomy with -v, headers/data/auth flags, --json; + jq = API debugging on any box.
- [ ] R8. Moving files — rsync's delta model, --dry-run habit, when scp is enough; pulling logs/dumps safely.
- [ ] R9. Ubuntu literacy — apt essentials, filesystem map (/etc, /var/log, /opt, /usr/local), PATH and env on servers vs your Mac.
