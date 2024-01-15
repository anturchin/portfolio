import { createHtmlElement } from "../helpers/create-html-element";

export const generateQuestionText = (question) => {
  const questionText = createHtmlElement("p", "question__text");
  questionText.innerHTML = `<strong><i>Подсказка</i></strong>: ${question}`;
  return questionText;
};
