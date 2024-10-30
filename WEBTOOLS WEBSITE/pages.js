document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    let opacity = 0;
    
    // Set initial opacity to 0
    body.style.opacity = opacity;
    
    // Function to gradually increase opacity
    const fadeIn = () => {
        opacity += 0.02;
        body.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(fadeIn);
        }
    };

    // Start the fade-in effect
    fadeIn();
});