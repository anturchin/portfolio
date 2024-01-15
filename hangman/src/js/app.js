import keys from "./keys";
import questions from "./questions";
import { getRandomQuestion } from "./helpers/get-random-question";
import { generateHeader } from "./components/generate-header";
import { generateMain } from "./components/generate-main";
import { generateHangman } from "./components/generate-hangman";
import { generateQuestion } from "./components/generate-question";
import { generateQuestionWord } from "./components/generate-question-word";
import { generateQuestionText } from "./components/generate-question-text";
import { generateQuestionMistake } from "./components/generate-question-mistake";
import { generateKeyboard } from "./components/generate-keybord";
import { updateHangmanDisplay } from "./helpers/update-hangman-display";
import { updateWordDisplay } from "./helpers/update-word-display";
import { generateModal } from "./components/generate-modal";

const app = () => {
  const body = document.querySelector("body");

  const maxAttempts = 6;
  let guessedLetters = [];
  let usedQuestions  = [];
  let attemptsCounter = 0;
  let secretWord = "";
  let timerModal = null;
  let timerReset = null;

  const generateHtml = () => {
    const randomPair = getRandomQuestion(questions, usedQuestions);
    const randomQuestion = randomPair.question;
    const randomAnswer = randomPair.answer;
    console.log(randomAnswer);
    secretWord = randomAnswer.toLowerCase();
    guessedLetters = Array(secretWord.length).fill("_");

    const header = generateHeader();
    const main = generateMain();
    const hangman = generateHangman();
    const question = generateQuestion();
    const questionWord = generateQuestionWord(randomAnswer);
    const questionText = generateQuestionText(randomQuestion);
    const questionMistake = generateQuestionMistake(maxAttempts);
    const questionKey = generateKeyboard(keys, handleKeyClick);

    question.append(questionWord);
    question.append(questionText);
    question.append(questionMistake);
    question.append(questionKey);

    main.append(hangman);
    main.append(question);

    body.append(header);
    body.append(main);

    clearInterval(timerModal);
    clearInterval(timerReset);
  };

  generateHtml();

  document.addEventListener("keydown", handleKeyPress);

  function handleKeyClick(event) {
    const clickedLetter = event.currentTarget.dataset.letter;
    if (clickedLetter) {
      updateDisplay(clickedLetter);
    }
  }

  function handleKeyPress(event) {
    const key = event.code;
    const pressetKey = keys.find((k) => k.code === key);

    if (attemptsCounter >= maxAttempts) {
      return;
    }

    if (pressetKey) {
      updateDisplay(pressetKey.value);
    }
  }

  function updateDisplay(clickedLetter) {
    if (secretWord.includes(clickedLetter)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === clickedLetter) {
          guessedLetters[i] = clickedLetter;
        }
      }
      updateWordDisplay(guessedLetters);
    } else {
      attemptsCounter++;
      updateHangmanDisplay(attemptsCounter, clickedLetter);
    }

    checkGameEnd();
  }

  function closeModalAndNewGame() {
    const modal = document.querySelector(".modal");
    modal.classList.add("hide");
    modal.classList.remove("show");
    body.classList.remove("body__hidden");
    resetGame();
  }

  function checkGameEnd() {
    const areEqual =
      JSON.stringify(secretWord.split("")) === JSON.stringify(guessedLetters);

    if (attemptsCounter === maxAttempts) {
      const modal = generateModal(secretWord, false, closeModalAndNewGame);
      openModal(modal);
    }

    if (areEqual) {
      const modal = generateModal(secretWord, true, closeModalAndNewGame);
      openModal(modal);
    }
  }

  function openModal(modal) {
    timerModal = setTimeout(() => {
      body.append(modal);
      body.classList.add("body__hidden");
    }, 300);
  }

  function resetGame() {
    timerReset = setTimeout(() => {
      body.innerHTML = "";
      attemptsCounter = 0;
      guessedLetters = [];
      secretWord = "";
      generateHtml();
    }, 300);
  }
};

export default app;
