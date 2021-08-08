
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

// navs and menu
const btnMenu = document.querySelector(".menu-btn")
const sideNav = document.querySelector(".side-nav")
const touchNav = document.querySelector(".touch-nav")
let menuOpen = false

btnMenu.addEventListener("click", () => {
  if(!menuOpen) {
    console.log("open")
    btnMenu.classList.add("open")
    sideNav.style.transform = "translateX(-300px)"
    touchNav.style.transform = "translateY(70px)"
    menuOpen = true
  } else {
    btnMenu.classList.remove("open")
    sideNav.style.transform = "translateX(300px)"
    touchNav.style.transform = "translateY(0px)"
    menuOpen = false
  }
})

// responsive elements 
if(window.innerWidth < 640) {
  document.querySelector(".nav-upper-login").innerHTML = '<a href=""><i class="fas fa-user"></i> Login</a>'
} 

// read more game info 
const btnReadMore = document.querySelector(".read-more-btn")
const moreText = document.getElementsByClassName("more")
const fade = document.querySelector(".text-fade")

btnReadMore.addEventListener("click", () => {
  fade.style.display = "none"
  for(var t = 0; t < moreText.length; t++) {
    moreText[t].style.display = "inline"
  }
  btnReadMore.style.display = "none"
})