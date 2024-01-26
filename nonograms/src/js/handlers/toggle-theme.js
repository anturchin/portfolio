import { toggle } from "../helpers/toggle";

export const toggleTheme = (e) => {
  const target = e.target;
  const body = document.querySelector("body");
  const gameCell = document.querySelectorAll(".game__cell");
  const hintsCell = document.querySelectorAll(".hints__cell");
  const gameLevel = document.querySelectorAll(".level__item");
  const resetBtn = document.querySelectorAll(".reset__button");
  const templateCell = document.querySelectorAll(".template__cell");
  const gameGrid = document.querySelector(".game__grid");
  const hintsTop = document.querySelector(".hints__top");
  const hintsLeft = document.querySelector(".hints__left");

  if (target) toggle(target, "dark__button", "light__button");
  if (body) toggle(body, "dark-theme", "light-theme");
  if (gameGrid) toggle(gameGrid, "dark__grid", "light__grid");
  if (hintsTop) toggle(hintsTop, "dark__top", "light__top");
  if (hintsLeft) toggle(hintsLeft, "dark__left", "light__left");

  if (gameCell)
    gameCell.forEach((cell) => {
      toggle(cell, "dark__cell", "light__cell");
      toggle(cell, "dark__checked", "light__checked");
    });
  if (gameLevel)
    gameLevel.forEach((level) => {
      toggle(level, "dark__button", "light__button");
    });
  if (resetBtn)
    resetBtn.forEach((level) => {
      toggle(level, "dark__button", "light__button");
    });
  if (hintsCell)
    hintsCell.forEach((hints) => {
      toggle(hints, "dark__hints", "light__hints");
    });
  if (templateCell)
    templateCell.forEach((template) => {
      toggle(template, "dark__cell", "light__cell");
      toggle(template, "dark__checked", "light__checked");
    });
};
