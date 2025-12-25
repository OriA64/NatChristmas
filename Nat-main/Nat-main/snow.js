document.addEventListener('DOMContentLoaded', function() {
    // Create snow container
    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '1000';
    document.body.appendChild(snowContainer);

    // Create snowflakes
    const snowflakesCount = 100;
    const snowflakes = [];

    for (let i = 0; i < snowflakesCount; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.style.position = 'absolute';
        snowflake.style.color = 'rgba(255, 255, 255, 0.8)';
        snowflake.style.userSelect = 'none';
        snowflake.style.pointerEvents = 'none';
        snowflake.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.7)'; // Adding drop shadow
        
        // Random size between 10px and 25px
        const size = Math.random() * 15 + 10;
        snowflake.style.fontSize = `${size}px`;
        
        // Random starting position
        const startPosX = Math.random() * window.innerWidth;
        snowflake.style.left = `${startPosX}px`;
        snowflake.style.top = '-20px';
        
        // Random animation duration between 5 and 15 seconds
        const duration = Math.random() * 10 + 5;
        snowflake.style.animation = `fall ${duration}s linear infinite`;
        
        // Random horizontal movement
        const horizontalMovement = (Math.random() - 0.5) * 100;
        snowflake.style.setProperty('--h-move', `${horizontalMovement}px`);
        
        // Random delay
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random slight rotation
        snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        snowContainer.appendChild(snowflake);
        snowflakes.push(snowflake);
    }

    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(calc(100vh + 20px)) translateX(var(--h-move, 0)) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);

    // Handle window resize
    window.addEventListener('resize', function() {
        snowflakes.forEach(flake => {
            const currentLeft = parseFloat(flake.style.left);
            if (currentLeft > window.innerWidth) {
                flake.style.left = `${window.innerWidth * 0.9}px`;
            }
        });
    });
});
