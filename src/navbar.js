'use strict';

// add event on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const navbar = document.querySelector('#sidebar');
const navbarLinks = document.querySelectorAll('.navbar__link');
const navTogglers = document.querySelectorAll('.nav__toggles');
const overlay = document.querySelector('.overlay');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('active');
}

addEventOnElem(navTogglers, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('active');
}

addEventOnElem(navbarLinks, 'click', closeNavbar);

