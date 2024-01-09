import keys from "./modules/keys";
import questions from "./modules/questions";
import { generateHeader } from "./components/generate-header";
import { generateMain } from "./components/generate-main";
import { generateHangman } from "./components/generate-hangman";

const app = () => {
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

  console.log(header);
  console.log(main);
  console.log(hangman);
};

export default app;
