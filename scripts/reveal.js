const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
}, { threshold: 0.2 });

document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

const backgroundObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = entry.target.dataset.bg;
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });

document.querySelectorAll('section[data-bg]').forEach((section) => backgroundObserver.observe(section));

const updateScrolledState = () => {
    document.body.classList.toggle('is-scrolled', window.scrollY > window.innerHeight * 0.3);
    document.body.classList.toggle('is-at-bottom', window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2);
};
window.addEventListener('scroll', updateScrolledState, { passive: true });
window.addEventListener('resize', updateScrolledState);
updateScrolledState();
