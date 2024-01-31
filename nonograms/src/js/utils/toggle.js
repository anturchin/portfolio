const clearLS = () => localStorage.clear();
const setItemLS = (item) => localStorage.setItem("theme", item);

export const toggle = (elem, dark, light) => {
  if (elem.classList.contains(dark)) {
    elem.classList.remove(dark);
    elem.classList.add(light);
    clearLS();
    setItemLS("light");
  } else if (elem.classList.contains(light)) {
    elem.classList.remove(light);
    elem.classList.add(dark);
    clearLS();
    setItemLS("dark");
  }
};
