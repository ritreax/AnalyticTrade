
// FAQ Section

const allHeaders = document.querySelectorAll(".header");

const toggleOpen = (event) => {
  const { currentTarget } = event;
  currentTarget.parentElement.classList.toggle("open");
}

const bindClickEvent = (header) => {
  header.addEventListener("click", toggleOpen);
}

allHeaders.forEach(bindClickEvent);


// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})