"strict";
const scrollContainer = document.querySelector(".slider-container");
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const screenSize = screen.height;
scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += screenSize;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= screenSize;
});
