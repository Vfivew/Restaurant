function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const startPosition = window.scrollY;
    const targetPosition = element.offsetTop;
    const distance = targetPosition - startPosition;
    const duration = 800;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
}

const links = document.querySelectorAll(".nav-reference");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    links.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });

    const linkText = this.textContent.trim().toUpperCase();

    switch (linkText) {
      case "WELCOME":
        scrollToElement("header");
        break;
      case "SPECIALTIES":
        scrollToElement("menu");
        break;
      case "MENU":
        scrollToElement("menu-list");
        break;
      case "RESERVATION":
        scrollToElement("reservation-form");
        break;
      case "EVENTS":
        scrollToElement("our-events");
        break;
      case "CONTACT":
        scrollToElement("contact");
        break;
    }

    this.classList.add("active");
  });
});

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
