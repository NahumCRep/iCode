"use strict";

const burguerBtn = document.getElementById('burguer')
const navMenu = document.getElementById('navmenu')

// open nav menu on mobile
burguerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navbar__menu_open')
    burguerBtn.classList.toggle('burguer_active')
})

// navbar box shadow when scroll
const navbar = document.getElementById('nav-bar')
window.addEventListener('scroll', () => {
    let y = window.scrollY
    y > 50 
        ? navbar.classList.add('navbar__shadow')
        : navbar.classList.remove('navbar__shadow')
})


// header typed words
const typed = new Typed('.typed-0', {
    strings : [ 
        "learn new things",
        "improve your skills",
        "make your ideas real"],
    typeSpeed:75,
    startDelay: 300,
    backSpeed:75,
    loop: true,
    loopCount: false,
    showCursor: false
});

// Courses Slider
const slider = document.getElementById('slider')
const leftBtn = document.getElementById('sliderLeft')
const rightBtn = document.getElementById('sliderRight')

leftBtn.addEventListener('click', () => {
    slider.scrollLeft -= (slider.children[0].offsetWidth + 10)
})

rightBtn.addEventListener('click', () =>  {
    slider.scrollLeft += (slider.children[0].offsetWidth + 10)
})


