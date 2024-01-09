import { createHtmlElement } from "../helpers/create-html-element";

export const generateKeyboard = (keys, handleKeyClick) => {
  const questionKey = createHtmlElement("div", "question__key");
  const questionKeyWrapper = createHtmlElement("div", "key__wrapper");

  const keyItems = keys.map((item) => {
    const keyItem = createHtmlElement("div", "key__item");
    keyItem.dataset.letter = item.value;
    keyItem.addEventListener("click", handleKeyClick);
    const keyLetter = createHtmlElement(
      "span",
      "key__letter",
      null,
      null,
      item.value.toUpperCase(),
    );
    keyItem.append(keyLetter);
    return keyItem;
  });

  questionKeyWrapper.append(...keyItems);
  questionKey.append(questionKeyWrapper);

  return questionKey;
};
