import { createHtmlElement } from "../helpers/create-html-element";

export const generateModal = (secretWord, win = true, closeModalAndNewGame) => {
  const modal = createHtmlElement("div", ["modal", "modal__show"]);
  const modalContent = createHtmlElement("div", "modal__content");

  const textContent = win ? "Вы победили" : "Вы проиграли";
  const modalTitle = createHtmlElement(
    "h2",
    "modal__title",
    null,
    null,
    textContent,
  );
  modalContent.append(modalTitle);

  const modalImage = createHtmlElement("div", "modal__image");
  const path = win
    ? require("../../image/gif/quby-cute.gif")
    : require("../../image/gif/cute-dog.gif");
  const alt = win ? "quby-cute" : "cute-dog";
  const img = createHtmlElement("img", "modal__image", path, alt);
  modalImage.append(img);
  modalContent.append(modalImage);

  const modalText = createHtmlElement("p", "modal__text");
  const span = createHtmlElement("span", null, null, null, "Секретное слово: ");
  modalText.append(span);
  const spanSecretWord = createHtmlElement(
    "span",
    null,
    null,
    null,
    secretWord.toUpperCase(),
    "secret-word",
  );
  modalText.append(spanSecretWord);
  modalContent.append(modalText);

  const button = createHtmlElement(
    "button",
    "modal__button",
    null,
    null,
    "Играть еще раз",
  );
  button.addEventListener("click", closeModalAndNewGame);
  modalContent.append(button);
  modal.append(modalContent);

  return modal;
};
