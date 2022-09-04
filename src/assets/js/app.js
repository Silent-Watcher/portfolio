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
// qualification
const tabs = $.querySelectorAll('[data-target]'),
  tabContents = $.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = $.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');
    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});
// services => modal
const modalViews = $.querySelectorAll('.services__modal'),
  modalBtns = $.querySelectorAll('.services__button'),
  modalCloses = $.querySelectorAll('.service__modal-close');
let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', closeModals);
});
function closeModals() {
  modalViews.forEach((modalView) => {
    modalView.classList.remove('active-modal');
  });
}
$.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') closeModals();
});
//
