
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

// image gallery
const cover1 = document.querySelector(".cover1")
const cover2 = document.querySelector(".cover2")
const btnLeft = document.querySelector(".left")
const btnRight = document.querySelector(".right")
let slideCount = 1

const changeSlide = () => {
  if(slideCount === 1) {
    cover1.style.display = "none"
    cover2.style.display = "flex"
    slideCount = 2
  } else if (slideCount === 2) {
    cover1.style.display = "flex"
    cover2.style.display = "none"
    slideCount = 1
  }
}

btnRight.addEventListener("click", changeSlide)
btnLeft.addEventListener("click", changeSlide)

