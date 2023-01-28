window.addEventListener('scroll', scrollHeader);

const header = document.querySelector('.header__wrapper');
const positionFixed = header.offsetTop;

function scrollHeader() {
  if (window.scrollY > positionFixed) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
};