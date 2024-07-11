const gameTheme = document.querySelectorAll(".game-theme");

gameTheme.forEach((gameThemeBox) => {
    gameThemeBox.addEventListener("mouseenter", (e) => {
        if (e.target.classList.contains("game-theme")) {
            e.target.children[0].classList.add("display-none");
            e.target.children[1].play();
        }
    });

    gameThemeBox.addEventListener("mouseleave", (e) => {
        if (e.target.classList.contains("game-theme")) {
            e.target.children[0].classList.remove("display-none");
            e.target.children[1].pause();
            e.target.children[1].currentTime = 0;
        }
    });
});