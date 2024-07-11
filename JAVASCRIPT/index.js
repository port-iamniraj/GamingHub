const slideBar = document.querySelectorAll(".slide-bar");
const sliders = document.querySelectorAll(".slider");

let slideBarIndex = 0;

function slideBarRotation(i) {
    slideBar.forEach((sb) => {
        sb.firstChild.classList.remove("_100");
    });
    sliders.forEach((slider) => {
        slider.classList.remove("active-slider");
        slider.classList.add("h18e");
    });

    slideBar[i].firstChild.classList.add("_100");
    // sliders[i].classList.remove("display-none");
    sliders[i].classList.add("active-slider");
}

function startRotation() {
    stopRotation = setInterval(() => {
        slideBarIndex = (slideBarIndex + 1) % slideBar.length;

        slideBarRotation(slideBarIndex);
    }, 6000);
}

slideBar.forEach((sBar, i) => {
    sBar.addEventListener("pointerenter", () => {
        clearInterval(stopRotation);

        slideBarRotation(i);

        slideBarIndex = i;
        startRotation();
    });
});

setTimeout(() => {
    slideBarRotation(slideBarIndex);
    startRotation();
}, 100);
