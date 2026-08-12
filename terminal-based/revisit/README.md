# Parked — interesting, not essential now

Deferred on purpose so tracks stay focused. Each entry: what, why parked, when to un-park.

## Likely future adds
- **atuin** — SQLite-backed shell history with search + cross-machine sync. Mature, large community. Un-park once fzf Ctrl-R is habit; it's a strict upgrade if you want history synced Mac↔servers.
- **starship** — fast portable prompt (git/lang context in the prompt itself). Cosmetic but genuinely useful; add after core habits so it's signal, not decoration.
- **direnv** — auto-load per-directory env vars. Un-park when juggling multi-env secrets/configs starts to bite.
- **visidata / csvlens** — tabular-data exploration TUIs. Un-park when CSV/data wrangling recurs. visidata = deep tool, csvlens = quick viewer.
- **xh (or httpie)** — ergonomic curl alternative for local use. Deliberately after curl: curl is on every server you'll ever touch, so it's the skill; xh is the comfort.
- **dust / duf / procs** — Rust replacements for du/df/ps. Nicer output, but servers have the classics — learn those first (A9 owns disk forensics; remote-ops R4/R5 own processes + saturation triage), then adopt these locally if wanted. **2026-08-11:** stay parked at least until A9 (disk forensics, built-ins only) is demonstrated — A9 deliberately trains `du`/`df`/`find`/`lsof` because they exist on every box you'll ever ssh into. Post-A9, adoption (incl. ncdu) is a revisit/ decision, not a lesson.
- **Omarchy / Hyprland** — DHH's opinionated Arch + Hyprland distro; appreciated for its ergonomics (2026-08-11). The transferable parts are **absorbed into the curriculum**: theme-as-data → DF13, keyboard-tiling conventions → AeroSpace T8's design reference, provisioning/migration patterns → DF7/DF8/DF14 reference material (`basecamp/omarchy` + the Omarchy Manual). Hyprland itself needs real hardware — a Wayland compositor in a VM on macOS is friction, not ergonomics. Un-park trigger: a spare box or a Linux-as-main-machine decision materializes; Omarchy is then the ready-made distro bet.
- **Nix + home-manager** — the maximalist dotfiles/provisioning answer: fully declarative packages *and* config, byte-reproducible machines. Parked: an entire ecosystem to absorb for what chezmoi covers practically. Un-park only if reproducibility becomes a passion, not a need. **2026-08-11: the passion trigger arguably fired** (Track 4 redesigned as reproducible environments) — **deliberately held anyway** in favor of the chezmoi + multipass + devcontainers stack, which feeds the goals directly. Re-evaluate at terminal-based's exit gate. Sanctioned middle path if the itch persists: one taste lesson on `nix develop` per-project dev shells, no home-manager/NixOS adoption.
- **mise** — polyglot runtime/version manager (php/node/python per project, replaces nvm & friends). Adjacent to provisioning, not dotfiles; un-park when per-project runtime juggling starts to bite.
- **yadm** — closest chezmoi competitor (git-wrapper + alternates model). Revisit only if chezmoi's copy-not-symlink model ever chafes.
- **herdr** — Rust "agent multiplexer": tmux-like TUI purpose-built for orchestrating parallel AI coding agents (agent-state aware; workspaces/tabs/panes). Young (~2025) but fast-growing, and it targets a workflow you actually run (Claude Code per worktree). Parked deliberately: learn tmux properly first — it covers the pattern; un-park if parallel-agent work outgrows tmux windows. Source: @TheGlobalMinima's list. **2026-08-11 re-evaluation** (state as researched, not independently verified: ~15K stars, #1 GitHub Trending 2026-06-30, now a true client-server multiplexer — sessions survive disconnects, SSH-tunnel remote — plus an agent-orchestration socket API; still single-developer, ~3.5 months old in current form): **graduated from parked to a sanctioned one-lesson taste, T9 in the tmux track, unlocked after T5.** Verdict: tmux stays the spine (guaranteed on every server and the VM; flaky-internet detach/reattach); herdr is the *local agent cockpit* candidate. Composition, not replacement — not load-bearing until it survives longer than a hype cycle.
- **hunk** — review-first TUI diff viewer for agent-authored changesets (multi-file stream, watch mode, annotations). Young; git track G4/G5 (delta/difftastic + lazygit hunk review) covers the need. Un-park if agent-diff review volume outgrows lazygit. Same source.
- **Raycast** — Mac launcher/command palette. Native and fast (not Electron), huge ecosystem — but GUI and Mac-only, so outside CLI scope. Verdict: aligned with the keyboard-centric goal, zero curriculum needed — install whenever, it teaches itself. Same source.
- **Tailscale** — WireGuard mesh VPN: stable names + direct encrypted reach for every device you own (`tailscale ssh`, MagicDNS, Taildrop). Huge community, free 100-device tier, Mac/Linux/mobile. Parked by explicit decision 2026-07-29: network infrastructure rather than a keyboard skill, and work servers aren't yours to install VPNs on. Un-park when personal multi-device pain is real (2nd MacBook/PC/home server) — it then pairs perfectly with chezmoi bootstrap (DF6): any owned device reachable and provisioned in minutes.

## Skipped deliberately (from the blog posts)
- **ranger** — superseded by yazi (same paradigm, faster, actively maintained). Already chose right.
- **superfile** — pretty Go TUI file manager (2024); younger and less capable than yazi, which is already chosen.
- **kitty** — the longer-history Ghostty alternative. Nothing to gain while Ghostty serves; the fallback if it ever chafes.
- **chafa** — terminal image rendering; Ghostty's graphics protocol + yazi previews already cover the need.
- **taproom** — Homebrew TUI browser; young project, `brew search`/`brew info` suffice.
- **mole, jolt** — macOS maintenance/hardware niche; not workflow tools, small communities.
- **ttyper** — typing-test warmup. Fun, not curriculum.
- **LLM Fit / Models CLI / Pixelmuse / Forage / crates-tui** — niche or unrelated to these goals.

## Deferred topics (not tools)
(grows during sessions — anything interesting we park mid-lesson lands here with one line on why it matters)
