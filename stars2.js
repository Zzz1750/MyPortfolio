const numberOfStars = 100; // Total number of stars

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Position stars randomly across the width of the window
    const x = Math.random() * window.innerWidth;
    star.style.left = `${x}px`;

    // Randomize the falling speed and set a random animation duration
    const duration = Math.random() * 3 + 2; // Duration between 2s and 5s
    star.style.animationDuration = `${duration}s`;

    // Set the star's initial position to just above the viewport
    star.style.top = `${Math.random() * -100}px`; // Start from above the screen

    // Set a random delay for the animation to start
    const delay = Math.random() * duration;
    star.style.animationDelay = `-${delay}s`;

    document.body.appendChild(star);
}
