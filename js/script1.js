const images = [
  {src: 'img/yellow.jfif',
  alt: '咖啡店',
  text: 'coffee shop'
  },
  {src: 'img/super.jfif',
  alt: '雜貨店',
  text: 'Grocery store'
  },
  {
  src: 'img/red.jfif',
  alt: '飾品店',
  text: 'Jewelry store'
  }
  ];
let currentIndex = 0;
const totalImages = images.length;

const mainImage = document.getElementById('mainImage');
const imageText = document.getElementById('imageText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-content');

function showImage(index) {
  mainImage.src = images[index].src;
  mainImage.alt = images[index].alt;
  imageText.querySelector('h3').textContent = images[index].alt;
  imageText.querySelector('p').textContent = images[index].text;
}

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

showImage(currentIndex);
showSlide(currentIndex);

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
  showSlide(currentIndex);
});
