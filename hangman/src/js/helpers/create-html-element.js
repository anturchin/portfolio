export const createHtmlElement = (
  elem,
  className = null,
  path = null,
  description = null,
  text = null,
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

  if (path && description) {
    htmlElement.src = path;
    htmlElement.alt = description;
  }

  if (id) {
    htmlElement.id = id;
  }

  return htmlElement;
};
