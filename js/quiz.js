import { render } from "./render.min.js";
import { cards } from "./cards.min.js";
let quiz;
let quiz_num;
cards.map((card, i) =>
  render("div", {
    class:
      "card uk-card uk-card-default uk-box-shadow-small uk-box-shadow-hover-large",
    handlers: {
      click: function (e) {
        quiz_num = i;
        let validate = localStorage.getItem("Quiz repeat " + quiz_num);
        if (validate != 0) {
          quiz = new Quiz(card.data);
          document.querySelector(".full").style.display = "flex";
          document.querySelector("#quiz_info").innerHTML = card.title;
          document.querySelector(".fill").style.width = "100%";
          document.querySelector(".fill").style.backgroundColor = "#007bff";
          document.body.style.overflow = "hidden";
          if (localStorage.getItem("Quiz repeat " + quiz_num) != null) {
            quizQuestion.innerHTML =
              `
          Количество вопросов - 10 <br>
          Время выполнения = 20 минут <br>
          Количество попыток = ` + validate;
          } else {
            quizQuestion.innerHTML = `
          Количество вопросов - 10 <br>
          Время выполнения = 20 минут <br>
          Количество попыток = 3 `;
          }
        } else {
          UIkit.notification({
            message: `<span class="uk-margin-small-right" uk-icon="icon: warning; ratio: 2"></span> Количество попыток = 0 `,
            status: "warning",
            pos: "bottom-right",
          });
        }
      },
    },
    appendTo: "#app",
    appendIn: [
      render("div", {
        class: "uk-card-media-top",
        appendIn: [
          render("img", {
            class: "card-media",
            attr: {
              src: "./assets/image.jpg",
              alt: "",
            },
          }),
          render("div", {
            class: "uk-card-body",
            appendIn: [
              render("h3", {
                class: "uk-card-title text-center",
                textContent: card.title,
              }),
            ],
          }),
        ],
      }),
    ],
  })
);
const quizPages = document.getElementById("quiz_pages");
const quizQuestion = document.getElementById("quiz_question");
const button = document.getElementById("buttons");
const startBtn = document.getElementById("start_button");
const nextBtn = document.getElementById("next_button");
const selectBtn = document.getElementById("select_button");
const repeatBtn = document.getElementById("repeat_button");
const quitBtn = document.getElementById("quit_button");
class Quiz {
  constructor(question) {
    this.question = question;
    this.current = 0;
    this.score = 0;
    this.selected = 0;
    if (localStorage.getItem("Quiz repeat " + quiz_num) != null) {
      this.repeat = parseInt(localStorage.getItem("Quiz repeat " + quiz_num));
    } else {
      this.repeat = 3;
    }
  }
}

function Init() {
  quizPages.innerHTML = quiz.current + 1 + " / " + quiz.question.length;
  quizQuestion.innerHTML = quiz.question[quiz.current].q;
  button.innerHTML = "";
  nextBtn.setAttribute("disabled", "");

  for (let i in quiz.question[quiz.current].o) {
    let btn = document.createElement("button");
    btn.setAttribute("data", i);
    btn.className = "btn light_btn";
    btn.textContent = quiz.question[quiz.current].o[i];
    btn.addEventListener("click", function () {
      document.querySelectorAll("#buttons button").forEach((item) => {
        item.classList.remove("selected");
      });
      document.querySelectorAll("#buttons button")[i].classList.add("selected");
      quiz.selected = i;
      selectBtn.removeAttribute("disabled");
    });
    button.appendChild(btn);
  }
  if (quiz.current == quiz.question.length - 1) {
    nextBtn.innerHTML = "Завершить";
  }
  startBtn.addEventListener("click", (e) => Start());
}
function Verify() {
  quizPages.innerHTML = "Оценка: " + quiz.score + " из " + quiz.question.length;
  button.innerHTML = "";
  if (quiz.score == 0) {
    quizQuestion.innerHTML = "Вам многому нужно научиться";
  } else if (quiz.score < 4) {
    quizQuestion.innerHTML = "Вы уже неплохо разбираетесь";
  } else if (quiz.score < 9) {
    quizQuestion.innerHTML = "Ваш уровень выше среднего";
  } else {
    quizQuestion.innerHTML = "Вы в совершенстве знаете тему";
  }
  selectBtn.style.display = "none";
  nextBtn.style.display = "none";
  repeatBtn.style.display = "flex";
  quitBtn.style.display = "flex";
}
function Select() {
  document.querySelectorAll("#buttons button").forEach((element) => {
    element.setAttribute("disabled", "");
  });
  if (quiz.selected == quiz.question[quiz.current].a) {
    quiz.score++;
    document.querySelectorAll("#buttons button")[quiz.selected].className =
      "btn success_btn";
  } else {
    document.querySelectorAll("#buttons button")[quiz.selected].className =
      "btn danger_btn";
    document.querySelectorAll("#buttons button").forEach((element, i) => {
      if (element.getAttribute("data") == quiz.question[quiz.current].a) {
        document.querySelectorAll("#buttons button")[i].className =
          "btn success_btn";
      }
    });
  }
  selectBtn.setAttribute("disabled", "");
  nextBtn.removeAttribute("disabled");
}
function Start(e) {
  Shuffle(quiz.question);
  startBtn.style.display = "none";
  quitBtn.style.display = "none";
  selectBtn.style.display = "flex";
  nextBtn.style.display = "flex";
  nextBtn.innerHTML = "Далее";
  Init();
}
function Next() {
  if (quiz.current < quiz.question.length - 1) {
    quiz.current++;
    Init();
    console.log("object :>> ", quiz.current);
  } else if (quiz.current == quiz.question.length - 1) {
    Verify();
    document.getElementById("nameInput").value = localStorage.getItem(
      "infoData"
    );
    document.getElementById("emailInput").value = localStorage.getItem(
      "userEmail"
    );
    document.getElementById("textInput").value = "Тест №" + (quiz_num+1) + " набрано " + quiz.score + " баллов";
    document.getElementById("sendBtn").click(); 
    if (localStorage.getItem("Quiz repeat " + quiz_num) != null) {
      quiz.repeat = parseInt(localStorage.getItem("Quiz repeat " + quiz_num));
      quiz.repeat--;
      localStorage.setItem("Quiz repeat " + quiz_num, quiz.repeat);
      repeatBtn.innerHTML =
        "Повторить | " + localStorage.getItem("Quiz repeat " + quiz_num);
    } else {
      
      quiz.repeat--;
      localStorage.setItem("Quiz repeat " + quiz_num, quiz.repeat);
      repeatBtn.innerHTML =
        "Повторить | " + localStorage.getItem("Quiz repeat " + quiz_num);
    }
  }
}
function Repeat() {
  if (quiz.repeat > 0) {
    repeatBtn.removeAttribute("disabled");
    quiz.current = 0;
    quiz.score = 0;
    quiz.selected = 0;
    Shuffle(quiz.question);
    nextBtn.innerHTML = "Далее";
    selectBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    repeatBtn.style.display = "none";
    quitBtn.style.display = "none";
    Init();
  } else {
    repeatBtn.setAttribute("disabled", "");
    console.log("ERROR");
  }
}
function Quit() {
  quiz.current = 0;
  quiz.score = 0;
  quiz.selected = 0;
  document.body.style.overflow = "auto";
  document.querySelector(".full").style.display = "none";
  repeatBtn.style.display = "none";
  startBtn.style.display = "flex";
  quizPages.innerHTML = "";
  quizQuestion.innerHTML =
    `
  Количество вопросов - 10 <br>
  Время выполнения = 20 минут <br>
  Количество попыток - ` + quiz.repeat;
  Shuffle(quiz.question);
}
function Shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
let timeMinut;
function Timer() {
  timeMinut = 1200;
  let timer = setInterval(function () {
    if (timeMinut <= 0) {
      clearInterval(timer);
      Quit();
      quitBtn.style.display = "flex";
      nextBtn.style.display = "none";
      selectBtn.style.display = "none";
      button.innerHTML = "";
      UIkit.notification({
        message: `<span class="uk-margin-small-right" uk-icon="icon: warning; ratio: 2"></span> Время закончен !!! `,
        status: "warning",
        pos: "bottom-right",
      });
      if (localStorage.getItem("Quiz repeat " + quiz_num) != null) {
        quiz.repeat = parseInt(localStorage.getItem("Quiz repeat " + quiz_num));
        quiz.repeat--;
        localStorage.setItem("Quiz repeat " + quiz_num, quiz.repeat);
        repeatBtn.innerHTML =
          "Повторить | " + localStorage.getItem("Quiz repeat " + quiz_num);
      } else {
        quiz.repeat--;
        localStorage.setItem("Quiz repeat " + quiz_num, quiz.repeat);
        repeatBtn.innerHTML =
          "Повторить | " + localStorage.getItem("Quiz repeat " + quiz_num);
      }
    } else if (quiz.current >= quiz.question.length - 1) {
      nextBtn.addEventListener("click", clearInterval(timer));
    } else {
      document.querySelector(".fill").style.width =
        (timeMinut / 1200) * 100 + "%";
      if (timeMinut < 120) {
        document.querySelector(".fill").style.backgroundColor = "gold";
      }
      if (timeMinut < 60) {
        document.querySelector(".fill").style.backgroundColor = "#dc3545";
      }
    }
    --timeMinut;
  }, 1000);
}
startBtn.addEventListener("click", function () {
  Timer();
  Start();
});
selectBtn.addEventListener("click", (e) => Select());
nextBtn.addEventListener("click", (e) => Next());
repeatBtn.addEventListener("click", function () {
  Timer();
  Repeat();
});
quitBtn.addEventListener("click", (e) => Quit());
