// Smooth button interaction
function showMessage() {
    alert("Welcome to Sudhanshu Kumar's DevOps Portfolio 🚀");
}


// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// Reveal animation
const cards = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .pipeline-step"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});