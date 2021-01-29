import { render, QS, QSA } from "./render.js";
let selected = 0;
export function quiz(data) {
  let current = 0;
  let score = 0;
  QS("body").style.overflow = "hidden";
  function init(quiz) {
    QS("#quiz_pages").innerHTML = current + 1 + " / " + quiz.length;
    QS("#quiz_question").innerHTML = quiz[current].q;
    QS("#buttons").innerHTML = "";
    QS("#next_button").setAttribute("disabled", "");
    for (let i in quiz[current].o) {
      render("button", {
        attr: {
          data: i,
        },
        class: "btn light_btn",
        textContent: quiz[current].o[i],
        handlers: {
          click: function () {
            QSA("#buttons button").forEach((item) => {
              item.classList.remove("selected");
            });
            QSA("#buttons button")[i].classList.add("selected");
            selected = i;
            QS("#select_button").removeAttribute("disabled");
          },
        },
        appendTo: "#buttons",
      });
    }
    if (current == quiz.length - 1) {
      QS("#next_button").innerHTML = "Завершить";
    }
  }
  function verify() {
    QS("#quiz_pages").innerHTML = "Оценка: " + score + " из " + data.length;
    QS("#buttons").innerHTML = "";
    if (score == 0) {
      QS("#quiz_question").innerHTML = "Вам многому нужно научиться";
    } else if (score < 4) {
      QS("#quiz_question").innerHTML = "Вы уже неплохо разбираетесь";
    } else if (score < 9) {
      QS("#quiz_question").innerHTML = "Ваш уровень выше среднего";
    } else {
      QS("#quiz_question").innerHTML = "Вы в совершенстве знаете тему";
    }
    QS("#select_button").style.display = "none";
    QS("#next_button").style.display = "none";
    QS("#repeat_button").style.display = "flex";
    QS("#quit_button").style.display = "flex";
  }
  function select() {
    QSA("#buttons button").forEach((element) => {
      element.setAttribute("disabled", "");
    });
    if (selected == data[current].a) {
      score++;
      QSA("#buttons button")[selected].className = "btn success_btn";
    } else {
      QSA("#buttons button")[selected].className = "btn danger_btn";
      QSA("#buttons button").forEach((element, i) => {
        if (element.getAttribute("data") == data[current].a) {
          QSA("#buttons button")[i].className = "btn success_btn";
        }
      });
    }
    QS("#select_button").setAttribute("disabled", "");
    QS("#next_button").removeAttribute("disabled");
  }
  QS("#start_button").addEventListener("click", function (e) {
    this.style.display = "none";
    QS("#quit_button").style.display = "none";
    QS("#select_button").style.display = "flex";
    QS("#next_button").style.display = "flex";
    QS("#next_button").innerHTML = "Далее";
    init(data);
  });
  QS("#next_button").addEventListener("click", function (e) {
    if (current < data.length - 1) {
      current++;
      init(data);
    } else if (current == data.length - 1) {
      verify();
    }
  });
  QS("#select_button").addEventListener("click", (e) => select());
  QS("#repeat_button").addEventListener("click", function (e) {
    current = 0;
    score = 0;
    selected = 0;
    init(data);
    QS("#next_button").innerHTML = "Далее";
    QS("#select_button").style.display = "flex";
    QS("#next_button").style.display = "flex";
    QS("#repeat_button").style.display = "none";
    QS("#quit_button").style.display = "none";
  });
  QS("#quit_button").addEventListener("click", function () {
    current = 0;
    score = 0;
    selected = 0;
    QS("body").style.overflow = "auto";
    QS(".full").style.display = "none";
    QS("#repeat_button").style.display = "none";
    QS("#start_button").style.display = "flex";
    QS("#quiz_pages").innerHTML = "";
    QS("#quiz_question").innerHTML = `
    Количество вопросов - 10 <br>
    Количество попыток - бесконечно
    `;
  });
}
