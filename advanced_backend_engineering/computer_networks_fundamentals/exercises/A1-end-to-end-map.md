# Exercise A1 — Read the pipeline off real output (~15 min)

## Part 1 — Annotate a verbose request

```bash
curl -v https://api.github.com/zen 2>&1
```

Paste the output and mark the four boundary lines — where phase 1 (DNS), 2 (TCP), 3 (TLS), and 4 (HTTP) each begin. Four annotations, no more.

## Part 2 — Time the phases

```bash
curl -sS -o /dev/null -w 'dns  %{time_namelookup}\ntcp  %{time_connect}\ntls  %{time_appconnect}\nttfb %{time_starttransfer}\ntotal %{time_total}\n' https://api.github.com/zen
```

Run it **twice, back to back**. Then answer:

1. The numbers are cumulative. Roughly what did each *individual* phase cost on run 1?
2. Which phase dominates before the first response byte?
3. What changed on run 2, and which phase's caching/reuse explains it?

## Part 3 — Prediction drill (do not run anything)

For each, name the phase that failed and one command that would confirm it:

a. `curl: (6) Could not resolve host: api.githib.com`
b. `curl: (7) Failed to connect to api.internal port 443: Connection refused`
c. `curl: (60) SSL certificate problem: certificate has expired`
d. Response arrives: `HTTP/1.1 504 Gateway Time-out` — two-part question: which phases *succeeded*, and who most likely sent this response?
