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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "./src/js/keys.js");
/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions */ "./src/js/questions.js");
/* harmony import */ var _helpers_get_random_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/get-random-question */ "./src/js/helpers/get-random-question.js");
/* harmony import */ var _components_generate_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/generate-header */ "./src/js/components/generate-header.js");
/* harmony import */ var _components_generate_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/generate-main */ "./src/js/components/generate-main.js");
/* harmony import */ var _components_generate_hangman__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/generate-hangman */ "./src/js/components/generate-hangman.js");
/* harmony import */ var _components_generate_question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/generate-question */ "./src/js/components/generate-question.js");
/* harmony import */ var _components_generate_question_word__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/generate-question-word */ "./src/js/components/generate-question-word.js");
/* harmony import */ var _components_generate_question_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/generate-question-text */ "./src/js/components/generate-question-text.js");
/* harmony import */ var _components_generate_question_mistake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/generate-question-mistake */ "./src/js/components/generate-question-mistake.js");
/* harmony import */ var _components_generate_keybord__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/generate-keybord */ "./src/js/components/generate-keybord.js");
/* harmony import */ var _helpers_update_hangman_display__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/update-hangman-display */ "./src/js/helpers/update-hangman-display.js");
/* harmony import */ var _helpers_update_word_display__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/update-word-display */ "./src/js/helpers/update-word-display.js");
/* harmony import */ var _components_generate_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/generate-modal */ "./src/js/components/generate-modal.js");














const app = () => {
  const body = document.querySelector("body");
  const maxAttempts = 6;
  let guessedLetters = [];
  let usedQuestions = [];
  let attemptsCounter = 0;
  let secretWord = "";
  let timerModal = null;
  let timerReset = null;
  const generateHtml = () => {
    const randomPair = (0,_helpers_get_random_question__WEBPACK_IMPORTED_MODULE_2__.getRandomQuestion)(_questions__WEBPACK_IMPORTED_MODULE_1__["default"], usedQuestions);
    const randomQuestion = randomPair.question;
    const randomAnswer = randomPair.answer;
    console.log(randomAnswer);
    secretWord = randomAnswer.toLowerCase();
    guessedLetters = Array(secretWord.length).fill("_");
    const header = (0,_components_generate_header__WEBPACK_IMPORTED_MODULE_3__.generateHeader)();
    const main = (0,_components_generate_main__WEBPACK_IMPORTED_MODULE_4__.generateMain)();
    const hangman = (0,_components_generate_hangman__WEBPACK_IMPORTED_MODULE_5__.generateHangman)();
    const question = (0,_components_generate_question__WEBPACK_IMPORTED_MODULE_6__.generateQuestion)();
    const questionWord = (0,_components_generate_question_word__WEBPACK_IMPORTED_MODULE_7__.generateQuestionWord)(randomAnswer);
    const questionText = (0,_components_generate_question_text__WEBPACK_IMPORTED_MODULE_8__.generateQuestionText)(randomQuestion);
    const questionMistake = (0,_components_generate_question_mistake__WEBPACK_IMPORTED_MODULE_9__.generateQuestionMistake)(maxAttempts);
    const questionKey = (0,_components_generate_keybord__WEBPACK_IMPORTED_MODULE_10__.generateKeyboard)(_keys__WEBPACK_IMPORTED_MODULE_0__["default"], handleKeyClick);
    question.append(questionWord);
    question.append(questionText);
    question.append(questionMistake);
    question.append(questionKey);
    main.append(hangman);
    main.append(question);
    body.append(header);
    body.append(main);
    clearInterval(timerModal);
    clearInterval(timerReset);
  };
  generateHtml();
  document.addEventListener("keydown", handleKeyPress);
  function handleKeyClick(event) {
    const clickedLetter = event.currentTarget.dataset.letter;
    if (clickedLetter) {
      updateDisplay(clickedLetter);
    }
  }
  function handleKeyPress(event) {
    const key = event.code;
    const pressetKey = _keys__WEBPACK_IMPORTED_MODULE_0__["default"].find(k => k.code === key);
    if (attemptsCounter >= maxAttempts) {
      return;
    }
    if (pressetKey) {
      updateDisplay(pressetKey.value);
    }
  }
  function updateDisplay(clickedLetter) {
    if (secretWord.includes(clickedLetter)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === clickedLetter) {
          guessedLetters[i] = clickedLetter;
        }
      }
      (0,_helpers_update_word_display__WEBPACK_IMPORTED_MODULE_12__.updateWordDisplay)(guessedLetters);
    } else {
      attemptsCounter++;
      (0,_helpers_update_hangman_display__WEBPACK_IMPORTED_MODULE_11__.updateHangmanDisplay)(attemptsCounter, clickedLetter);
    }
    checkGameEnd();
  }
  function closeModalAndNewGame() {
    const modal = document.querySelector(".modal");
    modal.classList.add("hide");
    modal.classList.remove("show");
    body.classList.remove("body__hidden");
    resetGame();
  }
  function checkGameEnd() {
    const areEqual = JSON.stringify(secretWord.split("")) === JSON.stringify(guessedLetters);
    if (attemptsCounter === maxAttempts) {
      const modal = (0,_components_generate_modal__WEBPACK_IMPORTED_MODULE_13__.generateModal)(secretWord, false, closeModalAndNewGame);
      openModal(modal);
    }
    if (areEqual) {
      const modal = (0,_components_generate_modal__WEBPACK_IMPORTED_MODULE_13__.generateModal)(secretWord, true, closeModalAndNewGame);
      openModal(modal);
    }
  }
  function openModal(modal) {
    timerModal = setTimeout(() => {
      body.append(modal);
      body.classList.add("body__hidden");
    }, 300);
  }
  function resetGame() {
    timerReset = setTimeout(() => {
      body.innerHTML = "";
      attemptsCounter = 0;
      guessedLetters = [];
      secretWord = "";
      generateHtml();
    }, 300);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/js/components/generate-hangman.js":
/*!***********************************************!*\
  !*** ./src/js/components/generate-hangman.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHangman: () => (/* binding */ generateHangman)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateHangman = () => {
  const hangman = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "hangman");
  const hangmanCrossbar = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "hangman__crossbar");
  const gallowsPath = __webpack_require__(/*! ../../image/gallows.svg */ "./src/image/gallows.svg");
  const crossbarImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", "", gallowsPath, "gallows");
  hangmanCrossbar.append(crossbarImgElem);
  const hangmanWrapper = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "hangman__wrapper");
  const hangmanHead = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "hangman__head");
  const headPath = __webpack_require__(/*! ../../image/head.svg */ "./src/image/head.svg");
  const headImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", ["hidden"], headPath, "head", null, "head");
  hangmanHead.append(headImgElem);
  const hangmanBody = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "hangman__body");
  const handOnePath = __webpack_require__(/*! ../../image/hand-one.svg */ "./src/image/hand-one.svg");
  const handOneImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", ["hidden"], handOnePath, "hand-one", null, "hand-one");
  const bodyPath = __webpack_require__(/*! ../../image/body.svg */ "./src/image/body.svg");
  const bodyImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", ["hidden"], bodyPath, "body", null, "body");
  const handTwoPath = __webpack_require__(/*! ../../image/hand-two.svg */ "./src/image/hand-two.svg");
  const handTwoImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", ["hidden"], handTwoPath, "hand-two", null, "hand-two");
  hangmanBody.append(handOneImgElem);
  hangmanBody.append(bodyImgElem);
  hangmanBody.append(handTwoImgElem);
  const hangmanLeg = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "hangman__leg");
  const legOnePath = __webpack_require__(/*! ../../image/leg-one.svg */ "./src/image/leg-one.svg");
  const legOneImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", ["hidden"], legOnePath, "leg-one", null, "leg-one");
  const legTwoPath = __webpack_require__(/*! ../../image/leg-two.svg */ "./src/image/leg-two.svg");
  const legTwoImgElem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", ["hidden"], legTwoPath, "leg-two", null, "leg-two");
  hangmanLeg.append(legOneImgElem);
  hangmanLeg.append(legTwoImgElem);
  hangmanWrapper.append(hangmanHead);
  hangmanWrapper.append(hangmanBody);
  hangmanWrapper.append(hangmanLeg);
  hangman.append(hangmanCrossbar);
  hangman.append(hangmanWrapper);
  return hangman;
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
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateHeader = () => {
  const header = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("header", "header");
  const headerTitle = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1", "header__title", null, null, "Hangman Game");
  header.append(headerTitle);
  return header;
};

/***/ }),

/***/ "./src/js/components/generate-keybord.js":
/*!***********************************************!*\
  !*** ./src/js/components/generate-keybord.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateKeyboard: () => (/* binding */ generateKeyboard)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateKeyboard = (keys, handleKeyClick) => {
  const questionKey = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "question__key");
  const questionKeyWrapper = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "key__wrapper");
  const keyItems = keys.map(item => {
    const keyItem = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button", "key__item");
    keyItem.dataset.letter = item.value;
    keyItem.addEventListener("click", handleKeyClick);
    const keyLetter = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", "key__letter", null, null, item.value.toUpperCase());
    keyItem.append(keyLetter);
    return keyItem;
  });
  questionKeyWrapper.append(...keyItems);
  questionKey.append(questionKeyWrapper);
  return questionKey;
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
const generateMain = () => {
  const main = document.createElement("main");
  main.classList.add("app");
  return main;
};

/***/ }),

/***/ "./src/js/components/generate-modal.js":
/*!*********************************************!*\
  !*** ./src/js/components/generate-modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateModal: () => (/* binding */ generateModal)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateModal = function (secretWord) {
  let win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let closeModalAndNewGame = arguments.length > 2 ? arguments[2] : undefined;
  const modal = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", ["modal", "modal__show"]);
  const modalContent = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "modal__content");
  const textContent = win ? "Вы победили" : "Вы проиграли";
  const modalTitle = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h2", "modal__title", null, null, textContent);
  modalContent.append(modalTitle);
  const modalImage = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "modal__image");
  const path = win ? __webpack_require__(/*! ../../image/gif/quby-cute.gif */ "./src/image/gif/quby-cute.gif") : __webpack_require__(/*! ../../image/gif/cute-dog.gif */ "./src/image/gif/cute-dog.gif");
  const alt = win ? "quby-cute" : "cute-dog";
  const img = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("img", "modal__image", path, alt);
  modalImage.append(img);
  modalContent.append(modalImage);
  const modalText = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", "modal__text");
  const span = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", null, null, null, "Секретное слово: ");
  modalText.append(span);
  const spanSecretWord = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", null, null, null, secretWord.toUpperCase(), "secret-word");
  modalText.append(spanSecretWord);
  modalContent.append(modalText);
  const button = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button", "modal__button", null, null, "Играть еще раз");
  button.addEventListener("click", closeModalAndNewGame);
  modalContent.append(button);
  modal.append(modalContent);
  return modal;
};

/***/ }),

/***/ "./src/js/components/generate-question-mistake.js":
/*!********************************************************!*\
  !*** ./src/js/components/generate-question-mistake.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQuestionMistake: () => (/* binding */ generateQuestionMistake)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateQuestionMistake = attempts => {
  const questionMistake = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "question__mistake");
  const questionText = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", "question__attempts", null, null, "Неправильные попытки");
  questionMistake.append(questionText);
  const questionCounter = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "question__counter");
  const attemptsCounter = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", null, null, null, "0", "attemptsCounter");
  questionCounter.append(attemptsCounter);
  const textNode = document.createTextNode("/");
  questionCounter.append(textNode);
  const maxAttempts = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", null, null, null, `${attempts}`);
  questionCounter.append(maxAttempts);
  questionMistake.append(questionCounter);
  return questionMistake;
};

/***/ }),

/***/ "./src/js/components/generate-question-text.js":
/*!*****************************************************!*\
  !*** ./src/js/components/generate-question-text.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQuestionText: () => (/* binding */ generateQuestionText)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateQuestionText = question => {
  const questionText = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p", "question__text");
  questionText.innerHTML = `<strong><i>Подсказка</i></strong>: ${question}`;
  return questionText;
};

/***/ }),

/***/ "./src/js/components/generate-question-word.js":
/*!*****************************************************!*\
  !*** ./src/js/components/generate-question-word.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQuestionWord: () => (/* binding */ generateQuestionWord)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateQuestionWord = answer => {
  const questionWordContainer = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "question__word");
  const questionWordWrapper = answer.toUpperCase().split("").map(item => {
    const questionWord = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "question__wrapper");
    const questionLetter = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", ["question__letter"], null, null, null);
    const questionLine = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("span", ["question__line"]);
    questionWord.append(questionLetter);
    questionWord.append(questionLine);
    return questionWord;
  });
  questionWordContainer.append(...questionWordWrapper);
  return questionWordContainer;
};

/***/ }),

/***/ "./src/js/components/generate-question.js":
/*!************************************************!*\
  !*** ./src/js/components/generate-question.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQuestion: () => (/* binding */ generateQuestion)
/* harmony export */ });
/* harmony import */ var _helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-html-element */ "./src/js/helpers/create-html-element.js");

const generateQuestion = () => {
  const question = (0,_helpers_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("div", "question");
  return question;
};

/***/ }),

/***/ "./src/js/helpers/create-html-element.js":
/*!***********************************************!*\
  !*** ./src/js/helpers/create-html-element.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
const createHtmlElement = function (elem) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let description = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let text = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  const htmlElement = document.createElement(elem);
  if (className && typeof className === "string") {
    htmlElement.classList.add(className);
  }
  if (Array.isArray(className)) {
    className.forEach(el => {
      htmlElement.classList.add(el);
    });
  }
  if (text) {
    htmlElement.textContent = text;
  }
  if (path && description) {
    htmlElement.src = path;
    htmlElement.alt = description;
  }
  if (id) {
    htmlElement.id = id;
  }
  return htmlElement;
};

/***/ }),

/***/ "./src/js/helpers/get-random-question.js":
/*!***********************************************!*\
  !*** ./src/js/helpers/get-random-question.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomQuestion: () => (/* binding */ getRandomQuestion)
/* harmony export */ });
const getRandomQuestion = function (questions) {
  let usedQuestions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (usedQuestions.length === questions.length) {
    usedQuestions.length = 0;
  }
  const remainingQuestions = questions.filter(question => !usedQuestions.includes(question));
  const availableQuestions = remainingQuestions.length > 0 ? remainingQuestions : questions;
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];
  usedQuestions.push(randomQuestion);
  return randomQuestion;
};

/***/ }),

/***/ "./src/js/helpers/update-hangman-display.js":
/*!**************************************************!*\
  !*** ./src/js/helpers/update-hangman-display.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateHangmanDisplay: () => (/* binding */ updateHangmanDisplay)
/* harmony export */ });
const updateHangmanDisplay = (counter, clickedLetter) => {
  const head = document.querySelector("#head");
  const body = document.querySelector("#body");
  const handOne = document.querySelector("#hand-one");
  const handTow = document.querySelector("#hand-two");
  const legOne = document.querySelector("#leg-one");
  const legTow = document.querySelector("#leg-two");
  const attemptsCounter = document.querySelector("#attemptsCounter");
  const keys = document.querySelectorAll(".key__item");
  attemptsCounter.textContent = `${counter}`;
  keys.forEach((key, index) => {
    const letter = key.getAttribute("data-letter");
    if (letter === clickedLetter) {
      keys[index].classList.add("key__item_disabled");
      keys[index].disabled = true;
    }
  });
  switch (counter) {
    case 1:
      head.classList.remove("hidden");
      head.classList.add("show", "fade");
      return;
    case 2:
      body.classList.remove("hidden");
      body.classList.add("show", "fade");
      return;
    case 3:
      handOne.classList.remove("hidden");
      handOne.classList.add("show", "fade");
      return;
    case 4:
      handTow.classList.remove("hidden");
      handTow.classList.add("show", "fade");
      return;
    case 5:
      legOne.classList.remove("hidden");
      legOne.classList.add("show", "fade");
      return;
    case 6:
      legTow.classList.remove("hidden");
      legTow.classList.add("show", "fade");
      break;
    default:
      return;
  }
};

/***/ }),

/***/ "./src/js/helpers/update-word-display.js":
/*!***********************************************!*\
  !*** ./src/js/helpers/update-word-display.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWordDisplay: () => (/* binding */ updateWordDisplay)
/* harmony export */ });
const updateWordDisplay = guessedLetters => {
  const letters = document.querySelectorAll(".question__letter");
  const lines = document.querySelectorAll(".question__line");
  const keys = document.querySelectorAll(".key__item");
  guessedLetters.forEach((letter, index) => {
    if (letter !== "_") {
      letters[index].textContent = letter.toUpperCase();
      lines[index].classList.add("question__line_delete");
    }
  });
  keys.forEach((key, index) => {
    const letter = key.getAttribute("data-letter");
    if (guessedLetters.includes(letter)) {
      keys[index].classList.add("key__item_disabled");
      keys[index].disabled = true;
    }
  });
};

/***/ }),

/***/ "./src/js/keys.js":
/*!************************!*\
  !*** ./src/js/keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keys = [{
  code: "Backquote",
  value: "ё"
}, {
  code: "KeyQ",
  value: "й"
}, {
  code: "KeyW",
  value: "ц"
}, {
  code: "KeyE",
  value: "у"
}, {
  code: "KeyR",
  value: "к"
}, {
  code: "KeyT",
  value: "е"
}, {
  code: "KeyY",
  value: "н"
}, {
  code: "KeyU",
  value: "г"
}, {
  code: "KeyI",
  value: "ш"
}, {
  code: "KeyO",
  value: "щ"
}, {
  code: "KeyP",
  value: "з"
}, {
  code: "BracketLeft",
  value: "х"
}, {
  code: "BracketRight",
  value: "ъ"
}, {
  code: "KeyA",
  value: "ф"
}, {
  code: "KeyS",
  value: "ы"
}, {
  code: "KeyD",
  value: "в"
}, {
  code: "KeyF",
  value: "а"
}, {
  code: "KeyG",
  value: "п"
}, {
  code: "KeyH",
  value: "р"
}, {
  code: "KeyJ",
  value: "о"
}, {
  code: "KeyK",
  value: "л"
}, {
  code: "KeyL",
  value: "д"
}, {
  code: "Semicolon",
  value: "ж"
}, {
  code: "Quote",
  value: "э"
}, {
  code: "KeyZ",
  value: "я"
}, {
  code: "KeyX",
  value: "ч"
}, {
  code: "KeyC",
  value: "с"
}, {
  code: "KeyV",
  value: "м"
}, {
  code: "KeyB",
  value: "и"
}, {
  code: "KeyN",
  value: "т"
}, {
  code: "KeyM",
  value: "ь"
}, {
  code: "Comma",
  value: "б"
}, {
  code: "Period",
  value: "ю"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ "./src/js/questions.js":
/*!*****************************!*\
  !*** ./src/js/questions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const questions = [{
  question: "Какое блюдо является национальным блюдом Италии?",
  answer: "Пицца"
}, {
  question: "В какой стране готовят блюдо под названием суши?",
  answer: "Япония"
}, {
  question: "Какое блюдо является традиционным для испанской кухни?",
  answer: "Паэлья"
}, {
  question: "Какое место считается столицей гастрономии Франции?",
  answer: "Лион"
}, {
  question: "Какой город называют 'городом влюбленных'?",
  answer: "Париж"
}, {
  question: "В какой стране находится Мачу-Пикчу?",
  answer: "Перу"
}, {
  question: "Какой вид транспорта популярен в Венеции?",
  answer: "Гондола"
}, {
  question: "Как называется традиционное корейское блюдо из квашеной капусты?",
  answer: "Кимчи"
}, {
  question: "В какой стране производится известное вино Шампанское?",
  answer: "Франция"
}, {
  question: "Какое блюдо является традиционным для российской кухни?",
  answer: "Борщ"
}, {
  question: "Как называется национальное блюдо Японии, представляющее собой поджаренный рис с овощами и мясом?",
  answer: "Ёсинабэ"
}, {
  question: "Какое блюдо является основным итальянским десертом, представляющим собой слоеное тесто с различными начинками?",
  answer: "Тирамису"
}, {
  question: "Как называется национальное блюдо Турции, состоящее из слоеных тестовых листов, начиненных орехами и медом?",
  answer: "Пахлава"
}, {
  question: "В каком городе находится знаменитая Эйфелева башня?",
  answer: "Париж"
}, {
  question: "Какое озеро считается самым глубоким в мире?",
  answer: "Байкал"
}, {
  question: "Какая страна является родиной сыра 'фета'?",
  answer: "Греция"
}, {
  question: "Какой город славится своими каналами и является 'городом водных дорог'?",
  answer: "Венеция"
}, {
  question: "Какое место считается столицей красного вина?",
  answer: "Бордо"
}, {
  question: "Какая страна известна своими бананами, кофе и амазонскими джунглями?",
  answer: "Бразилия"
}, {
  question: "Как называется традиционное корейское блюдо из лапши, приготовленной на пару?",
  answer: "Чапчэ"
}, {
  question: "В какой стране производится известное вино Мерло?",
  answer: "Франция"
}, {
  question: "Какое животное является национальным символом Австралии?",
  answer: "Кенгуру"
}, {
  question: "Какое море считается самым соленым в мире?",
  answer: "Красное"
}, {
  question: "Как называется самая большая в мире песчаная пустыня?",
  answer: "Сахара"
}, {
  question: "Какой остров является самым большим в мире?",
  answer: "Гренландия"
}, {
  question: "Какая река является самой длинной в мире?",
  answer: "Амазонка"
}, {
  question: "В какой стране расположены Пирамиды Гизы?",
  answer: "Египет"
}, {
  question: "Кто является национальным животным Шотландии?",
  answer: "Единорог"
}, {
  question: "Вкус какого фрукта преобладает в ликере 'Куантро'?",
  answer: "Апельсин"
}, {
  question: "Как называется маленький пластмассовый кусочек на конце шнурка?",
  answer: "Аглет"
}, {
  question: "В какой стране находится город Прага?",
  answer: "Чехия"
}, {
  question: "Какая самая маленькая планета в нашей солнечной системе?",
  answer: "Меркурий"
}, {
  question: "Самая холодная планета солнечной системы?",
  answer: "Уран"
}, {
  question: "Какая самая близкая планета к солнцу?",
  answer: "Меркурий"
}, {
  question: "Каким был первый полнометражный анимационный фильм?",
  answer: "Белоснежка"
}, {
  question: "Какие животные воспитывали Маугли в книге 'Книга Джунглей'?",
  answer: "Волки"
}, {
  question: "Самый кассовый фильм Джеймса Кэмерона?",
  answer: "Аватар"
}, {
  question: "Национальный вид спорта Канады?",
  answer: "Лакросс"
}, {
  question: "В какой стране были проведены первые Олимпийские игры?",
  answer: "Греция"
}, {
  question: "Какая единственная страна принимала участие во всех чемпионатах мира по футболу?",
  answer: "Бразилия"
}, {
  question: "Что изображено на олимпийском флаге?",
  answer: "Кольца"
}, {
  question: "Как звали первого человека побывавшего в космосе?",
  answer: "Юрий"
}, {
  question: "Какая страна является самой маленькой в мире?",
  answer: "Ватикан"
}, {
  question: "Символом какого ресторана является клоун?",
  answer: "Макдональдс"
}, {
  question: "Какое стихийное бедствие измеряется по шкале Рихтера?",
  answer: "Землетрясение"
}, {
  question: "Из какого вещества состоят ногти?",
  answer: "Кератин"
}, {
  question: "Как называются животные, которые питаются только растениями?",
  answer: "Травоядные"
}, {
  question: "Что за животное косатка?",
  answer: "Кит"
}, {
  question: "Столица Австралии?",
  answer: "Канберра"
}, {
  question: "Самая высокая гора Европы?",
  answer: "Эльбрус"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questions);

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-Regular.woff2 */ "./src/fonts/Inter-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-Regular.woff */ "./src/fonts/Inter-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-SemiBold.woff2 */ "./src/fonts/Inter-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-SemiBold.woff */ "./src/fonts/Inter-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-SemiBoldItalic.woff2 */ "./src/fonts/Inter-SemiBoldItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Inter-SemiBoldItalic.woff */ "./src/fonts/Inter-SemiBoldItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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

@font-face {
  font-family: "Inter";
  src: local("Inter Regular"), local("Inter-Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Inter";
  src: local("Inter Semi Bold"), local("Inter-SemiBold"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Inter";
  src: local("Inter Semi Bold Italic"), local("Inter-SemiBoldItalic"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff");
  font-weight: 600;
  font-style: italic;
}
.hidden {
  opacity: 0;
}

.show {
  opacity: 1;
}

.fade {
  animation-name: fade;
  animation-duration: 0.9s;
}

@keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
html {
  font-size: 10px;
}

body {
  font-size: 1.6rem;
  font-family: "Inter", Verdana, sans-serif;
}

.body__hidden {
  overflow: hidden;
}

.header {
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 80px;
}
@media (max-width: 1439px) {
  .header {
    margin-top: 60px;
  }
}
@media (max-width: 576px) {
  .header {
    margin-top: 40px;
  }
}
.header__title {
  text-align: center;
  font-size: 4.5rem;
  font-style: italic;
  color: #f2b400;
}
@media (max-width: 576px) {
  .header__title {
    font-size: 3.5rem;
  }
}

.app {
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 10px;
}
@media (max-width: 1439px) {
  .app {
    max-width: 1140px;
    margin-top: 100px;
    gap: 25px;
  }
}
@media (max-width: 992px) {
  .app {
    max-width: 840px;
    margin-top: 50px;
    flex-direction: column;
    gap: 50px;
  }
}

.hangman {
  min-width: 600px;
  position: relative;
  display: flex;
  align-self: flex-start;
}
@media (max-width: 1439px) {
  .hangman {
    min-width: 400px;
  }
}
@media (max-width: 992px) {
  .hangman {
    align-self: center;
  }
}
@media (max-width: 576px) {
  .hangman {
    align-items: center;
    min-width: 320px;
  }
}
.hangman__crossbar {
  display: flex;
  justify-content: center;
}
.hangman__crossbar img {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  transition: all 0.5s ease-out;
}
@media (max-width: 576px) {
  .hangman__crossbar img {
    width: 300px;
    height: 450px;
  }
}
.hangman__wrapper {
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 149px;
  right: 197px;
}
@media (max-width: 1439px) {
  .hangman__wrapper {
    top: 149px;
    right: -2px;
  }
}
@media (max-width: 576px) {
  .hangman__wrapper {
    top: 115px;
    right: 25px;
    width: 100px;
  }
}
.hangman__head {
  display: flex;
  justify-content: center;
}
.hangman__head img {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
@media (max-width: 576px) {
  .hangman__head img {
    width: 70%;
  }
}
.hangman__body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hangman__body img {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
@media (max-width: 576px) {
  .hangman__body img {
    width: 50%;
  }
  .hangman__body img:nth-child(2) {
    width: 5px;
  }
}
.hangman__leg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hangman__leg img {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
@media (max-width: 576px) {
  .hangman__leg img {
    width: 50%;
  }
}

.question {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 600;
}
@media (max-width: 1439px) {
  .question {
    gap: 25px;
  }
}
@media (max-width: 992px) {
  .question {
    font-size: 2rem;
    gap: 25px;
  }
}
@media (max-width: 576px) {
  .question {
    font-size: 1.8rem;
  }
}
.question__word {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #006262;
}
.question__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.question__letter {
  margin: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.question__letter_hidden {
  visibility: hidden;
}
.question__line {
  height: 3px;
  width: 80%;
  background: #006262;
  opacity: 1;
}
.question__line_delete {
  opacity: 0;
}
.question__text {
  margin-top: 35px;
  line-height: 50px;
  text-align: center;
  font-weight: 400;
}
@media (max-width: 1439px) {
  .question__text {
    margin-top: 0px;
  }
}
@media (max-width: 576px) {
  .question__text {
    line-height: 40px;
  }
}
.question__mistake {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.question__counter {
  color: #eb4c42;
  margin-left: 15px;
}
.question__key {
  margin-top: 50px;
}
@media (max-width: 1439px) {
  .question__key {
    margin-top: 20px;
  }
}

.key__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.key__item {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background: #006262;
  color: #fff;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
@media (hover: hover) {
  .key__item:hover {
    background: rgba(0, 98, 98, 0.5);
  }
}
@media (max-width: 576px) {
  .key__item {
    width: 50px;
    height: 50px;
    margin: 3px;
  }
}
.key__item_disabled {
  background: rgba(0, 98, 98, 0.5);
  cursor: default;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal__content {
  width: 600px;
  position: absolute;
  background: #fff;
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
@media (max-width: 768px) {
  .modal__content {
    max-width: 400px;
  }
}
@media (max-width: 576px) {
  .modal__content {
    max-width: 250px;
  }
}
.modal__title {
  font-size: 3.4rem;
}
.modal__image {
  margin-top: 25px;
}
.modal__text {
  margin-top: 25px;
  font-size: 2.2rem;
}
.modal #secret-word {
  font-weight: 600;
  color: #006262;
}
.modal__button {
  margin-top: 25px;
  padding: 15px 0 15px 0;
  border: none;
  background: #006262;
  font-size: 2rem;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
}
@media (hover: hover) {
  .modal__button:hover {
    background: rgba(0, 98, 98, 0.5);
  }
}
.modal__show {
  display: block;
}
.modal__hide {
  display: none;
}
.modal__fade {
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
}`, "",{"version":3,"sources":["webpack://./src/sass/vendors/_normalize.scss","webpack://./src/index.scss","webpack://./src/sass/base/_fonts.scss","webpack://./src/sass/components/animate/_animate.scss","webpack://./src/sass/_main.scss","webpack://./src/sass/components/header/_header.scss","webpack://./src/sass/components/app/_app.scss","webpack://./src/sass/components/hangman/_hangman.scss","webpack://./src/sass/components/question/_question.scss","webpack://./src/sass/abstracts/_variables.scss","webpack://./src/sass/components/modal/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  // margin: 0.67em 0;\n  margin: 0;\n}\n\nh2,\nh3,\nh4,\nul,\np {\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0;\n}\n\nh2,\nh3,\nh4,\nul,\np {\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"Inter\";\n  src: local(\"Inter Regular\"), local(\"Inter-Regular\"), url(\"fonts/Inter-Regular.woff2\") format(\"woff2\"), url(\"fonts/Inter-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Inter\";\n  src: local(\"Inter Semi Bold\"), local(\"Inter-SemiBold\"), url(\"fonts/Inter-SemiBold.woff2\") format(\"woff2\"), url(\"fonts/Inter-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Inter\";\n  src: local(\"Inter Semi Bold Italic\"), local(\"Inter-SemiBoldItalic\"), url(\"fonts/Inter-SemiBoldItalic.woff2\") format(\"woff2\"), url(\"fonts/Inter-SemiBoldItalic.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: italic;\n}\n.hidden {\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n\n.fade {\n  animation-name: fade;\n  animation-duration: 0.9s;\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Inter\", Verdana, sans-serif;\n}\n\n.body__hidden {\n  overflow: hidden;\n}\n\n.header {\n  max-width: 1440px;\n  margin: 0 auto;\n  margin-top: 80px;\n}\n@media (max-width: 1439px) {\n  .header {\n    margin-top: 60px;\n  }\n}\n@media (max-width: 576px) {\n  .header {\n    margin-top: 40px;\n  }\n}\n.header__title {\n  text-align: center;\n  font-size: 4.5rem;\n  font-style: italic;\n  color: #f2b400;\n}\n@media (max-width: 576px) {\n  .header__title {\n    font-size: 3.5rem;\n  }\n}\n\n.app {\n  display: flex;\n  align-items: center;\n  max-width: 1440px;\n  margin: 0 auto;\n  margin-top: 150px;\n  padding: 10px;\n}\n@media (max-width: 1439px) {\n  .app {\n    max-width: 1140px;\n    margin-top: 100px;\n    gap: 25px;\n  }\n}\n@media (max-width: 992px) {\n  .app {\n    max-width: 840px;\n    margin-top: 50px;\n    flex-direction: column;\n    gap: 50px;\n  }\n}\n\n.hangman {\n  min-width: 600px;\n  position: relative;\n  display: flex;\n  align-self: flex-start;\n}\n@media (max-width: 1439px) {\n  .hangman {\n    min-width: 400px;\n  }\n}\n@media (max-width: 992px) {\n  .hangman {\n    align-self: center;\n  }\n}\n@media (max-width: 576px) {\n  .hangman {\n    align-items: center;\n    min-width: 320px;\n  }\n}\n.hangman__crossbar {\n  display: flex;\n  justify-content: center;\n}\n.hangman__crossbar img {\n  width: 100%;\n  object-fit: contain;\n  transition: all 0.5s ease-out;\n}\n@media (max-width: 576px) {\n  .hangman__crossbar img {\n    width: 300px;\n    height: 450px;\n  }\n}\n.hangman__wrapper {\n  display: flex;\n  width: 200px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 149px;\n  right: 197px;\n}\n@media (max-width: 1439px) {\n  .hangman__wrapper {\n    top: 149px;\n    right: -2px;\n  }\n}\n@media (max-width: 576px) {\n  .hangman__wrapper {\n    top: 115px;\n    right: 25px;\n    width: 100px;\n  }\n}\n.hangman__head {\n  display: flex;\n  justify-content: center;\n}\n.hangman__head img {\n  width: 100%;\n  object-fit: contain;\n}\n@media (max-width: 576px) {\n  .hangman__head img {\n    width: 70%;\n  }\n}\n.hangman__body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hangman__body img {\n  width: 100%;\n  object-fit: contain;\n}\n@media (max-width: 576px) {\n  .hangman__body img {\n    width: 50%;\n  }\n  .hangman__body img:nth-child(2) {\n    width: 5px;\n  }\n}\n.hangman__leg {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hangman__leg img {\n  width: 100%;\n  object-fit: contain;\n}\n@media (max-width: 576px) {\n  .hangman__leg img {\n    width: 50%;\n  }\n}\n\n.question {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n@media (max-width: 1439px) {\n  .question {\n    gap: 25px;\n  }\n}\n@media (max-width: 992px) {\n  .question {\n    font-size: 2rem;\n    gap: 25px;\n  }\n}\n@media (max-width: 576px) {\n  .question {\n    font-size: 1.8rem;\n  }\n}\n.question__word {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  color: #006262;\n}\n.question__wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.question__letter {\n  margin: 8px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.question__letter_hidden {\n  visibility: hidden;\n}\n.question__line {\n  height: 3px;\n  width: 80%;\n  background: #006262;\n  opacity: 1;\n}\n.question__line_delete {\n  opacity: 0;\n}\n.question__text {\n  margin-top: 35px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 400;\n}\n@media (max-width: 1439px) {\n  .question__text {\n    margin-top: 0px;\n  }\n}\n@media (max-width: 576px) {\n  .question__text {\n    line-height: 40px;\n  }\n}\n.question__mistake {\n  margin-top: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.question__counter {\n  color: #eb4c42;\n  margin-left: 15px;\n}\n.question__key {\n  margin-top: 50px;\n}\n@media (max-width: 1439px) {\n  .question__key {\n    margin-top: 20px;\n  }\n}\n\n.key__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.key__item {\n  width: 60px;\n  height: 60px;\n  border: none;\n  border-radius: 10px;\n  background: #006262;\n  color: #fff;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .key__item:hover {\n    background: rgba(0, 98, 98, 0.5);\n  }\n}\n@media (max-width: 576px) {\n  .key__item {\n    width: 50px;\n    height: 50px;\n    margin: 3px;\n  }\n}\n.key__item_disabled {\n  background: rgba(0, 98, 98, 0.5);\n  cursor: default;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal__content {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 15px;\n  padding: 35px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .modal__content {\n    max-width: 400px;\n  }\n}\n@media (max-width: 576px) {\n  .modal__content {\n    max-width: 250px;\n  }\n}\n.modal__title {\n  font-size: 3.4rem;\n}\n.modal__image {\n  margin-top: 25px;\n}\n.modal__text {\n  margin-top: 25px;\n  font-size: 2.2rem;\n}\n.modal #secret-word {\n  font-weight: 600;\n  color: #006262;\n}\n.modal__button {\n  margin-top: 25px;\n  padding: 15px 0 15px 0;\n  border: none;\n  background: #006262;\n  font-size: 2rem;\n  color: #fff;\n  border-radius: 15px;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .modal__button:hover {\n    background: rgba(0, 98, 98, 0.5);\n  }\n}\n.modal__show {\n  display: block;\n}\n.modal__hide {\n  display: none;\n}\n.modal__fade {\n  animation-name: modal__fade;\n  animation-duration: 0.4s;\n}\n@keyframes modal__fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}","@font-face {\r\n  font-family: 'Inter';\r\n  src: local('Inter Regular'), local('Inter-Regular'),\r\n    url('fonts/Inter-Regular.woff2') format('woff2'),\r\n    url('fonts/Inter-Regular.woff') format('woff');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Inter';\r\n  src: local('Inter Semi Bold'), local('Inter-SemiBold'),\r\n    url('fonts/Inter-SemiBold.woff2') format('woff2'),\r\n    url('fonts/Inter-SemiBold.woff') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Inter';\r\n  src: local('Inter Semi Bold Italic'), local('Inter-SemiBoldItalic'),\r\n    url('fonts/Inter-SemiBoldItalic.woff2') format('woff2'),\r\n    url('fonts/Inter-SemiBoldItalic.woff') format('woff');\r\n  font-weight: 600;\r\n  font-style: italic;\r\n}",".hidden {\r\n\topacity: 0;\r\n}\r\n\r\n.show {\r\n\topacity: 1;\r\n}\r\n\r\n.fade {\r\n\tanimation-name: fade;\r\n\tanimation-duration: 0.9s;\r\n}\r\n\r\n@keyframes fade {\r\n\tfrom {\r\n\t\topacity: 0.1;\r\n\t}\r\n\r\n\tto {\r\n\t\topacity: 1;\r\n\t}\r\n}","@import './vendors/normalize';\r\n@import './base/fonts';\r\n@import './abstracts/variables';\r\n@import './components/animate/animate';\r\n\r\nhtml {\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  font-size: 1.6rem;\r\n  font-family: 'Inter', Verdana, sans-serif;\r\n}\r\n\r\n.body__hidden {\r\n  overflow: hidden;\r\n}\r\n\r\n@import './components/header/header';\r\n@import './components/app/app';\r\n@import './components/hangman/hangman';\r\n@import './components/question/question';\r\n@import './components/modal/modal';",".header {\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  margin-top: 80px;\r\n\r\n  @media(max-width: $desktop) {\r\n    margin-top: 60px;\r\n  }\r\n\r\n  @media(max-width: $mobile) {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n    font-size: 4.5rem;\r\n    font-style: italic;\r\n    color: #f2b400;\r\n\r\n    @media(max-width: $mobile) {\r\n      font-size: 3.5rem;\r\n    }\r\n  }\r\n\r\n}",".app {\r\n  display: flex;\r\n  align-items: center;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  margin-top: 150px;\r\n  padding: 10px;\r\n\r\n  @media(max-width: $desktop) {\r\n    max-width: 1140px;\r\n    margin-top: 100px;\r\n    gap: 25px;\r\n  }\r\n\r\n  @media(max-width: $tablet) {\r\n    max-width: 840px;\r\n    margin-top: 50px;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n  }\r\n\r\n}",".hangman {\r\n  min-width: 600px;\r\n  position: relative;\r\n  display: flex;\r\n  align-self: flex-start;\r\n\r\n  @media(max-width: $desktop) {\r\n    min-width: 400px;\r\n  }\r\n\r\n  @media(max-width: $tablet) {\r\n    align-self: center;\r\n  }\r\n\r\n  @media(max-width: $mobile) {\r\n    align-items: center;\r\n    min-width: 320px;\r\n  }\r\n\r\n  &__crossbar {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    img {\r\n      width: 100%;\r\n      object-fit: contain;\r\n      transition: all .5s ease-out;\r\n\r\n      @media(max-width: $mobile) {\r\n        width: 300px;\r\n        height: 450px;\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    width: 200px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 149px;\r\n    right: 197px;\r\n\r\n    @media(max-width: $desktop) {\r\n      top: 149px;\r\n      right: -2px;\r\n    }\r\n\r\n    @media(max-width: $mobile) {\r\n      top: 115px;\r\n      right: 25px;\r\n      width: 100px;\r\n    }\r\n\r\n  }\r\n\r\n  &__head {\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    img {\r\n      width: 100%;\r\n      object-fit: contain;\r\n\r\n      @media(max-width: $mobile) {\r\n        width: 70%;\r\n      }\r\n\r\n    }\r\n\r\n  }\r\n\r\n  &__body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    img {\r\n      width: 100%;\r\n      object-fit: contain;\r\n\r\n      @media(max-width: $mobile) {\r\n        width: 50%;\r\n\r\n        &:nth-child(2) {\r\n          width: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__leg {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    img {\r\n      width: 100%;\r\n      object-fit: contain;\r\n\r\n\r\n      @media(max-width: $mobile) {\r\n        width: 50%;\r\n      }\r\n    }\r\n  }\r\n\r\n}",".question {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 2.2rem;\r\n  font-weight: 600;\r\n\r\n  @media(max-width: $desktop) {\r\n    gap: 25px;\r\n  }\r\n\r\n  @media(max-width: $tablet) {\r\n    font-size: 2rem;\r\n    gap: 25px;\r\n  }\r\n\r\n  @media(max-width: $mobile) {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  &__word {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    color: $key-bg-color;\r\n  }\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  &__letter {\r\n    margin: 8px;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    &_hidden {\r\n      visibility: hidden;\r\n    }\r\n  }\r\n\r\n  &__line {\r\n    height: 3px;\r\n    width: 80%;\r\n    background: $key-bg-color;\r\n    opacity: 1;\r\n\r\n    &_delete {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n  &__text {\r\n    margin-top: 35px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n\r\n    @media(max-width: $desktop) {\r\n      margin-top: 0px;\r\n    }\r\n\r\n    @media(max-width: $mobile) {\r\n      line-height: 40px;\r\n    }\r\n\r\n  }\r\n\r\n  &__mistake {\r\n    margin-top: 35px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n  }\r\n\r\n  &__counter {\r\n    color: $counter-color;\r\n    margin-left: 15px;\r\n  }\r\n\r\n  &__key {\r\n    margin-top: 50px;\r\n\r\n    @media(max-width: $desktop) {\r\n      margin-top: 20px;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.key {\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__item {\r\n    width: 60px;\r\n    height: 60px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    background: $key-bg-color;\r\n    color: $key-color;\r\n    margin: 8px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n    @media(hover: hover) {\r\n      &:hover {\r\n        background: $key-bg-hover;\r\n      }\r\n    }\r\n\r\n    @media(max-width: $mobile) {\r\n      width: 50px;\r\n      height: 50px;\r\n      margin: 3px;\r\n    }\r\n\r\n    &_disabled {\r\n      background: $key-bg-hover;\r\n      cursor: default;\r\n    }\r\n\r\n  }\r\n\r\n  &__letter {}\r\n}","$key-bg-color: #006262;\r\n$key-bg-hover: rgba(0, 98, 98, .5);\r\n$key-color: #fff;\r\n$counter-color: #eb4c42;\r\n\r\n//breakpoints\r\n$desktop: 1439px;\r\n$tablet: 992px;\r\n$tablet-small: 768px;\r\n$mobile: 576px;\r\n$mobile-small: 390px;",".modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1050;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: rgba($color: #000, $alpha: .5);\r\n\r\n\t&__content {\r\n\t\twidth: 600px;\r\n\t\tposition: absolute;\r\n\t\tbackground: #fff;\r\n\t\tleft: 50%;\r\n\t\ttop: 50%;\r\n\t\ttransform: translate(-50%, -50%);\r\n\t\tborder-radius: 15px;\r\n\t\tpadding: 35px;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tflex-direction: column;\r\n\t\ttext-align: center;\r\n\r\n\t\t@media(max-width: $tablet-small) {\r\n\t\t\tmax-width: 400px;\r\n\t\t}\r\n\r\n\t\t@media(max-width: $mobile) {\r\n\t\t\tmax-width: 250px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__title {\r\n\t\tfont-size: 3.4rem;\r\n\t}\r\n\r\n\t&__image {\r\n\t\tmargin-top: 25px;\r\n\r\n\t}\r\n\r\n\t&__text {\r\n\t\tmargin-top: 25px;\r\n\t\tfont-size: 2.2rem;\r\n\t}\r\n\r\n\t#secret-word {\r\n\t\tfont-weight: 600;\r\n\t\tcolor: $key-bg-color;\r\n\t}\r\n\r\n\t&__button {\r\n\t\tmargin-top: 25px;\r\n\t\tpadding: 15px 0 15px 0;\r\n\t\tborder: none;\r\n\t\tbackground: $key-bg-color;\r\n\t\tfont-size: 2.0rem;\r\n\t\tcolor: #fff;\r\n\t\tborder-radius: 15px;\r\n\t\tcursor: pointer;\r\n\r\n\t\t@media(hover: hover) {\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground: $key-bg-hover;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t&__show {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&__hide {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t&__fade {\r\n\t\tanimation-name: modal__fade;\r\n\t\tanimation-duration: 0.4s;\r\n\t}\r\n\r\n\t@keyframes modal__fade {\r\n\t\tfrom {\r\n\t\t\topacity: 0.1;\r\n\t\t}\r\n\r\n\t\tto {\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/favicon/apple-touch-icon.png */ "./src/image/favicon/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/favicon/favicon-32x32.png */ "./src/image/favicon/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/favicon/favicon-16x16.png */ "./src/image/favicon/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/favicon/site.webmanifest */ "./src/image/favicon/site.webmanifest"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/favicon/safari-pinned-tab.svg */ "./src/image/favicon/safari-pinned-tab.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <link\r\n      rel=\"apple-touch-icon\"\r\n      sizes=\"180x180\"\r\n      href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n    />\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"32x32\"\r\n      href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n    />\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"16x16\"\r\n      href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n    />\r\n    <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" />\r\n    <link\r\n      rel=\"mask-icon\"\r\n      href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n      color=\"#5bbad5\"\r\n    />\r\n    <meta name=\"msapplication-TileColor\" content=\"#da532c\" />\r\n    <meta name=\"theme-color\" content=\"#ffffff\" />\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Hangman Game</title>\r\n  </head>\r\n  <body></body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

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

/***/ }),

/***/ "./src/image/body.svg":
/*!****************************!*\
  !*** ./src/image/body.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/body..svg";

/***/ }),

/***/ "./src/image/favicon/apple-touch-icon.png":
/*!************************************************!*\
  !*** ./src/image/favicon/apple-touch-icon.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/apple-touch-icon..png";

/***/ }),

/***/ "./src/image/favicon/favicon-16x16.png":
/*!*********************************************!*\
  !*** ./src/image/favicon/favicon-16x16.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon-16x16..png";

/***/ }),

/***/ "./src/image/favicon/favicon-32x32.png":
/*!*********************************************!*\
  !*** ./src/image/favicon/favicon-32x32.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon-32x32..png";

/***/ }),

/***/ "./src/image/favicon/safari-pinned-tab.svg":
/*!*************************************************!*\
  !*** ./src/image/favicon/safari-pinned-tab.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/safari-pinned-tab..svg";

/***/ }),

/***/ "./src/image/gallows.svg":
/*!*******************************!*\
  !*** ./src/image/gallows.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gallows..svg";

/***/ }),

/***/ "./src/image/gif/cute-dog.gif":
/*!************************************!*\
  !*** ./src/image/gif/cute-dog.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cute-dog..gif";

/***/ }),

/***/ "./src/image/gif/quby-cute.gif":
/*!*************************************!*\
  !*** ./src/image/gif/quby-cute.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/quby-cute..gif";

/***/ }),

/***/ "./src/image/hand-one.svg":
/*!********************************!*\
  !*** ./src/image/hand-one.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hand-one..svg";

/***/ }),

/***/ "./src/image/hand-two.svg":
/*!********************************!*\
  !*** ./src/image/hand-two.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hand-two..svg";

/***/ }),

/***/ "./src/image/head.svg":
/*!****************************!*\
  !*** ./src/image/head.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/head..svg";

/***/ }),

/***/ "./src/image/leg-one.svg":
/*!*******************************!*\
  !*** ./src/image/leg-one.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/leg-one..svg";

/***/ }),

/***/ "./src/image/leg-two.svg":
/*!*******************************!*\
  !*** ./src/image/leg-two.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/leg-two..svg";

/***/ }),

/***/ "./src/fonts/Inter-Regular.woff":
/*!**************************************!*\
  !*** ./src/fonts/Inter-Regular.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-Regular..woff";

/***/ }),

/***/ "./src/fonts/Inter-Regular.woff2":
/*!***************************************!*\
  !*** ./src/fonts/Inter-Regular.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-Regular..woff2";

/***/ }),

/***/ "./src/fonts/Inter-SemiBold.woff":
/*!***************************************!*\
  !*** ./src/fonts/Inter-SemiBold.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-SemiBold..woff";

/***/ }),

/***/ "./src/fonts/Inter-SemiBold.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Inter-SemiBold.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-SemiBold..woff2";

/***/ }),

/***/ "./src/fonts/Inter-SemiBoldItalic.woff":
/*!*********************************************!*\
  !*** ./src/fonts/Inter-SemiBoldItalic.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-SemiBoldItalic..woff";

/***/ }),

/***/ "./src/fonts/Inter-SemiBoldItalic.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/Inter-SemiBoldItalic.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-SemiBoldItalic..woff2";

/***/ }),

/***/ "./src/image/favicon/site.webmanifest":
/*!********************************************!*\
  !*** ./src/image/favicon/site.webmanifest ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/site..webmanifest";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=main.e57d0b1d360cecd3f2e1.js.map