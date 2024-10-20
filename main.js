const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("fa-xmark");
  mobileMenu.classList.toggle("active");
});

window.onscroll = () => {
  mobileMenu.classList.remove("active");
};
