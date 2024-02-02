const addResult = ({ templateName, level, formatTime }) => {
  const { formatMinutes, formatSeconds } = formatTime;
  let records = JSON.parse(localStorage.getItem("records")) || [];
  const time = +formatMinutes * 60 + +formatSeconds;
  const result = { templateName, level, formatTime, time };

  records.unshift(result);
  records = records.slice(0, 5);
  const json = JSON.stringify(records);
  localStorage.setItem("records", json);
};

export const saveResultGameToLocalStorage = (formatTime, cell) => {
  const parent = cell.parentElement;
  const level = parent.dataset.level;
  const templateName = parent.dataset.name;
  addResult({ templateName, level, formatTime });
};
