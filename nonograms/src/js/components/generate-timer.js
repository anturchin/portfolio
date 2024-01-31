import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  timer: "timer",
  container: "container",
  timerWrapper: "timer__wrapper",
  timerTitle: "timer__title",
  timerDuration: "timer__duration",
};

export const generateTimer = () => {
  const sectionTimer = createHtmlElement("section", [STYLES.timer, STYLES.container]);
  const timerWrapper = createHtmlElement("div", [STYLES.timerWrapper]);
  const timerTitle = createHtmlElement("span", [STYLES.timerTitle]);
  const timerDuration = createHtmlElement("span", [STYLES.timerDuration], "00 : 00");
  timerWrapper.append(timerTitle);
  timerWrapper.append(timerDuration);
  sectionTimer.append(timerWrapper);
  return timerWrapper;
};
