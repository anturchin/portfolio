import { toggle } from "../utils/toggle";

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
  const gameGrid_5 = document.querySelector(".game__grid_5x5");
  const gameGrid_10 = document.querySelector(".game__grid_10x10");
  const gameGrid_15 = document.querySelector(".game__grid_15x15");
  const hintsTop_5 = document.querySelector(".hints__top_5x5");
  const hintsTop_10 = document.querySelector(".hints__top_10x10");
  const hintsTop_15 = document.querySelector(".hints__top_15x15");
  const hintsLeft_5 = document.querySelector(".hints__left_5x5");
  const hintsLeft_10 = document.querySelector(".hints__left_10x10");
  const hintsLeft_15 = document.querySelector(".hints__left_15x15");
  const hintsNum_5 = document.querySelectorAll(".hints__num_5x5");
  const hintsNum_10 = document.querySelectorAll(".hints__num_10x10");
  const hintsNum_15 = document.querySelectorAll(".hints__num_15x15");

  if (target) toggle(target, "dark__button", "light__button");
  if (body) toggle(body, "dark-theme", "light-theme");
  if (gameGrid_5) toggle(gameGrid_5, "dark__grid", "light__grid");
  if (gameGrid_10) toggle(gameGrid_10, "dark__grid", "light__grid");
  if (gameGrid_15) toggle(gameGrid_15, "dark__grid", "light__grid");
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
      toggle(cell, "dark__cross", "light__cross");
    });
  if (gameCell_10)
    gameCell_10.forEach((cell) => {
      toggle(cell, "dark__cell", "light__cell");
      toggle(cell, "dark__checked", "light__checked");
      toggle(cell, "dark__cross", "light__cross");
    });
  if (gameCell_15)
    gameCell_15.forEach((cell) => {
      toggle(cell, "dark__cell", "light__cell");
      toggle(cell, "dark__checked", "light__checked");
      toggle(cell, "dark__cross", "light__cross");
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
  if (hintsNum_5)
    hintsNum_5.forEach((num) => {
      toggle(num, "dark__cell", "light__cell");
    });
  if (hintsNum_10)
    hintsNum_10.forEach((num) => {
      toggle(num, "dark__cell", "light__cell");
    });
  if (hintsNum_15)
    hintsNum_15.forEach((num) => {
      toggle(num, "dark__cell", "light__cell");
    });
};
