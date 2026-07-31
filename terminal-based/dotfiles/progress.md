# Track 4 — Dotfiles & provisioning
Status: queued (slotted after git — needs light git comfort, feeds directly into remote-ops; say "pull forward" to start sooner)
Tooling: **chezmoi** · Brewfile/`brew bundle` (Mac) · apt via run-scripts (Ubuntu) · age (secrets)
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

## Founding design decision (2026-07-28)
**One repo for every machine — differences live in template data, not repo boundaries.** Split repos (hardware vs remote, Mac vs PC) drift within months. Machine dimensions declared per host: `os` (darwin/linux) × `role` (workstation/server) × `ownership` (mine/shared). Remotes get a minimal server profile; shared/ephemeral boxes get `chezmoi init --one-shot` (apply once, no manager left behind) or nothing. Alternatives considered: Stow (no templating/provisioning), yadm (smaller ecosystem), bare git repo (no machine handling), Nix home-manager (parked → `revisit/`).

## Topics
- [ ] DF1. The three models — symlink farm (Stow) vs source-state copy (chezmoi) vs bare git repo; why templating beats branches/split repos; declare your machine taxonomy (os × role × ownership).
- [ ] DF2. chezmoi core loop — source dir, `add`/`edit`/`diff`/`apply`/`cd`, plain git underneath; migrate the real .zshrc/.tmux.conf/nvim config in; first push to GitHub.
- [ ] DF3. Templates — `.chezmoi.toml.tmpl` prompts on init, `{{ .chezmoi.os }}`/hostname/role conditionals; one .zshrc that renders correctly on Mac and Ubuntu.
- [ ] DF4. Profiles — role=workstation vs role=server; `.chezmoiignore` as a template (what a server never receives); keeping the server set deliberately small.
- [ ] DF5. Package provisioning — Brewfile + `brew bundle` on Mac; `run_onchange_` scripts reading one shared package list, brew vs apt per OS; tool lists as data files in the repo.
- [ ] DF6. Bootstrap — fresh machine in one command (`get.chezmoi.io` → `init --apply`); `run_once_` vs `run_onchange_` semantics and ordering; idempotency as the design rule.
- [ ] DF7. Secrets — what never enters the repo (keys, tokens, work identifiers); age encryption for the private few; password-manager template lookups as the clean path; local-only unmanaged files.
- [ ] DF8. Remote & ephemeral strategy — owned long-lived servers: full server profile; shared/ephemeral: `--one-shot` or fall back to vanilla-tool fluency (ties to shell-search A7 and remote-ops); user-level installs without root.
- [ ] DF9. Capstone — fresh Ubuntu container/VM → working environment (zsh + fzf/rg/fd/bat + tmux + minimal nvim) in one command; then round-trip one edit Mac → server via `chezmoi update`.
