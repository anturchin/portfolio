export const createHtmlElement = (
  elem,
  className = null,
  text = null,
  dataAttribute = null,
  id = null,
) => {
  const htmlElement = document.createElement(elem);

  if (className && typeof className === "string") {
    htmlElement.classList.add(className);
  }

  if (Array.isArray(className)) {
    className.forEach((el) => {
      htmlElement.classList.add(el);
    });
  }

  if (text) {
    htmlElement.textContent = text;
  }

  if (dataAttribute) {
    htmlElement.dataset[dataAttribute] = true;
  }

  if (id) {
    htmlElement.id = id;
  }

  return htmlElement;
};
