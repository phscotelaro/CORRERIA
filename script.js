document.addEventListener("DOMContentLoaded", () => {

    /* ========= REVEAL ON SCROLL ========= */
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));

    /* ========= BANNER SLIDESHOW ========= */
    const banners = document.querySelectorAll(".banner-img");
    let currentIndex = 0;

    function trocarBanner() {
        banners[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].classList.add("active");
    }

    if (banners.length > 1) {
        setInterval(trocarBanner, 5000);
    }
});
