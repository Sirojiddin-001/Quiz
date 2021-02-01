import { userImg, userInfo, load } from "./user-info.min.js";
window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 3000);
  setTimeout(function () {
    if (localStorage.getItem("infoData") == null) {
      console.log(localStorage.getItem("infoData"));
      document.getElementById("user-click").click();
    }
  }, 3500);
};
document.querySelector("#continue").addEventListener("click", (e) => {
  userInfo("#user-name", ".user-login");
  let email = document.querySelector("#user-email").value;
  localStorage.setItem("userEmail", email);
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
if (navigator.storage && navigator.storage.estimate) {
  const quota =  navigator.storage.estimate();
  // quota.usage -> Number of bytes used.
  // quota.quota -> Maximum number of bytes available.
  const percentageUsed = (quota.usage / quota.quota) * 100;
  console.log(`You've used ${percentageUsed}% of the available storage.`);
  const remaining = quota.quota - quota.usage;
  console.log(`You can write up to ${remaining} more bytes.`);
}