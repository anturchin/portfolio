export const compare = (props) => {
  const { cell, checked, cross } = props;
  let result = "";
  if (cell.classList.contains(checked)) {
    result = "checked";
  } else if (cell.classList.contains(cross)) {
    result = "cross";
  } else {
    result = "empty";
  }
  return result;
};
