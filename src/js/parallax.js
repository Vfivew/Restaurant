document.addEventListener("scroll", function () {
  const parallaxSections = document.querySelectorAll(".parallax-section");
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;

  parallaxSections.forEach((parallaxSection, index) => {
    const parallaxContent = parallaxSection.querySelector(".parallax-content");
    const parallaxHeight = parallaxContent.offsetHeight;
    const sectionTop = parallaxSection.offsetTop;
    const sectionBottom = sectionTop + parallaxHeight;

    const sectionPartiallyInView =
      sectionBottom >= scrollTop && sectionTop <= scrollTop + windowHeight;
    if (sectionPartiallyInView) {
      const sectionProgress =
        (scrollTop - sectionTop) / (sectionBottom - sectionTop);
      const startTransform = -22;
      const endTransform = -14;
      const rangeTransform = endTransform - startTransform;
      const sectionTransform =
        startTransform + sectionProgress * rangeTransform;
      parallaxContent.style.transform = `translateY(${
        sectionTransform + 1100
      }%)`;
    }
  });
});
