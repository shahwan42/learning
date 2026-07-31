const timeout = 3000;

function fetchUser(id) {
  return http.get("/api/user/" + id, { timeout: timeout });
}
