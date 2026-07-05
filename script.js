// Simple Scroll Animation Hook
document.addEventListener("DOMContentLoaded", () => {
    const animatedBoxes = document.querySelectorAll('.animate-box');

    const appearanceOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stops observing once animated
            }
        });
    }, appearanceOptions);

    animatedBoxes.forEach(box => {
        appearanceObserver.observe(box);
    });
});