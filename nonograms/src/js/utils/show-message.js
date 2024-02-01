import { generateMessage } from "../components/generate-message";

const closeMessage = (message) => {
  setTimeout(() => {
    message.classList.remove("show");
  }, 2000);
};

export const showMessage = () => {
  const body = document.querySelector("body");
  const existsMessage = document.querySelector(".popup");
  let message = null;
  if (!existsMessage) {
    message = generateMessage();
  } else {
    message = existsMessage;
    message.classList.toggle("show");
  }
  body.append(message);
  closeMessage(message);
};
