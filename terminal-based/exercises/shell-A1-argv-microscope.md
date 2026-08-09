# A1 — The argv microscope (predict, then run)

**Rule: write every prediction BEFORE you run anything.** A prediction you fix after
seeing the output teaches nothing. Being wrong here is the point — wrong predictions
are where the model gets corrected.

## Setup

```bash
mkdir -p /tmp/a1 && cd /tmp/a1
touch "my notes.txt" report.txt 'weird[1].txt' file1.log file2.log
argv() { printf '%d args\n' $#; printf '  [%s]\n' "$@"; }
name="my notes.txt"
empty=""
files="file1.log file2.log"
```

## Part 1 — How many words? (7 predictions)

For each line, predict the **number of args** and what each arg is.

| # | Command | Predicted | Actual |
|---|---------|-----------|--------|
| 1 | `argv $name` | | |
| 2 | `argv "$name"` | | |
| 3 | `argv $empty` | | |
| 4 | `argv "$empty"` | | |
| 5 | `argv $files` | | |
| 6 | `argv $(echo $files)` | | |
| 7 | `argv *.log` | | |

Then run them and fill in Actual.

## Part 2 — Two that fail (predict the failure mode, not just "error")

Predict what happens and **which pipeline stage** is responsible:

8. `argv *.nope`
9. `rm $name` — do NOT actually run this; predict what it would delete, and
   what it would delete if the same line ran under `#!/bin/bash` on Ubuntu.

## Part 3 — The realistic one

A deploy script on an Ubuntu box (`#!/bin/bash`) contains:

```bash
BACKUP_DIR=$(cat /etc/app/backup_path)     # file contains: /var/backups/app data
rm -rf $BACKUP_DIR/old/*
```

Answer in prose:

- What does `rm -rf` actually receive as argv? List the args.
- Which expansion stage created the extra word, and why did the `$(...)` matter?
- Give the one-character-class fix, and say what it does to the pipeline.

## Part 4 — Lookup order (step 6)

```bash
mkdir -p /tmp/a1/bin
printf '#!/bin/sh\necho "I am the fake"\n' > /tmp/a1/bin/date
chmod +x /tmp/a1/bin/date
export PATH=/tmp/a1/bin:$PATH
date() { echo "I am the function"; }
```

10. Predict the output of `date`, then of `command date`, then of `/bin/date`.
    Explain each using the lookup order.
11. Run `which date` and `command -v date`. They disagree. Why — what does each
    one actually know about?

Cleanup when done: `unset -f date argv; cd ~; rm -rf /tmp/a1` (and open a fresh
shell to drop the `$PATH` edit).

---

## Attempt

(paste predictions + actuals here)

## Review

(filled in during the session)

## Verdict

(pending)
