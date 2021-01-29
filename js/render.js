export function render(type, config) {
  let element = document.createElement(type);
  config.attr &&
    Object.keys(config.attr).forEach(function (attr) {
      element.setAttribute(attr, config.attr[attr]);
    });
  config.style &&
    Object.keys(config.style).forEach((style) => {
      element.style[style] = config.style[style];
    });
  config.textContent && (element.innerHTML = config.textContent);
  config.id && (element.id = config.id);
  config.class && (element.className = config.class);
  config.handlers &&
    Object.keys(config.handlers).length &&
    Object.keys(config.handlers).forEach((key) => {
      element.addEventListener(key, config.handlers[key]);
    });
  config.appendTo && document.querySelector(config.appendTo).append(element);
  config.appendIn &&
    Object.keys(config.appendIn).forEach(function (appendIn) {
      element.appendChild(config.appendIn[appendIn]);
    });
  return element;
}
export function QS(elem) {
  return typeof elem === "string" ? document.querySelector(elem) : elem;
}
export function QSA(elem) {
  return typeof elem === "string" ? document.querySelectorAll(elem) : elem;
}
/*  
render("div", {
    id: "app",
    appendTo: "body",
    appendIn: [
      render("div", {
        class: "info",
        appendIn: [
          render("span", {
            id: "quiz_info",
          }),
          render("span", {
            id: "quiz_length",
          }),
        ],
      }),
      render("div", {
        class: "quiz_text_block",
        appendIn: [render("span", { id: "quiz_text" })],
      }),
      render("div", {
        class: "buttons",
        appendIn: [],
      }),
      render("div", {
        class: "floter",
        appendIn: [
          render("button", { textContent: "ANSWER" }),
          render("button", {
            textContent: "NEXT",
            handlers: {
              click: function () {
                if (current < data.length - 1) current++;
                init(data);
              },
            },
          }),
        ],
      }),
    ],
  });
*/
