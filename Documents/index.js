feather.replace();


const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector('.carousel');
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * 100; // Move by 100% of the container width
        carousel.style.transform = `translateX(${offset}%)`;
    }
});