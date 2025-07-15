document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slide')
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelector('.dot');

    let currentSlide = 0;
    const slideCount = slides.length;

    updateSlider();

    let slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
        resetInterval();
    }

    function prevSlide() {
        currentSlide = (currentSlide -1 + slideCount) % slideCount;
        updateSlider();
        resetInterval();
    }

    function updateSlider() {
        slideCount.style.transform = `translateX(-${currentSlide100}%)`;

    dots.forEach((dot, index)) => {
        dot.classList.toggle('active', index ===currentSlide);
    }
    };

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);


    dots.forEach((dot, index)) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetInterval();
        });
    };
});
