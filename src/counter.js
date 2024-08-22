'use strict';
const qus = document.querySelectorAll(".cart__single")
const plus = document.querySelectorAll(".plus"),
      minus = document.querySelectorAll(".minus"),
      num = document.querySelectorAll(".counter");

window.addEventListener("load", ()=> {
  if (localStorage["num"]) {
    num.innerText = localStorage.getItem("num");
  } else {
    let a = "1";
    num.innerText = a;
  }
});

plus.addEventListener("click", ()=> {
  let a = num.innerText;
  if(a < 10) {
    a++;
    a = (a < 10) ? " " + a : a;
    localStorage.setItem("num", a);
    num.innerText = localStorage.getItem("num");
  }
});

minus.addEventListener("click", ()=> {
  let a = num.innerText;
  if (a > 1) {
  a--;
  a = (a < 10) ? " " + a : a;
  localStorage.setItem("num", a);
  num.innerText = localStorage.getItem("num");
  }
});

