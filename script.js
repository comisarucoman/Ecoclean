/* =========================================================
   ECOCLEAN - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENIU MOBIL
    ===================================================== */

    const menuButton = document.getElementById("mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }

        });


        /* Închide meniul când apăsăm pe un link */

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuButton.textContent = "☰";

            });

        });

    }


    /* =====================================================
       CALCULATOR PREȚ
    ===================================================== */

    const tipServiciu = document.getElementById("tip-serviciu");
    const suprafata = document.getElementById("suprafata");
    const valoareSuprafata = document.getElementById("valoare-suprafata");
    const pretTotal = document.getElementById("pret-total");


    function calculeazaPret() {

        if (
            !tipServiciu ||
            !suprafata ||
            !valoareSuprafata ||
            !pretTotal
        ) {
            return;
        }


        const pretPeMp = Number(tipServiciu.value);
        const mp = Number(suprafata.value);


        if (!mp || mp < 1) {

            valoareSuprafata.textContent = "0";
            pretTotal.textContent = "0";

            return;
        }


        const total = pretPeMp * mp;


        valoareSuprafata.textContent = mp;

        pretTotal.textContent =
            total.toLocaleString("ro-RO") + " lei";

    }


    if (tipServiciu && suprafata) {

        tipServiciu.addEventListener(
            "change",
            calculeazaPret
        );

        suprafata.addEventListener(
            "input",
            calculeazaPret
        );


        calculeazaPret();

    }


    /* =====================================================
       ANIMAȚII LA SCROLL
    ===================================================== */

    const elements = document.querySelectorAll(
        ".service-card, " +
        ".testimonial, " +
        ".about-content, " +
        ".about-image, " +
        ".calc-container"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        elements.forEach(element => {

            element.classList.add("scroll-animation");

            observer.observe(element);

        });

    } else {

        /* Pentru browsere mai vechi */

        elements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =====================================================
       SMOOTH SCROLL PENTRU LINKURILE DIN PAGINĂ
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }


            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


});