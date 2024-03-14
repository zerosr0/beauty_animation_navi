const navContainer = document.querySelector(".navi__container");
const toggleBtn = document.querySelector(".navi__btn__plus");

toggleBtn.addEventListener("click", () => {
  navContainer.classList.toggle("active");
})

