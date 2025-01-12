document.addEventListener('DOMContentLoaded', function () {
    function toggleMenu() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('active');
    }

    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#clientSlider .slides li");
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots");
    document.querySelector("#clientSlider").appendChild(dotsContainer);

    let currentSlide = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.dataset.slide = index;
        dot.addEventListener("click", () => {
            currentSlide = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dots span");

    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle("active-dot", index === currentSlide);
        });
    };

    const autoSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    };

    updateSlider();
    setInterval(autoSlide, 7000);
});
