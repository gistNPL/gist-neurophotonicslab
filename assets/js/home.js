document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector(".slider");
  if (!slider) return;

  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".slider-dots");

  let index = 0;

  // dot 생성
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function next() {
    index = (index + 1) % slides.length;
    updateSlider();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

});
