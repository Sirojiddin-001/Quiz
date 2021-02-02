export const test1 = [
  {
    q: "Где правильно указана переменная?",
    o: [`var str = "Hi"`, `int num = "1";`, "done = true;", "char sym = 'a';"],
    a: 3,
  },
  {
    q: "Как подключить стандартную библиотеку iostream?",
    o: [
      "#include iostream",
      `#include <iostream>`,
      "#include “iostream.h”",
      `#include <iostream.h>`,
    ],
    a: 1,
  },
  {
    q:
      "Какое расширение имеет файл исходного кода программы написанное на языке C++ ?",
    o: [".py", ".bas", ".pas", ".cpp"],
    a: 3,
  },
  {
    q:
      "В какой строке приведено название стандартного оператора вывода данных?",
    o: ["cin", "<<", "cout", ">>"],
    a: 2,
  },
  {
    q: "Какое ключевое слово используется для описания константы?",
    o: ["costanta", "CON", "Const", "const"],
    a: 3,
  },
  {
    q: "Как возвести значение переменного x в степень n в С++?",
    o: ["x^n", "pow(x,n)", "pow(n,x)", "exp(x)"],
    a: 1,
  },
  {
    q: "Простые типы данных в С++.",
    o: [
      "целые – int, вещественные – float или double, символьные – string",
      "целые – int, вещественные – float или real, символьные – char",
      "целые – int, вещественные – float или double, символьные – char",
      "целые – bool, вещественные – float или double, символьные – string",
    ],
    a: 2,
  },
  {
    q: "Каким ключевым словом опрeдeляется опeратор условного перехода ?",
    o: ["if", "switch", "for", "goto"],
    a: 0,
  },
  {
    q: `Какой из следующих логических операторов - логический оператор И?`,
    o: ["&&", "|", "&", "||"],
    a: 0,
  },
  {
    q:
      "В каком случае можно не использовать фигурные скобочки в операторе выбора if?",
    o: [
      "если в теле оператора if нет ни одного оператора",
      "нет правильного ответа",
      "если в теле оператора if два и более операторов",
      "если в теле оператора if всего один оператор",
    ],
    a: 3,
  },
];
export const test2 = [
  {
    q: " Цикл с постусловием?",
    o: ["while", "for", "do while"],
    a: 2,
  },
  {
    q: "Тело любого цикла выполняется до тех пор, пока его условие ...",
    o: ["у цикла нет условия", "ложно", "истинно"],
    a: 1,
  },
  {
    q:
      "Какой оператор не допускает перехода от одного константного выражения к другому?",
    o: ["end;", "точка с запятой", "break;", "Stop;"],
    a: 2,
  },
  {
    q: "Какой служебный знак ставится после оператора case ?",
    o: ["-", ":", ".", ";"],
    a: 1,
  },
  {
    q: "Цикл с предусловием?",
    o: ["do while", "for", "while"],
    a: 2,
  },
  {
    q: " Какими знаками заканчивается большинство строк кода в С++?",
    o: ["; (точка с запятой)", ": (двоеточие)", ". (точка)", ", (запятая)"],
    a: 0,
  },
  {
    q: "Какой из следующих операторов - оператор сравнения двух переменных?",
    o: ["=", "!=", "==", "equal"],
    a: 2,
  },
  {
    q:
      "Какому зарезервированному слову программа передаёт управление в случае, если значение переменной или выражения оператора switch не совпадает ни с одним константным выражением?",
    o: ["all", "default", "other", "contingency"],
    a: 1,
  },
  {
    q: "Какой из ниже перечисленных операторов, не является циклом в С++?",
    o: ["do while", "for", "while", "repeat until"],
    a: 3,
  },
  {
    q:
      "Чему будет равна переменная a, после выполнения этого кода int a; for(a = 0; a < 10; a++) {}?",
    o: [`1`, `10`, `9`],
    a: 1,
  },
];

export const test3 = [
  {
    q: "Если оператор continuе внутри опeратора цикла, тогда:",
    o: [
      "пeрeдает управлeние на начало слeдующей итeрации цикла",
      "пeрeдает управлeние до конца прeдыдущей итeрации цикла",
      "пeрeдает управлeние итeрации цикла, которая слeдует за знаком",
      "пeрeдаёт управлeние послe циклическому опeратору ",
    ],
    a: 0,
  },
  {
    q: `<pre>Опрeдeлить сколько раз будeт выполнeно тeло цикла:
         int i=1;
          while ( i * i < 81 )
          { ….
          i += 4;
          }</pre>`,
    o: ["2", "нe будeт выполнeно ни разу", "1", "9"],
    a: 0,
  },
  {
    q: `<pre>
      Найдитe значение x послe выполнeния кода фрагмeнта:
      int x=0, y=0;  
      while(y<10)     
      y=3*(++x)+1;
      </pre>`,
    o: ["4", "5", "1", "3"],
    a: 3,
  },
  {
    q: `<pre>
    Опрeдeлить сколько раз будeт выполнeно тeло цикла:
    int i=0;    
    do {
         i++;  
         ……
    } while ( 1/i>0 );
    </pre>`,
    o: ["3", "4", "2", "1"],
    a: 2,
  },
  {
    q:
      "Укажите правильный вызов функции, предпологается, что функция была объявлена ранее.",
    o: ["funct();", "int funct();;", "funct;", "funct x, y;"],
    a: 0,
  },
  {
    q: `<pre>
    Что будет напечатано на экране, после выполнения этого кода?
    #include <ostream> 
    int foo(int y);
    int foo(int x)
    {
      return x+1;
    }
     
    int main(int argc, char** argv)
    {
      int x = 3;
      int y = 6;
     
      std::cout << foo(x) << std::endl;
     
      return 0;
    }</pre>`,
    o: ["4", "9", "3", "ошибка компиляции"],
    a: 0,
  },
  {
    q: "Как называются функции вызывающие самого себя?",
    o: ["Круговые", "Рекурсивные", "Циклические", "Повторяющийся"],
    a: 1,
  },
  {
    q: "Где должна находится прототип функции?",
    o: [
      "внутри основной функции main()",
      "в любом месте",
      "перед основной функции main()",
      "после основной функции main()",
    ],
    a: 2,
  },
  {
    q: "В каких случаях оператор return внутри функции использовать  нельзя?",
    o: [
      "Если функция имеет тип void",
      "Анонимных функциях",
      "Если название функции является Void",
      "Всегда",
    ],
    a: 0,
  },
  {
    q: `Отметьте синтактически корректный вызов функции
    int fun(char c, int x, int y=2);`,
    o: [`fun(“!”,2);`, `fun(“!”,2);`, `fun(‘А’,5);`, `fun(1,2,3);`],
    a: 2,
  },
];
