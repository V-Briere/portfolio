let carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector('.carousel');
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Go to the last image if at the beginning
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Go to the first image if at the end
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100; // Move by 100% of the container width
        carousel.style.transform = `translateX(${offset}%)`;
    }
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Perform your AJAX request here
    console.log('Form submitted:', data);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can reset the form after submission
    form.reset();
});
