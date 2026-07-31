# 01 — Running Node, ESM, and tests (PHP contrast)

Just enough to write the first exercise. Depth comes later.

## There is no framework entrypoint

No `index.php`, no front controller, no autoloader. `node file.js` runs that file. Whatever
it imports gets loaded. That's the whole model.

## package.json ≈ composer.json, with one line that matters now

```json
{ "name": "ledger", "type": "module" }
```

`"type": "module"` opts every `.js` file into **ESM** — `import`/`export`. Without it, Node
uses CommonJS (`require`) and your `import` lines fail. There is no PSR-4 mapping: imports
are **file paths**, and the extension is required.

```js
import { post } from './ledger.js';   // ./ and .js are both mandatory
```

Forgetting either is the single most common first-day error.

## Named vs default exports

```js
export function post(entry) {}        // import { post } from './ledger.js'
export default function post() {}     // import post from './ledger.js'
```

Prefer named exports — they're greppable and rename-safe. Roughly: a module is a static
class of functions, not an object you instantiate.

## Tests are built in

No PHPUnit install. `node --test` discovers `*.test.js`.

```js
import test from 'node:test';
import assert from 'node:assert/strict';

test('an entry balances', () => {
  assert.equal(sum([100, -100]), 0);
});
```

Use `node:assert/strict` — the non-strict version compares with `==` and will happily tell
you `'0' == 0` passed. `assert.deepEqual` in strict mode is your `assertEquals` for objects.

Run:

```
node --test
```

## Gotchas

- `import` paths need `./` and the file extension. Bare `'ledger'` means "npm package".
- Top-level `await` works in ESM. No bootstrap wrapper needed.
- A thrown error in a test = failed test. A *rejected promise* you forgot to `await` can
  pass silently — always `await` async assertions.
- Node 26 runs `.ts` files directly, so the later TS migration needs no build step.
