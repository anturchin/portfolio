export const toggleTheme = (e) => {
  const target = e.target;
  const body = document.querySelector("body");
  const gameCell = document.querySelectorAll(".game__cell");

  if (target.classList.contains("dark__button")) {
    target.classList.remove("dark__button");
    target.classList.add("light__button");
  } else {
    target.classList.remove("light__button");
    target.classList.add("dark__button");
  }

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }

  gameCell.forEach((cell) => {
    if (cell.classList.contains("dark__cell")) {
      cell.classList.remove("dark__cell");
      cell.classList.add("light__cell");
    } else {
      cell.classList.remove("light__cell");
      cell.classList.add("dark__cell");
    }
  });
};
