const sessionId = localStorage.getItem("sessionId");

let sessions = JSON.parse(localStorage.getItem("activeSessions")) || [];

// find current session
let currentSession = sessions.find(s => s.sessionId === sessionId);

if (!currentSession) {

  // clear broken login
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("role");
  localStorage.removeItem("sessionId");

  window.location.replace("login.html");
}
