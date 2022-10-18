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
const slides = document.querySelector(".slide");
console.log(slides);

slides.forEach((s) => (s.style.transform = `translateX(${100 * i}%)`));
