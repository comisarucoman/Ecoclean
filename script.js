document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENIU MOBIL
       ===================================================== */

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenuBtn && navLinks) {

        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            mobileMenuBtn.setAttribute(
                "aria-label",
                isOpen ? "Închide meniul" : "Deschide meniul"
            );

            mobileMenuBtn.textContent = isOpen ? "✕" : "☰";
        });


        /* Închide meniul după apăsarea unui link */

        const menuLinks = navLinks.querySelectorAll("a");

        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-label",
                    "Deschide meniul"
                );

                mobileMenuBtn.textContent = "☰";
            });
        });
    }


    /* =====================================================
       SCROLL FLUID PENTRU LINKURILE DIN PAGINĂ
       ===================================================== */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                const navbar = document.querySelector(".navbar");
                const navbarHeight = navbar
                    ? navbar.offsetHeight
                    : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });


    /* =====================================================
       NAVBAR LA SCROLL
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }

});
