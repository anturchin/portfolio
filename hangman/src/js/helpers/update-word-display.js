export const updateWordDisplay = (guessedLetters) => {
  const letters = document.querySelectorAll(".question__letter");
  const lines = document.querySelectorAll(".question__line");

  letters.forEach((item, idx) => {
    const letter = item.textContent.toLowerCase();
    if (guessedLetters.includes(letter)) {
      console.log(letter);
    }
  });
};
