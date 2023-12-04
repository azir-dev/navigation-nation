import "./style.scss";

// 获取 DOM
const menuBtn = document.getElementById("menu-button");
const overlayElement = document.getElementById("overlay");
const links = document.querySelectorAll(".item>a");
const navItems = document.querySelectorAll(".item");

let menuIsOpen = false;
/**
 * 打开菜单
 */
function openNav() {
  menuIsOpen = true;
  menuBtn.classList.add("menu-button--open");
  overlayElement.classList.add("overlay--active");
  document.documentElement.style.overflow = "hidden";
  navItems.forEach((item) => {
    item.classList.replace("close", "active");
  });
}

/**
 * 关闭菜单
 */
function closeNav() {
  menuIsOpen = false;
  menuBtn.classList.remove("menu-button--open");
  overlayElement.classList.remove("overlay--active");
  document.documentElement.style.overflow = "auto";
  navItems.forEach((item) => {
    item.classList.replace("active", "close");
  });
}

// 菜单开关按钮点击事件
menuBtn.addEventListener("click", () => (menuIsOpen ? closeNav() : openNav()));

// 给每个 a 标签添加点击事件，导航并关闭菜单
links.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// menuIsOpen ? openNav() : closeNav();
