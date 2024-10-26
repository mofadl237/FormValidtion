const rejName = /^([a-zA-Z]{3,12}\s?)+$/;
const rejEmail = /^[a-z]\w+@[a-z]{5}\.(com|net|org)$/;
const rejPassword = /^[A-Z]\w*(\W)+\w*$/;
//const rejPassword = /^[A-Z]\w*(\W|\d)+\w*$/;//Special Or Digit
//1- Get All Input To Add Valid Data
const nameInput = document.getElementById("Name");
const emailInput = document.getElementById("Email");
const PassInput = document.getElementById("Pass");
const AddressInput = document.getElementById("Address");
const confirmPassInput = document.getElementById("ConfirmPass");
const error_Messages = document.querySelectorAll(".error_Message");
const btn_submit = document.getElementById("submit");
//**Import Data / user /index */
import { AllData } from "./Data.js";
//2- Function Valid For Each Element
function validName() {
  let valName = nameInput.value;
  let status = true;
  if (rejName.test(valName)) {
    status = true;
    error_Messages[0].style.cssText = `display:none;`;
  } else {
    error_Messages[0].innerHTML = "Enter Valid Name [3-12] Character";
    error_Messages[0].style.cssText = `display:block;`;
    status = false;
  }
  return status;
}
function validEmail() {
  let valName = emailInput.value;
  let status = true;
  if (rejEmail.test(valName)) {
    status = true;
    error_Messages[1].style.cssText = `display:none;`;
  } else {
    error_Messages[1].innerHTML = "Enter Valid Email[@ .com | .net |.org]";
    error_Messages[1].style.cssText = `display:block;`;
    status = false;
  }
  return status;
}
function validPass() {
  let valName = PassInput.value;
  let status = true;
  if (rejPassword.test(valName) && valName.length >= 10) {
    status = true;
    error_Messages[3].style.cssText = `display:none;`;
  } else {
    error_Messages[3].innerHTML = "[Start Capital , Special Or length 10] ";
    error_Messages[3].style.cssText = `display:block;`;
    status = false;
  }
  return status;
}
function validConfirm() {
  let valPass = PassInput.value;
  let valPAssConfirm = confirmPassInput.value;
  let status = true;
  if (valPass === valPAssConfirm) {
    status = true;
    error_Messages[4].style.cssText = `display:none;`;
  } else {
    error_Messages[4].innerHTML = "Enter The Same Password";
    error_Messages[4].style.cssText = `display:block;`;
    status = false;
  }
  return status;
}
//3- add Event For Each Input
if (window.location.pathname == "/assets/HTML/Register.html") {
  nameInput.addEventListener("blur", validName);
  nameInput.addEventListener("input", validName);

  emailInput.addEventListener("blur", validEmail);
  emailInput.addEventListener("input", validEmail);

  PassInput.addEventListener("blur", validPass);
  PassInput.addEventListener("input", validPass);

  confirmPassInput.addEventListener("blur", validConfirm);
  confirmPassInput.addEventListener("input", validConfirm);

  btn_submit.addEventListener("click", Register);
}
//4- Get Data From Register And Push In Array
function getData() {
  return {
    name: nameInput.value,
    email: emailInput.value,
    password: PassInput.value,
    Address: AddressInput.value,
  };
}

function Register(e) {
  e.preventDefault();
  //check    validName() && validConfirm() && validEmail() && validPass()
  if (validName() && validConfirm() && validEmail() && validPass()) {
    let newUser = getData();
    AllData.push(newUser);
    localStorage.setItem("DataUser", JSON.stringify(AllData));
    localStorage.setItem("userName", newUser.name);
    localStorage.setItem("indexUser", 1);
    window.location.assign("/index.html");
  }
}
