const $ = document;
function _id(id) {
  return $.querySelector(`#${id}`);
}
// menu
const navMenu = _id('nav-menu'),
  navToggle = _id('nav-toggle'),
  navClose = _id('nav-close');
const navLinks = $.querySelectorAll('.nav__link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}

function navLinkAction() {
  navMenu.classList.remove('show-menu');
}

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', navLinkAction);
});
