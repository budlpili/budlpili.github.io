'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHight = header.offsetHeight;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHight) {
      header.classList.add('header--dark');
    } else {
      header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함 
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('#arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
// Arrow up 테두리 
  let calcScrollValue = () => {
  let scrollProgress = document.getElementById("arrow-up");
  let progressValue = document.getElementById("arrow-up-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#1b1e26 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

// scroll_down 버튼을 아래로 스크롤시 투명하게 처리함
const scrollDown = document.querySelector('.scroll__down__wrap');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 5) {
    scrollDown.style.opacity = 0;
  } else {
    scrollDown.style.opacity = 1;
  }
});