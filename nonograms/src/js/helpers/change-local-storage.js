export const checkLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "dark");
  }
};
