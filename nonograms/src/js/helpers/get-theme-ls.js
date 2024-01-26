export const getThemeLs = ({ light, dark }) => {
  const themeLs = localStorage.getItem("theme");
  let className = "";
  if (themeLs) {
    className = themeLs === "light" ? light : dark;
  } else {
    className = light;
  }
  return className;
};
