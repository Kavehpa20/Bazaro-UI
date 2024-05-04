import './style.css'


window.addEventListener("scroll", scrollup);
function scrollup(params) {
    const scrollup = document.getElementById("scrollup");
    if (this.scrollY >= 560) {
        scrollup.classList.add("show-scroll");
    }
    else {
        scrollup.classList.remove("show-scroll");
    }
}
