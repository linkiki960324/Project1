
/* ==============================
   台中第二市場｜手機選單
============================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "關閉選單" : "開啟選單"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "開啟選單");
            menuToggle.textContent = "☰";
        });
    });
}

