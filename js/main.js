import { userImg, userInfo, load } from "./user-info.js";
window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 0);
  // setTimeout(function () {
  //   if (localStorage.getItem("infoData") == null) {
  //     console.log(localStorage.getItem("infoData"));
  //     document.getElementById("user-click").click();
  //   }
  // }, 3500);
};
document.querySelector("#continue").addEventListener("click", (e) => {
  userInfo("#user-name", ".user-login");
  let email = document.querySelector("#user-email").value;
  localStorage.setItem("userEmail", email);
  load(".user-img", ".user-login", "#form-info");
});
load(".user-img", ".user-login", "#form-info");
document.querySelector("#save").addEventListener("click", (e) => {
  userImg("#form-img", ".user-img");
  userInfo("#form-info", ".user-login");
  UIkit.notification({
    message: "<span uk-icon='icon: check'></span> Сохранено",
    status: "success",
    pos: "bottom-right",
    timeout: 3000,
  });
});
