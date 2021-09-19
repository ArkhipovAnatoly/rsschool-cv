const burgerButton = document.querySelector('.menu__burger-button');
const menu = document.querySelector('.menu-nav');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('close');
  menu.classList.toggle('open');
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 970) {
    if (burgerButton.classList.contains('close')) {
      burgerButton.classList.toggle('close');
      menu.classList.toggle('open');
    }
  }
});
