let btn = document.querySelector(".navi__btn");
let container = document.querySelector(".container");
let navContainer = document.querySelector(".navi__container");

btn.addEventListener("click", () => {
  navContainer.classList.toggle("active");
  btn.classList.toggle("active");
})