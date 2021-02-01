import { QS } from "./render.js";
export function userImg(fileForm, imgSection) {
  let img = QS(imgSection);
  let form = QS(fileForm).addEventListener("change", function () {
    let file = this.files[0];
    if (file.type.indexOf("image") < 0) {
      alert("Выберите рисунок");
      return;
    } else {
      let fReader = new FileReader();
      fReader.onload = function () {
        img.src = fReader.result;
        localStorage.setItem("imgData", fReader.result);
      };
      fReader.readAsDataURL(file);
    }
  });
  if (localStorage.getItem("imgData") != null) {
    img.src = localStorage.getItem("imgData");
  } else {
    img.src = "./assets/main.jpg";
  }
}
export function userInfo(infoForm, infoSection) {
  let info = QS(infoSection);
  let form = QS(infoForm);
  if (form.value != "") {
    localStorage.setItem("infoData", form.value);
    if (form.value.length > 3 && QS("#user-email").value.length > 3) {
      UIkit.notification({
        message: "<span uk-icon='icon: check'></span> Сохранено",
        status: "success",
        pos: "bottom-right",
        timeout: 3000,
      });
      QS("#continue").classList.add("uk-modal-close");
    }
  } else {
    console.log("ERROR");
  }
  info.innerHTML = localStorage.getItem("infoData");
}

export function load(imag, inf, finf) {
  let info = QS(inf);
  let img = QS(imag);
  let forinf = QS(finf);
  if (localStorage.getItem("imgData") != null) {
    img.src = localStorage.getItem("imgData");
  } else {
    img.src = "./assets/main.jpg";
  }
  info.innerHTML = localStorage.getItem("infoData");
  forinf.value = localStorage.getItem("infoData");
}
