# Terminal-Based Workflow — Study Project

> **Career-leverage status (2026-08-18): JIT.** This is no longer an active curriculum. Resolve concrete workflow friction only; `PROGRAM.md` and `CURRENT.md` own the active path. Existing uncommitted exercise work remains valid and untouched.

Practical fluency in keyboard-centric terminal workflows for a working engineer — not specialist mastery. macOS host + Ubuntu (multipass VM now, remote servers later). Tools must be performant, portable, well-supported.

## The devbox pattern (v3, 2026-08-12)

**The Mac is and stays the primary machine — the seat.** Ghostty, the browser, file browsing, day-to-day GUI apps, and this learning repo live on it, always. **The VM is the dev box:** dev toolchains, work code, and docker-compose-based project envs run inside it (Docker-on-Mac pain is a named driver). Nothing relocates — the curriculum teaches the **two-machine ergonomics** that make seat ⇄ devbox feel like one keyboard-centric machine. The devbox is location-agnostic by design: local multipass VM today, remote VPS later, same one-command bootstrap, any host.

- **Rung 1 — foundations (Mac):** Track 1 + DF1–DF4; then DF5–DF9 build the devbox (R1a ssh prereq rides along).
- **Rung 2 — seat ⇄ devbox** (after DF9 is demonstrated — credentialed, pushable): DF10–DF14, tmux, git default to *targeting* the devbox, always driven from Ghostty on the Mac. Pure shell/search topics keep the A9 mechanic — taught on the Mac + a 10-min Linux rep in the VM when platform-sensitive (*two receipts, one checkbox*).
- **Rung 3 — devbox anywhere:** Track 5 un-parks (trigger in PROGRAM.md's PARK table), then the identical pattern points at a remote VPS.
- **Devbox down ≠ session lost:** the lesson runs on the Mac, the Linux rep defers. The Mac profile stays chezmoi-managed and DF14 exercises *both* targets.
- **Guiding question, answered empirically over Track 4** (not pre-decided): *which host dotfiles earn a place in the devbox profile?* Expected shape, to be tested via os × role templates (DF3): shell/tmux/nvim/git render on both roles; Ghostty/AeroSpace/GUI stay host-only.
- Day-job work moving into the devbox is **deferred to the Jan-2027 tools-contract decision** — JetBrains Gateway friction in the A-rating year is not a risk to take by accident.

## How lessons run (pull mode — the generic protocol lives in `../PROGRAM.md`, conventions in `../AGENTS.md`)
1. One concept at a time: mental model + why it works, not just what.
2. Prerequisites taught just-in-time → `prerequisites/notes/`.
3. One small realistic exercise → wait for the attempt → direct review. Code is written by hand (PROGRAM.md Law 9).
4. Every review closes with the three-line block — `residue:` (the next `[craft]` pull opens with it, cold, ≤2 min) · `edges:` (one cross-layer edge from memory → its Law-6 home) · `work hook:` (this week, or "none").
5. A topic is marked done only after demonstrated understanding; **every pull ends in a commit either way** — subject carries tag + counter: `[craft] <topic>: <outcome> (<module> n/N)`.
6. Interesting tangents get parked in `revisit/README.md`, not chased.

**On "next lesson" (local defaults):** first pull = **A9 disk forensics** (instant payoff; frees disk for the Ubuntu VM image). **N1 is a standalone immediate pull too** — 20 min, ignites the daily drill. Thereafter the default is the lowest unchecked DF topic in Track 4. **Setup-bearing topics carry a `PREP:` line — check it before starting; unmet prep → tonight's pull is the other lane or the fallback.** **20-minute fallback (Lane A): the lowest unchecked shell Module A topic** (A1 is written and waiting). On explicit request only: other Track 1 topics · AeroSpace T8 (pull-eligible now) · DF13 theme-as-data (unlocks after DF3). After DF14, the default passes to tmux (T1…), then git. herdr taste (T9) unlocks after T5.
**Adjust anytime by saying:** "switch track" · "smaller/bigger exercises" · "go deeper on X" · "park this".
**Each pull's session-log line ends with `next default: <topic>` + its `PREP:` line verbatim, if any** — prep runs tonight, not at the next 9pm.

**Head inventory (v3 baseline, 2026-08-12):** 50 lessons remaining ≈ 35–40h — 17 shell (A1–A9, B1–B8) · 9 tmux (T1–T8 + T9 herdr) · 10 git · 14 DF. (+9 remote-ops ≈ +8h if Track 5's trigger fires.) Reference exit window at 2–3 *total* pulls/week with Lane A getting ~half: **~Apr–Aug 2027**. The monthly review counts demonstrations against this line.

## Learner profile (assessed 2026-07-28)
- **Vim:** survival level (i, Esc, :wq, hjkl); real editing still in PHPStorm/VSCode. Has started fiddling with LazyVim.
- **Shell:** composes basic pipelines; scripting is copy-paste-and-tweak; job control not habitual.
- **Muscle memory:** none of the installed toolkit is daily habit yet — everything is aspirational.
- **Wants:** all four priority areas (shell/search, neovim, git, remote ops) → ordering below.
- **Stack reference:** `~/cli-toolkit-quickstart.md` (scenario reference for the installed tools).

## Tracks & order
| # | Track | Dir | Status | Why this order |
|---|-------|-----|--------|----------------|
| 1 | Shell & search | `shell-search/` | active (just-in-time pulls; A9 = first pull) | The composition layer every other tool builds on; fastest daily payoff; identical on servers |
| 2 | tmux + tiling | `tmux/` | queued (default after Track 4; T8 pull-eligible now) | Small surface, config already built — the container all work runs in; + AeroSpace, same model at the desktop layer |
| 3 | Git workflows | `git/` | queued | lazygit/delta/gh: big daily wins, independent of vim skill. Optional REDUCE 10→5 if date guards loom (monthly-review decision) |
| ∥ | Neovim | `neovim/` | **daily drill** | Motions need reps, not lectures — 10 min/day drill thread from day one; formal lessons ramp up after track 3 |
| 4 | Reproducible environments | `dotfiles/` | **active** (redesigned Linux-first 2026-08-11; devbox pattern 2026-08-12) | chezmoi + multipass Ubuntu VM + compose-first project envs — three rebuildable layers, offline-resilient; builds the devbox. Day-job git satisfies the old "after git" prerequisite |
| 5 | Remote/server ops | `remote-ops/` | parked (PROGRAM.md) — **trigger: devbox in daily lesson use (DF9 demonstrated)** | Rung 3: R9 opener, server ops against the VM first, VPS later. R1a rides earlier as a DF5/DF6 prereq |
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
- **2026-08-11** — **Program v2 adopted** (root `PROGRAM.md`): single-path serial queue + pull cadence ("next lesson", any day, auto-commit receipt); this project is queue head. Track 4 redesigned as **Reproducible environments** (Linux-first: minimal Mac host profile → multipass Ubuntu VM → devcontainers; chezmoi spine; Nix stays parked) — see `dotfiles/progress.md`. **A9 disk-space forensics** (built-ins only) added to shell-search. AeroSpace T8 pull-eligible now; T9 herdr taste added (unlocks after T5); DF13 theme-as-data unlocks after DF3. Head inventory baselined: 50 lessons ≈ 35–40h, exit window Dec 2026–Feb 2027. **Next pull: A9, then DF1.**
- **2026-08-12** — **Program v3 adopted** (root `PROGRAM.md`): two-lane mode — this project is **Lane A head** (`[craft]` receipts), alternating with accounting (Lane B). **Devbox pattern** defined above: seat stays the Mac, VM is the dev box, two-machine ergonomics is the curriculum; rung 2 starts after DF9; Track 5 re-triggered on the devbox being in daily use (R1a split out as a DF5/DF6 prereq; R5's disk half deleted — A9 canonical). DF11 re-aimed compose-first. Law 9 (by-hand) now governs all code exercises. Exit window restated for half rate: ~Apr–Aug 2027. **Next pulls: A9 (exercise), then N1 to ignite the drill.**
