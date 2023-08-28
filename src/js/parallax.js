document.addEventListener('scroll', function() {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const windowTop = scrollTop;
  const windowBottom = windowTop + windowHeight;

  parallaxSections.forEach((parallaxSection) => {
    const parallaxContent = parallaxSection.querySelector('.parallax-content');
    const scrollValue = window.scrollY;

    const parallaxTop = parallaxContent.offsetTop;
    const parallaxBottom = parallaxTop + parallaxContent.offsetHeight;

    if (parallaxBottom > windowTop && parallaxTop < windowBottom) {
      parallaxContent.style.transform = `translateY(${scrollValue * 0.8}%)`;
    } else {
      parallaxContent.style.transform = 'none';
    }
  });
});