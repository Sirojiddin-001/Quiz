import { render, QS, QSA } from "./render.js";
import { cards } from "./cards.js";
import { quiz } from "./quiz.js";

cards.map((card) =>
  render("div", {
    class:
      "card uk-card uk-card-default uk-box-shadow-small uk-box-shadow-hover-large",
    handlers: {
      click: function (e) {
        quiz(card.data);
        QS(".full").style.display = "flex";
        QS("#quiz_info").innerHTML = card.title;
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
