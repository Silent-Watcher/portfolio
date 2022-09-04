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
// swiper slider in portfolio section
var swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // keyboard: true,
});
// testimonial slider
let swiper2 = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});
// scroll spy
const sections = $.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const [sectionHeight, sectionTop] = [
      current.offsetHeight,
      current.offsetTop - 50,
    ];
    let sectionId = current.id;
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      $.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add(
        'active-link'
      );
    } else {
      $.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove(
        'active-link'
      );
    }
  });
}
window.addEventListener('scroll', scrollActive);
//
// change header bg
function scrollHeader() {
  const nav = _id('header');
  if (this.scrollY > 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// scroll to top btn
window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = _id('scroll-up');

  if (this.scrollY > 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
// dark/light theme
const themeButton = _id('theme-button');
const [darkTheme, iconTheme] = ['dark-theme', 'uil-sun'];
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
  return $.body.classList.contains(darkTheme) ? 'dark' : 'light';
};
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
};

if (selectedTheme) {
  $.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  $.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

