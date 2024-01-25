export const onChangeLevel = (e) => {
  const target = e.target;
  if (target) {
    const listLevel = document.querySelector(".level__list");
    listLevel.querySelectorAll("li").forEach((item) => {
      item.classList.remove("level__item_active");
    });
    target.classList.add("level__item_active");
  }
};
