import { createHtmlElement } from "../helpers/create-html-element";

export const generateQuestionMistake = (attempts) => {
  const questionMistake = createHtmlElement("div", "question__mistake");
  const questionText = createHtmlElement(
    "p",
    "question__attempts",
    null,
    null,
    "Неправильные попытки",
  );
  questionMistake.append(questionText);

  const questionCounter = createHtmlElement("div", "question__counter");
  const attemptsCounter = createHtmlElement(
    "span",
    null,
    null,
    null,
    "0",
    "attemptsCounter",
  );
  questionCounter.append(attemptsCounter);

  const textNode = document.createTextNode("/");
  questionCounter.append(textNode);

  const maxAttempts = createHtmlElement(
    "span",
    null,
    null,
    null,
    `${attempts}`,
  );
  questionCounter.append(maxAttempts);
  questionMistake.append(questionCounter);

  return questionMistake;
};
