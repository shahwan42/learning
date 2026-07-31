# Track 3 — Git workflows
Status: queued
Legend: `[ ]` not started · `[~]` taught, awaiting demonstration · `[x]` demonstrated

- [ ] G1. lazygit orientation — the 5-panel model, `?` per-panel help, stage file vs hunk, commit. Replaces the IDE git panel outright.
- [ ] G2. Branch / stash / undo — b switch, s stash-pop, `z` reflog-backed undo. The safety net that makes experiments cheap.
- [ ] G3. History surgery — interactive rebase from a commit (e), squash/fixup (s/f), amend/reword; clean WIP chains before a PR.
- [ ] G4. Reading diffs — delta daily habits, `git diff main...branch`; difftastic when reformat noise buries the change; --color-moved for refactors.
- [ ] G5. Big/agent diffs — hunk-by-hunk review before staging anything; cherry-pick (c then v) one commit out of a noisy branch.
- [ ] G6. Worktrees — parallel checkouts, one per agent/feature; lazygit's worktree menu; how this kills stash-juggling.
- [ ] G7. gh CLI — pr create/checks/diff/merge, aliases, `run rerun --failed`; `gh api ... --jq` as the escape hatch.
- [ ] G8. Review lifecycle — gh-dash triage sections (needs-my-review / mine / blocked); octo.nvim inline comments + approve without the browser.
- [ ] G9. Forensics — bisect a regression, `log -p --follow`, blame flows for "how did this line get here".
- [ ] G10. Safety — force-with-lease vs --force, fork + upstream remotes, what actually gets lost and when.
