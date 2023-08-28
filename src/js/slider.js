const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 1; 
let isAnimating = false; 

prevButton.addEventListener('click', () => {
  if (!isAnimating) {
    slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
    updateSlide();
  }
});

nextButton.addEventListener('click', () => {
  if (!isAnimating) {
    slideIndex = (slideIndex + 1) % slides.children.length;
    updateSlide();
  }
});

function updateSlide() {
  isAnimating = true;
  slides.style.transition = "transform 0.5s ease-in-out"; 
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  if (slideIndex === 0) {
    setTimeout(() => {
      slides.style.transition = "none"; 
      slides.style.transform = `translateX(-${(slides.children.length - 2) * 100}%)`;
      slideIndex = slides.children.length - 2;
      isAnimating = false; 
    }, 500); 
  } else if (slideIndex === slides.children.length - 1) {
    setTimeout(() => {
      slides.style.transition = "none"; 
      slides.style.transform = `translateX(-100%)`;
      slideIndex = 1;
      isAnimating = false; 
    }, 500); 
  } else {
    setTimeout(() => {
      isAnimating = false; 
    }, 500); 
  }
}

updateSlide();