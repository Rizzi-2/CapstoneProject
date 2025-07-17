// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelector('.slide')
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');
//     const dots = document.querySelector('.dot');

//     let currentSlide = 0;
//     const slideCount = slides.length;

//     updateSlider();

//     let slideInterval = setInterval(nextSlide, 5000);

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slideCount;
//         updateSlider();
//         resetInterval();
//     }

//     function prevSlide() {
//         currentSlide = (currentSlide -1 + slideCount) % slideCount;
//         updateSlider();
//         resetInterval();
//     }

//     function updateSlider() {
//         slider.style.transform = `translateX(-${currentSlide100}%)`;

//     dots.forEach((dot, index) => {
//         dots.classList.toggle('active', index ===currentSlide);
//     })
//     };

//     function resetInterval() {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, 5000);
//     }

//     nextBtn.addEventListener('click', nextSlide);
//     prevBtn.addEventListener('click', prevSlide);


//     dots.forEach((dot, index) => {
//         dots.addEventListener('click', () => {
//             currentSlide = index;
//             updateSlider();
//             resetInterval();
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {

    const slider = document.querySelector('.slider');

    const slides = document.querySelectorAll('.slide');

    const prevBtn = document.querySelector('.prev-btn');

    const nextBtn = document.querySelector('.next-btn');

    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;

    const slideCount = slides.length;

    // Set initial position

    updateSlider();

    // Auto slide every 5 seconds

    let slideInterval = setInterval(nextSlide, 5000);

    // Next slide function

    function nextSlide() {

        currentSlide = (currentSlide + 1) % slideCount;

        updateSlider();

        resetInterval();

    }

    // Previous slide function

    function prevSlide() {

        currentSlide = (currentSlide - 1 + slideCount) % slideCount;

        updateSlider();

        resetInterval();

    }

    // Update slider position and dots

    function updateSlider() {

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots

        dots.forEach((dot, index) => {

            dot.classList.toggle('active', index === currentSlide);

        });

    }

    // Reset auto slide interval

    function resetInterval() {

        clearInterval(slideInterval);

        slideInterval = setInterval(nextSlide, 5000);

    }

    // Event listeners for buttons

    nextBtn.addEventListener('click', nextSlide);

    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for dots

    dots.forEach((dot, index) => {

        dot.addEventListener('click', () => {

            currentSlide = index;

            updateSlider();

            resetInterval();

        });

    });

    // Keyboard navigation

    document.addEventListener('keydown', (e) => {

        if (e.key === 'ArrowRight') {

            nextSlide();

        } else if (e.key === 'ArrowLeft') {

            prevSlide();

        }

    });

    // Pause on hover

    slider.addEventListener('mouseenter', () => {

        clearInterval(slideInterval);

    });

    slider.addEventListener('mouseleave', resetInterval);

});