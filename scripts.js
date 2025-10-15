// ---------- DRAG-TO-SCROLL (Wine Slider) ----------
const slider = document.querySelector('.wine-slider');

if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  // Desktop dragging
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
    const walk = (x - startX) * 2; // scroll speed factor
    slider.scrollLeft = scrollLeft - walk;
  });

  // Mobile touch dragging
  let touchStartX = 0;
  let touchScrollLeft = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 2;
    slider.scrollLeft = touchScrollLeft - walk;
  });
}

// ---------- MOBILE MENU TOGGLE ----------
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

if (mobileMenuBtn && mobileMenu && menuIcon && closeIcon) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Auto close when a link is clicked
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}
