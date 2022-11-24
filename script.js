// burger menu button
let menuBtn = document.querySelector(".menu1-btn");
let menu = document.querySelector(".nav");
let menuList = document.querySelector(".menu1 a");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
