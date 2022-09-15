//Side Bar Togle
let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

document.querySelector("#close-side-bar").addEventListener("click", () => {
  sideBar.classList.remove("active");
});

//Search Togle
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

window.onscroll = () => {
  sideBar.classList.remove("active");
  searchForm.classList.remove("active");
};

// SLider Home
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// FAQ
let accordions = document.querySelectorAll(".accordion-container .accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});

// Slider review
var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
