let closeBtn = document.querySelector(".close-btn");
let hamburger = document.querySelector(".hamburger-icon");

closeBtn.addEventListener("click", () => {
    document.body.classList.toggle("mobile-open");
});

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("mobile-open");
});

