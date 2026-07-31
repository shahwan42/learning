# Track 1 — Shell & Search
Status: **active** · Current: A1
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

## Module A — Shell mechanics (the why-layer under every tool)
- [x] A0. Wire the layer — fzf zsh integration (Ctrl-R/Ctrl-T/Alt-C/**Tab) + Ghostty option-as-alt fix. Done 2026-07-30 · notes/a0-shell-integration.md. (bat/eza aliases deferred to B5.)
- [ ] A1. How the shell runs a command — parsing → expansion → word splitting → $PATH lookup. Why quoting bugs happen and when quotes matter.
- [ ] A2. Pipes, redirection, exit codes — stdout vs stderr as separate streams, 2>&1, tee, `$?`, pipefail. Why "it worked but printed an error" happens.
- [ ] A3. Composition — command substitution `$( )`, xargs (-n, -I{}, null-delimited safety). Gluing tools into one-liners.
- [ ] A4. Job control — Ctrl-Z, jobs, fg/bg, `&`, disown, kill %1. What a job actually is; when tmux replaces this.
- [ ] A5. zsh daily power — `**` recursive globs, glob qualifiers, history expansion, aliases vs functions, .zshrc hygiene.
- [ ] A6. Small robust scripts — shebang, `set -euo pipefail`, functions, `$@` vs `$*`, exit codes. From copy-paste to authoring.
- [ ] A7. Classic text tools (server-safe 20%) — sort/uniq/cut/wc, `sed s///`, `awk '{print $N}'`. For boxes where rg/jq aren't installed.
- [ ] A8. Links & inodes — symlink vs hard link (what an inode is), the relative-to-link-location trap, `ln -sfn` idempotent swaps (the `current -> releases/N` deploy pattern), trailing-slash `rm` disaster, finding broken links; macOS notes (realpath, SIP paths). Underpins Stow/Homebrew/yazi link keys.

## Module B — The search & read layer
- [ ] B1. fzf core — the fuzzy-match model; Ctrl-R history, Ctrl-T files, Alt-C cd, `**<Tab>` completion.
- [ ] B2. fzf as a building block — pipe anything into it, `--preview` with bat, pick git branches / processes / ports interactively.
- [ ] B3. ripgrep — smart defaults (.gitignore-aware), -t/-g filters, -C context, replace-preview; when plain grep still matters (remote boxes).
- [ ] B4. fd — find, humanely: type filters, -x exec, pairing with fzf and xargs.
- [ ] B5. Reading layer — bat as cat/pager/previewer, eza (+ git column), tealdeer for instant examples instead of man-diving.
- [ ] B6. zoxide + yazi — frecency model, `zi` picker; yazi: browse/bulk-rename, cd-on-exit `y()` wrapper, built-in fd/rg/fzf/zoxide keys (s/S/z/Z), path-copy keys (cc/cd/cf); package.toml plugin manifest as dotfiles data; tmux image-passthrough gotcha (`allow-passthrough on`).
- [ ] B7. jq — filters are pipelines: `.foo`, `.[]`, select(), map(); against real API / `gh api` output.
- [ ] B8. Capstone — compose your own: rg → fzf pick with bat preview → open in nvim at that line, bound to a key.
