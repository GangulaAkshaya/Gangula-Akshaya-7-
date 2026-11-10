// Dark and Light Theme

function toggleTheme() {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
}

// Load saved theme

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    // Sidebar navigation

    const links = document.querySelectorAll(".side-menu a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            links.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });

    // Update active menu while scrolling

    const sections = document.querySelectorAll("main section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        links.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

});
