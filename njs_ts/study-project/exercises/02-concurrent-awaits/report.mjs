// Exercise 02 — sequential vs concurrent awaits.
// Two independent "upstream calls". Neither depends on the other's result.

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchUser() {
  await sleep(800);
  return { id: 7, name: "ada" };
}

async function fetchOrders() {
  await sleep(1200);
  return [{ id: 1, total: 42 }];
}

async function buildReport() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  return { user, orderCount: orders.length };
}

const start = performance.now();
const report = await buildReport();
console.log(report, `took ${Math.round(performance.now() - start)} ms`);
