import { createHtmlElement } from "../helpers/create-html-element";

export const generateQuestionWord = (answer) => {
  const questionWordContainer = createHtmlElement("div", "question__word");

  const questionWordWrapper = answer
    .toUpperCase()
    .split("")
    .map((item) => {
      const questionWord = createHtmlElement("div", "question__wrapper");
      const questionLetter = createHtmlElement(
        "span",
        ["question__letter"],
        null,
        null,
        null,
      );
      const questionLine = createHtmlElement("span", ["question__line"]);
      questionWord.append(questionLetter);
      questionWord.append(questionLine);

      return questionWord;
    });

  questionWordContainer.append(...questionWordWrapper);

  return questionWordContainer;
};
