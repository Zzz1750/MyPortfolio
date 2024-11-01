const numberOfStars = 100;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            const x = Math.random() * window.innerWidth;
            star.style.left = `${x}px`;

            const duration = Math.random() * 10 + 10; 
            star.style.animationDuration = `${duration}s`;

            const delay = Math.random() * duration;
            star.style.animationDelay = `-${delay}s`;

            document.body.appendChild(star);
        }