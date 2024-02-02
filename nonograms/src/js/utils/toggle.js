const clearLS = (item) => localStorage.removeItem(item);
const setItemLS = (item) => localStorage.setItem("theme", item);

export const toggle = (elem, dark, light) => {
  if (elem.classList.contains(dark)) {
    elem.classList.remove(dark);
    elem.classList.add(light);
    clearLS("dark");
    setItemLS("light");
  } else if (elem.classList.contains(light)) {
    elem.classList.remove(light);
    elem.classList.add(dark);
    clearLS("light");
    setItemLS("dark");
  }
};
