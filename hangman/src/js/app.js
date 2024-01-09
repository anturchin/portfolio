import keys from "./keys";
import questions from "./questions";
import { generateHeader } from "./components/generate-header";
import { generateMain } from "./components/generate-main";
import { generateHangman } from "./components/generate-hangman";
import { generateQuestion } from "./components/generate-question";
import { generateQuestionWord } from "./components/generate-question-word";
import { generateQuestionText } from "./components/generate-question-text";
import { generateQuestionMistake } from "./components/generate-question-mistake";
import { generateKeyboard } from "./components/generate-keybord";

const app = () => {
  const body = document.querySelector("body");

  const maxAttempts = 6;
  let attemptsCounter = 0;
  let guessedLetters = [];
  let secretWordArray = [];

  const randomPair = getRandomQuestion();
  const randomQuestion = randomPair.question;
  const randomAnswer = randomPair.answer;

  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  const header = generateHeader();
  const main = generateMain();
  const hangman = generateHangman();
  const question = generateQuestion();
  const questionWord = generateQuestionWord(randomAnswer);
  const questionText = generateQuestionText(randomQuestion);
  const questionMistake = generateQuestionMistake(maxAttempts);
  const questionKey = generateKeyboard(keys);

  question.append(questionWord);
  question.append(questionText);
  question.append(questionMistake);
  question.append(questionKey);

  main.append(hangman);
  main.append(question);

  body.append(header);
  body.append(main);
};

export default app;
