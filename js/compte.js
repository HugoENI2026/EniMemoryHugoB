const pseudo = document.getElementById("pseudo");
const email = document.getElementById("email");
const discBtn = document.getElementById("disconnect");

if (sessionStorage.getItem("currentUser")) {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  pseudo.textContent = currentUser.pseudo;
  email.textContent = currentUser.email;
}

discBtn.addEventListener("click", disconnect);

function disconnect() {
  pseudo.textContent = "";
  email.textContent = "";
  sessionStorage.clear();
  document.removeEventListener("click", disconnect);
}
