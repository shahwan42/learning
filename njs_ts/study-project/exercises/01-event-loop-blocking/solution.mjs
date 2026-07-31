// Exercise 01 — worked solution (Part C).
import { createServer } from "node:http";

// A promise that resolves after `ms`. Nothing runs while it is pending.
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// `async` on the callback is what lets us use `await` inside it.
const server = createServer(async (req, res) => {
  if (req.url === "/report") {
    await sleep(3000); // suspend here; the thread is free for other requests
    res.end("report ready\n"); // runs only after the wait finishes
  } else if (req.url === "/health") {
    res.end("ok\n");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const port = Number(process.env.PORT ?? 3000);
server.listen(port, () => console.log(`listening on http://localhost:${port}`));
