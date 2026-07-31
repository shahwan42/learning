# Revisit — deferred topics

Parked deliberately. Each line says why it matters, so future-you can judge
whether it's worth the detour.

| Topic | Why it matters | Parked at |
|-------|----------------|-----------|
| Replace mode (`R`), Select mode, Operator-pending mode | Completes the mode model; `R` is occasionally the right tool for fixed-width edits. Rarely needed day to day. | 1.1 |
| `'` vs `"` register semantics, `:reg` archaeology | Explains surprising paste behaviour after a delete. | 1.1 |
| Custom text objects via mini.ai / treesitter-textobjects | Lets you write `daf` for "delete a function" in any language. Real productivity, but needs 1.3 first. | 1.1 |
| Sessions & project switching (persistence.nvim) | Restores window layout per project — big quality-of-life win once you work in several repos. | scaffold |
| Snippet authoring (LuaSnip / friendly-snippets) | Worth it only after you notice yourself retyping boilerplate. | scaffold |
| Neovim remote / embedded (`nvim --listen`, IDE plugins) | Relevant if you keep PhpStorm around as a hybrid. | scaffold |
| Writing your own plugin | The natural endpoint of track 3, not a prerequisite for anything. | scaffold |
| `vim.pack` (0.12's built-in plugin manager) | Nvim 0.12 ships its own manager; LazyVim still uses lazy.nvim. Matters only if the distro migrates. | scaffold |
