const btn_Register = document.querySelector(".btn_Register");
const btn_Login = document.querySelector(".btn_Login");
let user = document.querySelector(".navbar-brand");
let AllData = [
  {
    name: "Ali",
    email: "fadl@gmail.com",
    password: "AliAliAli#",
    Address: "Cairo - Egypt",
  },
];

if (localStorage.getItem("DataUser") == undefined) {
  localStorage.setItem("DataUser", JSON.stringify(AllData));
}
let userName = "initial val";
let indexUser = 0; //Use Login Search Or Delete Account
let is_Login = false;
if (window.location.pathname == "/index.html") {

//   if (btn_Register) {
//     btn_Register.addEventListener("click", () =>
//         window.open("assets/HTML/Register.html", "_blank")
//     );
//   }

  if (btn_Login) {
    btn_Login.addEventListener("click", () => {
      if (is_Login) {
        is_Login = false;
        btn_Login.textContent = "Log in";
        btn_Register.style.cssText = `opacity:1;`;
        localStorage.removeItem("userName");
        window.location.assign("/index.html");
      } else {
        window.location.assign("assets/HTML/Login.html");
      }
    });
  }
  
  if (localStorage.getItem("userName") != undefined) {
    userName = localStorage.getItem("userName");
    user.innerHTML = userName;
    btn_Login.textContent = "Log Out";
    is_Login = true;
    btn_Register.style.cssText = `opacity:0;`;
  } else {
    btn_Login.innerHTML = "Log in";
    btn_Register.style.cssText = `opacity:1;`;
  }
  user.innerHTML = userName;

}

//Export All Data / Index User Enter / User Name
export { AllData };
