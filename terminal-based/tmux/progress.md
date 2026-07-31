# Track 2 — tmux + desktop tiling
Status: queued (config + plugins already built — see quickstart)
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

- [ ] T1. Mental model — client/server, sessions ⊃ windows ⊃ panes; why detach survives SSH drops and closed terminals.
- [ ] T2. Daily keys — splits, vim-tmux-navigator Ctrl-h/j/k/l (build this habit first), zoom, `prefix+w` window list as task switcher; pane surgery: swap `{`/`}`, break-to-window `!`, layout cycle `Space`, `q` pane numbers.
- [ ] T3. Session discipline — name by purpose, one session per project/context, attach/detach flows.
- [ ] T4. Copy-mode — navigate + search scrollback (`?`, n/N), yank to OS clipboard via tmux-yank, incl. over SSH (OSC52).
- [ ] T5. Persistence — resurrect save/restore keys, continuum auto-save; the restored-pane-looks-like-a-live-tunnel gotcha.
- [ ] T6. Scripted layouts & popups — send-keys session scripts (kept over tmuxinator: no Ruby dep, portable); `display-popup` floating scratch terminals (popup lazygit/shell); synchronize-panes fan-out and its dangers.
- [ ] T7. Remote patterns — tmux on the server vs locally, nested-tmux prefix strategy (remote Ctrl-a).
- [ ] T8. AeroSpace — i3-style tiling WM for macOS: the same multiplexing model one layer up (workspaces ≈ sessions), keyboard focus/move, workspace-per-context, TOML config. Mac-only by nature (remotes are headless); chosen over yabai (needs SIP partially disabled) and Amethyst (weaker model).
