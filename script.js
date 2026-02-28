// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: Stop observing once animated
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of element is visible
});

const hiddenElements = document.querySelectorAll('.animate-on-scroll');
hiddenElements.forEach((el) => observer.observe(el));
