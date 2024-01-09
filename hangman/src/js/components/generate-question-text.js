import { createHtmlElement } from "../helpers/create-html-element";

export const generateQuestionText = (question) => {
  const questionText = createHtmlElement(
    "p",
    "question__text",
    null,
    null,
    question,
  );
  return questionText;
};
