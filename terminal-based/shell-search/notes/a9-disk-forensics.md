# A9 — Disk-space forensics & reclamation (built-ins only)

Taught 2026-08-11 · Track 1 (shell & search) · pairs with A8 (links & inodes)

Rule for this topic: **only tools that exist on every box you'll ever ssh into** —
`df`, `du`, `find`, `sort`, `stat`, `lsof`, plus OS-native `tmutil`/`diskutil` (macOS)
and `journalctl`/`apt` (Ubuntu). No ncdu, dust, or duf. Those are comfort; these are
the skill. (`revisit/README.md` holds them until A9 is demonstrated.)

## 1. The one idea: `df` and `du` answer different questions

- **`df` asks the filesystem**: "how many of your blocks are allocated?" It reads the
  allocator's own accounting. It is **authoritative about free space** and knows nothing
  about *which* files are responsible.
- **`du` asks the directory tree**: "walk these paths, sum the blocks of every file you
  can see and are allowed to read." It is **authoritative about attribution** and blind
  to anything not reachable by a path walk.

You need both: `df` tells you *whether* you have a problem, `du` tells you *where* it is.

**The corollary that makes you good at this:** when they disagree, the disagreement is
itself the diagnosis. The size of the gap and its direction name the mechanism.

### `df` used > sum of `du` — space with no path
| Cause | How to see it |
|---|---|
| **Deleted-but-open files** — unlinked from the tree, but a process still holds the fd, so the blocks stay allocated until it closes/exits | `sudo lsof \| grep -i deleted` (Linux: `lsof +L1`). Fix = restart the process, not `rm` |
| **Snapshots** (macOS APFS local/Time Machine, LVM, ZFS, btrfs) — blocks belong to a frozen point-in-time view, not to any current path | `tmutil listlocalsnapshots /` |
| **Permission-skipped directories** — `du` without `sudo` silently walks past what it can't read and undercounts. The most common practical trap | Re-run with `sudo`, compare totals |
| **Other filesystems** — the space is on a volume you didn't walk | `df -h` (all rows), `du -x` to stay put |
| **Reserved blocks** (Linux ext4, ~5% held for root) | `tune2fs -l` / just know `size - used ≠ avail` |

### Sum of `du` > `df` used — space counted twice
| Cause | How to see it |
|---|---|
| **Hard links** — one inode, many names. `du` dedupes by inode *within a single run*, so two separate `du` runs each count the same blocks | A8: `stat -f '%l' file` (link count), `find . -samefile X` |
| **APFS clones** (`cp -c`, Finder duplicate) — copy-on-write, blocks shared until written | `du` counts each copy in full; only the container knows the truth |
| **Sparse files** — apparent size ≫ allocated blocks | `ls -l` (apparent) vs `du` (allocated); `du --apparent-size` on Linux |

## 2. The narrowing loop (the "methodical" part)

Do not dump a full recursive listing and read 40,000 lines. **Binary-search the tree,
one level at a time:**

```bash
sudo du -x -d1 -h /System/Volumes/Data 2>/dev/null | sort -h | tail -15
```

`cd` into the winner, run it again, repeat. Three or four iterations locates anything
on any machine — the attention cost is logarithmic instead of linear.

Every flag earns its place:
- **`-x`** — don't cross filesystem boundaries. Without it you wander into other volumes
  and mounts and count things that aren't your problem.
- **`-d1`** — one level deep. You're searching, not inventorying.
- **`-h` + `sort -h`** — human units that still sort correctly (`sort -h` understands
  `K`/`M`/`G`). This pairing is the whole trick.
- **`tail`** — biggest last, right next to your prompt.
- **`sudo`** — otherwise silent undercount (see above).
- **`2>/dev/null`** — suppress permission noise, but only *after* deciding you accept
  not seeing those paths.

Companion tools for the same loop:
```bash
find /path -type f -size +500M -exec ls -lh {} +    # the big rocks, by file
find /path -type f -mtime +365 -size +100M          # big AND stale = best deletion candidates
du -x -d1 -h . | sort -h | tail                     # the same loop, relative
```

## 3. macOS specifics (this machine, macOS 26.6.1, 460 GB)

**Read `df -h` correctly.** Observed 2026-08-11:

```
/dev/disk3s1s1   460Gi    12Gi   166Gi    7%   /                      ← sealed system volume
/dev/disk3s5     460Gi   270Gi   166Gi   62%   /System/Volumes/Data   ← everything that's yours
/dev/disk3s6     460Gi   3.0Gi   166Gi    2%   /System/Volumes/VM     ← swap
/dev/disk3s2     460Gi   8.4Gi   166Gi    5%   /System/Volumes/Preboot
```

- Every row reports **the same Size and the same Avail**. That is not a bug: these are
  volumes inside **one APFS container** sharing a single free-space pool. Volumes have no
  fixed size; they draw from the pool. The used columns sum to ~294 GB, and
  460 − 294 = 166 = Avail. `diskutil apfs list` shows the container and its members.
- **`/` is the sealed, read-only signed system volume** (the `s1s1` suffix is the snapshot
  it boots from). Your data is on `/System/Volumes/Data`. Auditing `/` alone tells you
  almost nothing — start the loop at `/System/Volumes/Data`.
- **`iused`/`ifree` are meaningless here.** APFS has no fixed inode table, so it reports a
  fabricated huge `ifree` and always 0% — inode exhaustion is a Linux/ext4 concern
  (see §4).
- **Purgeable space** — snapshots and caches macOS will evict under pressure. Finder's
  "About This Mac → Storage" reports optimistically (it subtracts purgeable); `df` reports
  honest allocated blocks. When they disagree, `df` is telling the truth about *right now*
  and Finder about *after eviction*.
- **Local snapshots pin deleted files**: `tmutil listlocalsnapshots /`. Delete 10 GB, see
  zero change in `df` — this is usually why. Thin them with
  `tmutil thinlocalsnapshots / <bytes> 4` (macOS evicts them automatically under pressure;
  deleting them by hand costs you Time Machine restore points).
- **The big rocks on a dev Mac** — and both are easy to miss:
  - `~/Library/Caches`, `~/Library/Containers`, `~/Library/Developer` (Xcode DerivedData,
    simulators, device support) — user-owned, so plain `du` finds them.
  - **Root-owned VM disks**: `/var/root/Library/Application Support/multipassd/` and
    `~/.colima`. The multipass path is invisible to a non-sudo walk — the teachable trap.

## 4. Ubuntu specifics (VM rep after DF5)

- **`df -i` — inode exhaustion.** ext4 fixes the inode count at mkfs time. Millions of
  tiny files (hello `node_modules`) can exhaust inodes while `df -h` shows free gigabytes:
  "No space left on device" with space left. The other "disk full".
- `journalctl --disk-usage` → `sudo journalctl --vacuum-size=200M` (or `--vacuum-time=14d`).
- `/var/log` generally; `sudo du -x -d1 -h /var | sort -h`.
- `sudo apt clean` (package archive cache), `sudo apt autoremove`.
- `/var/lib/docker` — measure with `sudo du -x -sh /var/lib/docker`, reclaim with docker's
  own `docker system df` / `docker system prune`, never `rm`.
- Reserved blocks: ~5% of an ext4 filesystem is reserved for root, which is why
  `size − used ≠ avail`.

## 5. Reclamation rules (the judgment layer)

1. **Never delete what you can't regenerate or re-download.** Uncertain = don't.
2. **Prefer the owning tool's own cleanup to `rm`** — `brew cleanup`, `docker system prune`,
   `apt clean`, `tmutil thinlocalsnapshots`. They know what's safe; you're guessing.
3. **Caches are safe but not free** — you pay the rebuild/redownload later, which on a slow
   connection can be the more expensive resource.
4. **Never `rm -rf` a path from a blog post you haven't read yourself.**
5. **Measure with the same command before and after.** If the reclaimed bytes and the `df`
   delta don't match, that mismatch is a finding (open files, snapshots, clones), not noise.
