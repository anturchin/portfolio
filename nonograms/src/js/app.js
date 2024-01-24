import { toggleTheme } from "./helpers/toggle-theme";

const app = () => {
  const themeToggleBtn = document.querySelector("#toggle-theme");

  themeToggleBtn.addEventListener("click", toggleTheme);
};

export default app;
