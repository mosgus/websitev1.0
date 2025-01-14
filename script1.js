window.addEventListener('scroll', () => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollY / totalHeight;

        console.log(`Scroll percent: ${scrollPercent * 100}%`);
    });
    // Space to sky
    if (scrollPercent < 0.2) {
        document.body.style.backgroundColor = `rgb(${Math.floor(0 + scrollPercent * 255 * 5)}, ${Math.floor(0 + scrollPercent * 255 * 5)}, 0)`;
    }
    // Sky to ocean
    else if (scrollPercent < 0.6) {
        document.body.style.backgroundColor = `rgb(135, ${Math.floor(206 - scrollPercent * 255)}, ${Math.floor(235 + scrollPercent * 20)})`;
    }
    // Ocean to deep ocean
    else {
        document.body.style.backgroundColor = `rgb(0, 0, ${Math.floor(255 - scrollPercent * 255 * 2)})`;
    }
});