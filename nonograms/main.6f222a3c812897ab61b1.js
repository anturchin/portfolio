/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   newGame: () => (/* binding */ newGame),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _components_generate_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/generate-header */ "./src/js/components/generate-header.js");
/* harmony import */ var _components_generate_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/generate-main */ "./src/js/components/generate-main.js");
/* harmony import */ var _components_generate_selected_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/generate-selected-game */ "./src/js/components/generate-selected-game.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_sound_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sound-manager */ "./src/js/modules/sound-manager.js");







const timer = new _modules_timer__WEBPACK_IMPORTED_MODULE_5__.Timer();
const sound = new _modules_sound_manager__WEBPACK_IMPORTED_MODULE_6__.SoundManager();
const startGame = elem => {
  const themeBody = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: "light-theme",
    dark: "dark-theme"
  });
  const body = document.querySelector("body");
  body.classList.add(themeBody);
  const header = (0,_components_generate_header__WEBPACK_IMPORTED_MODULE_2__.generateHeader)();
  const main = (0,_components_generate_main__WEBPACK_IMPORTED_MODULE_3__.generateMain)();
  main.append(elem);
  body.append(header);
  body.append(main);
};
const newGame = () => {
  const selectTemplateGame = (0,_components_generate_selected_game__WEBPACK_IMPORTED_MODULE_4__.generateSelectedGame)(_modules_easy_templates__WEBPACK_IMPORTED_MODULE_0__.easyTemplates, timer, sound);
  startGame(selectTemplateGame);
};
const app = () => {
  newGame();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/js/components/generate-game-board-and-hints.js":
/*!************************************************************!*\
  !*** ./src/js/components/generate-game-board-and-hints.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateGameBoardAndHints: () => (/* binding */ generateGameBoardAndHints)
/* harmony export */ });
/* harmony import */ var _generate_game_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-game-section */ "./src/js/components/generate-game-section.js");
/* harmony import */ var _generate_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-timer */ "./src/js/components/generate-timer.js");
/* harmony import */ var _generate_game_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-game-board */ "./src/js/components/generate-game-board.js");
/* harmony import */ var _generate_hints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-hints */ "./src/js/components/generate-hints.js");
/* harmony import */ var _generate_reset_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generate-reset-game */ "./src/js/components/generate-reset-game.js");
/* harmony import */ var _generate_hints_wrapper_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-hints-wrapper-top */ "./src/js/components/generate-hints-wrapper-top.js");
/* harmony import */ var _generate_hints_wrapper_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generate-hints-wrapper-left */ "./src/js/components/generate-hints-wrapper-left.js");
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");








const STYLES = {
  game: "game",
  container: "container"
};
const generateGameBoardAndHints = (id, level, timer, sound) => {
  const gameBoard = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_7__.createHtmlElement)("div", [STYLES.game, STYLES.container]);
  const gameSection = (0,_generate_game_section__WEBPACK_IMPORTED_MODULE_0__.generateGameSection)();
  const resetGame = (0,_generate_reset_game__WEBPACK_IMPORTED_MODULE_4__.generateResetGame)(timer);
  const timerWrapper = (0,_generate_timer__WEBPACK_IMPORTED_MODULE_1__.generateTimer)();
  gameSection.append(timerWrapper);
  gameSection.append(resetGame);
  gameSection.append(resetGame);
  const gameWrapper = (0,_generate_game_board__WEBPACK_IMPORTED_MODULE_2__.generateGameBoard)(id, level, timer, sound);
  const hintsWrapperTop = (0,_generate_hints_wrapper_top__WEBPACK_IMPORTED_MODULE_5__.generateHintsWrapperTop)(level);
  const hintsTop = (0,_generate_hints__WEBPACK_IMPORTED_MODULE_3__.generateHints)(id, level, "cols");
  hintsWrapperTop.append(hintsTop);
  gameWrapper.append(hintsWrapperTop);
  const hintsWrapperLeft = (0,_generate_hints_wrapper_left__WEBPACK_IMPORTED_MODULE_6__.generateHintsWrapperLeft)(level);
  const hintsLeft = (0,_generate_hints__WEBPACK_IMPORTED_MODULE_3__.generateHints)(id, level, "rows");
  hintsWrapperLeft.append(hintsLeft);
  gameWrapper.append(hintsWrapperLeft);
  gameBoard.append(gameWrapper);
  gameSection.append(gameBoard);
  return gameSection;
};

/***/ }),

/***/ "./src/js/components/generate-game-board.js":
/*!**************************************************!*\
  !*** ./src/js/components/generate-game-board.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameGrid: () => (/* binding */ createGameGrid),
/* harmony export */   generateGameBoard: () => (/* binding */ generateGameBoard)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _modules_medium_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _modules_hard_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/hard-templates */ "./src/js/modules/hard-templates.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _generate_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-modal */ "./src/js/components/generate-modal.js");
/* harmony import */ var _modules_save_result_game_to_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/save-result-game-to-local-storage */ "./src/js/modules/save-result-game-to-local-storage.js");







const STYLES = {
  gameWrapper_5: "game__wrapper_5x5",
  gameWrapper_10: "game__wrapper_10x10",
  gameWrapper_15: "game__wrapper_15x15",
  gameGrid_5: "game__grid_5x5",
  gameGrid_10: "game__grid_10x10",
  gameGrid_15: "game__grid_15x15",
  gameCell: "game__cell",
  gameCell_5: "game__cell_5x5",
  gameCell_10: "game__cell_10x10",
  gameCell_15: "game__cell_15x15"
};
const templates = {
  ["easy"]: _modules_easy_templates__WEBPACK_IMPORTED_MODULE_1__.easyTemplates,
  ["medium"]: _modules_medium_templates__WEBPACK_IMPORTED_MODULE_2__.mediumTemplates,
  ["hard"]: _modules_hard_templates__WEBPACK_IMPORTED_MODULE_3__.hardTemplates
};
let isGameFinished = false;
const checkIfGameIsFinished = cell => {
  const parent = cell.parentElement;
  const cells = parent.querySelectorAll("div");
  const id = +cell.parentElement.id;
  const level = cell.parentElement.dataset.level;
  const size = templates[level][id - 1].template.length;
  const template = templates[level][id - 1].template;
  const checkedTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
    light: "light__checked",
    dark: "dark__checked"
  });
  for (let i = 0; i < cells.length; i++) {
    const currentCell = cells[i];
    const row = Math.floor(i / size);
    const col = i % size;
    const shouldBeBlack = template[row][col] === "X";
    const isCellFilled = currentCell.classList.contains(checkedTheme);
    if (shouldBeBlack && !isCellFilled || !shouldBeBlack && isCellFilled) {
      return false;
    }
  }
  return true;
};
const handleCellClick = (e, timer, sound) => {
  if (!isGameFinished) {
    if (!timer.startTime) {
      timer.start("timer__duration");
    }
    const cell = e.target;
    const isCell = cell.classList.contains(STYLES.gameCell_5) || cell.classList.contains(STYLES.gameCell_10) || cell.classList.contains(STYLES.gameCell_15);
    if (isCell) {
      const checkedTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
        light: "light__checked",
        dark: "dark__checked"
      });
      const crossTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
        light: "light__cross",
        dark: "dark__cross"
      });
      if (cell.classList.contains(crossTheme)) {
        cell.classList.remove(crossTheme);
      }
      cell.classList.toggle(checkedTheme);
      sound.playBlackCellSound();
      if (checkIfGameIsFinished(cell)) {
        const formatTime = timer.formatTime();
        (0,_modules_save_result_game_to_local_storage__WEBPACK_IMPORTED_MODULE_6__.saveResultGameToLocalStorage)(formatTime, cell);
        timer.stop();
        sound.playVictorySound();
        setTimeout(() => {
          (0,_generate_modal__WEBPACK_IMPORTED_MODULE_5__.openModal)(cell, formatTime, sound);
        }, 200);
      }
    }
  }
};
const handleCellRightClick = (e, timer, sound) => {
  e.preventDefault();
  if (!timer.startTime) {
    timer.start("timer__duration");
  }
  const cell = e.target;
  const checkedTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
    light: "light__checked",
    dark: "dark__checked"
  });
  const crossTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
    light: "light__cross",
    dark: "dark__cross"
  });
  if (cell.classList.contains(checkedTheme)) {
    cell.classList.remove(checkedTheme);
  }
  cell.classList.toggle(crossTheme);
  sound.playXCellSound();
};
const createGameGrid = (id, level, size, timer, sound) => {
  const gridTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
    light: "light__grid",
    dark: "dark__grid"
  });
  const cellTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
    light: "light__cell",
    dark: "dark__cell"
  });
  const template = templates[level][id - 1].template;
  const gameContainer = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES[`gameGrid_${size}`], gridTheme]);
  const clickHandler = e => handleCellClick(e, timer, sound);
  const contextMenuHandler = e => handleCellRightClick(e, timer, sound);
  template.forEach(row => {
    row.forEach(col => {
      const gameCell = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.gameCell, STYLES[`gameCell_${size}`], cellTheme]);
      if (col === "X") {
        gameCell.dataset.mark = col;
      }
      gameContainer.append(gameCell);
    });
  });
  gameContainer.id = id;
  gameContainer.dataset.level = level;
  gameContainer.dataset.name = templates[level][id - 1].name;
  gameContainer.addEventListener("click", clickHandler);
  gameContainer.addEventListener("contextmenu", contextMenuHandler);
  gameContainer.clickHandler = clickHandler;
  gameContainer.contextMenuHandler = contextMenuHandler;
  return gameContainer;
};
const generateGameBoard = (id, level, timer, sound) => {
  const size = templates[level][0].template.length;
  const gameWrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES[`gameWrapper_${size}`]);
  const gameGrid = createGameGrid(id, level, size, timer, sound);
  gameWrapper.append(gameGrid);
  return gameWrapper;
};

/***/ }),

/***/ "./src/js/components/generate-game-section.js":
/*!****************************************************!*\
  !*** ./src/js/components/generate-game-section.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateGameSection: () => (/* binding */ generateGameSection)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");

const STYLES = {
  nonograms: "nonograms"
};
const generateGameSection = () => {
  const div = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.nonograms);
  return div;
};

/***/ }),

/***/ "./src/js/components/generate-header.js":
/*!**********************************************!*\
  !*** ./src/js/components/generate-header.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHeader: () => (/* binding */ generateHeader)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _modules_toggle_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/toggle-theme */ "./src/js/modules/toggle-theme.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");



const STYLES = {
  header: "container",
  title: "title"
};
const generateHeader = () => {
  const themeBtn = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__button",
    dark: "dark__button"
  });
  const buttonID = "toggle-theme";
  const buttonText = "Change Theme";
  const h1Text = "Nonograms Game";
  const header = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("header", STYLES.header);
  const title = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1", STYLES.title, h1Text);
  const button = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button", themeBtn, buttonText, null, buttonID);
  button.addEventListener("click", _modules_toggle_theme__WEBPACK_IMPORTED_MODULE_1__.toggleTheme);
  header.append(title);
  header.append(button);
  return header;
};

/***/ }),

/***/ "./src/js/components/generate-hints-wrapper-left.js":
/*!**********************************************************!*\
  !*** ./src/js/components/generate-hints-wrapper-left.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHintsWrapperLeft: () => (/* binding */ generateHintsWrapperLeft)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _modules_medium_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _modules_hard_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/hard-templates */ "./src/js/modules/hard-templates.js");





const STYLES = {
  hintsLeft_5: "hints__left_5x5",
  hintsLeft_10: "hints__left_10x10",
  hintsLeft_15: "hints__left_15x15"
};
const templates = {
  ["easy"]: _modules_easy_templates__WEBPACK_IMPORTED_MODULE_2__.easyTemplates,
  ["medium"]: _modules_medium_templates__WEBPACK_IMPORTED_MODULE_3__.mediumTemplates,
  ["hard"]: _modules_hard_templates__WEBPACK_IMPORTED_MODULE_4__.hardTemplates
};
const generateHintsWrapperLeft = level => {
  const size = templates[level][0].template.length;
  const theme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: "light__left",
    dark: "dark__left"
  });
  const left = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES[`hintsLeft_${size}`], theme]);
  return left;
};

/***/ }),

/***/ "./src/js/components/generate-hints-wrapper-top.js":
/*!*********************************************************!*\
  !*** ./src/js/components/generate-hints-wrapper-top.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHintsWrapperTop: () => (/* binding */ generateHintsWrapperTop)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _modules_medium_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _modules_hard_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/hard-templates */ "./src/js/modules/hard-templates.js");





const STYLES = {
  hintsTop_5: "hints__top_5x5",
  hintsTop_10: "hints__top_10x10",
  hintsTop_15: "hints__top_15x15"
};
const templates = {
  ["easy"]: _modules_easy_templates__WEBPACK_IMPORTED_MODULE_2__.easyTemplates,
  ["medium"]: _modules_medium_templates__WEBPACK_IMPORTED_MODULE_3__.mediumTemplates,
  ["hard"]: _modules_hard_templates__WEBPACK_IMPORTED_MODULE_4__.hardTemplates
};
const generateHintsWrapperTop = level => {
  const size = templates[level][0].template.length;
  const theme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: "light__top",
    dark: "dark__top"
  });
  const top = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES[`hintsTop_${size}`], theme]);
  return top;
};

/***/ }),

/***/ "./src/js/components/generate-hints.js":
/*!*********************************************!*\
  !*** ./src/js/components/generate-hints.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHints: () => (/* binding */ generateHints)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _modules_medium_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _modules_hard_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/hard-templates */ "./src/js/modules/hard-templates.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");





const STYLES = {
  hintsCell_5: "hints__cell_5x5",
  hintsCell_10: "hints__cell_10x10",
  hintsCell_15: "hints__cell_15x15",
  hintsNum_5: "hints__num_5x5",
  hintsNum_10: "hints__num_10x10",
  hintsNum_15: "hints__num_15x15"
};
const templates = {
  ["easy"]: _modules_easy_templates__WEBPACK_IMPORTED_MODULE_1__.easyTemplates,
  ["medium"]: _modules_medium_templates__WEBPACK_IMPORTED_MODULE_2__.mediumTemplates,
  ["hard"]: _modules_hard_templates__WEBPACK_IMPORTED_MODULE_3__.hardTemplates
};
const generateHints = (id, level, direction) => {
  const theme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_4__.getThemeLs)({
    light: "light__hints",
    dark: "dark__hints"
  });
  const size = templates[level][0].template.length;
  const hints = templates[level][id - 1].hints[direction];
  const fragment = new DocumentFragment();
  hints.forEach(row => {
    const hintsCell = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES[`hintsCell_${size}`], theme]);
    row.forEach(col => {
      const hintsNum = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", [STYLES[`hintsNum_${size}`]], col);
      hintsCell.append(hintsNum);
    });
    fragment.append(hintsCell);
  });
  return fragment;
};

/***/ }),

/***/ "./src/js/components/generate-level.js":
/*!*********************************************!*\
  !*** ./src/js/components/generate-level.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateLevel: () => (/* binding */ generateLevel)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _modules_on_change_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/on-change-level */ "./src/js/modules/on-change-level.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");



const STYLES = {
  section: "level",
  container: "container",
  levelList: "level__list",
  levelItem: "level__item",
  levelContinue: "level__item_continue",
  levelItemActive: "light__button_active"
};
const options = [{
  text: "Easy (5x5)",
  id: "easy"
}, {
  text: "Medium (10x10)",
  id: "medium"
}, {
  text: "Hard (15x15)",
  id: "hard"
}];
const generateLevel = () => {
  const themeBtn = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__button",
    dark: "dark__button"
  });
  const themeActive = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__button_active",
    dark: "dark__button_active"
  });
  const sectionLevel = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("section", [STYLES.section, STYLES.container]);
  const levelList = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.levelList);
  const levelItems = options.map(item => {
    const active = item.id === "easy" ? themeActive : "";
    const disabled = item.id === "easy" ? true : false;
    const levelItem = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button", [STYLES.levelItem, themeBtn, active], item.text, null, item.id);
    if (disabled) {
      levelItem.disabled = true;
    }
    return levelItem;
  });
  levelList.append(...levelItems);
  sectionLevel.append(levelList);
  levelList.addEventListener("click", _modules_on_change_level__WEBPACK_IMPORTED_MODULE_1__.onChangeLevel);
  return sectionLevel;
};

/***/ }),

/***/ "./src/js/components/generate-main.js":
/*!********************************************!*\
  !*** ./src/js/components/generate-main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMain: () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");

const STYLES = {
  main: "main"
};
const generateMain = () => {
  const main = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("main", STYLES.main);
  return main;
};

/***/ }),

/***/ "./src/js/components/generate-message.js":
/*!***********************************************!*\
  !*** ./src/js/components/generate-message.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMessage: () => (/* binding */ generateMessage)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");

const STYLES = {
  popup: "popup",
  show: "show"
};
const generateMessage = () => {
  const messageWrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.popup, STYLES.show], "The game progress is saved");
  return messageWrapper;
};

/***/ }),

/***/ "./src/js/components/generate-modal.js":
/*!*********************************************!*\
  !*** ./src/js/components/generate-modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateModal: () => (/* binding */ generateModal),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/js/app.js");
/* harmony import */ var _generate_template_for_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-template-for-modal */ "./src/js/components/generate-template-for-modal.js");




const STYLES_DARK = {
  modalDark: "modal-dark",
  modalDarkContent: "modal-dark__content",
  modalDarkTitle: "modal-dark__title",
  modalDarkButton: "modal-dark__button",
  modalDarkShow: "modal-dark__show",
  modalDarkHide: "modal-dark__hide",
  modalDarkFade: "modal-dark__fade"
};
const STYLES_LIGHT = {
  modalLight: "modal-light",
  modalLightContent: "modal-light__content",
  modalLightTitle: "modal-light__title",
  modalLightButton: "modal-light__button",
  modalLightShow: "modal-light__show",
  modalLightHide: "modal-light__hide",
  modalLightFade: "modal-light__fade"
};
const openModal = (cell, time, sound) => {
  const body = document.querySelector("body");
  const parent = cell.parentElement;
  const id = +parent.id;
  const level = parent.dataset.level;
  const template = (0,_generate_template_for_modal__WEBPACK_IMPORTED_MODULE_3__.generateTemplateForModal)(id, level);
  const modal = generateModal(template, time, sound);
  body.append(modal);
  body.classList.add("body__hidden");
};
const closeModalAndNewGame = sound => {
  sound.pauseAllSounds();
  const body = document.querySelector("body");
  const modalTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLight,
    dark: STYLES_DARK.modalDark
  });
  const modal = document.querySelector(`.${modalTheme}`);
  const hide = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLightHide,
    dark: STYLES_DARK.modalDarkHide
  });
  const show = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLightShow,
    dark: STYLES_DARK.modalDarkShow
  });
  modal.classList.add(hide);
  modal.classList.remove(show);
  body.classList.remove("body__hidden");
  body.innerHTML = "";
  (0,_app__WEBPACK_IMPORTED_MODULE_2__.newGame)();
};
const generateModal = function () {
  let template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let time = arguments.length > 1 ? arguments[1] : undefined;
  let sound = arguments.length > 2 ? arguments[2] : undefined;
  const modalTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLight,
    dark: STYLES_DARK.modalDark
  });
  const modalShowTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLightShow,
    dark: STYLES_DARK.modalDarkShow
  });
  const modalContentTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLightContent,
    dark: STYLES_DARK.modalDarkContent
  });
  const modalTitleTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLightTitle,
    dark: STYLES_DARK.modalDarkTitle
  });
  const buttonTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
    light: STYLES_LIGHT.modalLightButton,
    dark: STYLES_DARK.modalDarkButton
  });
  const modal = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [modalTheme, modalShowTheme]);
  const modalContent = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", modalContentTheme);
  const textContent = `Great! You have solved the nonogram in time ${time.formatMinutes} : ${time.formatSeconds} !`;
  const modalTitle = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h3", modalTitleTheme, textContent.toLocaleUpperCase());
  modalContent.append(modalTitle);
  if (template) {
    modalContent.append(template);
  }
  const button = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button", buttonTheme, "New Game");
  button.addEventListener("click", () => {
    closeModalAndNewGame(sound);
  });
  modalContent.append(button);
  modal.append(modalContent);
  return modal;
};

/***/ }),

/***/ "./src/js/components/generate-option-game.js":
/*!***************************************************!*\
  !*** ./src/js/components/generate-option-game.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateOptionGame: () => (/* binding */ generateOptionGame)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/js/app.js");
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _generate_game_board_and_hints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-game-board-and-hints */ "./src/js/components/generate-game-board-and-hints.js");
/* harmony import */ var _utils_get_random_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-random-template */ "./src/js/utils/get-random-template.js");
/* harmony import */ var _generate_table_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-table-results */ "./src/js/components/generate-table-results.js");






const STYLES = {
  section: "level",
  container: "container",
  levelList: "level__list",
  levelItem: "level__item",
  levelContinue: "level__item_continue",
  levelItemActive: "light__button_active"
};
let tableVisible = false;
const updateActivityClasses = button => {
  const themeBtnActive = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__button_active",
    dark: "dark__button_active"
  });
  button.classList.toggle(themeBtnActive);
};
const showTableResults = e => {
  const select = document.querySelector(".select");
  const oldTable = document.querySelector(".table");
  tableVisible = !tableVisible;
  if (tableVisible) {
    const table = (0,_generate_table_results__WEBPACK_IMPORTED_MODULE_5__.generateTableResults)();
    updateActivityClasses(e.target);
    select.append(table);
  } else {
    if (oldTable) {
      updateActivityClasses(e.target);
      oldTable.remove();
    }
  }
};
const createRandomGame = (timer, sound) => {
  const {
    randomGameIndex,
    randomGame
  } = (0,_utils_get_random_template__WEBPACK_IMPORTED_MODULE_4__.getRandomTemplate)();
  const game = (0,_generate_game_board_and_hints__WEBPACK_IMPORTED_MODULE_3__.generateGameBoardAndHints)(randomGameIndex + 1, randomGame, timer, sound);
  const body = document.querySelector("body");
  body.innerHTML = "";
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.startGame)(game);
};
const updateCells = saveStateCellsMatrix => {
  const cells = document.querySelectorAll(".game__cell");
  const size = saveStateCellsMatrix[0].length;
  const checkedTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__checked",
    dark: "dark__checked"
  });
  const crossTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__cross",
    dark: "dark__cross"
  });
  for (let i = 0; i < cells.length; i++) {
    const currentCell = cells[i];
    const row = Math.floor(i / size);
    const col = i % size;
    if (saveStateCellsMatrix[row][col] === "checked") {
      currentCell.classList.add(checkedTheme);
    }
    if (saveStateCellsMatrix[row][col] === "cross") {
      currentCell.classList.add(crossTheme);
    }
  }
};
const continueGame = (timer, sound) => {
  const saveGame = localStorage.getItem("saveGame");
  if (saveGame) {
    const savedGameState = JSON.parse(saveGame);
    const {
      saveStateCellsMatrix,
      templateId,
      templateLevel,
      time
    } = savedGameState;
    const game = (0,_generate_game_board_and_hints__WEBPACK_IMPORTED_MODULE_3__.generateGameBoardAndHints)(templateId, templateLevel, timer, sound);
    timer.restoreState(time, "timer__duration");
    const body = document.querySelector("body");
    body.innerHTML = "";
    (0,_app__WEBPACK_IMPORTED_MODULE_0__.startGame)(game);
    updateCells(saveStateCellsMatrix);
  }
};
const generateOptionGame = (timer, sound) => {
  const themeBtn = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__button",
    dark: "dark__button"
  });
  const sectionLevel = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("section", [STYLES.section, STYLES.container]);
  const levelList = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", STYLES.levelList);
  const randomBtn = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.levelItem, STYLES.levelContinue, themeBtn], "Random Game");
  randomBtn.addEventListener("click", () => {
    createRandomGame(timer, sound);
  });
  const resultTableBtn = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.levelItem, STYLES.levelContinue, themeBtn], "Results Games");
  resultTableBtn.addEventListener("click", e => {
    showTableResults(e);
  });
  levelList.append(randomBtn);
  levelList.append(resultTableBtn);
  const saveGame = localStorage.getItem("saveGame");
  if (saveGame) {
    const continueBtn = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.levelItem, STYLES.levelContinue, themeBtn], "Continue Game");
    levelList.append(continueBtn);
    continueBtn.addEventListener("click", () => {
      continueGame(timer, sound);
    });
  }
  sectionLevel.append(levelList);
  return sectionLevel;
};

/***/ }),

/***/ "./src/js/components/generate-reset-game.js":
/*!**************************************************!*\
  !*** ./src/js/components/generate-reset-game.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateResetGame: () => (/* binding */ generateResetGame)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/js/app.js");
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _generate_game_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-game-board */ "./src/js/components/generate-game-board.js");
/* harmony import */ var _utils_create_state_cells_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/create-state-cells-matrix */ "./src/js/utils/create-state-cells-matrix.js");
/* harmony import */ var _utils_show_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/show-message */ "./src/js/utils/show-message.js");






const STYLES = {
  reset: "reset",
  container: "container",
  resetList: "reset__list",
  resetButton: "reset__button",
  resetButtonSolution: "reset__button_solution",
  resetButtonNew: "reset__button_new"
};
const SIZE_GRID = {
  easy: 5,
  medium: 10,
  hard: 15
};
const saveGameState = timer => {
  const cells = document.querySelectorAll(".light__cell, .dark__cell");
  const templateId = cells[0].parentElement.id;
  const templateLevel = cells[0].parentElement.dataset.level;
  const saveStateCellsMatrix = (0,_utils_create_state_cells_matrix__WEBPACK_IMPORTED_MODULE_4__.createStateCellsMatrix)(cells, SIZE_GRID, templateLevel);
  const saveGameSate = {
    saveStateCellsMatrix,
    templateLevel,
    templateId,
    time: timer.saveState()
  };
  const jsonToLocalStorage = JSON.stringify(saveGameSate);
  localStorage.setItem("saveGame", jsonToLocalStorage);
  (0,_utils_show_message__WEBPACK_IMPORTED_MODULE_5__.showMessage)();
};
const openCellsWithSolution = () => {
  const checkedTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__checked",
    dark: "dark__checked"
  });
  const crossTheme = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__cross",
    dark: "dark__cross"
  });
  const cellsMark = document.querySelectorAll('[data-mark="X"]');
  const parent = cellsMark[0].parentElement;
  parent.removeEventListener("click", parent.clickHandler);
  parent.removeEventListener("contextmenu", parent.contextMenuHandler);
  const cellsForCleaning = parent.querySelectorAll("div");
  for (const cell of cellsForCleaning) {
    cell.classList.remove(checkedTheme, crossTheme);
  }
  for (const cell of cellsMark) {
    cell.classList.add(checkedTheme);
  }
};
const showSolution = () => {
  const buttons = document.querySelectorAll(".reset__button");
  for (const button of buttons) {
    if (button.classList.contains("reset__button_new")) {
      continue;
    }
    button.disabled = true;
  }
  openCellsWithSolution();
};
const resetGame = () => {
  const cell = document.querySelector('[data-mark="X"]');
  const parent = cell.parentElement;
  const id = +parent.id;
  const level = parent.dataset.level;
  const size = SIZE_GRID[level];
  const gameGrid = (0,_generate_game_board__WEBPACK_IMPORTED_MODULE_3__.createGameGrid)(id, level, size);
  const cells = gameGrid.children;
  parent.innerHTML = "";
  parent.append(...cells);
};
const generateResetGame = timer => {
  const themeBtn = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__button",
    dark: "dark__button"
  });
  const resetWrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("section", [STYLES.reset, STYLES.container]);
  const resetList = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", STYLES.resetList);
  const resetButton = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.resetButton, themeBtn], "Reset Game");
  const resetButtonTwo = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.resetButton, themeBtn, STYLES.resetButtonNew], "New Game");
  const saveButton = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.resetButton, themeBtn], "Save Game");
  const solutionButton = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("button", [STYLES.resetButton, themeBtn, STYLES.resetButtonSolution], "Solution");
  resetButton.addEventListener("click", () => {
    const timerDuration = document.querySelector(".timer__duration");
    timerDuration.innerHTML = "00 : 00";
    timer.stop();
    resetGame();
  });
  resetButtonTwo.addEventListener("click", () => {
    timer.stop();
    const body = document.querySelector("body");
    body.innerHTML = "";
    (0,_app__WEBPACK_IMPORTED_MODULE_0__.newGame)();
  });
  solutionButton.addEventListener("click", () => {
    timer.stop();
    showSolution();
  });
  saveButton.addEventListener("click", () => {
    saveGameState(timer);
  });
  resetList.append(resetButton);
  resetList.append(saveButton);
  resetList.append(solutionButton);
  resetList.append(resetButtonTwo);
  resetWrapper.append(resetList);
  return resetWrapper;
};

/***/ }),

/***/ "./src/js/components/generate-select.js":
/*!**********************************************!*\
  !*** ./src/js/components/generate-select.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSelect: () => (/* binding */ generateSelect)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");

const STYLES = {
  select: "select"
};
const generateSelect = () => {
  const select = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.select);
  return select;
};

/***/ }),

/***/ "./src/js/components/generate-selected-game.js":
/*!*****************************************************!*\
  !*** ./src/js/components/generate-selected-game.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSelectedGame: () => (/* binding */ generateSelectedGame)
/* harmony export */ });
/* harmony import */ var _generate_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-template */ "./src/js/components/generate-template.js");
/* harmony import */ var _generate_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-level */ "./src/js/components/generate-level.js");
/* harmony import */ var _generate_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-select */ "./src/js/components/generate-select.js");
/* harmony import */ var _generate_option_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-option-game */ "./src/js/components/generate-option-game.js");




const generateSelectedGame = (templates, timer, sound) => {
  const fragment = new DocumentFragment();
  const selectBlock = (0,_generate_select__WEBPACK_IMPORTED_MODULE_2__.generateSelect)();
  const levelList = (0,_generate_level__WEBPACK_IMPORTED_MODULE_1__.generateLevel)();
  const optionGame = (0,_generate_option_game__WEBPACK_IMPORTED_MODULE_3__.generateOptionGame)(timer, sound);
  const templatesSection = (0,_generate_template__WEBPACK_IMPORTED_MODULE_0__.generateTemplate)(templates, timer, sound);
  selectBlock.append(levelList);
  selectBlock.append(optionGame);
  fragment.append(selectBlock);
  fragment.append(templatesSection);
  return fragment;
};

/***/ }),

/***/ "./src/js/components/generate-table-results.js":
/*!*****************************************************!*\
  !*** ./src/js/components/generate-table-results.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTableResults: () => (/* binding */ generateTableResults)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");

const STYLES = {
  table: "table",
  container: "container",
  tableRow: "table__row",
  tableCell: "table__cell",
  tableRowResult: "table__row_result"
};
const createRowResults = () => {
  const records = JSON.parse(localStorage.getItem("records"));
  if (records) {
    records.sort((a, b) => a.time - b.time);
    const fragment = new DocumentFragment();
    for (const record of records) {
      const rowRecord = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableRowResult);
      const cellRecordName = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableCell, record.templateName);
      const cellRecordDifficulty = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableCell, record.level);
      const cellRecordTime = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableCell, `${record.formatTime.formatMinutes} : ${record.formatTime.formatSeconds}`);
      rowRecord.append(cellRecordName);
      rowRecord.append(cellRecordDifficulty);
      rowRecord.append(cellRecordTime);
      fragment.append(rowRecord);
    }
    return fragment;
  } else {
    const rowRecord = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableRowResult);
    const cellRecordName = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableCell, `---`);
    const cellRecordDifficulty = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableCell, `---`);
    const cellRecordTime = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.tableCell, `-- : --`);
    rowRecord.append(cellRecordName);
    rowRecord.append(cellRecordDifficulty);
    rowRecord.append(cellRecordTime);
    return rowRecord;
  }
};
const generateTableResults = () => {
  const table = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.table, STYLES.container]);
  const rowHeader = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.tableRow]);
  const cellHeaderName = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.tableCell], "name");
  const cellHeaderDifficulty = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.tableCell], "difficulty");
  const cellHeaderTime = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.tableCell], "time");
  rowHeader.append(cellHeaderName);
  rowHeader.append(cellHeaderDifficulty);
  rowHeader.append(cellHeaderTime);
  table.append(rowHeader);
  const rowResults = createRowResults();
  table.append(rowResults);
  return table;
};

/***/ }),

/***/ "./src/js/components/generate-template-for-modal.js":
/*!**********************************************************!*\
  !*** ./src/js/components/generate-template-for-modal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTemplateForModal: () => (/* binding */ generateTemplateForModal)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _modules_medium_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _modules_hard_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/hard-templates */ "./src/js/modules/hard-templates.js");





const templates = {
  ["easy"]: _modules_easy_templates__WEBPACK_IMPORTED_MODULE_2__.easyTemplates,
  ["medium"]: _modules_medium_templates__WEBPACK_IMPORTED_MODULE_3__.mediumTemplates,
  ["hard"]: _modules_hard_templates__WEBPACK_IMPORTED_MODULE_4__.hardTemplates
};
const STYLES = {
  templateWrapper: "template__wrapper",
  templateItem_5: "template__item_5x5",
  templateItem_10: "template__item_10x10",
  templateItem_15: "template__item_15x15",
  templateSell: "template__cell",
  templateSell_5: "template__cell_5x5",
  templateSell_10: "template__cell_10x10",
  templateSell_15: "template__cell_15x15"
};
const generateTemplateForModal = (id, level) => {
  const template = templates[level][id - 1].template;
  const size = template.length;
  const templateWrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES.templateWrapper);
  const templateItem = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", STYLES[`templateItem_${size}`]);
  const cells = [];
  template.forEach(row => {
    const themeCell = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
      light: "light__cell",
      dark: "dark__cell"
    });
    row.forEach(col => {
      const cell = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.templateSell, STYLES[`templateSell_${size}`], themeCell]);
      if (col === "X") {
        const backGround = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_1__.getThemeLs)({
          light: "light__checked",
          dark: "dark__checked"
        });
        cell.classList.add(backGround);
      }
      cells.push(cell);
    });
  });
  templateItem.append(...cells);
  templateWrapper.append(templateItem);
  return templateWrapper;
};

/***/ }),

/***/ "./src/js/components/generate-template.js":
/*!************************************************!*\
  !*** ./src/js/components/generate-template.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCellElements: () => (/* binding */ generateCellElements),
/* harmony export */   generateTemplate: () => (/* binding */ generateTemplate)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/js/app.js");
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");
/* harmony import */ var _utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _generate_game_board_and_hints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-game-board-and-hints */ "./src/js/components/generate-game-board-and-hints.js");




const STYLES = {
  template: "template",
  container: "container",
  templateWrapper: "template__wrapper",
  templateImages: "template__images",
  templateItem_5: "template__item_5x5",
  templateItem_10: "template__item_10x10",
  templateItem_15: "template__item_15x15",
  templateSell: "template__cell",
  templateSell_5: "template__cell_5x5",
  templateSell_10: "template__cell_10x10",
  templateSell_15: "template__cell_15x15"
};
const onSelectedGame = (e, timer, sound) => {
  const targetItem = e.target.closest(`.${STYLES.templateItem_5}`) || e.target.closest(`.${STYLES.templateItem_10}`) || e.target.closest(`.${STYLES.templateItem_15}`);
  if (targetItem) {
    const id = targetItem.id;
    const level = Object.values(targetItem.dataset)[0];
    const game = (0,_generate_game_board_and_hints__WEBPACK_IMPORTED_MODULE_3__.generateGameBoardAndHints)(id, level, timer, sound);
    const body = document.querySelector("body");
    body.innerHTML = "";
    (0,_app__WEBPACK_IMPORTED_MODULE_0__.startGame)(game);
  }
};
const generateCellElements = (templates, size) => {
  const themeCell = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
    light: "light__cell",
    dark: "dark__cell"
  });
  const cells = [];
  templates.forEach((_ref, index) => {
    let {
      template,
      level,
      name
    } = _ref;
    const wrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", STYLES.templateImages);
    const templateName = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("p", null, name);
    const templateItem = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", STYLES[`templateItem_${size}`], null, level, index + 1);
    template.forEach(items => {
      const templateCell = [];
      items.forEach(item => {
        const cell = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", [STYLES.templateSell, STYLES[`templateSell_${size}`], themeCell]);
        if (item === "X") {
          const backGround = (0,_utils_get_theme_ls__WEBPACK_IMPORTED_MODULE_2__.getThemeLs)({
            light: "light__checked",
            dark: "dark__checked"
          });
          cell.classList.add(backGround);
        }
        templateCell.push(cell);
      });
      templateItem.append(...templateCell);
      wrapper.append(templateName);
      wrapper.append(templateItem);
      cells.push(wrapper);
    });
  });
  return cells;
};
const generateTemplate = (templates, timer, sound) => {
  const size = templates[0].template.length;
  const templateContainer = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("section", [STYLES.template, STYLES.container]);
  const templateWrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)("div", STYLES.templateWrapper);
  templateWrapper.append(...generateCellElements(templates, size, timer));
  templateWrapper.addEventListener("click", e => {
    onSelectedGame(e, timer, sound);
  });
  templateContainer.append(templateWrapper);
  return templateContainer;
};

/***/ }),

/***/ "./src/js/components/generate-timer.js":
/*!*********************************************!*\
  !*** ./src/js/components/generate-timer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTimer: () => (/* binding */ generateTimer)
/* harmony export */ });
/* harmony import */ var _utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create-html-element */ "./src/js/utils/create-html-element.js");

const STYLES = {
  timer: "timer",
  container: "container",
  timerWrapper: "timer__wrapper",
  timerTitle: "timer__title",
  timerDuration: "timer__duration"
};
const generateTimer = () => {
  const sectionTimer = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("section", [STYLES.timer, STYLES.container]);
  const timerWrapper = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", [STYLES.timerWrapper]);
  const timerTitle = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", [STYLES.timerTitle]);
  const timerDuration = (0,_utils_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", [STYLES.timerDuration], "00 : 00");
  timerWrapper.append(timerTitle);
  timerWrapper.append(timerDuration);
  sectionTimer.append(timerWrapper);
  return timerWrapper;
};

/***/ }),

/***/ "./src/js/modules/easy-templates.js":
/*!******************************************!*\
  !*** ./src/js/modules/easy-templates.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easyTemplates: () => (/* binding */ easyTemplates)
/* harmony export */ });
const easyTemplates = [{
  template: [["X", ".", ".", ".", "X"], [".", "X", "X", "X", "."], [".", "X", "X", "X", "."], [".", "X", "X", "X", "."], ["X", ".", ".", ".", "X"]],
  hints: {
    rows: [[1, 1], [3], [3], [3], [1, 1]],
    cols: [[1, 1], [3], [3], [3], [1, 1]]
  },
  level: "easy",
  name: "sun"
}, {
  template: [["X", "X", "X", "X", "X"], ["X", ".", "X", ".", "X"], ["X", "X", "X", "X", "X"], ["X", ".", "X", ".", "X"], ["X", "X", "X", "X", "X"]],
  hints: {
    rows: [[5], [1, 1, 1], [5], [1, 1, 1], [5]],
    cols: [[5], [1, 1, 1], [5], [1, 1, 1], [5]]
  },
  level: "easy",
  name: "grid"
}, {
  template: [[".", "X", ".", "X", "."], ["X", "X", ".", "X", "X"], [".", ".", "X", ".", "."], ["X", "X", ".", "X", "X"], [".", "X", ".", "X", "."]],
  hints: {
    rows: [[1, 1], [2, 2], [1], [2, 2], [1, 1]],
    cols: [[1, 1], [2, 2], [1], [2, 2], [1, 1]]
  },
  level: "easy",
  name: "flower"
}, {
  template: [[".", ".", "X", "X", "X"], ["X", ".", ".", ".", "X"], ["X", "X", ".", ".", "."], ["X", "X", "X", ".", "."], ["X", "X", "X", "X", "X"]],
  hints: {
    rows: [[3], [1, 1], [2], [3], [5]],
    cols: [[4], [3], [1, 2], [1, 1], [2, 1]]
  },
  level: "easy",
  name: "tetris"
}, {
  template: [["X", ".", ".", ".", "X"], ["X", ".", "X", ".", "X"], ["X", "X", "X", "X", "X"], ["X", ".", "X", ".", "X"], ["X", ".", ".", ".", "X"]],
  hints: {
    rows: [[1, 1], [1, 1, 1], [5], [1, 1, 1], [1, 1]],
    cols: [[5], [1], [3], [1], [5]]
  },
  level: "easy",
  name: "panzer"
}];

/***/ }),

/***/ "./src/js/modules/hard-templates.js":
/*!******************************************!*\
  !*** ./src/js/modules/hard-templates.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hardTemplates: () => (/* binding */ hardTemplates)
/* harmony export */ });
const hardTemplates = [{
  template: [[".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", "X", "X", "X"], [".", ".", ".", ".", ".", ".", "X", "X", ".", "X", "X", "X", ".", "X", "."], [".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", ".", "X", ".", "."], [".", ".", ".", ".", "X", "X", ".", ".", "X", "X", ".", "X", ".", ".", "."], [".", ".", ".", ".", "X", ".", "X", ".", ".", "X", "X", ".", ".", ".", "."], [".", "X", "X", "X", "X", "X", ".", ".", ".", ".", "X", ".", ".", ".", "."], ["X", "X", "X", ".", ".", "X", ".", ".", ".", "X", "X", "X", "X", ".", "."], [".", ".", "X", "X", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "X", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "X", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "."], [".", ".", ".", "X", ".", "X", ".", ".", ".", ".", ".", "X", "X", ".", "."], ["X", "X", "X", "X", "X", "X", ".", ".", ".", ".", "X", ".", ".", "X", "."], [".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", "X", "X", "X", "X"], [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", ".", "."]],
  hints: {
    rows: [[2, 3], [2, 3, 1], [2, 1], [2, 2, 1], [1, 1, 2], [5, 1], [3, 1, 4], [3], [1], [1, 2], [1, 1, 2], [6, 1, 1], [6], [2], [2]],
    cols: [[1, 1], [2, 1], [3, 1], [1, 5], [3, 1, 1], [1, 2, 2], [1, 1], [1], [1, 2], [5, 1, 1], [1, 3, 2], [1, 1, 1, 2, 3], [1, 1, 1, 2, 3], [2, 2], [1, 1]]
  },
  level: "hard",
  name: "ducks"
}, {
  template: [["X", "X", "X", ".", "X", ".", ".", ".", ".", ".", ".", "X", ".", ".", "X"], ["X", "X", "X", "X", ".", ".", ".", ".", ".", ".", "X", ".", "X", "X", "."], ["X", "X", "X", ".", ".", ".", ".", ".", ".", "X", ".", ".", ".", ".", "."], [".", "X", ".", "X", ".", ".", ".", ".", "X", "X", "X", ".", ".", ".", "."], ["X", ".", ".", ".", "X", ".", ".", "X", "X", "X", "X", "X", ".", ".", "."], [".", ".", ".", ".", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", "."], [".", ".", ".", ".", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", "."], [".", "X", ".", "X", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", "."], [".", "X", "X", "X", ".", ".", "X", "X", ".", ".", "X", "X", "X", ".", "."], ["X", "X", ".", "X", "X", ".", "X", "X", ".", ".", "X", "X", "X", ".", "."], [".", "X", ".", "X", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", "."], [".", ".", "X", ".", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", "."], [".", "X", "X", "X", ".", ".", ".", ".", "X", "X", ".", ".", ".", ".", "."], [".", ".", "X", ".", ".", ".", "X", "X", "X", ".", ".", ".", ".", ".", "."], [".", ".", "X", ".", ".", "X", "X", ".", ".", ".", ".", ".", ".", ".", "."]],
  hints: {
    rows: [[3, 1, 1, 1], [4, 1, 2], [3, 1], [1, 1, 3], [1, 1, 5], [7], [7], [1, 1, 7], [3, 2, 3], [2, 2, 2, 3], [1, 1, 7], [1, 7], [3, 2], [1, 3], [1, 2]],
    cols: [[3, 1, 1], [4, 4, 1], [3, 1, 4], [1, 1, 4, 1], [1, 1, 1], [1], [7, 2], [8, 1], [5, 4], [6, 3], [1, 9], [1, 8], [1, 7], [1], [1]]
  },
  level: "hard",
  name: "house"
}, {
  template: [["X", "X", ".", ".", "X", ".", ".", ".", ".", ".", "X", ".", ".", "X", "X"], ["X", ".", ".", ".", ".", "X", "X", "X", "X", "X", ".", ".", ".", ".", "X"], [".", ".", ".", ".", "X", ".", ".", ".", ".", ".", "X", ".", ".", ".", "."], [".", ".", ".", "X", "X", "X", ".", ".", ".", "X", "X", "X", ".", ".", "."], [".", "X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X", "."], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", ".", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X"], ["X", "X", "X", ".", ".", ".", "X", "X", "X", ".", ".", ".", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", ".", ".", ".", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", "X", ".", "X", "X", "X", "X", "X", "X", "."], [".", ".", ".", "X", "X", ".", ".", "X", ".", ".", "X", "X", ".", ".", "."], [".", ".", ".", ".", "X", "X", ".", ".", ".", "X", "X", ".", ".", ".", "."], [".", ".", ".", ".", ".", "X", "X", "X", "X", "X", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", "X", "X", "X", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "X", ".", ".", ".", ".", ".", ".", "."]],
  hints: {
    rows: [[2, 1, 1, 2], [1, 5, 1], [1, 1], [3, 3], [6, 6], [15], [4, 5, 4], [3, 3, 3], [6, 6], [7, 6], [2, 1, 2], [2, 2], [5], [3], [1]],
    cols: [[2, 5], [1, 6], [6], [4, 3], [1, 4, 4], [1, 4, 2, 2], [1, 4, 1, 2], [1, 3, 1, 3], [1, 4, 1, 2], [1, 4, 2, 2], [1, 4, 4], [4, 3], [6], [1, 6], [2, 4]]
  },
  level: "hard",
  name: "heart"
}, {
  template: [[".", ".", ".", ".", ".", "X", "X", "X", "X", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "X", "X", "X", "X", "X", ".", ".", ".", "X", "X"], [".", "X", "X", "X", ".", ".", "X", "X", "X", ".", ".", ".", "X", "X", "X"], ["X", "X", "X", "X", "X", ".", ".", "X", ".", ".", ".", "X", "X", "X", "X"], [".", "X", "X", "X", ".", ".", ".", "X", ".", ".", ".", ".", "X", "X", "X"], [".", "X", "X", ".", "X", ".", ".", "X", ".", ".", ".", "X", ".", "X", "X"], [".", ".", ".", ".", ".", "X", ".", "X", ".", ".", "X", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", "X", "X", ".", "X", ".", ".", ".", ".", "."], [".", ".", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", ".", ".", "."], [".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "."], [".", "X", ".", ".", "X", "X", "X", "X", "X", "X", "X", ".", ".", "X", "."], [".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "."], [".", ".", ".", ".", ".", "X", "X", "X", "X", "X", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "X", "X", "X", "X", "X", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", "X", "X", "X", ".", ".", ".", ".", ".", "."]],
  hints: {
    rows: [[4], [5, 2], [3, 3, 3], [5, 1, 4], [3, 1, 3], [2, 1, 1, 1, 2], [1, 1, 1], [2, 1], [7], [13], [1, 7, 1], [13], [5], [5], [3]],
    cols: [[1], [4, 3], [4, 1, 1], [3, 1, 1], [1, 1, 4], [2, 1, 6], [3, 8], [15], [3, 8], [1, 7], [1, 4], [1, 1, 1, 1], [3, 1, 1], [5, 3], [5]]
  },
  level: "hard",
  name: "flowers"
}, {
  template: [[".", ".", ".", ".", ".", ".", ".", ".", "X", "X", "X", "X", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "X", "X", "X", "X", ".", ".", ".", "."], [".", ".", ".", ".", ".", "X", "X", "X", "X", "X", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "X", "X", "X", "X", "X", "X", ".", ".", ".", "."], [".", ".", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", ".", "."], [".", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ".", "."], [".", "X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "."], ["X", "X", "X", "X", "X", "X", ".", ".", ".", ".", ".", "X", "X", "X", "X"], [".", ".", ".", ".", ".", "X", "X", "X", "X", ".", ".", ".", "X", "X", "X"], [".", ".", ".", ".", ".", ".", "X", "X", ".", ".", "X", ".", "X", "X", "."], [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "X", "X", "X", ".", "."], [".", ".", ".", ".", ".", "X", "X", "X", ".", ".", "X", "X", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "X", "X", "X", "X", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "X", "X", "X", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", "X", "X", "X", ".", ".", ".", ".", ".", "."]],
  hints: {
    rows: [[4], [4], [5], [6], [9], [11], [2, 10], [6, 4], [4, 3], [2, 1, 2], [3], [3, 2], [4], [3], [3]],
    cols: [[1], [2], [3], [2, 1], [4], [7, 1], [5, 2, 1, 1], [6, 2, 4], [7, 1, 3], [7, 2], [2, 4, 4], [1, 4, 2], [6], [4], [2]]
  },
  level: "hard",
  name: "dolphin"
}];

/***/ }),

/***/ "./src/js/modules/medium-templates.js":
/*!********************************************!*\
  !*** ./src/js/modules/medium-templates.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mediumTemplates: () => (/* binding */ mediumTemplates)
/* harmony export */ });
const mediumTemplates = [{
  template: [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", ".", ".", "X", "X", ".", "X"], ["X", ".", "X", "X", ".", ".", "X", "X", ".", "X"], ["X", ".", ".", ".", "X", "X", ".", ".", ".", "X"], ["X", ".", ".", ".", "X", "X", ".", ".", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", ".", "X", "X", "X", "X", ".", ".", "X"], ["X", ".", "X", ".", ".", ".", ".", "X", ".", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]],
  hints: {
    rows: [[10], [1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 2, 1], [1, 2, 1], [1, 1], [1, 4, 1], [1, 1, 1, 1], [10]],
    cols: [[10], [1, 1], [1, 2, 2], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 2], [1, 1], [10]]
  },
  level: "medium",
  name: "sad smile"
}, {
  template: [["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", ".", ".", ".", ".", ".", ".", "X", "X"], ["X", ".", "X", ".", "X", "X", ".", "X", ".", "X"], [".", ".", ".", "X", "X", "X", "X", ".", ".", "."], [".", ".", ".", ".", "X", "X", ".", ".", ".", "."], [".", ".", ".", ".", "X", "X", ".", ".", ".", "."], [".", ".", ".", "X", "X", "X", "X", ".", ".", "."], ["X", ".", "X", ".", "X", "X", ".", "X", ".", "X"], ["X", "X", ".", ".", ".", ".", ".", ".", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"]],
  hints: {
    rows: [[1, 1], [2, 2], [1, 1, 2, 1, 1], [4], [2], [2], [4], [1, 1, 2, 1, 1], [2, 2], [1, 1]],
    cols: [[3, 3], [1, 1], [1, 1], [1, 1], [6], [6], [1, 1], [1, 1], [1, 1], [3, 3]]
  },
  level: "medium",
  name: "spider"
}, {
  template: [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", ".", "X", "X", ".", ".", "X", "X", ".", "X"], ["X", ".", "X", "X", ".", ".", "X", "X", ".", "X"], ["X", ".", ".", ".", "X", "X", ".", ".", ".", "X"], ["X", ".", ".", ".", "X", "X", ".", ".", ".", "X"], ["X", ".", "X", ".", ".", ".", ".", "X", ".", "X"], ["X", ".", ".", "X", "X", "X", "X", ".", ".", "X"], ["X", ".", ".", ".", ".", ".", ".", ".", ".", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]],
  hints: {
    rows: [[10], [1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 2, 1], [1, 2, 1], [1, 1, 1, 1], [1, 4, 1], [1, 1], [10]],
    cols: [[10], [1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 2, 1, 1], [1, 1], [10]]
  },
  level: "medium",
  name: "happy smile"
}, {
  template: [[".", ".", "X", ".", "X", ".", ".", ".", ".", "."], [".", "X", "X", ".", "X", "X", ".", ".", ".", "."], [".", "X", "X", "X", "X", "X", ".", ".", ".", "."], ["X", "X", ".", "X", ".", "X", "X", ".", ".", "X"], [".", "X", "X", "X", "X", "X", ".", ".", "X", "X"], [".", ".", "X", "X", "X", ".", ".", ".", "X", "."], ["X", "X", "X", "X", "X", "X", ".", ".", "X", "X"], ["X", ".", "X", "X", "X", "X", "X", ".", ".", "X"], [".", ".", "X", "X", "X", "X", "X", "X", "X", "X"], [".", "X", "X", ".", "X", "X", "X", "X", ".", "."]],
  hints: {
    rows: [[1, 1], [2, 2], [5], [2, 1, 2, 1], [5, 2], [3, 1], [6, 2], [1, 5, 1], [8], [2, 4]],
    cols: [[1, 2], [4, 1, 1], [3, 6], [7], [3, 6], [4, 4], [1, 3], [2], [3, 1], [2, 3]]
  },
  level: "medium",
  name: "puppy"
}, {
  template: [[".", ".", "X", "X", ".", ".", "X", "X", ".", "."], [".", ".", "X", "X", ".", ".", "X", "X", ".", "."], [".", ".", "X", "X", ".", ".", "X", "X", ".", "."], [".", ".", "X", "X", ".", ".", "X", "X", ".", "."], [".", "X", "X", "X", "X", "X", "X", "X", "X", "."], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", ".", "X", "X", "X", "X", ".", "X", "X"], [".", "X", "X", "X", ".", ".", "X", "X", "X", "."], [".", ".", "X", "X", "X", "X", "X", "X", ".", "."]],
  hints: {
    rows: [[2, 2], [2, 2], [2, 2], [2, 2], [8], [10], [10], [2, 4, 2], [3, 3], [6]],
    cols: [[3], [5], [7, 2], [10], [4, 1], [4, 1], [10], [7, 2], [5], [3]]
  },
  level: "medium",
  name: "rabbit"
}];

/***/ }),

/***/ "./src/js/modules/on-change-level.js":
/*!*******************************************!*\
  !*** ./src/js/modules/on-change-level.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onChangeLevel: () => (/* binding */ onChangeLevel)
/* harmony export */ });
/* harmony import */ var _components_generate_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/generate-template */ "./src/js/components/generate-template.js");
/* harmony import */ var _easy_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _medium_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _hard_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hard-templates */ "./src/js/modules/hard-templates.js");




const templateAll = {
  ["easy"]: _easy_templates__WEBPACK_IMPORTED_MODULE_1__.easyTemplates,
  ["medium"]: _medium_templates__WEBPACK_IMPORTED_MODULE_2__.mediumTemplates,
  ["hard"]: _hard_templates__WEBPACK_IMPORTED_MODULE_3__.hardTemplates
};
const updateTemplateDisplay = level => {
  const templates = templateAll[level.id];
  const size = templates[0].template.length;
  const templateWrapper = document.querySelector(".template__wrapper");
  const newTemplateItem = (0,_components_generate_template__WEBPACK_IMPORTED_MODULE_0__.generateCellElements)(templates, size);
  if (templateWrapper) {
    templateWrapper.innerHTML = "";
    templateWrapper.append(...newTemplateItem);
  }
};
const updateActivityClasses = () => {
  const listLevel = document.querySelector(".level__list");
  listLevel.querySelectorAll("button").forEach(item => {
    item.disabled = false;
    if (item.classList.contains("dark__button")) item.classList.remove("dark__button_active");else item.classList.remove("light__button_active");
  });
};
const onChangeLevel = e => {
  const target = e.target;
  if (target && target.nodeName === "BUTTON") {
    if (target.classList.contains("level__item_continue")) {
      return;
    }
    updateTemplateDisplay(target);
    updateActivityClasses();
    if (target.classList.contains("dark__button")) target.classList.add("dark__button_active");else target.classList.add("light__button_active");
    target.disabled = true;
  }
};

/***/ }),

/***/ "./src/js/modules/save-result-game-to-local-storage.js":
/*!*************************************************************!*\
  !*** ./src/js/modules/save-result-game-to-local-storage.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveResultGameToLocalStorage: () => (/* binding */ saveResultGameToLocalStorage)
/* harmony export */ });
const addResult = _ref => {
  let {
    templateName,
    level,
    formatTime
  } = _ref;
  const {
    formatMinutes,
    formatSeconds
  } = formatTime;
  let records = JSON.parse(localStorage.getItem("records")) || [];
  const time = +formatMinutes * 60 + +formatSeconds;
  const result = {
    templateName,
    level,
    formatTime,
    time
  };
  records.unshift(result);
  records = records.slice(0, 5);
  const json = JSON.stringify(records);
  localStorage.setItem("records", json);
};
const saveResultGameToLocalStorage = (formatTime, cell) => {
  const parent = cell.parentElement;
  const level = parent.dataset.level;
  const templateName = parent.dataset.name;
  addResult({
    templateName,
    level,
    formatTime
  });
};

/***/ }),

/***/ "./src/js/modules/sound-manager.js":
/*!*****************************************!*\
  !*** ./src/js/modules/sound-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoundManager: () => (/* binding */ SoundManager)
/* harmony export */ });
/* harmony import */ var _assets_audio_click_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/audio/click.mp3 */ "./src/assets/audio/click.mp3");
/* harmony import */ var _assets_audio_click_two_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/audio/click_two.mp3 */ "./src/assets/audio/click_two.mp3");
/* harmony import */ var _assets_audio_finish_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/audio/finish.mp3 */ "./src/assets/audio/finish.mp3");



class SoundManager {
  constructor() {
    this.blackCellSound = new Audio(_assets_audio_click_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.xCellSound = new Audio(_assets_audio_click_two_mp3__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.victorySound = new Audio(_assets_audio_finish_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
  playBlackCellSound() {
    this.blackCellSound.play();
  }
  playXCellSound() {
    this.xCellSound.play();
  }
  playVictorySound() {
    this.victorySound.play();
  }
  pauseAllSounds() {
    this.blackCellSound.pause();
    this.xCellSound.pause();
    this.victorySound.pause();
  }
}

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timer: () => (/* binding */ Timer)
/* harmony export */ });
class Timer {
  constructor() {
    this.startTime = null;
    this.elapsedSeconds = null;
    this.intervalId = null;
    this.displayTime = null;
  }
  start(className) {
    let isContinue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!isContinue) {
      this.reset();
      this.startTime = new Date().getTime();
    }
    this.intervalId = setInterval(this.update.bind(this, className), 1000);
  }
  reset() {
    this.stop();
  }
  stop() {
    this.startTime = null;
    this.elapsedSeconds = null;
    this.displayTime = null;
    clearInterval(this.intervalId);
  }
  update(className) {
    const currentTime = new Date().getTime();
    this.elapsedSeconds = Math.floor((currentTime - this.startTime) / 1000);
    this.updateDisplayTime(className);
  }
  formatTime() {
    const minutes = Math.floor(this.elapsedSeconds / 60);
    const remainSeconds = this.elapsedSeconds % 60;
    const formatMinutes = String(minutes).padStart(2, "0");
    const formatSeconds = String(remainSeconds).padStart(2, "0");
    return {
      formatMinutes,
      formatSeconds
    };
  }
  updateDisplayTime(className) {
    this.displayTime = document.querySelector(`.${className}`);
    if (this.displayTime) {
      const {
        formatMinutes,
        formatSeconds
      } = this.formatTime();
      this.displayTime.textContent = "";
      this.displayTime.textContent = `${formatMinutes} : ${formatSeconds}`;
    }
  }
  saveState() {
    return {
      startTime: this.startTime,
      elapsedSeconds: this.elapsedSeconds
    };
  }
  restoreState(state, className) {
    if (state.startTime !== null && state.elapsedSeconds !== null) {
      this.elapsedSeconds = state.elapsedSeconds;
      this.startTime = new Date().getTime() - this.elapsedSeconds * 1000;
      this.start(className, true);
    }
  }
}

/***/ }),

/***/ "./src/js/modules/toggle-theme.js":
/*!****************************************!*\
  !*** ./src/js/modules/toggle-theme.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)
/* harmony export */ });
/* harmony import */ var _utils_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/toggle */ "./src/js/utils/toggle.js");

const toggleTheme = e => {
  const target = e.target;
  const body = document.querySelector("body");
  const gameCell_5 = document.querySelectorAll(".game__cell_5x5");
  const gameCell_10 = document.querySelectorAll(".game__cell_10x10");
  const gameCell_15 = document.querySelectorAll(".game__cell_15x15");
  const hintsCell_5 = document.querySelectorAll(".hints__cell_5x5");
  const hintsCell_10 = document.querySelectorAll(".hints__cell_10x10");
  const hintsCell_15 = document.querySelectorAll(".hints__cell_15x15");
  const gameLevel = document.querySelectorAll(".level__item");
  const resetBtn = document.querySelectorAll(".reset__button");
  const templateCell = document.querySelectorAll(".template__cell");
  const gameGrid_5 = document.querySelector(".game__grid_5x5");
  const gameGrid_10 = document.querySelector(".game__grid_10x10");
  const gameGrid_15 = document.querySelector(".game__grid_15x15");
  const hintsTop_5 = document.querySelector(".hints__top_5x5");
  const hintsTop_10 = document.querySelector(".hints__top_10x10");
  const hintsTop_15 = document.querySelector(".hints__top_15x15");
  const hintsLeft_5 = document.querySelector(".hints__left_5x5");
  const hintsLeft_10 = document.querySelector(".hints__left_10x10");
  const hintsLeft_15 = document.querySelector(".hints__left_15x15");
  if (target) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(target, "dark__button", "light__button");
  if (body) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(body, "dark-theme", "light-theme");
  if (gameGrid_5) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(gameGrid_5, "dark__grid", "light__grid");
  if (gameGrid_10) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(gameGrid_10, "dark__grid", "light__grid");
  if (gameGrid_15) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(gameGrid_15, "dark__grid", "light__grid");
  if (hintsTop_5) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hintsTop_5, "dark__top", "light__top");
  if (hintsTop_10) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hintsTop_10, "dark__top", "light__top");
  if (hintsTop_15) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hintsTop_15, "dark__top", "light__top");
  if (hintsLeft_5) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hintsLeft_5, "dark__left", "light__left");
  if (hintsLeft_10) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hintsLeft_10, "dark__left", "light__left");
  if (hintsLeft_15) (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hintsLeft_15, "dark__left", "light__left");
  if (gameCell_5) gameCell_5.forEach(cell => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__cell", "light__cell");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__checked", "light__checked");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__cross", "light__cross");
  });
  if (gameCell_10) gameCell_10.forEach(cell => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__cell", "light__cell");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__checked", "light__checked");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__cross", "light__cross");
  });
  if (gameCell_15) gameCell_15.forEach(cell => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__cell", "light__cell");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__checked", "light__checked");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(cell, "dark__cross", "light__cross");
  });
  if (gameLevel) gameLevel.forEach(level => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(level, "dark__button", "light__button");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(level, "dark__button_active", "light__button_active");
  });
  if (resetBtn) resetBtn.forEach(level => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(level, "dark__button", "light__button");
  });
  if (hintsCell_5) hintsCell_5.forEach(hints => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hints, "dark__hints", "light__hints");
  });
  if (hintsCell_10) hintsCell_10.forEach(hints => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hints, "dark__hints", "light__hints");
  });
  if (hintsCell_15) hintsCell_15.forEach(hints => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(hints, "dark__hints", "light__hints");
  });
  if (templateCell) templateCell.forEach(template => {
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(template, "dark__cell", "light__cell");
    (0,_utils_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)(template, "dark__checked", "light__checked");
  });
};

/***/ }),

/***/ "./src/js/utils/compare.js":
/*!*********************************!*\
  !*** ./src/js/utils/compare.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compare: () => (/* binding */ compare)
/* harmony export */ });
const compare = props => {
  const {
    cell,
    checked,
    cross
  } = props;
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

/***/ }),

/***/ "./src/js/utils/create-html-element.js":
/*!*********************************************!*\
  !*** ./src/js/utils/create-html-element.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
const createHtmlElement = function (elem) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let dataAttribute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  const htmlElement = document.createElement(elem);
  if (className && typeof className === "string") {
    htmlElement.classList.add(className);
  }
  if (Array.isArray(className)) {
    className.forEach(el => {
      if (el) {
        htmlElement.classList.add(el);
      }
    });
  }
  if (text) {
    htmlElement.textContent = text;
  }
  if (dataAttribute) {
    htmlElement.dataset[dataAttribute] = dataAttribute;
  }
  if (id) {
    htmlElement.id = id;
  }
  return htmlElement;
};

/***/ }),

/***/ "./src/js/utils/create-state-cells-matrix.js":
/*!***************************************************!*\
  !*** ./src/js/utils/create-state-cells-matrix.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStateCellsMatrix: () => (/* binding */ createStateCellsMatrix)
/* harmony export */ });
/* harmony import */ var _get_theme_ls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-theme-ls */ "./src/js/utils/get-theme-ls.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare */ "./src/js/utils/compare.js");


const createStateCellsMatrix = (cells, SIZE_GRID, templateLevel) => {
  const checked = (0,_get_theme_ls__WEBPACK_IMPORTED_MODULE_0__.getThemeLs)({
    light: "light__checked",
    dark: "dark__checked"
  });
  const cross = (0,_get_theme_ls__WEBPACK_IMPORTED_MODULE_0__.getThemeLs)({
    light: "light__cross",
    dark: "dark__cross"
  });
  const numRows = SIZE_GRID[templateLevel];
  const numCols = SIZE_GRID[templateLevel];
  const saveStateCellMatrix = Array.from({
    length: numRows
  }).map(() => Array.from({
    length: numCols
  }, () => []));
  cells.forEach((cell, index) => {
    const row = Math.floor(index / numCols);
    const col = index % numRows;
    saveStateCellMatrix[row][col] = (0,_compare__WEBPACK_IMPORTED_MODULE_1__.compare)({
      cell,
      checked,
      cross
    });
  });
  return saveStateCellMatrix;
};

/***/ }),

/***/ "./src/js/utils/get-random-template.js":
/*!*********************************************!*\
  !*** ./src/js/utils/get-random-template.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomTemplate: () => (/* binding */ getRandomTemplate)
/* harmony export */ });
/* harmony import */ var _modules_easy_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/easy-templates */ "./src/js/modules/easy-templates.js");
/* harmony import */ var _modules_medium_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/medium-templates */ "./src/js/modules/medium-templates.js");
/* harmony import */ var _modules_hard_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/hard-templates */ "./src/js/modules/hard-templates.js");



const templates = [["easy", _modules_easy_templates__WEBPACK_IMPORTED_MODULE_0__.easyTemplates], ["medium", _modules_medium_templates__WEBPACK_IMPORTED_MODULE_1__.mediumTemplates], ["hard", _modules_hard_templates__WEBPACK_IMPORTED_MODULE_2__.hardTemplates]];
const getRandomTemplate = () => {
  const randomLevelIndex = Math.floor(Math.random() * templates.length);
  const randomLevel = templates[randomLevelIndex];
  const randomGameIndex = Math.floor(Math.random() * randomLevel[1].length);
  const randomGame = randomLevel[1][randomGameIndex].level;
  return {
    randomGameIndex,
    randomGame
  };
};

/***/ }),

/***/ "./src/js/utils/get-theme-ls.js":
/*!**************************************!*\
  !*** ./src/js/utils/get-theme-ls.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThemeLs: () => (/* binding */ getThemeLs)
/* harmony export */ });
const getThemeLs = _ref => {
  let {
    light,
    dark
  } = _ref;
  const themeLs = localStorage.getItem("theme");
  let className = "";
  if (themeLs) {
    className = themeLs === "light" ? light : dark;
  } else {
    className = light;
  }
  return className;
};

/***/ }),

/***/ "./src/js/utils/show-message.js":
/*!**************************************!*\
  !*** ./src/js/utils/show-message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMessage: () => (/* binding */ showMessage)
/* harmony export */ });
/* harmony import */ var _components_generate_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/generate-message */ "./src/js/components/generate-message.js");

const closeMessage = message => {
  setTimeout(() => {
    message.classList.remove("show");
  }, 2000);
};
const showMessage = () => {
  const body = document.querySelector("body");
  const existsMessage = document.querySelector(".popup");
  let message = null;
  if (!existsMessage) {
    message = (0,_components_generate_message__WEBPACK_IMPORTED_MODULE_0__.generateMessage)();
  } else {
    message = existsMessage;
    message.classList.toggle("show");
  }
  body.append(message);
  closeMessage(message);
};

/***/ }),

/***/ "./src/js/utils/toggle.js":
/*!********************************!*\
  !*** ./src/js/utils/toggle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggle: () => (/* binding */ toggle)
/* harmony export */ });
const clearLS = item => localStorage.removeItem(item);
const setItemLS = item => localStorage.setItem("theme", item);
const toggle = (elem, dark, light) => {
  if (elem.classList.contains(dark)) {
    elem.classList.remove(dark);
    elem.classList.add(light);
    clearLS("dark");
    setItemLS("light");
  } else if (elem.classList.contains(light)) {
    elem.classList.remove(light);
    elem.classList.add(dark);
    clearLS("light");
    setItemLS("dark");
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0;
}

h2,
h3,
h4,
ul,
p {
  margin: 0;
  padding: 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  -webkit-text-decoration: underline;
  text-decoration: underline;
  /* 2 */
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

.dark-theme {
  background: #474a51;
  color: #fdf5e6;
}

.dark__checked {
  background: #fdf5e6;
}

.dark__cell {
  border: 1px solid #fdf5e6;
}

.dark__cross {
  position: relative;
}
.dark__cross::before, .dark__cross::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 2px;
  background-color: #fdf5e6;
}
.dark__cross::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.dark__cross::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.dark__button {
  background: #fdf5e6;
  color: #474a51;
}
.dark__button:hover {
  background: rgba(253, 245, 230, 0.8);
}
.dark__button_active {
  background: rgba(253, 245, 230, 0.8);
}

.dark__button[disabled] {
  background: rgba(253, 245, 230, 0.8);
}

.hints__top .dark__hints {
  border: 1px solid #fdf5e6;
  border-top: none;
}

.hints__left .dark__hints {
  border: 1px solid #fdf5e6;
  border-left: none;
}

.dark__grid {
  border: 2px solid #fdf5e6;
}

.dark__left {
  border: 2px solid #fdf5e6;
}

.dark__top {
  border: 2px solid #fdf5e6;
}

.light-theme {
  background: #fdf5e6;
  color: #474a51;
}

.light__checked {
  background: #474a51;
}

.light__cell {
  border: 1px solid #474a51;
}

.light__cross {
  position: relative;
}
.light__cross::before, .light__cross::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 2px;
  background-color: #474a51;
}
.light__cross::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.light__cross::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.light__button {
  background: #474a51;
  color: #fdf5e6;
}
.light__button:hover {
  background: rgba(71, 74, 81, 0.8);
}
.light__button_active {
  background: rgba(71, 74, 81, 0.8);
}

.light__button[disabled] {
  background: rgba(71, 74, 81, 0.8);
}

.hints__top .light__hints {
  border: 1px solid #474a51;
  border-top: none;
}

.hints__left .light__hints {
  border: 1px solid #474a51;
  border-left: none;
}

.light__grid {
  border: 2px solid #474a51;
}

.light__left {
  border: 2px solid #474a51;
}

.light__top {
  border: 2px solid #474a51;
}

html {
  font-size: 10px;
}

body {
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
}

.body__hidden {
  overflow: hidden;
}

.title {
  text-align: center;
  margin-top: 25px;
}

#toggle-theme {
  display: block;
  margin: 0 auto;
  margin-top: 25px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
  padding: 10px;
}

.select {
  margin-top: 25px;
}

.nonograms {
  margin-top: 25px;
}

.timer__wrapper {
  display: flex;
  justify-content: center;
}
.timer__duration {
  font-size: 2.2rem;
  font-weight: 600;
}

.level__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
}
.level__item {
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
.game {
  margin-top: 25px;
}

.reset {
  margin-top: 25px;
}
.reset__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
}
.reset__button {
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
.game__wrapper_5x5 {
  display: grid;
  justify-content: center;
  grid-template-areas: ". top" "left game";
  grid-gap: 2px;
  gap: 2px;
}
.game__grid_5x5 {
  grid-area: game;
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(5, 50px);
  grid-gap: 1px;
  gap: 1px;
}
@media (max-width: 450px) {
  .game__grid_5x5 {
    grid-template-columns: repeat(5, 40px);
    grid-template-rows: repeat(5, 40px);
  }
}
.game__cell_5x5 {
  width: 93%;
  height: 93%;
  cursor: pointer;
}

.hints__top_5x5 {
  grid-area: top;
  display: grid;
  grid-template-columns: repeat(5, auto);
  border-top: none;
}
.hints__top_5x5 .hints__cell_5x5 {
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.hints__left_5x5 {
  grid-area: left;
  display: grid;
  grid-template-rows: repeat(5, auto);
  border-left: none;
}
.hints__left_5x5 .hints__cell_5x5 {
  flex-direction: row;
  align-items: center;
  justify-content: end;
}
.hints__cell_5x5 {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
}
.hints__num_5x5 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
.game__wrapper_10x10 {
  display: grid;
  justify-content: center;
  grid-template-areas: ". top" "left game";
  grid-gap: 2px;
  gap: 2px;
}
.game__grid_10x10 {
  grid-area: game;
  display: grid;
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  grid-gap: 1px;
  gap: 1px;
}
@media (max-width: 770px) {
  .game__grid_10x10 {
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
  }
}
@media (max-width: 450px) {
  .game__grid_10x10 {
    grid-template-columns: repeat(10, 20px);
    grid-template-rows: repeat(10, 20px);
    gap: 2px;
  }
}
.game__cell_10x10 {
  width: 93%;
  height: 93%;
  cursor: pointer;
}
@media (max-width: 450px) {
  .game__cell_10x10 {
    width: 95%;
    height: 95%;
  }
}

.hints__top_10x10 {
  grid-area: top;
  display: grid;
  grid-template-columns: repeat(10, auto);
  border-top: none;
}
.hints__top_10x10 .hints__cell_10x10 {
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.hints__left_10x10 {
  grid-area: left;
  display: grid;
  grid-template-rows: repeat(10, auto);
  border-left: none;
}
.hints__left_10x10 .hints__cell_10x10 {
  flex-direction: row;
  align-items: center;
  justify-content: end;
}
.hints__cell_10x10 {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
}
.hints__num_10x10 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
@media (max-width: 450px) {
  .hints__num_10x10 {
    font-size: 1.2rem;
  }
}

.game__wrapper_15x15 {
  display: grid;
  justify-content: center;
  grid-template-areas: ". top" "left game";
  grid-gap: 2px;
  gap: 2px;
}
.game__grid_15x15 {
  grid-area: game;
  display: grid;
  grid-template-columns: repeat(15, 35px);
  grid-template-rows: repeat(15, 35px);
  grid-gap: 1px;
  gap: 1px;
}
@media (max-width: 770px) {
  .game__grid_15x15 {
    grid-template-columns: repeat(15, 21px);
    grid-template-rows: repeat(15, 21px);
    gap: 2px;
  }
}
@media (max-width: 450px) {
  .game__grid_15x15 {
    grid-template-columns: repeat(15, 15px);
    grid-template-rows: repeat(15, 15px);
  }
}
.game__cell_15x15 {
  width: 93%;
  height: 93%;
  cursor: pointer;
}

.hints__top_15x15 {
  grid-area: top;
  display: grid;
  grid-template-columns: repeat(15, auto);
  border-top: none;
}
.hints__top_15x15 .hints__cell_15x15 {
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.hints__left_15x15 {
  grid-area: left;
  display: grid;
  grid-template-rows: repeat(15, auto);
  border-left: none;
}
@media (max-width: 450px) {
  .hints__left_15x15 {
    grid-template-rows: repeat(15, 16.7px);
  }
}
.hints__left_15x15 .hints__cell_15x15 {
  flex-direction: row;
  align-items: center;
  justify-content: end;
}
.hints__cell_15x15 {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
}
.hints__num_15x15 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
@media (max-width: 450px) {
  .hints__num_15x15 {
    font-size: 1.2rem;
  }
}

.template {
  margin-top: 50px;
}
.template__wrapper {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
.template__images {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.template__images p {
  text-transform: uppercase;
  margin-bottom: 5px;
}
.template__item_5x5 {
  display: flex;
  width: 115px;
  flex-wrap: wrap;
  cursor: pointer;
  gap: 1px;
}
.template__cell_5x5 {
  width: 20px;
  height: 20px;
}

.template__item_10x10 {
  display: flex;
  width: 180px;
  flex-wrap: wrap;
  cursor: pointer;
  gap: 1px;
}
.template__cell_10x10 {
  width: 15px;
  height: 15px;
}

.template__item_15x15 {
  display: flex;
  width: 180px;
  flex-wrap: wrap;
  cursor: pointer;
  gap: 1px;
}
.template__cell_15x15 {
  width: 9px;
  height: 9px;
}

.modal-light {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
}
.modal-light__content {
  width: 600px;
  position: absolute;
  background: #fdf5e6;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
}
@media (max-width: 780px) {
  .modal-light__content {
    max-width: 400px;
  }
}
@media (max-width: 500px) {
  .modal-light__content {
    max-width: 250px;
  }
}
.modal-light__title {
  font-size: 2.4rem;
  margin-bottom: 25px;
  line-height: 40px;
}
.modal-light__button {
  margin-top: 25px;
  padding: 15px 0 15px 0;
  border: none;
  background: #474a51;
  font-size: 2rem;
  color: #fdf5e6;
  border-radius: 15px;
  cursor: pointer;
}
.modal-light__button:hover {
  background: rgba(71, 74, 81, 0.8);
}
.modal-light__show {
  display: block;
}
.modal-light__hide {
  display: none;
}
.modal-light__fade {
  animation-name: modal__fade;
  animation-duration: 0.4s;
}
@keyframes modal__fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.modal-dark {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
}
.modal-dark__content {
  width: 600px;
  position: absolute;
  background: #474a51;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
}
@media (max-width: 780px) {
  .modal-dark__content {
    max-width: 400px;
  }
}
@media (max-width: 500px) {
  .modal-dark__content {
    max-width: 250px;
  }
}
.modal-dark__title {
  font-size: 2.4rem;
  margin-bottom: 25px;
  line-height: 40px;
}
.modal-dark__button {
  margin-top: 25px;
  padding: 15px 0 15px 0;
  border: none;
  background: #fdf5e6;
  font-size: 2rem;
  color: #474a51;
  border-radius: 15px;
  cursor: pointer;
}
.modal-dark__button:hover {
  background: rgba(253, 245, 230, 0.8);
}
.modal-dark__show {
  display: block;
}
.modal-dark__hide {
  display: none;
}
.modal-dark__fade {
  animation-name: modal__fade;
  animation-duration: 0.4s;
}
@keyframes modal__fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.popup {
  position: fixed;
  top: 25px;
  right: -1000px;
  padding: 15px;
  background-color: #44944a;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1.6rem;
  transition: all 1s ease-in-out;
}
@media (max-width: 550px) {
  .popup {
    font-size: 1.4rem;
    top: 15px;
    padding: 10px;
  }
}

.popup.show {
  right: 25px;
}
@media (max-width: 550px) {
  .popup.show {
    right: 15px;
  }
}

.table {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}
.table__row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  text-transform: uppercase;
}
.table__row_result {
  text-transform: lowercase;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.table__cell {
  flex: 1;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/sass/base/_normalize.scss","webpack://./src/index.scss","webpack://./src/assets/styles/sass/themes/_dark.scss","webpack://./src/assets/styles/sass/abstracts/_variables.scss","webpack://./src/assets/styles/sass/themes/_light.scss","webpack://./src/assets/styles/sass/_main.scss","webpack://./src/assets/styles/sass/components/_timer.scss","webpack://./src/assets/styles/sass/components/_level.scss","webpack://./src/assets/styles/sass/components/_game.scss","webpack://./src/assets/styles/sass/components/_reset.scss","webpack://./src/assets/styles/sass/layout/_grid-5x5.scss","webpack://./src/assets/styles/sass/layout/_grid-10x10.scss","webpack://./src/assets/styles/sass/layout/_grid-15x15.scss","webpack://./src/assets/styles/sass/layout/_template-5x5.scss","webpack://./src/assets/styles/sass/layout/_template-10x10.scss","webpack://./src/assets/styles/sass/layout/_template-15x15.scss","webpack://./src/assets/styles/sass/themes/_modals-light.scss","webpack://./src/assets/styles/sass/themes/_modals-dark.scss","webpack://./src/assets/styles/sass/components/_message.scss","webpack://./src/assets/styles/sass/components/_table.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA;EACA,MAAA;EACA,8BAAA;EACA,MAAA;ACFF;;ADKA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;EAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,cAAA;EAEA,SAAA;ACPF;;ADUA;;;;;EAKE,SAAA;EACA,UAAA;ACPF;;ADUA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA;EACA,MAAA;EACA,SAAA;EACA,MAAA;EACA,iBAAA;EACA,MAAA;ACTF;;ADYA;;;EAAA;AAKA;EACE,iCAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;ACVF;;ADaA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ACZF;;ADeA;;;EAAA;AAKA;EACE,mBAAA;EACA,MAAA;EACA,kCAAA;EAAA,0BAAA;EACA,MAAA;EACA,0BAAA;EAAA,yCAAA;UAAA,iCAAA;EACA,MAAA;ACbF;;ADgBA;;EAAA;AAIA;;EAEE,mBAAA;ACdF;;ADiBA;;;EAAA;AAKA;;;EAGE,iCAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;ACfF;;ADkBA;;EAAA;AAIA;EACE,cAAA;AChBF;;ADmBA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ACjBF;;ADoBA;EACE,eAAA;ACjBF;;ADoBA;EACE,WAAA;ACjBF;;ADoBA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;ACnBF;;ADsBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA;EACA,MAAA;EACA,eAAA;EACA,MAAA;EACA,iBAAA;EACA,MAAA;EACA,SAAA;EACA,MAAA;ACrBF;;ADwBA;;;EAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACtBF;;ADyBA;;;EAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACvBF;;AD0BA;;EAAA;AAIA;;;;EAIE,0BAAA;ACxBF;;AD2BA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ACzBF;;AD4BA;;EAAA;AAIA;;;;EAIE,8BAAA;AC1BF;;AD6BA;;EAAA;AAIA;EACE,8BAAA;AC3BF;;AD8BA;;;;;EAAA;AAOA;EACE,sBAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;EACA,cAAA;EACA,MAAA;EACA,eAAA;EACA,MAAA;EACA,UAAA;EACA,MAAA;EACA,mBAAA;EACA,MAAA;AC5BF;;AD+BA;;EAAA;AAIA;EACE,wBAAA;AC7BF;;ADgCA;;EAAA;AAIA;EACE,cAAA;AC9BF;;ADiCA;;;EAAA;AAKA;;EAEE,sBAAA;EACA,MAAA;EACA,UAAA;EACA,MAAA;AC/BF;;ADkCA;;EAAA;AAIA;;EAEE,YAAA;AChCF;;ADmCA;;;EAAA;AAKA;EACE,6BAAA;EACA,MAAA;EACA,oBAAA;EACA,MAAA;ACjCF;;ADoCA;;EAAA;AAIA;EACE,wBAAA;AClCF;;ADqCA;;;EAAA;AAKA;EACE,0BAAA;EACA,MAAA;EACA,aAAA;EACA,MAAA;ACnCF;;ADsCA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ACrCF;;ADwCA;;EAAA;AAIA;EACE,kBAAA;ACtCF;;ADyCA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ACxCF;;AD2CA;;EAAA;AAIA;EACE,aAAA;ACzCF;;AC1VA;EACC,mBAAA;EACA,cAAA;AD6VD;;AC1VA;EACC,mBCJiB;AFiWlB;;AC1VA;EACC,yBAAA;AD6VD;;AC1VA;EACC,kBAAA;AD6VD;AC3VC;EAEC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,yBCtBgB;AFkXlB;ACzVC;EACC,8CAAA;AD2VF;ACxVC;EACC,+CAAA;AD0VF;;ACtVA;EACC,mBCnCiB;EDoCjB,cCrCkB;AF8XnB;ACvVC;EACC,oCAAA;ADyVF;ACtVC;EACC,oCAAA;ADwVF;;ACnVA;EACC,oCAAA;ADsVD;;AClVC;EACC,yBAAA;EACA,gBAAA;ADqVF;;AChVC;EACC,yBAAA;EACA,iBAAA;ADmVF;;AC/UA;EACC,yBAAA;ADkVD;;AC/UA;EACC,yBAAA;ADkVD;;AC/UA;EACC,yBAAA;ADkVD;;AG/ZA;EACC,mBDKmB;ECJnB,cDKkB;AF6ZnB;;AG/ZA;EACC,mBDCkB;AFianB;;AG/ZA;EACC,yBAAA;AHkaD;;AG/ZA;EACC,kBAAA;AHkaD;AGhaC;EAEC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,yBDjBiB;AFkbnB;AG9ZC;EACC,8CAAA;AHgaF;AG7ZC;EACC,+CAAA;AH+ZF;;AG3ZA;EACC,mBD9BkB;EC+BlB,cDhCmB;AF8bpB;AG5ZC;EACC,iCAAA;AH8ZF;AG3ZC;EACC,iCAAA;AH6ZF;;AGzZA;EACC,iCAAA;AH4ZD;;AGxZC;EACC,yBAAA;EACA,gBAAA;AH2ZF;;AGtZC;EACC,yBAAA;EACA,iBAAA;AHyZF;;AGrZA;EACC,yBAAA;AHwZD;;AGrZA;EACC,yBAAA;AHwZD;;AGrZA;EACC,yBAAA;AHwZD;;AI9dA;EACC,eAAA;AJieD;;AI9dA;EACC,iBAAA;EACA,gCAAA;AJieD;;AI9dA;EACC,gBAAA;AJieD;;AI9dA;EACC,kBAAA;EACA,gBAAA;AJieD;;AI9dA;EACC,cAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;AJieD;;AI5dA;EACC,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;AJ+dD;;AI5dA;EACC,gBAAA;AJ+dD;;AI5dA;EACC,gBAAA;AJ+dD;;AK7gBC;EACC,aAAA;EACA,uBAAA;ALghBF;AK3gBC;EACC,iBAAA;EACA,gBAAA;AL6gBF;;AMthBC;EACC,aAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;ANyhBF;AMthBC;EACC,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;ANwhBF;AOxiBA;EAEC,gBAAA;APyiBD;;AQ3iBA;EACC,gBAAA;AR8iBD;AQ5iBC;EACC,aAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;AR8iBF;AQ3iBC;EACC,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;AR6iBF;AS5jBC;EACC,aAAA;EACA,uBAAA;EACA,wCACC;EAGD,aAAA;EAAA,QAAA;AT2jBF;ASvjBC;EACC,eAAA;EACA,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,aAAA;EAAA,QAAA;ATyjBF;ASvjBE;EAPD;IAQE,sCAAA;IACA,mCAAA;ET0jBD;AACF;ASvjBC;EACC,UAAA;EACA,WAAA;EACA,eAAA;ATyjBF;;ASljBC;EACC,cAAA;EACA,aAAA;EACA,sCAAA;EACA,gBAAA;ATqjBF;ASnjBE;EACC,sBAAA;EACA,mBAAA;EACA,oBAAA;ATqjBH;ASjjBC;EACC,eAAA;EACA,aAAA;EACA,mCAAA;EACA,iBAAA;ATmjBF;ASjjBE;EACC,mBAAA;EACA,mBAAA;EACA,oBAAA;ATmjBH;AS/iBC;EACC,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ATijBF;AS9iBC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;ATgjBF;AUvnBC;EACC,aAAA;EACA,uBAAA;EACA,wCACC;EAGD,aAAA;EAAA,QAAA;AVsnBF;AUlnBC;EACC,eAAA;EACA,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,aAAA;EAAA,QAAA;AVonBF;AUlnBE;EAPD;IAQE,uCAAA;IACA,oCAAA;EVqnBD;AACF;AUnnBE;EAZD;IAaE,uCAAA;IACA,oCAAA;IACA,QAAA;EVsnBD;AACF;AUnnBC;EACC,UAAA;EACA,WAAA;EACA,eAAA;AVqnBF;AUnnBE;EALD;IAME,UAAA;IACA,WAAA;EVsnBD;AACF;;AU/mBC;EACC,cAAA;EACA,aAAA;EACA,uCAAA;EACA,gBAAA;AVknBF;AUhnBE;EACC,sBAAA;EACA,mBAAA;EACA,oBAAA;AVknBH;AU9mBC;EACC,eAAA;EACA,aAAA;EACA,oCAAA;EACA,iBAAA;AVgnBF;AU9mBE;EACC,mBAAA;EACA,mBAAA;EACA,oBAAA;AVgnBH;AU5mBC;EACC,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AV8mBF;AU3mBC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AV6mBF;AU3mBE;EAND;IAOE,iBAAA;EV8mBD;AACF;;AWpsBC;EACC,aAAA;EACA,uBAAA;EACA,wCACC;EAGD,aAAA;EAAA,QAAA;AXosBF;AWhsBC;EACC,eAAA;EACA,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,aAAA;EAAA,QAAA;AXksBF;AWhsBE;EAPD;IAQE,uCAAA;IACA,oCAAA;IACA,QAAA;EXmsBD;AACF;AWjsBE;EAbD;IAcE,uCAAA;IACA,oCAAA;EXosBD;AACF;AWjsBC;EACC,UAAA;EACA,WAAA;EACA,eAAA;AXmsBF;;AW5rBC;EACC,cAAA;EACA,aAAA;EACA,uCAAA;EACA,gBAAA;AX+rBF;AW7rBE;EACC,sBAAA;EACA,mBAAA;EACA,oBAAA;AX+rBH;AW3rBC;EACC,eAAA;EACA,aAAA;EACA,oCAAA;EACA,iBAAA;AX6rBF;AW3rBE;EAND;IAOE,sCAAA;EX8rBD;AACF;AW5rBE;EACC,mBAAA;EACA,mBAAA;EACA,oBAAA;AX8rBH;AW1rBC;EACC,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AX4rBF;AWzrBC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AX2rBF;AWzrBE;EAND;IAOE,iBAAA;EX4rBD;AACF;;AYnxBA;EAEC,gBAAA;AZqxBD;AYnxBC;EACC,gBAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AZqxBF;AYlxBC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;AZoxBF;AYlxBE;EACC,yBAAA;EACA,kBAAA;AZoxBH;AYhxBC;EACC,aAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,QAAA;AZkxBF;AY/wBC;EACC,WAAA;EACA,YAAA;AZixBF;;AajzBC;EACC,aAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,QAAA;AbozBF;AajzBC;EACC,WAAA;EACA,YAAA;AbmzBF;;Ac7zBC;EACC,aAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,QAAA;Adg0BF;Ac7zBC;EACC,UAAA;EACA,WAAA;Ad+zBF;;Ae30BA;EACC,eAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,oCAAA;Af80BD;Ae50BC;EACC,YAAA;EACA,kBAAA;EACA,mBbPkB;EaQlB,SAAA;EACA,QAAA;EACA,gCAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;Af80BF;Ae50BE;EAdD;IAeE,gBAAA;Ef+0BD;AACF;Ae70BE;EAlBD;IAmBE,gBAAA;Efg1BD;AACF;Ae70BC;EACC,iBAAA;EACA,mBAAA;EACA,iBAAA;Af+0BF;Ae30BC;EACC,gBAAA;EACA,sBAAA;EACA,YAAA;EACA,mBbrCiB;EasCjB,eAAA;EACA,cbxCkB;EayClB,mBAAA;EACA,eAAA;Af60BF;Ae30BE;EACC,iCAAA;Af60BH;Aex0BC;EACC,cAAA;Af00BF;Aev0BC;EACC,aAAA;Afy0BF;Aet0BC;EACC,2BAAA;EACA,wBAAA;Afw0BF;Aer0BC;EACC;IACC,YAAA;Efu0BD;Eep0BA;IACC,UAAA;Efs0BD;AACF;;AgBl5BA;EACC,eAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,oCAAA;AhBq5BD;AgBn5BC;EACC,YAAA;EACA,kBAAA;EACA,mBdZiB;EcajB,SAAA;EACA,QAAA;EACA,gCAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;AhBq5BF;AgBn5BE;EAdD;IAeE,gBAAA;EhBs5BD;AACF;AgBp5BE;EAlBD;IAmBE,gBAAA;EhBu5BD;AACF;AgBp5BC;EACC,iBAAA;EACA,mBAAA;EACA,iBAAA;AhBs5BF;AgBl5BC;EACC,gBAAA;EACA,sBAAA;EACA,YAAA;EACA,mBd1CgB;Ec2ChB,eAAA;EACA,cd7CiB;Ec8CjB,mBAAA;EACA,eAAA;AhBo5BF;AgBl5BE;EACC,oCAAA;AhBo5BH;AgB/4BC;EACC,cAAA;AhBi5BF;AgB94BC;EACC,aAAA;AhBg5BF;AgB74BC;EACC,2BAAA;EACA,wBAAA;AhB+4BF;AgB54BC;EACC;IACC,YAAA;EhB84BD;EgB34BA;IACC,UAAA;EhB64BD;AACF;;AiBz9BA;EACC,eAAA;EACA,SAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,uCAAA;EACA,WAAA;EACA,iBAAA;EACA,8BAAA;AjB49BD;AiB19BC;EAZD;IAaE,iBAAA;IACA,SAAA;IACA,aAAA;EjB69BA;AACF;;AiB19BA;EACC,WAAA;AjB69BD;AiB39BC;EAHD;IAIE,WAAA;EjB89BA;AACF;;AkBt/BA;EAEC,aAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;AlBw/BD;AkBt/BC;EACC,aAAA;EACA,8BAAA;EACA,aAAA;EACA,6BAAA;EACA,iBAAA;EACA,yBAAA;AlBw/BF;AkBt/BE;EACC,yBAAA;EACA,aAAA;EACA,8BAAA;EACA,aAAA;AlBw/BH;AkBp/BC;EACC,OAAA;EACA,kBAAA;AlBs/BF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  // margin: 0.67em 0;\r\n  margin: 0;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4,\r\nul,\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  /* 1 */\r\n  height: 0;\r\n  /* 1 */\r\n  overflow: visible;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none;\r\n  /* 1 */\r\n  text-decoration: underline;\r\n  /* 2 */\r\n  text-decoration: underline dotted;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  line-height: 1.15;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  display: table;\r\n  /* 1 */\r\n  max-width: 100%;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 3 */\r\n  white-space: normal;\r\n  /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0;\n}\n\nh2,\nh3,\nh4,\nul,\np {\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n.dark-theme {\n  background: #474a51;\n  color: #fdf5e6;\n}\n\n.dark__checked {\n  background: #fdf5e6;\n}\n\n.dark__cell {\n  border: 1px solid #fdf5e6;\n}\n\n.dark__cross {\n  position: relative;\n}\n.dark__cross::before, .dark__cross::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 70%;\n  height: 2px;\n  background-color: #fdf5e6;\n}\n.dark__cross::before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.dark__cross::after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.dark__button {\n  background: #fdf5e6;\n  color: #474a51;\n}\n.dark__button:hover {\n  background: rgba(253, 245, 230, 0.8);\n}\n.dark__button_active {\n  background: rgba(253, 245, 230, 0.8);\n}\n\n.dark__button[disabled] {\n  background: rgba(253, 245, 230, 0.8);\n}\n\n.hints__top .dark__hints {\n  border: 1px solid #fdf5e6;\n  border-top: none;\n}\n\n.hints__left .dark__hints {\n  border: 1px solid #fdf5e6;\n  border-left: none;\n}\n\n.dark__grid {\n  border: 2px solid #fdf5e6;\n}\n\n.dark__left {\n  border: 2px solid #fdf5e6;\n}\n\n.dark__top {\n  border: 2px solid #fdf5e6;\n}\n\n.light-theme {\n  background: #fdf5e6;\n  color: #474a51;\n}\n\n.light__checked {\n  background: #474a51;\n}\n\n.light__cell {\n  border: 1px solid #474a51;\n}\n\n.light__cross {\n  position: relative;\n}\n.light__cross::before, .light__cross::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 70%;\n  height: 2px;\n  background-color: #474a51;\n}\n.light__cross::before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.light__cross::after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.light__button {\n  background: #474a51;\n  color: #fdf5e6;\n}\n.light__button:hover {\n  background: rgba(71, 74, 81, 0.8);\n}\n.light__button_active {\n  background: rgba(71, 74, 81, 0.8);\n}\n\n.light__button[disabled] {\n  background: rgba(71, 74, 81, 0.8);\n}\n\n.hints__top .light__hints {\n  border: 1px solid #474a51;\n  border-top: none;\n}\n\n.hints__left .light__hints {\n  border: 1px solid #474a51;\n  border-left: none;\n}\n\n.light__grid {\n  border: 2px solid #474a51;\n}\n\n.light__left {\n  border: 2px solid #474a51;\n}\n\n.light__top {\n  border: 2px solid #474a51;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Inter\", sans-serif;\n}\n\n.body__hidden {\n  overflow: hidden;\n}\n\n.title {\n  text-align: center;\n  margin-top: 25px;\n}\n\n#toggle-theme {\n  display: block;\n  margin: 0 auto;\n  margin-top: 25px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.container {\n  max-width: 1180px;\n  margin: 0 auto;\n  position: relative;\n  padding: 10px;\n}\n\n.select {\n  margin-top: 25px;\n}\n\n.nonograms {\n  margin-top: 25px;\n}\n\n.timer__wrapper {\n  display: flex;\n  justify-content: center;\n}\n.timer__duration {\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n\n.level__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  list-style-type: none;\n}\n.level__item {\n  margin-left: 15px;\n  margin-top: 10px;\n  cursor: pointer;\n  padding: 10px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n}\n.game {\n  margin-top: 25px;\n}\n\n.reset {\n  margin-top: 25px;\n}\n.reset__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  list-style-type: none;\n}\n.reset__button {\n  margin-left: 15px;\n  margin-top: 10px;\n  cursor: pointer;\n  padding: 10px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n}\n.game__wrapper_5x5 {\n  display: grid;\n  justify-content: center;\n  grid-template-areas: \". top\" \"left game\";\n  gap: 2px;\n}\n.game__grid_5x5 {\n  grid-area: game;\n  display: grid;\n  grid-template-columns: repeat(5, 50px);\n  grid-template-rows: repeat(5, 50px);\n  gap: 1px;\n}\n@media (max-width: 450px) {\n  .game__grid_5x5 {\n    grid-template-columns: repeat(5, 40px);\n    grid-template-rows: repeat(5, 40px);\n  }\n}\n.game__cell_5x5 {\n  width: 93%;\n  height: 93%;\n  cursor: pointer;\n}\n\n.hints__top_5x5 {\n  grid-area: top;\n  display: grid;\n  grid-template-columns: repeat(5, auto);\n  border-top: none;\n}\n.hints__top_5x5 .hints__cell_5x5 {\n  flex-direction: column;\n  align-items: center;\n  justify-content: end;\n}\n.hints__left_5x5 {\n  grid-area: left;\n  display: grid;\n  grid-template-rows: repeat(5, auto);\n  border-left: none;\n}\n.hints__left_5x5 .hints__cell_5x5 {\n  flex-direction: row;\n  align-items: center;\n  justify-content: end;\n}\n.hints__cell_5x5 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.hints__num_5x5 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n}\n.game__wrapper_10x10 {\n  display: grid;\n  justify-content: center;\n  grid-template-areas: \". top\" \"left game\";\n  gap: 2px;\n}\n.game__grid_10x10 {\n  grid-area: game;\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  gap: 1px;\n}\n@media (max-width: 770px) {\n  .game__grid_10x10 {\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n  }\n}\n@media (max-width: 450px) {\n  .game__grid_10x10 {\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows: repeat(10, 20px);\n    gap: 2px;\n  }\n}\n.game__cell_10x10 {\n  width: 93%;\n  height: 93%;\n  cursor: pointer;\n}\n@media (max-width: 450px) {\n  .game__cell_10x10 {\n    width: 95%;\n    height: 95%;\n  }\n}\n\n.hints__top_10x10 {\n  grid-area: top;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n  border-top: none;\n}\n.hints__top_10x10 .hints__cell_10x10 {\n  flex-direction: column;\n  align-items: center;\n  justify-content: end;\n}\n.hints__left_10x10 {\n  grid-area: left;\n  display: grid;\n  grid-template-rows: repeat(10, auto);\n  border-left: none;\n}\n.hints__left_10x10 .hints__cell_10x10 {\n  flex-direction: row;\n  align-items: center;\n  justify-content: end;\n}\n.hints__cell_10x10 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.hints__num_10x10 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n}\n@media (max-width: 450px) {\n  .hints__num_10x10 {\n    font-size: 1.2rem;\n  }\n}\n\n.game__wrapper_15x15 {\n  display: grid;\n  justify-content: center;\n  grid-template-areas: \". top\" \"left game\";\n  gap: 2px;\n}\n.game__grid_15x15 {\n  grid-area: game;\n  display: grid;\n  grid-template-columns: repeat(15, 35px);\n  grid-template-rows: repeat(15, 35px);\n  gap: 1px;\n}\n@media (max-width: 770px) {\n  .game__grid_15x15 {\n    grid-template-columns: repeat(15, 21px);\n    grid-template-rows: repeat(15, 21px);\n    gap: 2px;\n  }\n}\n@media (max-width: 450px) {\n  .game__grid_15x15 {\n    grid-template-columns: repeat(15, 15px);\n    grid-template-rows: repeat(15, 15px);\n  }\n}\n.game__cell_15x15 {\n  width: 93%;\n  height: 93%;\n  cursor: pointer;\n}\n\n.hints__top_15x15 {\n  grid-area: top;\n  display: grid;\n  grid-template-columns: repeat(15, auto);\n  border-top: none;\n}\n.hints__top_15x15 .hints__cell_15x15 {\n  flex-direction: column;\n  align-items: center;\n  justify-content: end;\n}\n.hints__left_15x15 {\n  grid-area: left;\n  display: grid;\n  grid-template-rows: repeat(15, auto);\n  border-left: none;\n}\n@media (max-width: 450px) {\n  .hints__left_15x15 {\n    grid-template-rows: repeat(15, 16.7px);\n  }\n}\n.hints__left_15x15 .hints__cell_15x15 {\n  flex-direction: row;\n  align-items: center;\n  justify-content: end;\n}\n.hints__cell_15x15 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.hints__num_15x15 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n}\n@media (max-width: 450px) {\n  .hints__num_15x15 {\n    font-size: 1.2rem;\n  }\n}\n\n.template {\n  margin-top: 50px;\n}\n.template__wrapper {\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n}\n.template__images {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.template__images p {\n  text-transform: uppercase;\n  margin-bottom: 5px;\n}\n.template__item_5x5 {\n  display: flex;\n  width: 115px;\n  flex-wrap: wrap;\n  cursor: pointer;\n  gap: 1px;\n}\n.template__cell_5x5 {\n  width: 20px;\n  height: 20px;\n}\n\n.template__item_10x10 {\n  display: flex;\n  width: 180px;\n  flex-wrap: wrap;\n  cursor: pointer;\n  gap: 1px;\n}\n.template__cell_10x10 {\n  width: 15px;\n  height: 15px;\n}\n\n.template__item_15x15 {\n  display: flex;\n  width: 180px;\n  flex-wrap: wrap;\n  cursor: pointer;\n  gap: 1px;\n}\n.template__cell_15x15 {\n  width: 9px;\n  height: 9px;\n}\n\n.modal-light {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.modal-light__content {\n  width: 600px;\n  position: absolute;\n  background: #fdf5e6;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 15px;\n  padding: 35px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  text-align: center;\n}\n@media (max-width: 780px) {\n  .modal-light__content {\n    max-width: 400px;\n  }\n}\n@media (max-width: 500px) {\n  .modal-light__content {\n    max-width: 250px;\n  }\n}\n.modal-light__title {\n  font-size: 2.4rem;\n  margin-bottom: 25px;\n  line-height: 40px;\n}\n.modal-light__button {\n  margin-top: 25px;\n  padding: 15px 0 15px 0;\n  border: none;\n  background: #474a51;\n  font-size: 2rem;\n  color: #fdf5e6;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.modal-light__button:hover {\n  background: rgba(71, 74, 81, 0.8);\n}\n.modal-light__show {\n  display: block;\n}\n.modal-light__hide {\n  display: none;\n}\n.modal-light__fade {\n  animation-name: modal__fade;\n  animation-duration: 0.4s;\n}\n@keyframes modal__fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.modal-dark {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.modal-dark__content {\n  width: 600px;\n  position: absolute;\n  background: #474a51;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 15px;\n  padding: 35px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  text-align: center;\n}\n@media (max-width: 780px) {\n  .modal-dark__content {\n    max-width: 400px;\n  }\n}\n@media (max-width: 500px) {\n  .modal-dark__content {\n    max-width: 250px;\n  }\n}\n.modal-dark__title {\n  font-size: 2.4rem;\n  margin-bottom: 25px;\n  line-height: 40px;\n}\n.modal-dark__button {\n  margin-top: 25px;\n  padding: 15px 0 15px 0;\n  border: none;\n  background: #fdf5e6;\n  font-size: 2rem;\n  color: #474a51;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.modal-dark__button:hover {\n  background: rgba(253, 245, 230, 0.8);\n}\n.modal-dark__show {\n  display: block;\n}\n.modal-dark__hide {\n  display: none;\n}\n.modal-dark__fade {\n  animation-name: modal__fade;\n  animation-duration: 0.4s;\n}\n@keyframes modal__fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.popup {\n  position: fixed;\n  top: 25px;\n  right: -1000px;\n  padding: 15px;\n  background-color: #44944a;\n  border-radius: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  color: #fff;\n  font-size: 1.6rem;\n  transition: all 1s ease-in-out;\n}\n@media (max-width: 550px) {\n  .popup {\n    font-size: 1.4rem;\n    top: 15px;\n    padding: 10px;\n  }\n}\n\n.popup.show {\n  right: 25px;\n}\n@media (max-width: 550px) {\n  .popup.show {\n    right: 15px;\n  }\n}\n\n.table {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin: 20px auto;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.table__row {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.table__row_result {\n  text-transform: lowercase;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.table__cell {\n  flex: 1;\n  text-align: center;\n}",".dark-theme {\r\n\tbackground: $color-theme-dark;\r\n\tcolor: $color-text-dark;\r\n}\r\n\r\n.dark__checked {\r\n\tbackground: $color-text-dark;\r\n}\r\n\r\n.dark__cell {\r\n\tborder: 1px solid $color-text-dark;\r\n}\r\n\r\n.dark__cross {\r\n\tposition: relative;\r\n\r\n\t&::before,\r\n\t&::after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\twidth: 70%;\r\n\t\theight: 2px;\r\n\t\tbackground-color: $color-text-dark;\r\n\t}\r\n\r\n\t&::before {\r\n\t\ttransform: translate(-50%, -50%) rotate(45deg);\r\n\t}\r\n\r\n\t&::after {\r\n\t\ttransform: translate(-50%, -50%) rotate(-45deg);\r\n\t}\r\n}\r\n\r\n.dark__button {\r\n\tbackground: $color-text-dark;\r\n\tcolor: $color-theme-dark;\r\n\r\n\t&:hover {\r\n\t\tbackground: rgba($color: $color-text-dark, $alpha: .8);\r\n\t}\r\n\r\n\t&_active {\r\n\t\tbackground: rgba($color: $color-text-dark, $alpha: .8);\r\n\t}\r\n\r\n}\r\n\r\n.dark__button[disabled] {\r\n\tbackground: rgba($color: $color-text-dark, $alpha: .8);\r\n}\r\n\r\n.hints__top {\r\n\t.dark__hints {\r\n\t\tborder: 1px solid $color-text-dark;\r\n\t\tborder-top: none;\r\n\t}\r\n}\r\n\r\n.hints__left {\r\n\t.dark__hints {\r\n\t\tborder: 1px solid $color-text-dark;\r\n\t\tborder-left: none;\r\n\t}\r\n}\r\n\r\n.dark__grid {\r\n\tborder: 2px solid $color-text-dark;\r\n}\r\n\r\n.dark__left {\r\n\tborder: 2px solid $color-text-dark;\r\n}\r\n\r\n.dark__top {\r\n\tborder: 2px solid $color-text-dark;\r\n}","// DARK_THEME\r\n$color-theme-dark: #474a51;\r\n$color-text-dark: #fdf5e6;\r\n\r\n\r\n// LIGHT_THEME\r\n$color-theme-light: #fdf5e6;\r\n$color-text-light: #474a51;",".light-theme {\r\n\tbackground: $color-theme-light;\r\n\tcolor: $color-text-light;\r\n}\r\n\r\n.light__checked {\r\n\tbackground: $color-text-light;\r\n}\r\n\r\n.light__cell {\r\n\tborder: 1px solid $color-text-light;\r\n}\r\n\r\n.light__cross {\r\n\tposition: relative;\r\n\r\n\t&::before,\r\n\t&::after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\twidth: 70%;\r\n\t\theight: 2px;\r\n\t\tbackground-color: $color-text-light;\r\n\t}\r\n\r\n\t&::before {\r\n\t\ttransform: translate(-50%, -50%) rotate(45deg);\r\n\t}\r\n\r\n\t&::after {\r\n\t\ttransform: translate(-50%, -50%) rotate(-45deg);\r\n\t}\r\n}\r\n\r\n.light__button {\r\n\tbackground: $color-text-light;\r\n\tcolor: $color-theme-light;\r\n\r\n\t&:hover {\r\n\t\tbackground: rgba($color: $color-text-light, $alpha: .8);\r\n\t}\r\n\r\n\t&_active {\r\n\t\tbackground: rgba($color: $color-text-light, $alpha: .8);\r\n\t}\r\n}\r\n\r\n.light__button[disabled] {\r\n\tbackground: rgba($color: $color-text-light, $alpha: .8);\r\n}\r\n\r\n.hints__top {\r\n\t.light__hints {\r\n\t\tborder: 1px solid $color-text-light;\r\n\t\tborder-top: none;\r\n\t}\r\n}\r\n\r\n.hints__left {\r\n\t.light__hints {\r\n\t\tborder: 1px solid $color-text-light;\r\n\t\tborder-left: none;\r\n\t}\r\n}\r\n\r\n.light__grid {\r\n\tborder: 2px solid $color-text-light;\r\n}\r\n\r\n.light__left {\r\n\tborder: 2px solid $color-text-light;\r\n}\r\n\r\n.light__top {\r\n\tborder: 2px solid $color-text-light;\r\n}","@import './base/normalize';\r\n@import './base/fonts';\r\n@import './abstracts/variables';\r\n@import './themes/dark';\r\n@import './themes/light';\r\n\r\nhtml {\r\n\tfont-size: 10px;\r\n}\r\n\r\nbody {\r\n\tfont-size: 1.6rem;\r\n\tfont-family: 'Inter', sans-serif;\r\n}\r\n\r\n.body__hidden {\r\n\toverflow: hidden;\r\n}\r\n\r\n.title {\r\n\ttext-align: center;\r\n\tmargin-top: 25px;\r\n}\r\n\r\n#toggle-theme {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 25px;\r\n\tpadding: 10px;\r\n\tborder: none;\r\n\tborder-radius: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.main {}\r\n\r\n.container {\r\n\tmax-width: 1180px;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tpadding: 10px;\r\n}\r\n\r\n.select {\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.nonograms {\r\n\tmargin-top: 25px;\r\n}\r\n\r\n@import './components/timer';\r\n@import './components/level';\r\n@import './components/game';\r\n@import './components/reset';\r\n@import './layout/grid-5x5';\r\n@import './layout/grid-10x10';\r\n@import './layout/grid-15x15';\r\n@import './layout/template-5x5';\r\n@import './layout/template-10x10';\r\n@import './layout/template-15x15';\r\n@import './themes/modals-light';\r\n@import './themes/modals-dark';\r\n@import './components/message';\r\n@import './components/table';",".timer {\r\n\r\n\t&__wrapper {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t&__title {}\r\n\r\n\t&__duration {\r\n\t\tfont-size: 2.2rem;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n}",".level {\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: center;\r\n\t\tlist-style-type: none;\r\n\t}\r\n\r\n\t&__item {\r\n\t\tmargin-left: 15px;\r\n\t\tmargin-top: 10px;\r\n\t\tcursor: pointer;\r\n\t\tpadding: 10px;\r\n\t\tpadding: 10px;\r\n\t\tborder: none;\r\n\t\tborder-radius: 10px;\r\n\r\n\t}\r\n\r\n\t&__item.level__item_continue {\r\n\t\t// display: none;\r\n\t}\r\n\r\n}",".game {\r\n\r\n\tmargin-top: 25px;\r\n\r\n}",".reset {\r\n\tmargin-top: 25px;\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: center;\r\n\t\tlist-style-type: none;\r\n\t}\r\n\r\n\t&__button {\r\n\t\tmargin-left: 15px;\r\n\t\tmargin-top: 10px;\r\n\t\tcursor: pointer;\r\n\t\tpadding: 10px;\r\n\t\tpadding: 10px;\r\n\t\tborder: none;\r\n\t\tborder-radius: 10px;\r\n\r\n\t\t&_solution {}\r\n\r\n\t\t&_new {}\r\n\t}\r\n\r\n\r\n}",".game {\r\n\r\n\t&__wrapper_5x5 {\r\n\t\tdisplay: grid;\r\n\t\tjustify-content: center;\r\n\t\tgrid-template-areas:\r\n\t\t\t\". top\"\r\n\t\t\t\"left game\"\r\n\t\t;\r\n\t\tgap: 2px;\r\n\t}\r\n\r\n\r\n\t&__grid_5x5 {\r\n\t\tgrid-area: game;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(5, 50px);\r\n\t\tgrid-template-rows: repeat(5, 50px);\r\n\t\tgap: 1px;\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\tgrid-template-columns: repeat(5, 40px);\r\n\t\t\tgrid-template-rows: repeat(5, 40px);\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell_5x5 {\r\n\t\twidth: 93%;\r\n\t\theight: 93%;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n}\r\n\r\n.hints {\r\n\r\n\t&__top_5x5 {\r\n\t\tgrid-area: top;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(5, auto);\r\n\t\tborder-top: none;\r\n\r\n\t\t.hints__cell_5x5 {\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: end;\r\n\t\t}\r\n\t}\r\n\r\n\t&__left_5x5 {\r\n\t\tgrid-area: left;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-rows: repeat(5, auto);\r\n\t\tborder-left: none;\r\n\r\n\t\t.hints__cell_5x5 {\r\n\t\t\tflex-direction: row;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: end;\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell_5x5 {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__num_5x5 {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tmargin-left: 10px;\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\t// font-size: 1.2rem;\r\n\t\t}\r\n\t}\r\n\r\n}",".game {\r\n\r\n\t&__wrapper_10x10 {\r\n\t\tdisplay: grid;\r\n\t\tjustify-content: center;\r\n\t\tgrid-template-areas:\r\n\t\t\t\". top\"\r\n\t\t\t\"left game\"\r\n\t\t;\r\n\t\tgap: 2px;\r\n\t}\r\n\r\n\r\n\t&__grid_10x10 {\r\n\t\tgrid-area: game;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(10, 50px);\r\n\t\tgrid-template-rows: repeat(10, 50px);\r\n\t\tgap: 1px;\r\n\r\n\t\t@media(max-width: 770px) {\r\n\t\t\tgrid-template-columns: repeat(10, 30px);\r\n\t\t\tgrid-template-rows: repeat(10, 30px);\r\n\t\t}\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\tgrid-template-columns: repeat(10, 20px);\r\n\t\t\tgrid-template-rows: repeat(10, 20px);\r\n\t\t\tgap: 2px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell_10x10 {\r\n\t\twidth: 93%;\r\n\t\theight: 93%;\r\n\t\tcursor: pointer;\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\twidth: 95%;\r\n\t\t\theight: 95%;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\n.hints {\r\n\r\n\t&__top_10x10 {\r\n\t\tgrid-area: top;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(10, auto);\r\n\t\tborder-top: none;\r\n\r\n\t\t.hints__cell_10x10 {\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: end;\r\n\t\t}\r\n\t}\r\n\r\n\t&__left_10x10 {\r\n\t\tgrid-area: left;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-rows: repeat(10, auto);\r\n\t\tborder-left: none;\r\n\r\n\t\t.hints__cell_10x10 {\r\n\t\t\tflex-direction: row;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: end;\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell_10x10 {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__num_10x10 {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tmargin-left: 10px;\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\tfont-size: 1.2rem;\r\n\t\t}\r\n\t}\r\n\r\n}",".game {\r\n\r\n\t&__wrapper_15x15 {\r\n\t\tdisplay: grid;\r\n\t\tjustify-content: center;\r\n\t\tgrid-template-areas:\r\n\t\t\t\". top\"\r\n\t\t\t\"left game\"\r\n\t\t;\r\n\t\tgap: 2px;\r\n\t}\r\n\r\n\r\n\t&__grid_15x15 {\r\n\t\tgrid-area: game;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(15, 35px);\r\n\t\tgrid-template-rows: repeat(15, 35px);\r\n\t\tgap: 1px;\r\n\r\n\t\t@media(max-width: 770px) {\r\n\t\t\tgrid-template-columns: repeat(15, 21px);\r\n\t\t\tgrid-template-rows: repeat(15, 21px);\r\n\t\t\tgap: 2px;\r\n\t\t}\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\tgrid-template-columns: repeat(15, 15px);\r\n\t\t\tgrid-template-rows: repeat(15, 15px);\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell_15x15 {\r\n\t\twidth: 93%;\r\n\t\theight: 93%;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n}\r\n\r\n.hints {\r\n\r\n\t&__top_15x15 {\r\n\t\tgrid-area: top;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(15, auto);\r\n\t\tborder-top: none;\r\n\r\n\t\t.hints__cell_15x15 {\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: end;\r\n\t\t}\r\n\t}\r\n\r\n\t&__left_15x15 {\r\n\t\tgrid-area: left;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-rows: repeat(15, auto);\r\n\t\tborder-left: none;\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\tgrid-template-rows: repeat(15, 16.7px);\r\n\t\t}\r\n\r\n\t\t.hints__cell_15x15 {\r\n\t\t\tflex-direction: row;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: end;\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell_15x15 {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__num_15x15 {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tmargin-left: 10px;\r\n\r\n\t\t@media(max-width: 450px) {\r\n\t\t\tfont-size: 1.2rem;\r\n\t\t}\r\n\t}\r\n\r\n}",".template {\r\n\r\n\tmargin-top: 50px;\r\n\r\n\t&__wrapper {\r\n\t\tmax-width: 600px;\r\n\t\tmargin: 0 auto;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: center;\r\n\t\tgap: 15px;\r\n\t}\r\n\r\n\t&__images {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\r\n\t\tp {\r\n\t\t\ttext-transform: uppercase;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item_5x5 {\r\n\t\tdisplay: flex;\r\n\t\twidth: 115px;\r\n\t\tflex-wrap: wrap;\r\n\t\tcursor: pointer;\r\n\t\tgap: 1px;\r\n\t}\r\n\r\n\t&__cell_5x5 {\r\n\t\twidth: 20px;\r\n\t\theight: 20px;\r\n\t}\r\n}",".template {\r\n\r\n\t&__item_10x10 {\r\n\t\tdisplay: flex;\r\n\t\twidth: 180px;\r\n\t\tflex-wrap: wrap;\r\n\t\tcursor: pointer;\r\n\t\tgap: 1px;\r\n\t}\r\n\r\n\t&__cell_10x10 {\r\n\t\twidth: 15px;\r\n\t\theight: 15px;\r\n\t}\r\n}",".template {\r\n\r\n\t&__item_15x15 {\r\n\t\tdisplay: flex;\r\n\t\twidth: 180px;\r\n\t\tflex-wrap: wrap;\r\n\t\tcursor: pointer;\r\n\t\tgap: 1px;\r\n\t}\r\n\r\n\t&__cell_15x15 {\r\n\t\twidth: 9px;\r\n\t\theight: 9px;\r\n\t}\r\n}",".modal-light {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1050;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: rgba($color: #000, $alpha: .9);\r\n\r\n\t&__content {\r\n\t\twidth: 600px;\r\n\t\tposition: absolute;\r\n\t\tbackground: $color-theme-light;\r\n\t\tleft: 50%;\r\n\t\ttop: 50%;\r\n\t\ttransform: translate(-50%, -50%);\r\n\t\tborder-radius: 15px;\r\n\t\tpadding: 35px;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tflex-direction: column;\r\n\t\ttext-align: center;\r\n\r\n\t\t@media(max-width: 780px) {\r\n\t\t\tmax-width: 400px;\r\n\t\t}\r\n\r\n\t\t@media(max-width: 500px) {\r\n\t\t\tmax-width: 250px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__title {\r\n\t\tfont-size: 2.4rem;\r\n\t\tmargin-bottom: 25px;\r\n\t\tline-height: 40px;\r\n\t}\r\n\r\n\r\n\t&__button {\r\n\t\tmargin-top: 25px;\r\n\t\tpadding: 15px 0 15px 0;\r\n\t\tborder: none;\r\n\t\tbackground: $color-text-light;\r\n\t\tfont-size: 2.0rem;\r\n\t\tcolor: $color-theme-light;\r\n\t\tborder-radius: 15px;\r\n\t\tcursor: pointer;\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground: rgba($color: $color-text-light, $alpha: .8);\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t&__show {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&__hide {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t&__fade {\r\n\t\tanimation-name: modal__fade;\r\n\t\tanimation-duration: 0.4s;\r\n\t}\r\n\r\n\t@keyframes modal__fade {\r\n\t\tfrom {\r\n\t\t\topacity: 0.1;\r\n\t\t}\r\n\r\n\t\tto {\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\r\n}",".modal-dark {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1050;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: rgba($color: #000, $alpha: .9);\r\n\r\n\t&__content {\r\n\t\twidth: 600px;\r\n\t\tposition: absolute;\r\n\t\tbackground: $color-theme-dark;\r\n\t\tleft: 50%;\r\n\t\ttop: 50%;\r\n\t\ttransform: translate(-50%, -50%);\r\n\t\tborder-radius: 15px;\r\n\t\tpadding: 35px;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tflex-direction: column;\r\n\t\ttext-align: center;\r\n\r\n\t\t@media(max-width: 780px) {\r\n\t\t\tmax-width: 400px;\r\n\t\t}\r\n\r\n\t\t@media(max-width: 500px) {\r\n\t\t\tmax-width: 250px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__title {\r\n\t\tfont-size: 2.4rem;\r\n\t\tmargin-bottom: 25px;\r\n\t\tline-height: 40px;\r\n\t}\r\n\r\n\r\n\t&__button {\r\n\t\tmargin-top: 25px;\r\n\t\tpadding: 15px 0 15px 0;\r\n\t\tborder: none;\r\n\t\tbackground: $color-text-dark;\r\n\t\tfont-size: 2.0rem;\r\n\t\tcolor: $color-theme-dark;\r\n\t\tborder-radius: 15px;\r\n\t\tcursor: pointer;\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground: rgba($color: $color-text-dark, $alpha: .8);\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t&__show {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&__hide {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t&__fade {\r\n\t\tanimation-name: modal__fade;\r\n\t\tanimation-duration: 0.4s;\r\n\t}\r\n\r\n\t@keyframes modal__fade {\r\n\t\tfrom {\r\n\t\t\topacity: 0.1;\r\n\t\t}\r\n\r\n\t\tto {\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\r\n}",".popup {\r\n\tposition: fixed;\r\n\ttop: 25px;\r\n\tright: -1000px;\r\n\tpadding: 15px;\r\n\tbackground-color: #44944a;\r\n\tborder-radius: 15px;\r\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n\tcolor: #fff;\r\n\tfont-size: 1.6rem;\r\n\ttransition: all 1s ease-in-out;\r\n\r\n\t@media(max-width: 550px) {\r\n\t\tfont-size: 1.4rem;\r\n\t\ttop: 15px;\r\n\t\tpadding: 10px;\r\n\t}\r\n}\r\n\r\n.popup.show {\r\n\tright: 25px;\r\n\r\n\t@media(max-width: 550px) {\r\n\t\tright: 15px;\r\n\t}\r\n}",".table {\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 300px;\r\n\tmargin: 20px auto;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 5px;\r\n\toverflow: hidden;\r\n\r\n\t&__row {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tpadding: 10px;\r\n\t\tborder-bottom: 1px solid #ddd;\r\n\t\tfont-weight: bold;\r\n\t\ttext-transform: uppercase;\r\n\r\n\t\t&_result {\r\n\t\t\ttext-transform: lowercase;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__cell {\r\n\t\tflex: 1;\r\n\t\ttext-align: center;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/audio/click.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/click.mp3 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/click.mp3");

/***/ }),

/***/ "./src/assets/audio/click_two.mp3":
/*!****************************************!*\
  !*** ./src/assets/audio/click_two.mp3 ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/click_two.mp3");

/***/ }),

/***/ "./src/assets/audio/finish.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/finish.mp3 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/audio/finish.mp3");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <title>Nonograms Game</title>\r\n  </head>\r\n  <body></body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");



document.addEventListener("DOMContentLoaded", () => {
  (0,_js_app__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=main.6f222a3c812897ab61b1.js.map