import { createHtmlElement } from "../utils/create-html-element";
import { getThemeLs } from "../utils/get-theme-ls";
import { newGame } from "../app";
import { generateTemplateForModal } from "./generate-template-for-modal";

const STYLES_DARK = {
  modalDark: "modal-dark",
  modalDarkContent: "modal-dark__content",
  modalDarkTitle: "modal-dark__title",
  modalDarkButton: "modal-dark__button",
  modalDarkShow: "modal-dark__show",
  modalDarkHide: "modal-dark__hide",
  modalDarkFade: "modal-dark__fade",
};

const STYLES_LIGHT = {
  modalLight: "modal-light",
  modalLightContent: "modal-light__content",
  modalLightTitle: "modal-light__title",
  modalLightButton: "modal-light__button",
  modalLightShow: "modal-light__show",
  modalLightHide: "modal-light__hide",
  modalLightFade: "modal-light__fade",
};

export const openModal = (cell, time, sound) => {
  const body = document.querySelector("body");
  const parent = cell.parentElement;
  const id = +parent.id;
  const level = parent.dataset.level;
  const templateName = parent.dataset.name;
  const template = generateTemplateForModal(id, level, templateName);
  const modal = generateModal(template, time, sound);
  body.append(modal);
  body.classList.add("body__hidden");
};

const closeModalAndNewGame = (sound) => {
  sound.pauseAllSounds();
  const body = document.querySelector("body");
  const modalTheme = getThemeLs({
    light: STYLES_LIGHT.modalLight,
    dark: STYLES_DARK.modalDark,
  });
  const modal = document.querySelector(`.${modalTheme}`);
  const hide = getThemeLs({
    light: STYLES_LIGHT.modalLightHide,
    dark: STYLES_DARK.modalDarkHide,
  });
  const show = getThemeLs({
    light: STYLES_LIGHT.modalLightShow,
    dark: STYLES_DARK.modalDarkShow,
  });
  modal.classList.add(hide);
  modal.classList.remove(show);
  body.classList.remove("body__hidden");
  body.innerHTML = "";
  newGame();
};

export const generateModal = (template = null, time, sound) => {
  const modalTheme = getThemeLs({
    light: STYLES_LIGHT.modalLight,
    dark: STYLES_DARK.modalDark,
  });
  const modalShowTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightShow,
    dark: STYLES_DARK.modalDarkShow,
  });
  const modalContentTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightContent,
    dark: STYLES_DARK.modalDarkContent,
  });

  const modalTitleTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightTitle,
    dark: STYLES_DARK.modalDarkTitle,
  });

  const buttonTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightButton,
    dark: STYLES_DARK.modalDarkButton,
  });

  const modal = createHtmlElement("div", [modalTheme, modalShowTheme]);
  const modalContent = createHtmlElement("div", modalContentTheme);

  const textContent = `Great! You have solved the nonogram in time ${time.formatMinutes} : ${time.formatSeconds} !`;

  const modalTitle = createHtmlElement(
    "h3",
    modalTitleTheme,
    textContent.toLocaleUpperCase(),
  );
  modalContent.append(modalTitle);
  if (template) {
    modalContent.append(template);
  }

  const button = createHtmlElement("button", buttonTheme, "New Game");

  button.addEventListener("click", () => {
    closeModalAndNewGame(sound);
  });

  modalContent.append(button);
  modal.append(modalContent);

  return modal;
};
