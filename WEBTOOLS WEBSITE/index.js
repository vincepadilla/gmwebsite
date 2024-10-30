document.addEventListener("DOMContentLoaded", () => {
    const aboutUsLink = document.getElementById("aboutUsLink");
    const body = document.body;

    aboutUsLink.addEventListener("click", (e) => {
        e.preventDefault();
        let opacity = 1;

        const fadeOut = () => {
            opacity -= 0.02;
            body.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(fadeOut);
            } else {
                window.location.href = "about.html";
            }
        };

        fadeOut();
    });
});