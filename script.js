// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => revealObserver.observe(el));

// HEADER EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.transform = "translateY(0)";
  }
});

// PARALLAX ORBS

const orbOne = document.querySelector(".orb-one");
const orbTwo = document.querySelector(".orb-two");
const orbThree = document.querySelector(".orb-three");

window.addEventListener("mousemove", e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  if (orbOne) {
    orbOne.style.transform =
      `translate(${x * 25}px, ${y * 25}px)`;
  }

  if (orbTwo) {
    orbTwo.style.transform =
      `translate(${x * -20}px, ${y * -20}px)`;
  }

  if (orbThree) {
    orbThree.style.transform =
      `translate(${x * 15}px, ${y * -15}px)`;
  }
});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".hero-metrics strong");

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const text = el.textContent;

      const num = parseInt(text);

      if (isNaN(num)) return;

      let start = 0;

      const interval = setInterval(() => {
        start++;

        el.textContent = start + "+";

        if (start >= num) {
          clearInterval(interval);
          el.textContent = text;
        }
      }, 40);

      counterObserver.unobserve(el);
    });
  },
  {
    threshold: 0.6
  }
);

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// SMOOTH ACTIVE NAV

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.classList.add("active");
    }
  });
});

// FLOATING EFFECT

const cards = document.querySelectorAll(
  ".float-card,.business-card,.portfolio-card,.testimonial-card"
);

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    card.style.transform =
      `perspective(1000px)
       rotateY(${x / 25}deg)
       rotateX(${-(y / 25)}deg)
       translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// LOADING EFFECT

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// SCROLL TO TOP BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.className = "scroll-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
