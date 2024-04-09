const burgerMenu = document.querySelector(".burger-menu");
const navbarLinks = document.querySelector(".navbar-right");

window.onscroll = function () {
  scrollFunction();
};

burgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function scrollFunction() {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  const references = document.querySelectorAll(".nav-reference");
  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    navbar.style.padding = "0.3em 0";
    logo.style.fontSize = "12px";
    references.forEach((reference) => {
      reference.style.color = "black";
    });
  } else {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 80) {
      navbar.style.backgroundColor = "white";
      navbar.style.padding = "1em 0";
      logo.style.fontSize = "25px";
      logo.style.border = "0.1em solid rgb(0,0,0)";
      references.forEach((reference) => {
        reference.style.color = "black";
      });
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
      navbar.style.padding = "2em 0";
      logo.style.border = "0.1em solid rgb(255,255,255)";
      references.forEach((reference) => {
        reference.style.color = "white";
      });
    }
  }
}
