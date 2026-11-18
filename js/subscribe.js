function testCondition(boolean, variable) {
  if (boolean) {
    variable.style.color = "green";
  } else {
    variable.style.color = "red";
  }
}
function testValidateButton() {
  if (
    /[a-z]/.test(inputPassword.value) &&
    /[A-Z]/.test(inputPassword.value) &&
    /[0-9]/.test(inputPassword.value) &&
    /[^a-zA-Z0-9À-ÖØ-öø-ÿ]/.test(inputPassword.value) &&
    /[À-ÖØ-öø-ÿ]/.test(inputPassword.value) &&
    inputPassword.value.length >= 12 &&
    inputVerifPw.value === inputPassword.value
  ) {
    validateBtn.disabled = false;
    validateBtn.style.backgroundColor = "green";
  } else {
    validateBtn.disabled = true;
    validateBtn.style.backgroundColor = "grey";
  }
}

function step0() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";
  document.getElementById("step4").style.display = "none";
  document.getElementById("step5").style.display = "none";
}
function step1() {
  document.getElementById("step1").style.display = "flex";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";
  document.getElementById("step4").style.display = "none";
  document.getElementById("step5").style.display = "none";
}
function step2() {
  document.getElementById("step1").style.display = "flex";
  document.getElementById("step2").style.display = "flex";
  document.getElementById("step3").style.display = "none";
  document.getElementById("step4").style.display = "none";
  document.getElementById("step5").style.display = "none";
}
function step3() {
  document.getElementById("step1").style.display = "flex";
  document.getElementById("step2").style.display = "flex";
  document.getElementById("step3").style.display = "flex";
  document.getElementById("step4").style.display = "none";
  document.getElementById("step5").style.display = "none";
}
function step4() {
  document.getElementById("step1").style.display = "flex";
  document.getElementById("step2").style.display = "flex";
  document.getElementById("step3").style.display = "flex";
  document.getElementById("step4").style.display = "flex";
  document.getElementById("step5").style.display = "none";
}
function step5() {
  document.getElementById("step1").style.display = "flex";
  document.getElementById("step2").style.display = "flex";
  document.getElementById("step3").style.display = "flex";
  document.getElementById("step4").style.display = "flex";
  document.getElementById("step5").style.display = "flex";
}
//________________________________________________________________________________________________
//                                            MOT DE PASSE
//________________________________________________________________________________________________
const inputPassword = document.getElementById("inputPassword");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const number = document.getElementById("number");
const characterLength = document.getElementById("characterLength");
const accent = document.getElementById("accent");
const symbol = document.getElementById("symbol");
const validateBtn = document.getElementById("validateBtn");






inputPassword.addEventListener("input", () => {
  testCondition(/[a-z]/.test(inputPassword.value), lowerCase);
  testCondition(/[A-Z]/.test(inputPassword.value), upperCase);
  testCondition(/[0-9]/.test(inputPassword.value), number);
  testCondition(inputPassword.value.length >= 12, characterLength);
  testCondition(/[^a-zA-Z0-9À-ÖØ-öø-ÿ]/.test(inputPassword.value), symbol);
  testCondition(/[À-ÖØ-öø-ÿ]/.test(inputPassword.value), accent);
  testValidateButton();

  if (inputPassword.value.length < 3) {
    step0()
  }
  if (inputPassword.value.length >= 3) {
    step1()
  }

  if (inputPassword.value.length >= 6) {
    step2()
  }
  if (inputPassword.value.length >= 9) {
    step3()
  }
  if (inputPassword.value.length >= 12) {
    step4()
  }
  if (inputPassword.value.length >= 15) {
    step5()
  }

});
//________________________________________________________________________________________________
//                                            PSEUDO
//________________________________________________________________________________________________
const inputPseudo = document.getElementById("subPseudo");
const pseudoLength = document.getElementById("userNameHelp");

inputPseudo.addEventListener("input", () => {
  testCondition(inputPseudo.value.length >= 3, pseudoLength);
  testValidateButton();

});

//________________________________________________________________________________________________
//                                            EMAIL
//________________________________________________________________________________________________
const inputEmail = document.getElementById("subEmail");
const email = document.getElementById("emailHelp");

inputEmail.addEventListener("input", () => {
  testCondition(inputEmail.value.includes("@"), email);
  testValidateButton();
});

//________________________________________________________________________________________________
//                                            VERIF PSEUDO
//________________________________________________________________________________________________
const inputVerifPw = document.getElementById("verifInputPassword");
const samePw = document.getElementById("verifPwHelp");

inputVerifPw.addEventListener("input", () => {
  if (inputVerifPw.value.length > 0) {
    testCondition(inputVerifPw.value === inputPassword.value, samePw);
    testValidateButton();
  }
});
