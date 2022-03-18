// Get DOM
const title = document.querySelector(".title-section");
const nav = document.querySelector(".nav-section");

const navMenu = document.querySelector(".nav-menu");
const titleInNav = document.querySelector(".title-in-nav");

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
