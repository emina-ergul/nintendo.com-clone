
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
const dots = document.getElementsByClassName("slider-dot")
dots[0].classList.add("dot-active")
let slideCount = 1

const changeSlide = () => {
  if(slideCount === 1) {
    dots[1].classList.add("dot-active")
    dots[0].classList.remove("dot-active")
    cover1.style.display = "none"
    cover2.style.display = "flex"
    slideCount++
  } else if (slideCount !== 1) {
    dots[1].classList.remove("dot-active")
    dots[0].classList.add("dot-active")
    cover1.style.display = "flex"
    cover2.style.display = "none"
    slideCount--
  }
}

btnRight.addEventListener("click", changeSlide)
btnLeft.addEventListener("click", changeSlide)
for(var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", changeSlide)
}