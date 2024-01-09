import { createHtmlElement } from "../helpers/create-html-element";

export const generateHangman = () => {
  const hangman = createHtmlElement("div", "hangman");

  const hangmanCrossbar = createHtmlElement("div", "hangman__crossbar");
  const gallowsPath = require("../../image/gallows.svg");
  const crossbarImgElem = createHtmlElement("img", "", gallowsPath, "gallows");
  hangmanCrossbar.append(crossbarImgElem);

  const hangmanWrapper = createHtmlElement("div", "hangman__wrapper");

  const hangmanHead = createHtmlElement("div", "hangman__head");
  const headPath = require("../../image/head.svg");
  const headImgElem = createHtmlElement(
    "img",
    ["hidden"],
    headPath,
    "head",
    null,
    "head",
  );
  hangmanHead.append(headImgElem);

  const hangmanBody = createHtmlElement("div", "hangman__body");
  const handOnePath = require("../../image/hand-one.svg");
  const handOneImgElem = createHtmlElement(
    "img",
    ["hidden"],
    handOnePath,
    "hand-one",
    null,
    "hand-one",
  );
  const bodyPath = require("../../image/body.svg");
  const bodyImgElem = createHtmlElement(
    "img",
    ["hidden"],
    bodyPath,
    "body",
    null,
    "body",
  );
  const handTwoPath = require("../../image/hand-two.svg");
  const handTwoImgElem = createHtmlElement(
    "img",
    ["hidden"],
    handTwoPath,
    "hand-two",
    null,
    "hand-two",
  );
  hangmanBody.append(handOneImgElem);
  hangmanBody.append(bodyImgElem);
  hangmanBody.append(handTwoImgElem);

  const hangmanLeg = createHtmlElement("div", "hangman__leg");
  const legOnePath = require("../../image/leg-one.svg");
  const legOneImgElem = createHtmlElement(
    "img",
    ["hidden"],
    legOnePath,
    "leg-one",
    null,
    "leg-one",
  );
  const legTwoPath = require("../../image/leg-two.svg");
  const legTwoImgElem = createHtmlElement(
    "img",
    ["hidden"],
    legTwoPath,
    "leg-two",
    null,
    "leg-two",
  );
  hangmanLeg.append(legOneImgElem);
  hangmanLeg.append(legTwoImgElem);

  hangmanWrapper.append(hangmanHead);
  hangmanWrapper.append(hangmanBody);
  hangmanWrapper.append(hangmanLeg);

  hangman.append(hangmanCrossbar);
  hangman.append(hangmanWrapper);

  return hangman;
};
