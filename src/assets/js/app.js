const $ = document;
function _id(id) {
  return $.querySelector(`#${id}`);
}
function navLinkAction() {
  navMenu.classList.remove('show-menu');
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

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', navLinkAction);
});
// skills section
const skillsContent = $.getElementsByClassName('skills__content'),
  skillsHeader = $.querySelectorAll('.skills__header');
function toggleSkills() {
  let itemClass = this.parentNode.className;
  [...skillsContent].forEach((skillContent) => {
    skillContent.className = 'skills__content skills__close';
  });
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open ';
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});
// 
