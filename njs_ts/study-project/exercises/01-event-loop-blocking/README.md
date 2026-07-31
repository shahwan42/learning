# Exercise 01 — Blocking the event loop

Topic: node-runtime #1. File: `server.mjs`.

## Part A — predict (before running anything)
The server has two routes: `/report` (3 seconds of busy-wait "work") and `/health` (instant).

You start the server, then in two terminals, roughly at the same time:

```bash
curl localhost:3000/report
```
```bash
curl localhost:3000/health
```

Write down: when does each respond, and why? How would the same scenario behave on a PHP-FPM setup with 8 workers?

## Part B — verify
```bash
node server.mjs
```
Run the two curls. Was your prediction right?

## Part C — fix
Now pretend the 3 seconds is **waiting** (a slow upstream API), not computation.
Replace `blockingSleep` with this async version, and change the handler so `/health` responds instantly while `/report` is still in flight:

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```

Then explain in 1–2 sentences *why* this unblocks `/health`.

## Part D — thought question
If the 3 seconds were real CPU work (parsing a 500 MB JSON string), would the async fix help? One sentence.

**Reply in chat** with your Part A prediction, your Part C code + explanation, and Part D.
