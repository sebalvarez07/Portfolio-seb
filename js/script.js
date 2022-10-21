"use strict";

////////// TITTLE STICKY NAV ////////////////
const sectionHeroEl = document.querySelector(".hero_container");
const navIcon = document.querySelector(".nav-icon");

const icon = document.querySelector(".nav-icon");
const logo = document.querySelector(".logo");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      icon.style.display = "none";
      logo.style.display = "none";
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");

      if ((icon.style.display = "none")) {
        icon.style.display = "inline-block";
      }

      if ((logo.style.display = "none")) {
        logo.style.display = "inline-block";
      }
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//TITTLE FADING NAV
const nav = document.querySelector(".nav");

const handleHover = function (e) {
  if (e.target.classList.contains("nav_link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav_link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    icon.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

nav.addEventListener("mouseout", function (e) {});

////////////// TITTLE SMOOTH SCROLLING /////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////// TITTLE COPYRIGHT DATE /////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////// TITTLE LIGHT TO DARK /////////////////
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");
const toggle = document.querySelector(".nav_btn");

const enableDarkMode = function () {
  document.body.classList.add("dark");
  document.querySelector(".nav-icon").name = "contrast-outline";
  document.querySelector(".logo").src = "/src/logo-dark.png";
  document.querySelector(".hero_container").style.backgroundImage =
    "url(/src/dark-background.jpg)";
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  document.querySelector(".nav-icon").name = "contrast";
  document.querySelector(".logo").src = "/src/logo.png";
  document.querySelector(".hero_container").style.backgroundImage =
    "url(/src/light-background.jpg)";
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggle.addEventListener("click", function () {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

////////// TITTLE SLIDER ////////////////
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  const slider = document.querySelector(".slider");
  // You don't need JS to add this. You can add it straight in the HTML
  // slider.style.transform = "scale(0.4) translateX(-500px)";
  // slider.style.overflow = "visible";

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active-dot"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active-dot");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
