export const createHtmlElement = (
  elem,
  className = null,
  path = null,
  description = null,
) => {
  const htmlElement = document.createElement(elem);

  if (className) {
    htmlElement.classList.add(className);
  }

  if (path && description) {
    htmlElement.src = path;
    htmlElement.alt = description;
  }
  return htmlElement;
};
