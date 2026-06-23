/* ==================================
   RANEX GROUP INDONESIA
   MAIN SCRIPT
================================== */


/* ==================================
   HEADER SCROLL EFFECT
================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==================================
   ACTIVE NAVIGATION
================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});


/* ==================================
   SCROLL REVEAL ANIMATION
================================== */

const revealElements = document.querySelectorAll(

    ".stat-item, .about-card, .business-card, .value-card, .legal-item, .timeline-item, .media-card, .faq-item, .contact-card"

);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==================================
   COUNTER ANIMATION
================================== */

const counters = document.querySelectorAll(".stat-item h2");

const runCounter = () => {

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(targetText);

        if (isNaN(target)) return;

        let count = 0;

        const speed = target / 50;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;
            }

        };

        update();

    });

};

runCounter();


/* ==================================
   BACK TO TOP BUTTON
================================== */

const topButton = document.createElement("button");

topButton.className = "back-to-top";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==================================
   YEAR AUTO UPDATE
================================== */

const year = new Date().getFullYear();

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent = year;

}
