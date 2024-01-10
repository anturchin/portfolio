export const updateWordDisplay = (guessedLetters) => {
  const letters = document.querySelectorAll(".question__letter");
  const lines = document.querySelectorAll(".question__line");
  const keys = document.querySelectorAll(".key__item");

  guessedLetters.forEach((letter, index) => {
    if (letter !== "_") {
      letters[index].textContent = letter.toUpperCase();
      lines[index].classList.add("question__line_delete");
    }
  });

  keys.forEach((key, index) => {
    const letter = key.getAttribute("data-letter");
    if (guessedLetters.includes(letter)) {
      keys[index].classList.add("key__item_disabled");
      keys[index].disabled = true;
    }
  });
};
