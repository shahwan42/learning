# A0 — Shell integration: why installed ≠ wired

**Two worlds.** Binaries live on the filesystem (`$PATH`) — any program can run them. Aliases, functions, and keybindings live in a shell *process's memory* — only code executed by that shell can create them. No installer can reach into a running process.

**.zshrc = per-process wiring.** Every interactive zsh starts with default state and runs `~/.zshrc`. Every tmux pane and every SSH login is a fresh process, so the wiring re-runs each time — and remote boxes read *their own* .zshrc (→ dotfiles track).

**source/eval vs running a script.** A script runs in a child process; whatever it defines dies with it. `source` executes code in the *current* process. `source <(fzf --zsh)`: fzf **prints** zsh code → process substitution `<(...)` exposes that output as a file-like path → source runs it here. Regenerated every startup; nothing on disk to go stale. Same pattern: `eval "$(zoxide init zsh)"`.

**What fzf wired — ZLE widgets (key → widget binding; not "signals"):**
- `^R` fuzzy history — replaces zsh's built-in exact reverse search
- `^T` file finder — **inserts** picked path(s) at cursor; composing arguments; Tab multi-selects
- `^[c` (Alt-C) directory finder — **executes** `cd`; dirs only; mutates shell state
- `^I` (Tab) — wraps normal completion; `**<Tab>` triggers fuzzy path completion

Ctrl-T edits the command line (text); Alt-C changes where you are (state) — two-worlds again.
Choosing: Alt-C *descends* from here · `z`/`zi` *teleports* to anywhere visited (frecency) · Ctrl-T when the path is an *argument*.

**macOS gotcha.** Terminal "Alt" = ESC-prefix (that's what `^[` means). Ghostty defaults Option to macOS compose (Option-C → ç). Fix: `macos-option-as-alt = true` in `~/.config/ghostty/config`; trade-off: no composed chars in terminal. `Esc` then `c` always works regardless.

**Pitfalls hit live:**
- Widgets are prompt-level: while one fzf finder is open, other widgets' keys do nothing (fzf's internal keymap owns the keys).
- Panes/tabs that never re-sourced keep defaults — Ctrl-T there is `transpose-chars`, which looks like "nothing" on an empty line.
- The finder's query is what you type after it opens; it does not read the existing command line.
