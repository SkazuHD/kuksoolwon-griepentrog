const hamburger = document.querySelector(".Hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open")
    document.body.classList.toggle("scroll-lock")
});

// Loading animation
let loader = document.querySelector('.loader');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    loader.parentElement.removeChild(loader);

});