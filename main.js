import "./style.scss";

const menuBtn = document.getElementById("menu-button");
const overlayElement = document.getElementById("overlay");
const links = document.querySelectorAll(".item>a");

let menuIsOpen = false;

function openNav() {
  menuIsOpen = true;
  menuBtn.classList.add("menu-button--open");
  overlayElement.classList.add("overlay--active");
  document.documentElement.style.overflow = "hidden";
}

function closeNav() {
  menuIsOpen = false;
  menuBtn.classList.remove("menu-button--open");
  overlayElement.classList.remove("overlay--active");
  document.documentElement.style.overflow = "auto";
}

menuBtn.addEventListener("click", () => (menuIsOpen ? closeNav() : openNav()));

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// menuIsOpen ? openNav() : closeNav();
