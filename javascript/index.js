// Main JavaScript entry point
// This file currently contains placeholder logic for future enhancements.

document.addEventListener('DOMContentLoaded', function () {
    // Example: log a message when the DOM is ready
    console.log('Firestore12 page loaded');
});

// Scroll reveal logic
const scrollElements = document.querySelectorAll('.product-image, .banner');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
    element.classList.remove('hidden');
};

const hideScrollElement = (element) => {
    element.classList.add('hidden');
    element.classList.remove('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// initialize states
scrollElements.forEach(el => el.classList.add('hidden'));
