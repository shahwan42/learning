// Exercise 01 — a deliberately flawed HTTP server.
// (import syntax + .mjs = ES modules; covered properly in topic 3.)
import { createServer } from "node:http";

// Busy-wait: keeps the CPU spinning for `ms` milliseconds.
async function blockingSleep(ms) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  return sleep;
}


const server = createServer((req, res) => {
  if (req.url === "/report") {
    blockingSleep(3000).then(() => {
      res.end("report ready\n");
    }); // pretend: generating a heavy report
  } else if (req.url === "/health") {
    res.end("ok\n");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("listening on http://localhost:3000"));
