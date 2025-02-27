document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".explore-carousel");
    const leftBtn = document.querySelector(".explore-scroll-btn-left-btn");
    const rightBtn = document.querySelector(".explore-scroll-btn-right-btn");

    leftBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -350, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: 350, behavior: "smooth" });
    });
});


        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,  // Show 3 slides at a time
            spaceBetween: 30,
            loop: true,
            autoplay:true, // Disable auto-scrolling
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            
        });
    