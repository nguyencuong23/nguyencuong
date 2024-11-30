let olduser = localStorage.getItem("username") || "guest";
let username = olduser;

function updateUsername(newUsername) {
  olduser = username;
  username = newUsername;
  localStorage.setItem("username", username);
}
