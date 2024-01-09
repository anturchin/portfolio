export const updateHangmanDisplay = (counter) => {
  const head = document.querySelector("#head");
  const body = document.querySelector("#body");
  const handOne = document.querySelector("#hand-one");
  const handTow = document.querySelector("#hand-two");
  const legOne = document.querySelector("#leg-one");
  const legTow = document.querySelector("#leg-two");

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
