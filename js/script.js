//TITTLE STICKY NAV
const sectionHeroEl = document.querySelector(".hero_container");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
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

//TITTLE SMOOTH SCROLLING
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

// TITTLE COPYRIGHT DATE
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// TITTLE LIGHT TO DARK
const btn = document.querySelector(".nav_btn");
const navContainer = document.querySelector(".nav_container");
const navText = document.querySelectorAll(".nav_link");
const navTextHover = document.querySelector(".nav_link:hover");
const stickyNav = document.querySelector(".sticky");
const bodyColor = document.querySelector(".body");

const lightToDark = function () {
  btn.addEventListener("click", function () {
    console.log("click");

    // navContainer.style.backgroundColor = "#eae1d4";
    // navText.style.color = "#211f1e";
    // navTextHover.style.color = "#44413d";
    bodyColor.style.backgroundColor = "#eae1d4";
  });
};
lightToDark();
