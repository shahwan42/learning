# Track 6 — DB & docs glue
Status: queued (pull individual topics forward when real work demands)
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

## DB
- [ ] D1. pgcli/mycli daily flows — autocomplete-driven querying, \copy to CSV, named DSNs/aliases per environment, --safe-updates on anything prod.
- [ ] D2. Tunneled DB access — ssh -fNL + pgcli; mycli's native --ssh-host; naming tunnels so you know which is which.
- [ ] D3. Harlequin — schema browsing + result grid + export; when a TUI beats a REPL (exploring unfamiliar schemas).
- [ ] D4. EXPLAIN ANALYZE basics — reading a plan top-down: seq scan vs index, row estimates vs actuals.

## Docs & tickets
- [ ] D5. Markdown loop — glow for reading, render-markdown.nvim for writing, live mermaid preview (watchexec + mmdc + Ghostty images).
- [ ] D6. jira-cli — my-sprint views, create/move/comment, JQL escape hatch; the lazygit custom-command tie-in (PR → In Review).
- [ ] D7. mark → Confluence — metadata headers, --dry-run before publish, the one-way-sync clobber gotcha.
