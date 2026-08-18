# B+trees — the 5-minute version

Only what's needed to reason about InnoDB. Skip if you can already answer "why not a binary tree?"

**Why not a binary tree, or a hash?** Because the cost unit is a *disk page*, not a comparison. A binary tree over 100M rows is ~27 levels = 27 page reads. The design goal is to minimise levels, so you make each node as wide as one page. A hash index gives O(1) point lookups but cannot serve range scans or `ORDER BY` — which is most of what a database is asked to do.

**Structure.**
- **Internal nodes** hold only separator keys + child pointers. No row data. This is what makes fanout huge (~1000 for small keys in a 16KB page).
- **Leaf nodes** hold the payload — in InnoDB's clustered index, the entire row.
- **All leaves are at the same depth.** Every lookup costs exactly the tree's height. There is no "unlucky" key.
- **Leaves are linked** to their siblings, so a range scan descends once and then walks sideways without revisiting internal nodes.

**Height is logarithmic in the *fanout*, not in 2.** `height ≈ log_fanout(rows / rows_per_leaf)`. Both fanout and rows-per-leaf are set by your schema, which is why schema choices move tree height.

**Splits.** Inserting into a full leaf splits it in two, each ~half full, and pushes a separator key up. If that parent is full, it splits too — potentially to the root, which is how the tree grows a level. Sequential inserts are special-cased: InnoDB detects the append pattern and splits at the insertion point instead of the midpoint, keeping pages ~full. This is the mechanical reason ordered keys beat random ones.

**Deletes** merge pages only when they get very empty. In practice, deleted space stays as holes in pages until a rebuild.

That's enough. The variants (B-link trees, prefix compression, adaptive splits) don't change any decision you'll make.
