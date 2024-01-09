import { createHtmlElement } from "../helpers/create-html-element";

export const generateQuestion = () => {
  const question = createHtmlElement("div", "question");
  return question;
};
