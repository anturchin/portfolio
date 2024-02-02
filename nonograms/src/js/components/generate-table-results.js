import { createHtmlElement } from "../utils/create-html-element";

const STYLES = {
  table: "table",
  container: "container",
  tableRow: "table__row",
  tableCell: "table__cell",
  tableRowResult: "table__row_result",
};

const createRowResults = () => {
  const records = JSON.parse(localStorage.getItem("records"));
  if (records) {
    records.sort((a, b) => a.time - b.time);
    const fragment = new DocumentFragment();
    for (const record of records) {
      const rowRecord = createHtmlElement("div", STYLES.tableRowResult);
      const cellRecordName = createHtmlElement(
        "div",
        STYLES.tableCell,
        record.templateName,
      );
      const cellRecordDifficulty = createHtmlElement(
        "div",
        STYLES.tableCell,
        record.level,
      );
      const cellRecordTime = createHtmlElement(
        "div",
        STYLES.tableCell,
        `${record.formatTime.formatMinutes} : ${record.formatTime.formatSeconds}`,
      );
      rowRecord.append(cellRecordName);
      rowRecord.append(cellRecordDifficulty);
      rowRecord.append(cellRecordTime);
      fragment.append(rowRecord);
    }
    return fragment;
  } else {
    const rowRecord = createHtmlElement("div", STYLES.tableRowResult);
    const cellRecordName = createHtmlElement("div", STYLES.tableCell, `---`);
    const cellRecordDifficulty = createHtmlElement("div", STYLES.tableCell, `---`);
    const cellRecordTime = createHtmlElement("div", STYLES.tableCell, `-- : --`);
    rowRecord.append(cellRecordName);
    rowRecord.append(cellRecordDifficulty);
    rowRecord.append(cellRecordTime);
    return rowRecord;
  }
};

export const generateTableResults = () => {
  const table = createHtmlElement("div", [STYLES.table, STYLES.container]);
  const rowHeader = createHtmlElement("div", [STYLES.tableRow]);
  const cellHeaderName = createHtmlElement("div", [STYLES.tableCell], "name");
  const cellHeaderDifficulty = createHtmlElement("div", [STYLES.tableCell], "difficulty");
  const cellHeaderTime = createHtmlElement("div", [STYLES.tableCell], "time");

  rowHeader.append(cellHeaderName);
  rowHeader.append(cellHeaderDifficulty);
  rowHeader.append(cellHeaderTime);

  table.append(rowHeader);

  const rowResults = createRowResults();
  table.append(rowResults);
  return table;
};
