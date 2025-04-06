let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === currentIndex) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

next.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
  });
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  }); 
  
  // Initialize
  showSlide(currentIndex);