const user = localStorage.getItem("loggedInUser");

if (!user) {
  window.location.replace("login.html");
}
