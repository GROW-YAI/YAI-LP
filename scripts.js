const readMoreBtn = document.getElementById('readMoreBtn');
const modal = document.getElementById('aboutModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal
readMoreBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
});

// Close when clicking outside the modal box
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
});
// Enable drag-to-scroll for mobile and desktop
const slider = document.querySelector('.wine-slider');

let isDown = false;
let startX;
let scrollLeft;

if (slider) {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('cursor-grabbing');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('cursor-grabbing');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('cursor-grabbing');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast factor
    slider.scrollLeft = scrollLeft - walk;
  });
}
