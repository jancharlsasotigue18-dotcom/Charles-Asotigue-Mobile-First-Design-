/* =========================================================
   CHARLES ASOTIGUE MOBILE FIRST PORTFOLIO
   JAVASCRIPT PART 1A
   HAMBURGER NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       MOBILE MENU ELEMENTS
       ============================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    /* ==============================
       OPEN / CLOSE MENU
       ============================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen = mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            /* Change hamburger icon */

            const icon = menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }

            }

        });

    }


    /* ==============================
       CLOSE MENU AFTER CLICKING LINK
       ============================== */

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav && menuToggle) {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }

            }

        });

    });


    /* ==============================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ============================== */

    document.addEventListener("click", function (event) {

        if (!menuToggle || !mainNav) {
            return;
        }

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mainNav.classList.contains("active")
        ) {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }

        }

    });


    /* ==============================
       RESET MENU ON DESKTOP
       ============================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth >= 768) {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }

            }

        }

    });

});
/* =========================================================
   JAVASCRIPT PART 1B
   ACTIVE NAVIGATION + CURRENT YEAR + SKILL PROGRESS
   ========================================================= */


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navigationLinks =
    document.querySelectorAll(".main-nav a");

navigationLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SKILL PROGRESS BARS
   ========================================================= */

const skillProgress = {

    "progress-html": "95%",
    "progress-css": "90%",
    "progress-javascript": "85%",
    "progress-python": "80%",
    "progress-canva": "98%",
    "progress-office": "92%"

};


/* =========================================================
   ANIMATE SKILL BARS
   ========================================================= */

function animateSkillBars() {

    Object.keys(skillProgress).forEach(function (id) {

        const progressBar =
            document.getElementById(id);

        if (progressBar) {

            const targetWidth =
                skillProgress[id];

            progressBar.style.width = "0%";

            setTimeout(function () {

                progressBar.style.width =
                    targetWidth;

            }, 200);

        }

    });

}


/* =========================================================
   RUN SKILL ANIMATION
   ========================================================= */

if (
    document.getElementById("progress-html") ||
    document.getElementById("progress-css") ||
    document.getElementById("progress-javascript") ||
    document.getElementById("progress-python") ||
    document.getElementById("progress-canva") ||
    document.getElementById("progress-office")
) {

    animateSkillBars();

}
/* =========================================================
   JAVASCRIPT PART 1C
   CONTACT FORM
   ========================================================= */


/* =========================================================
   CONTACT FORM ELEMENTS
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/* =========================================================
   FORM SUBMISSION
   ========================================================= */

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* ==============================
           GET FORM VALUES
           ============================== */

        const name =
            document.getElementById("name")?.value.trim();

        const email =
            document.getElementById("email")?.value.trim();

        const subject =
            document.getElementById("subject")?.value.trim();

        const message =
            document.getElementById("message")?.value.trim();


        /* ==============================
           CLEAR PREVIOUS MESSAGE
           ============================== */

        if (formMessage) {

            formMessage.className = "form-message";
            formMessage.textContent = "";

        }


        /* ==============================
           CHECK REQUIRED FIELDS
           ============================== */

        if (!name || !email || !subject || !message) {

            showFormMessage(
                "Please complete all required fields.",
                "error"
            );

            return;

        }


        /* ==============================
           EMAIL VALIDATION
           ============================== */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        /* ==============================
           MESSAGE LENGTH
           ============================== */

        if (message.length < 10) {

            showFormMessage(
                "Please enter at least 10 characters in your message.",
                "error"
            );

            return;

        }


        /* ==============================
           SUCCESS MESSAGE
           ============================== */

        showFormMessage(
            "Thank you, " + name + "! Your message has been prepared successfully.",
            "success"
        );


        /* ==============================
           CLEAR FORM
           ============================== */

        contactForm.reset();

    });

}


/* =========================================================
   FORM MESSAGE FUNCTION
   ========================================================= */

function showFormMessage(text, type) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent = text;

    formMessage.className =
        "form-message " + type;

}
/* =========================================================
   JAVASCRIPT PART 1D
   FINAL PORTFOLIO INITIALIZATION
   ========================================================= */


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const mainHeader =
    document.querySelector(".main-header");

function updateHeader() {

    if (!mainHeader) {
        return;
    }

    if (window.scrollY > 30) {

        mainHeader.classList.add("scrolled");

    } else {

        mainHeader.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".card, .overview-card, .skill-preview-card, " +
        ".education-card, .project-preview-card, " +
        ".timeline-item, .skill-card, .project-card, " +
        ".contact-info-card, .social-card"
    );


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================================
   PREVENT MULTIPLE FORM SUBMISSIONS
   ========================================================= */

const submitButton =
    document.querySelector(".submit-btn");

if (contactForm && submitButton) {

    contactForm.addEventListener(
        "submit",
        function () {

            submitButton.disabled = true;

            setTimeout(function () {

                submitButton.disabled = false;

            }, 1500);

        }
    );

}


/* =========================================================
   PAGE READY MESSAGE
   ========================================================= */

document.documentElement.classList.add(
    "js-ready"
);
