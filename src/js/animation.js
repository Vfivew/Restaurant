const sections = document.querySelectorAll(".section");

function checkSectionVisibility() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop - windowHeight <= 0) {
      section.classList.add("active");
    }
  });
}

checkSectionVisibility();

window.addEventListener("scroll", checkSectionVisibility);