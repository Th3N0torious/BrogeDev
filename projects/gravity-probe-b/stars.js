function createStars() {
    const spaceBackground = document.querySelector('.space-background');
    const numberOfStars = 100;
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        star.style.setProperty('--opacity', `${Math.random() * 0.7 + 0.3}`);
        
        // Add parallax speed based on star size (smaller = "further away" = moves slower)
        const parallaxSpeed = size / 3;
        
        stars.push({
            element: star,
            left: left,
            top: top,
            speed: Math.random() * 0.5 + 0.1,
            parallaxSpeed: parallaxSpeed
        });
        
        spaceBackground.appendChild(star);
    }

    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        stars.forEach(star => {
            const moveX = (mouseX - 0.5) * star.speed * 50;
            const moveY = (mouseY - 0.5) * star.speed * 50;

            star.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Add scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        stars.forEach(star => {
            const yPos = -(scrolled * star.parallaxSpeed);
            star.element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

createStars();
