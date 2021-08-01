
// nav drop on scroll up 
let prevScrollPos = window.pageYOffset;
const nav = document.querySelector(".nav-container")
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
nav.style.transitionDelay = "0.5s"
  if (prevScrollPos > currentScrollPos) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-95px";
  }
  prevScrollPos = currentScrollPos;
}