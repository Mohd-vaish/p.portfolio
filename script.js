document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       1. MOBILE MENU TOGGLE
    =============================== */

    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    const toggleMenu = () => {

        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");

    };

    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }


    /* ===============================
       2. CLOSE MENU WHEN LINK CLICKED
    =============================== */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbar.classList.contains("active")) {

                toggleMenu();

            }

        });

    });


    /* ===============================
       3. HEADER SHADOW ON SCROLL
    =============================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* ===============================
       4. ACTIVE NAV LINK ON SCROLL
    =============================== */

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 100;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href").includes(current)) {

                link.classList.add("active");

            }

        });

    });


    /* ===============================
       5. CONSOLE MESSAGE
    =============================== */

    console.log("🚀 Portfolio Loaded Successfully");

});