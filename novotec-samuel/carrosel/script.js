

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    const totalImages = document.querySelectorAll('.carousel-images img').length;

    function updateCarousel(){
        const offset = -index * 100;
        images.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index <= 0) ? totalImages - 1 : index - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index >= totalImages - 1) ? 0 : index + 1;
        updateCarousel();
    });

    setInterval(() => {
        index = (index >= totalImages - 1) ? 0 : index + 1;
        updateCarousel();
    }, 3000);
});