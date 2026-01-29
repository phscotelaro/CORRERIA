document.addEventListener("DOMContentLoaded", () => {

    /* =====================
       REVEAL NO SCROLL
    ====================== */
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(el => observer.observe(el));


    /* =====================
       SLIDESHOW DO BANNER
    ====================== */
    const banners = document.querySelectorAll(".banner-img");
    let index = 0;

    function trocarBanner() {
        banners[index].classList.remove("active");
        index = (index + 1) % banners.length;
        banners[index].classList.add("active");
    }

    setInterval(trocarBanner, 5000); // 5 segundos
});

elements.forEach(el => observer.observe(el));
