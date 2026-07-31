# 1.1 Modes & the operator grammar

## Mental model
Neovim is a **state machine over a text buffer**, not a text box with shortcuts.

- **Normal** — home. Keys are *commands*, not characters. `d` deletes, `w` moves.
- **Insert** — a typewriter. Keys are characters. Entered deliberately, left quickly.
- **Visual** — select first, act second. The escape hatch when you can't name the region.
- **Command-line** (`:`) — line-oriented commands over ranges (`:%s/…`, `:w`).

The reason it's worth learning: in real work you spend far more time *changing
existing text* than typing new text. Normal mode is a language for changes;
Insert is only for the payload.

## The grammar
```
[count] operator [count] motion-or-text-object
```
`d` + `w` = delete word. `3` + `d` + `w` = three words. `c` + `i` + `"` = change
inside quotes. Learn operators and motions separately and you get the product,
not a memorized list. `dw` was never a "shortcut" — it's a sentence.

Doubling an operator makes it line-wise: `dd`, `yy`, `cc`.

## Practical consequences
- **Insert-mode drift is the beginner failure.** Every keystroke is text, none are
  commands, and one `u` undoes the *whole* insert session. Short bursts.
- Undo granularity = one Insert session. Left insert 4 times, you get 4 undos.
- Repeat with `.` only replays your last *change* — another reason to make
  changes small and named.
- LazyVim changes none of this. It adds a `<leader>` layer on top of stock
  Normal mode.

## Pitfalls
- Esc is far; `<C-[>` is the same key. (LazyVim does not map `jk` by default.)
- Arrow keys work, which is exactly why they slow you down — no count, no operator.
- `:q` fails with unsaved changes → `:w` then `:q`, or `:wq`. `:q!` discards.
  In LazyVim `<leader>qq` quits the session.

## Parked
Modes not covered yet: Replace (`R`), Select, Terminal, Operator-pending as an
addressable state. See revisit/.
