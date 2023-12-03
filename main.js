import "./style.scss";

const menuBtn = document.getElementById("menu-button");
const overlayElement = document.getElementById("overlay");
const links = document.querySelectorAll(".item>a");
const navItems = document.querySelectorAll(".item");

let menuIsOpen = false;

function openNav() {
  menuIsOpen = true;
  menuBtn.classList.add("menu-button--open");
  overlayElement.classList.add("overlay--active");
  document.documentElement.style.overflow = "hidden";
  navItems.forEach((item) => {
    // item.classList.add("active");
    item.classList.replace("close", "active");
    // item.classList.remove("close");
  });
}

function closeNav() {
  menuIsOpen = false;
  menuBtn.classList.remove("menu-button--open");
  overlayElement.classList.remove("overlay--active");
  document.documentElement.style.overflow = "auto";
  navItems.forEach((item) => {
    // item.classList.add("close");
    // item.classList.remove("active");
    // item.classList.replace("close", "active");
    item.classList.replace("active", "close");
  });
}

menuBtn.addEventListener("click", () => (menuIsOpen ? closeNav() : openNav()));

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// menuIsOpen ? openNav() : closeNav();
