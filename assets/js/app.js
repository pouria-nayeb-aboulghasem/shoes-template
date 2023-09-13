const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("nav__menu--active");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--active");
    });
}

// close side menu by link
const navLinks = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("nav__menu--active");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

// scroll effect on menu
const scrollShadowHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50
        ? header.classList.add("header--active")
        : header.classList.remove("header--active");
};
window.addEventListener("scroll", scrollShadowHeader);

// swiper configs
const swiperShoes = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effective: "creative",
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            opacity: 0
        },
        next: {
            translate: [100, 0, -500],
            opacity: 0
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});