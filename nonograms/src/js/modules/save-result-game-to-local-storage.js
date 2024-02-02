const addResult = (defaultRecords, { templateName, level, formatTime }) => {
  const { formatMinutes, formatSeconds } = formatTime;
  const records = JSON.parse(localStorage.getItem("records")) || defaultRecords;
  const time = +formatMinutes * 60 + +formatSeconds;
  const result = { templateName, level, formatTime, time };

  records.push(result);
  const lastFiveRecords = records.slice(-5);
  lastFiveRecords.sort((a, b) => a.time - b.time);
  const json = JSON.stringify(lastFiveRecords);
  localStorage.setItem("records", json);
};

export const saveResultGameToLocalStorage = (formatTime, cell) => {
  const parent = cell.parentElement;
  const level = parent.dataset.level;
  const templateName = parent.dataset.name;
  const defaultRecords = [];

  addResult(defaultRecords, { templateName, level, formatTime });
};
