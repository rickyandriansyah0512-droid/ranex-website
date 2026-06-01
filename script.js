const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const header = document.querySelector(".header");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
  });
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("show");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 30) {
    header.style.background = "rgba(6, 11, 22, 0.96)";
    header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
  } else {
    header.style.background = "rgba(6, 11, 22, 0.86)";
    header.style.boxShadow = "none";
  }
});

const revealElements = document.querySelectorAll(
  ".section, .hero-card, .business-card, .value-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

const footerYear = document.querySelector(".footer small");

if (footerYear) {
  footerYear.innerHTML = `© ${new Date().getFullYear()} RANEX. All Rights Reserved.`;
}

console.log("RANEX | SOLUSI • INOVASI • PERTUMBUHAN");