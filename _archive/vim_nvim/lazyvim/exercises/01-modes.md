# Exercise 01 — modes & the operator grammar

Open the scratch file:

```bash
nvim /Users/as/Code/learning/vim_nvim/lazyvim/exercises/scratch/01-modes.ts
```

Starting content:
```ts
const timeout = 3000;

function fetchUser(id) {
  return http.get("/api/user/" + id, { timeout: timeout });
}
```

Make exactly these four edits. Use Normal mode to reach and shape each edit;
stay in Insert only for the characters you actually type.

1. Change `3000` to `5000`.
2. Change the string `"/api/user/"` to `"/api/v2/user/"` — without retyping the
   whole string and without arrow keys.
3. Delete the entire `const timeout` line.
4. Rename the parameter `id` to `userId` in **both** places it appears on the
   `fetchUser` lines. (Any approach — Normal-mode keys or a `:` command.)

Then save and quit.

## What to report back
For each edit, the **exact keystrokes** you pressed, in order. Write `<Esc>`,
`<CR>` for those keys. Wrong-but-honest beats tidy-but-reconstructed — I'm
reviewing your grammar, not your result.

Also: roughly how long were you in Insert mode each time — a few characters, or
did you drift?
