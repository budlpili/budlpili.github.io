function resetClass(element, classname){
  element.classList.remove(classname);
}
document.getElementsByClassName("show__signup")[0].addEventListener("click",function(){
  let form = document.getElementsByClassName("form__login")[0];
  resetClass(form, "signin");
  resetClass(form, "reset");
  form.classList.add("signup");
  document.getElementById("submit__btn").innerText = "가입하기";
});
document.getElementsByClassName("show__signin")[0].addEventListener("click",function(){
  let form = document.getElementsByClassName("form__login")[0];
  resetClass(form, "signup");
  resetClass(form, "reset");
  form.classList.add("signin");
  document.getElementById("submit__btn").innerText = "로그인";
});
document.getElementsByClassName("show__reset")[0].addEventListener("click",function(){
  let form = document.getElementsByClassName("form__login")[0];
  resetClass(form, "signup");
  resetClass(form, "signin");
  form.classList.add("reset");
  document.getElementById("submit__btn").innerText = "비밀번호 찾기";
});