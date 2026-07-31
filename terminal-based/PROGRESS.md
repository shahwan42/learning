# Terminal-Based Workflow — Study Project

Practical fluency in keyboard-centric terminal workflows for a working engineer — not specialist mastery. macOS local + Ubuntu remote. Tools must be performant, portable, well-supported.

## How sessions run
1. One concept at a time: mental model + why it works, not just what.
2. Prerequisites taught just-in-time → `prerequisites/notes/`.
3. One small realistic exercise → wait for the attempt → direct review.
4. A topic is marked done only after demonstrated understanding.
5. Interesting tangents get parked in `revisit/README.md`, not chased.

**Returning session:** read this file first → summarize where we stopped → offer: continue / switch track / revisit.
**Adjust anytime by saying:** "switch track" · "smaller/bigger exercises" · "go deeper on X" · "park this".

## Learner profile (assessed 2026-07-28)
- **Vim:** survival level (i, Esc, :wq, hjkl); real editing still in PHPStorm/VSCode. Has started fiddling with LazyVim.
- **Shell:** composes basic pipelines; scripting is copy-paste-and-tweak; job control not habitual.
- **Muscle memory:** none of the installed toolkit is daily habit yet — everything is aspirational.
- **Wants:** all four priority areas (shell/search, neovim, git, remote ops) → ordering below.
- **Stack reference:** `~/cli-toolkit-quickstart.md` (scenario reference for the installed tools).

## Tracks & order
| # | Track | Dir | Status | Why this order |
|---|-------|-----|--------|----------------|
| 1 | Shell & search | `shell-search/` | **active** | The composition layer every other tool builds on; fastest daily payoff; identical on servers |
| 2 | tmux + tiling | `tmux/` | queued | Small surface, config already built — the container all work runs in; + AeroSpace, same model at the desktop layer |
| 3 | Git workflows | `git/` | queued | lazygit/delta/gh: big daily wins, independent of vim skill |
| ∥ | Neovim | `neovim/` | **daily drill** | Motions need reps, not lectures — 10 min/day drill thread from day one; formal lessons ramp up after track 3 |
| 4 | Dotfiles & provisioning | `dotfiles/` | queued | chezmoi — one repo, machine-aware templates; makes every config from tracks 1–3 portable; feeds remote-ops |
| 5 | Remote/server ops | `remote-ops/` | parked (PROGRAM.md) | Builds on shell + tmux + dotfiles bootstrap; Ubuntu focus |
| 6 | DB & docs glue | `db-docs/` | parked (PROGRAM.md) | pgcli/Harlequin + glow/mermaid/jira-cli/mark; pull forward when work demands |

## Standing practice (micro-habits between sessions)
- File as a command argument → `Ctrl-T`. Stop typing paths.
- Moving around → `z <fragment>` for known places, `Alt-C` to descend from here; plain `cd` only for `..`.
- History → `Ctrl-R` always. Note when fuzzy beats exact — evidence for B1.

## Tooling decisions (2026-07-28)
- **Gap found in quickstart, promoted to Track 1:** fzf, ripgrep, fd, bat, eza, tealdeer, jq — the shell composition layer. All already installed, none documented in the quickstart, **fzf has no zsh wiring** (no Ctrl-R/Ctrl-T — Session 1 fixes this). zoxide is wired.
- **Adopted from blog posts:** bat, eza, tealdeer, btop (all installed). **lnav** to install when remote-ops starts — only missing tool.
- **Confirmed existing choices:** yazi over ranger, zoxide, tmux, lazygit — all sound.
- **Dotfiles manager: chezmoi** — single static binary (Mac + any Linux, no deps), per-machine templating (os × role × ownership), run_once/run_onchange provisioning, age-encrypted secrets, one-command bootstrap. Design decision: **one repo for all machines**; hardware-vs-remote is a role *profile*, not a repo split. Considered: Stow, yadm, bare git repo, Nix home-manager (parked).
- **Evaluated @TheGlobalMinima's X list (2026-07-29):** validates the existing stack (ghostty, lazyvim, tmux, zoxide, ripgrep). Adopted: **AeroSpace** (macOS tiling WM → tmux T8 — the missing keyboard layer above the terminal). Parked: herdr (agent multiplexer — learn tmux first), hunk (agent-diff TUI — lazygit/delta cover it), Raycast (Mac QoL, needs no lessons — install anytime). Skipped: superfile (yazi won), kitty (Ghostty settled).
- **Parked/skipped with reasons:** see `revisit/README.md` (atuin, starship, direnv, visidata, xh, herdr, hunk, raycast, taproom, mole, jolt, chafa, nix home-manager, mise, …).

## Session log
- **2026-07-28** — Assessment done, curriculum scaffolded, install audit run (all present except lnav; fzf unwired). **Next: Session 1 = shell-search A0 (wire fzf into zsh) + A1 (how the shell actually runs a command).**
- **2026-07-28 (later)** — Added Track 4 dotfiles & provisioning (chezmoi) at user request; one-repo/machine-aware design recorded in `dotfiles/progress.md`; remote-ops → 5, db-docs → 6.
- **2026-07-29** — Evaluated X post collection (@TheGlobalMinima): AeroSpace added as tmux T8; herdr/hunk/Raycast parked; superfile/kitty skipped.
- **2026-07-30** — **Session 1: A0 done.** fzf wired (`source <(fzf --zsh)`), Ghostty `macos-option-as-alt` fixed, Ctrl-R/Ctrl-T/Alt-C/`**`-Tab all verified. Demonstrated: two-worlds model, source-vs-child-process, process substitution, ZLE widgets. Note: `shell-search/notes/a0-shell-integration.md`. User confirmed ergonomic adoption (`nvim` + Ctrl-T, Alt-C + `nvim .`).
- **Session 2 (prepared):** A1 — how the shell runs a command: parse → expand → split → `$PATH` exec; why quoting bugs happen. If time/energy remains: N1 — the vim grammar (verb × noun), which unlocks the 10-min daily drill thread.
- **2026-07-29 (later)** — Full sweep of blog.starmorph.com (29 posts; 6 relevant, 23 off-purpose AI/web content). Added: A8 links & inodes (symlinks fundamentals); enriched B6 (yazi↔fd/rg/fzf/zoxide keys, plugin manifest as dotfiles data, tmux passthrough gotcha), T2 (pane surgery), T6 (display-popup; tmuxinator stays rejected — script is portable, no Ruby). Tailscale parked by user decision (see revisit). Curriculum intake is now CLOSED — **Session 1 next, no more collections before reps.**
- **2026-07-31** — **Less-Is-More program adopted** (root `PROGRAM.md`): this project owns the P1 Weekday-A slot + the daily nvim drill through Jan 2027; tracks 5–6 parked until work demands; the "intake CLOSED" rule above is now program-wide law. Next session unchanged: A1 (+N1 to ignite the drill).
