// Get DOM
const title = document.querySelector(".header__title-section");
const nav = document.querySelector(".header__nav-section");

const navMenu = document.querySelector(".header__navList");
const titleInNav = document.querySelector(".header__title-in-nav");

// reduce the frequency of scroll event
let timeout;

window.addEventListener("scroll", function () {
  if (timeout) return;

  // timeout = set
});

// Hook up the event
window.onscroll = function (e) {
  if (this.scrollY < 100) {
    title.classList.add("showing");
    titleInNav.classList.remove("showing");
    navMenu.classList.remove("hidden");
    return;
  }
  title.classList.remove("showing");
  if (this.oldScroll > this.scrollY) {
    titleInNav.classList.remove("showing");
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
    titleInNav.classList.add("showing");
  }
  this.oldScroll = this.scrollY;
};
