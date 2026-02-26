const slides = [
  {
    src: "src/toronto.jpg",
    caption: "Toronto - A vibrant city where cultures meet."
  },
  {
    src: "src/vancouver.jpg",
    caption: "Vancouver - Mountains and ocean in perfect harmony."
  },
  {
    src: "src/montreal.jpg",
    caption: "Montreal - European charm in North America."
  }
];

let index = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

function show() {
  slide.src = slides[index].src;
  caption.textContent = slides[index].caption;
}

function nextImg() {
  index = (index + 1) % slides.length;
  show();
}

function prevImg() {
  index = (index - 1 + slides.length) % slides.length;
  show();
}


function showMenu() {
      const dropDown = document.getElementById('dropd-content');
      dropDown.style.display === 'flex' ? dropDown.style.display = 'none' : dropDown.style.display = 'flex';
}