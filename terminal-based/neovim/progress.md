# Neovim / LazyVim — daily drill + track
Status: **daily drill active** (10 min/day); formal lessons ramp after Track 3
**N1 is a standalone immediate pull** (v3, 2026-08-12): 20 min, no rider — it ignites the drill thread that Law 4's green-week definition depends on. The drill log below is the receipt trail.
**Weekly PHP kata day** (Law 9): one designated drill day per week writes a small PHP artifact by hand — task = the next unchecked topic in `../../php_mastery/design/progress.md`; file lands in `../../php_mastery/exercises/katas/`; receipt tag `[kata]`. Drilling vim motions on PHP you're hand-writing serves both threads in one rep.
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

## Phase 1 — Modal core (drill-driven; from survival level)
- [ ] N1. The grammar — verb + count + noun (operator × motion/text-object). The mental model that makes vim learnable instead of memorizable.
- [ ] N2. Motions — w/b/e, f/t with ;/,, 0/^/$, gg/G, {}, Ctrl-d/u.
- [ ] N3. Operators + repeat — d/c/y composed with motions; `.` as the highest-leverage key in vim.
- [ ] N4. Text objects — iw/aw, i"/i(/i{, ip/ap; make ciw, di(, ya" reflexes.
- [ ] N5. Visual modes — v/V/Ctrl-v block edits; why operators + `.` usually beat visual selection.
- [ ] N6. Search & substitute — /, *, n/N, :s with ranges; %s with confirm flag.
- [ ] N7. Undo, registers, jumplist — u/Ctrl-r, named registers, "+ system clipboard, Ctrl-o/Ctrl-i to retrace jumps.

## Phase 2 — LazyVim as the IDE (replacing PHPStorm)
- [ ] N8. Discovery — which-key pauses, `<leader><space>` files, `<leader>,` buffers, `<leader>/` live grep. Learn to find keys, not memorize lists.
- [ ] N9. LSP on a real Laravel repo — gd, gr, K, `<leader>cr` rename, ]d/[d, `<leader>ca` code actions; :LspInfo wrong-root gotcha (intelephense).
- [ ] N10. Buffers vs windows vs tabs — :bd vs :q distinction, S-h/S-l cycling, `%bd|e#` cleanup; when tabs are actually warranted.
- [ ] N11. flash.nvim + surround — `s` jump-anywhere; ys/cs/ds for quotes/brackets.
- [ ] N12. Bulk edits — macros (qa…q, @a), quickfix + :cdo project-wide refactors, Ctrl-v column edits.
- [ ] N13. Git inside the editor — gitsigns hunk stage/preview, :DiffviewOpen review flow.
- [ ] N14. Sessions, :terminal, and the tmux-navigator seam — one movement language across editor and multiplexer.

## Phase 3 — Language workflows
- [ ] N15. PHP — intelephense deep use (references before refactor), pint on save via conform, :Trouble diagnostics triage.
- [ ] N16. TypeScript (when NestJS/RN work starts) — vtsls, organize imports, inlay hints, eslint-lsp alongside types.

## Drill log
(one line per drill day — date + what was drilled)
