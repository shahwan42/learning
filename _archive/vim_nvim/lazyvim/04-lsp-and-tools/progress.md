# Track 4 — LSP & language tooling

Goal: the IDE features — go-to-definition, rename, diagnostics, format-on-save —
working reliably across PHP, TS, Python, Go/Rust, and diagnosable when they break.

| # | Topic | Status |
|---|-------|--------|
| 4.1 | LSP as a protocol: client (nvim) ↔ server (per-language process). Root dir is everything | pending |
| 4.2 | Mason vs `nvim-lspconfig` vs `vim.lsp.config` — who installs, who configures | pending |
| 4.3 | Core LSP keys: `gd gr gI gy K <leader>ca <leader>cr <leader>cs` | pending |
| 4.4 | Diagnostics: `]d`, `<leader>xx`, virtual text vs virtual lines, severity filtering | pending |
| 4.5 | Per-language setup: intelephense (PHP), vtsls (TS), basedpyright+ruff, gopls, rust-analyzer | pending |
| 4.6 | Completion: blink.cmp in LazyVim — sources, `<Tab>` semantics, snippets | pending |
| 4.7 | conform.nvim formatting + nvim-lint; format-on-save and how to disable per project | pending |
| 4.8 | Treesitter: parsers, why highlighting differs from regex, textobjects | pending |
| 4.9 | Failure modes: no root dir, wrong node/php version, server crash loop, `:LspLog` | pending |

## Notes
_(none yet)_
