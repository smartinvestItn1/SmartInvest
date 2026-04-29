const user = localStorage.getItem("loggedInUser");
const sessionId = localStorage.getItem("sessionId");

let sessions = JSON.parse(localStorage.getItem("activeSessions")) || [];

let validSession = sessions.find(s =>
  s.username === user && s.sessionId === sessionId
);

if (!user || !sessionId || !validSession) {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("sessionId");
  localStorage.removeItem("role");

  window.location.replace("login.html");
}
