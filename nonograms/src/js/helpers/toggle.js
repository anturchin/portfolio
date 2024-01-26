export const toggle = (elem, dark, light) => {
  if (elem.classList.contains(dark)) {
    elem.classList.remove(dark);
    elem.classList.add(light);
  } else if (elem.classList.contains(light)) {
    elem.classList.remove(light);
    elem.classList.add(dark);
  }
};
