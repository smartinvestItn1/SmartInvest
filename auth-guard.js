const currentUser = sessionStorage.getItem("loggedInUser");

if (!currentUser || currentUser === "null" || currentUser === "undefined") {
  sessionStorage.removeItem("loggedInUser");
  window.location.replace("login.html");
}