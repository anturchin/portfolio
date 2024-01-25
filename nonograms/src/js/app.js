import { toggleTheme } from "./helpers/toggle-theme";
import { generateHeader } from "./components/generate-header";

const app = () => {
  const themeToggleBtn = document.querySelector("#toggle-theme");

  console.log(generateHeader());

  themeToggleBtn.addEventListener("click", toggleTheme);
};

export default app;
