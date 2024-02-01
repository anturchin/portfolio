import { getThemeLs } from "./get-theme-ls";
import { compare } from "./compare";

export const createStateCellsMatrix = (cells, SIZE_GRID, templateLevel) => {
  const checked = getThemeLs({ light: "light__checked", dark: "dark__checked" });
  const cross = getThemeLs({ light: "light__cross", dark: "dark__cross" });

  const numRows = SIZE_GRID[templateLevel];
  const numCols = SIZE_GRID[templateLevel];

  const saveStateCellMatrix = Array.from({ length: numRows }).map(() =>
    Array.from({ length: numCols }, () => []),
  );

  cells.forEach((cell, index) => {
    const row = Math.floor(index / numCols);
    const col = index % numRows;
    saveStateCellMatrix[row][col] = compare({ cell, checked, cross });
  });

  return saveStateCellMatrix;
};
