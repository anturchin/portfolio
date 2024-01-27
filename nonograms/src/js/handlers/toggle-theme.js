import { toggle } from "../helpers/toggle";

export const toggleTheme = (e) => {
  const target = e.target;
  const body = document.querySelector("body");
  const gameCell_5 = document.querySelectorAll(".game__cell_5x5");
  const gameCell_10 = document.querySelectorAll(".game__cell_10x10");
  const gameCell_15 = document.querySelectorAll(".game__cell_15x15");
  const hintsCell_5 = document.querySelectorAll(".hints__cell_5x5");
  const hintsCell_10 = document.querySelectorAll(".hints__cell_10x10");
  const hintsCell_15 = document.querySelectorAll(".hints__cell_15x15");
  const gameLevel = document.querySelectorAll(".level__item");
  const resetBtn = document.querySelectorAll(".reset__button");
  const templateCell = document.querySelectorAll(".template__cell");
  const gameGrid = document.querySelector(".game__grid");
  const hintsTop_5 = document.querySelector(".hints__top_5x5");
  const hintsTop_10 = document.querySelector(".hints__top_10x10");
  const hintsTop_15 = document.querySelector(".hints__top_15x15");
  const hintsLeft_5 = document.querySelector(".hints__left_5x5");
  const hintsLeft_10 = document.querySelector(".hints__left_10x10");
  const hintsLeft_15 = document.querySelector(".hints__left_15x15");

  if (target) toggle(target, "dark__button", "light__button");
  if (body) toggle(body, "dark-theme", "light-theme");
  if (gameGrid) toggle(gameGrid, "dark__grid", "light__grid");
  if (hintsTop_5) toggle(hintsTop_5, "dark__top", "light__top");
  if (hintsTop_10) toggle(hintsTop_10, "dark__top", "light__top");
  if (hintsTop_15) toggle(hintsTop_15, "dark__top", "light__top");
  if (hintsLeft_5) toggle(hintsLeft_5, "dark__left", "light__left");
  if (hintsLeft_10) toggle(hintsLeft_10, "dark__left", "light__left");
  if (hintsLeft_15) toggle(hintsLeft_15, "dark__left", "light__left");

  if (gameCell_5)
    gameCell_5.forEach((cell) => {
      toggle(cell, "dark__cell", "light__cell");
      toggle(cell, "dark__checked", "light__checked");
    });
  if (gameCell_10)
    gameCell_10.forEach((cell) => {
      toggle(cell, "dark__cell", "light__cell");
      toggle(cell, "dark__checked", "light__checked");
    });
  if (gameCell_15)
    gameCell_15.forEach((cell) => {
      toggle(cell, "dark__cell", "light__cell");
      toggle(cell, "dark__checked", "light__checked");
    });
  if (gameLevel)
    gameLevel.forEach((level) => {
      toggle(level, "dark__button", "light__button");
      toggle(level, "dark__button_active", "light__button_active");
    });
  if (resetBtn)
    resetBtn.forEach((level) => {
      toggle(level, "dark__button", "light__button");
    });
  if (hintsCell_5)
    hintsCell_5.forEach((hints) => {
      toggle(hints, "dark__hints", "light__hints");
    });
  if (hintsCell_10)
    hintsCell_10.forEach((hints) => {
      toggle(hints, "dark__hints", "light__hints");
    });
  if (hintsCell_15)
    hintsCell_15.forEach((hints) => {
      toggle(hints, "dark__hints", "light__hints");
    });
  if (templateCell)
    templateCell.forEach((template) => {
      toggle(template, "dark__cell", "light__cell");
      toggle(template, "dark__checked", "light__checked");
    });
};
