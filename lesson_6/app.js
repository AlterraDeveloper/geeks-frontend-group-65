const prevBtn = document.querySelector("#prev-btn")
const nextBtn = document.getElementById("next-btn");

const indicators = document.querySelectorAll(".nav-item")
const slides = document.querySelectorAll(".slide")

const clearSlide = () => {
    // clearing indicator
    const activeNav = document.querySelector(".nav .active");
    activeNav.classList.remove("active");

    // clearing slide
    const activeSlide = document.querySelector(".slider-container .active");
    activeSlide.classList.remove("active")
}

const showSlide = () => {
    slides[slideIndex].classList.add("active");
    indicators[slideIndex].classList.add("active");

    // change background
    const backImg = slides[slideIndex].style.backgroundImage;
    document.body.style.backgroundImage = backImg;

    localStorage.setItem("INDEX", slideIndex);
}

let slideIndex = Number(localStorage.getItem("INDEX") ?? 0)
showSlide()


prevBtn.onclick = () => {
    clearSlide();
    slideIndex -= 1;
    if (slideIndex < 0) {
        slideIndex = indicators.length - 1;
    }
    showSlide();
}

nextBtn.onclick = () => {
    clearSlide();
    slideIndex += 1;
    if (slideIndex >= indicators.length) {
        slideIndex = 0;
    }
    showSlide();
}

// DRY - Don't Repeat Yourself

// Local Storage