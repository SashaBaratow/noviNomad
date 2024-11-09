// top menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let mobileMenuNav = document.querySelector('.header__nav .nav .container');
let footerMain = document.querySelector('.footer-main .container');
let menuItem = document.querySelectorAll('.nav__link');
let mobileMenu = document.getElementById('menu-mobile-btn')
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
menuItem.forEach (function(menuItem) {
    menuItem.addEventListener('click',function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})
mobileMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle('active');
    menu.classList.toggle('active');
})
// top menu end

//slider
$('.testimonials__slider').slick({
    centerPadding: '10px',
    slidesToShow: 3,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2.3,
                infinite: true,
            }
        },
        {
            breakpoint: 695,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '20px',
                slidesToShow: 1.8,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
});
//

// show btn and logo by scrolling
const burgerMenuButton = document.getElementById("menu-btn");
const logo = document.getElementById("logo");
const slider__container = document.getElementById("container-change");
burgerMenuButton.style.display = "none";
 function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 180) {
        burgerMenuButton.style.display = "block";
        logo.style.display = "block";
    } else {
        burgerMenuButton.style.display = "none";
        logo.style.display = "none";
    }
}
function isDesktop() {
    return window.innerWidth >= 992; // Adjust the value based on your design
}
if (isDesktop()) {
    window.addEventListener("scroll", handleScroll);
}
// if ( window.location.href === "/"){
    window.addEventListener("DOMContentLoaded", function() {
        if (isDesktop()) {
            window.addEventListener("scroll", handleScroll);
            slider__container.classList.replace('container-fluid', 'container')
            mobileMenuNav.classList.replace('container-fluid', 'container')
        } else {
            window.removeEventListener("scroll", handleScroll);
            burgerMenuButton.style.display = "none";
            logo.style.display = "none";
            slider__container.classList.replace('container', 'container-fluid')
            mobileMenuNav.classList.replace('container', 'container-fluid')
        }
    });
// }

// show btn and logo by scrolling end

//main page slider
$('.main-page__slider').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2.3,
                infinite: true,
            }
        },
        {
            breakpoint: 695,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '20px',
                slidesToShow: 1.8,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
});

//main page slider end


