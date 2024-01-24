export const toggleTheme = (e) => {
  const target = e.target;
  const body = document.querySelector("body");
  const gameCell = document.querySelectorAll(".game__cell");
  const hintsCell = document.querySelectorAll(".hints__cell");
  const gameLevel = document.querySelectorAll(".level__item");
  const gameGrid = document.querySelector(".game__grid");
  const hintsTop = document.querySelector(".hints__top");
  const hintsLeft = document.querySelector(".hints__left");

  const toggle = (elem, dark, light) => {
    if (elem.classList.contains(dark)) {
      elem.classList.remove(dark);
      elem.classList.add(light);
    } else {
      elem.classList.remove(light);
      elem.classList.add(dark);
    }
  };

  toggle(target, "dark__button", "light__button");
  toggle(body, "dark-theme", "light-theme");
  toggle(gameGrid, "dark__grid", "light__grid");
  toggle(hintsTop, "dark__top", "light__top");
  toggle(hintsLeft, "dark__left", "light__left");

  gameCell.forEach((cell) => {
    toggle(cell, "dark__cell", "light__cell");
  });

  gameLevel.forEach((level) => {
    toggle(level, "dark__button", "light__button");
  });

  hintsCell.forEach((hints) => {
    toggle(hints, "dark__hints", "light__hints");
  });
};
