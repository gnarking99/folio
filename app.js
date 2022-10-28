const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const big_title = document.querySelector(".big-title");
const little_title = document.querySelector(".little-title");
const shadow = document.querySelector(".shadow");
const header = document.querySelector("header");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

let header_height = header.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
	
	little_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
	
})
