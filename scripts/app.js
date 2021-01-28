const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz {
  constructor(type, questions, results) {
    //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
    this.type = type;

    //Массив с вопросами
    this.questions = questions;

    //Массив с возможными результатами
    this.results = results;

    //Количество набранных очков
    this.score = 0;

    //Номер результата из массива
    this.result = 0;

    //Номер текущего вопроса
    this.current = 0;
  }

  Click(index) {
    //Добавляем очки
    let value = this.questions[this.current].Click(index);
    this.score += value;

    let correct = -1;

    //Если было добавлено хотя одно очко, то считаем, что ответ верный
    if (value >= 1) {
      correct = index;
    } else {
      //Иначе ищем, какой ответ может быть правильным
      for (let i = 0; i < this.questions[this.current].answers.length; i++) {
        if (this.questions[this.current].answers[i].value >= 1) {
          correct = i;
          break;
        }
      }
    }

    this.Next();

    return correct;
  }

  //Переход к следующему вопросу
  Next() {
    this.current++;

    if (this.current >= this.questions.length) {
      this.End();
    }
  }

  //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
  End() {
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].Check(this.score)) {
        this.result = i;
      }
    }
  }
}

//Класс, представляющий вопрос
class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answers;
  }

  Click(index) {
    return this.answers[index].value;
  }
}

//Класс, представляющий ответ
class Answer {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

//Класс, представляющий результат
class Result {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }

  //Этот метод проверяет, достаточно ли очков набрал пользователь
  Check(value) {
    if (this.value <= value) {
      return true;
    } else {
      return false;
    }
  }
}

//Массив с результатами
const results = [
  new Result("Вам многому нужно научиться", 0),
  new Result("Вы уже неплохо разбираетесь", 6),
  new Result("Ваш уровень выше среднего", 8),
  new Result("Вы в совершенстве знаете тему", 10),
];

//Массив с вопросами
const questions = [
  new Question("“--” – что происходить при выполнения этой операции?", [
    new Answer("Увеличивается значение переменного на 1", 0),
    new Answer("Два раза подряд выполняется операция -", 0),
    new Answer("Уменьшается значение переменного на 1", 1),
    new Answer("В C++ нет такого операции", 0),
  ]),

  new Question(
    "Выберите из нижеследующих ключевых слов, подходящее для описание переменного значение которого может быт целое число.",
    [
      new Answer("bool", 0),
      new Answer("int", 1),
      new Answer("float", 0),
      new Answer("double", 0),
    ]
  ),

  new Question(
    "Какое расширение имеет файл исходного кода программы написанное на языке C++ ?",
    [
      new Answer(".py", 0),
      new Answer(".bas", 0),
      new Answer(".pas", 0),
      new Answer(".cpp", 1),
    ]
  ),

  new Question(
    "В какой строке приведено название стандартного оператора вывода данных?",
    [
      new Answer("cin", 0),
      new Answer("<<", 0),
      new Answer("cout", 1),
      new Answer(">>", 0),
    ]
  ),

  new Question("Какое ключевое слово используется для описания константы?", [
    new Answer("costanta", 0),
    new Answer("CON", 0),
    new Answer("Const", 0),
    new Answer("const", 1),
  ]),

  new Question("Как возвести значение переменного x в степень n в С++?", [
    new Answer("x^n", 0),
    new Answer("pow(x,n)", 1),
    new Answer("pow(n,x)", 0),
    new Answer("exp(x)", 0),
  ]),
  new Question(
    "Какой опeратор прeдназначен для множeственного альтeрнативного выбора?",
    [
      new Answer("goto", 0),
      new Answer("switch", 1),
      new Answer("if", 0),
      new Answer("throw", 0),
    ]
  ),
  new Question(
    "Каким ключевым словом опрeдeляется опeратор условного перехода ?",
    [
      new Answer("if", 1),
      new Answer("switch", 0),
      new Answer("for", 0),
      new Answer("goto", 0),
    ]
  ),
  new Question(
    `<pre> char sim='3';      

    switch (sim){

     case '2': cout<<"neud"; break;

     case '3': cout<<"udov"; break;

     case '4': cout<<"xor"; break;

     case '5': cout<<"otl"; break;

     default: cout<<"oshibka vvoda";

    }</pre> `,
    [
      new Answer("udovxorotl oshibka vvoda", 0),
      new Answer("oshibka vvoda", 0),
      new Answer("udov", 1),
      new Answer("oshibka", 0),
    ]
  ),
  new Question(
    "С помощью, какой конструкции опрeдeляется опeратор условного перехода ?",
    [
      new Answer("if (выражeние_условие) {…} else {…}", 1),
      new Answer("if (выражeние_условие) else {…}", 0),
      new Answer("while (выражeние_условие) {…}", 0),
      new Answer("else (выражeние_условие) else {…}", 0),
    ]
  ),
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update() {
  //Проверяем, есть ли ещё вопросы
  if (quiz.current < quiz.questions.length) {
    //Если есть, меняем вопрос в заголовке
    headElem.innerHTML = quiz.questions[quiz.current].text;

    //Удаляем старые варианты ответов
    buttonsElem.innerHTML = "";

    //Создаём кнопки для новых вариантов ответов
    for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
      let btn = document.createElement("button");
      btn.className = "button btn btn-light";

      btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

      btn.setAttribute("index", i);

      buttonsElem.appendChild(btn);
    }

    //Выводим номер текущего вопроса
    pagesElem.innerHTML = quiz.current + 1 + " / " + quiz.questions.length;

    //Вызываем функцию, которая прикрепит события к новым кнопкам
    Init();
  } else {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = "";
    headElem.innerHTML = quiz.results[quiz.result].text;
    pagesElem.innerHTML =
      "Оценка: " + quiz.score + " из " + quiz.questions.length;
    document.getElementById("next").style.display = "none";
    document.getElementById("rest").style.display = "";
    document.getElementById("rest").addEventListener("click", function () {
      quiz.current = 0;
      quiz.score = 0;
      document.getElementById("next").style.display = "";
      document.getElementById("next").innerHTML = "Далее";
      document.getElementById("rest").style.display = "none";
      Update();
    });
  }
}

function Init() {
  //Находим все кнопки
  let btns = document.getElementsByClassName("button");
  document.getElementById("info").innerHTML = "Вопрос " + (quiz.current + 1);
  document.getElementById("start").addEventListener("click", function () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "flex";
  });
  for (let i = 0; i < btns.length; i++) {
    //Прикрепляем событие для каждой отдельной кнопки
    //При нажатии на кнопку будет вызываться функция Click()
    btns[i].addEventListener("click", function (e) {
      Click(e.target.getAttribute("index"));
    });
  }
}

function Click(index) {
  //Получаем номер правильного ответа
  let correct = quiz.Click(index);

  //Находим все кнопки
  let btns = document.getElementsByClassName("button");

  //Делаем кнопки серыми
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = "button btn btn-light";
    btns[i].setAttribute("disabled", "");
  }

  //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
  if (quiz.type == 1) {
    if (correct >= 0) {
      btns[correct].className = "button btn btn-success";
    }

    if (index != correct) {
      btns[index].className = "button btn btn-danger";
    }
  } else {
    //Иначе просто подсвечиваем зелёным ответ пользователя
    btns[index].className = "button btn btn-success";
  }
  if (quiz.current == quiz.questions.length) {
    document.getElementById("next").innerHTML = "Закончить";
    document.getElementById("next").addEventListener("click", Update);
  } else {
    document.getElementById("next").innerHTML = "Далее";
    document.getElementById("next").addEventListener("click", Update);
  }
}
