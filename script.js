"use-strict";
const nextBtn = document.querySelector("nav-btn-next");

console.log(nextBtn);
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
nextBtn.addEventListener("click", function (e) {
  page1.classList.toggle("hidden");
  console.log(e);
});
