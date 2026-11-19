//________________________________________________________________________________________________
//                                        SE CONNECTER
//________________________________________________________________________________________________

const inputPseudo = document.getElementById("subPseudo");
const inputPw = document.getElementById("inputPasswordConnect");
const btn = document.getElementById("btnConnect");

btn.addEventListener("click", connect);

function connect() {
  if (localStorage.getItem("users")) {
    const tabUsers = JSON.parse(localStorage.getItem("users"));
    let userFound = false;
    console.log(tabUsers.pseudo);
    for (let i = 0; i < tabUsers.length; i++) {
      if (
        tabUsers[i].pseudo === inputPseudo.value &&
        tabUsers[i].password === inputPw.value
      ) {
        userFound = true;
        sessionStorage.setItem("currentUser", JSON.stringify(tabUsers[i]));

        window.location.replace("./compte.html");
      }
    }
    if (!userFound) {
      alert("Aucun utilisateur trouvé");
    }
    return;
  }
  alert("Aucun utilisateur trouvé");
}
