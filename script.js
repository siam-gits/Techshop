document.addEventListener("DOMContentLoaded", () => {
  // Login Button Functionality
  const loginButton = document.getElementById("loginButton");
  const loginForm = document.getElementById("loginForm");
  const overlay = document.getElementById("overlay");

  function showLoginForm() {
    loginForm.style.display = "block";
    overlay.style.display = "block";
  }

  function hideLoginForm() {
    loginForm.style.display = "none";
    overlay.style.display = "none";
  }

  loginButton.addEventListener("click", showLoginForm);
  overlay.addEventListener("click", hideLoginForm);

  // Slider Functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slider .slide");
  const totalSlides = slides.length;
  const slideInterval = 3000; // 3 seconds

  function showSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector(
      ".slider"
    ).style.transform = `translateX(${offset}%)`;
  }

  function moveSlide(step) {
    showSlide(currentSlide + step);
  }

  // Initialize slider
  function startSlider() {
    setInterval(() => {
      moveSlide(1);
    }, slideInterval);
  }

  document
    .querySelector(".prev")
    .addEventListener("click", () => moveSlide(-1));
  document.querySelector(".next").addEventListener("click", () => moveSlide(1));

  // Show the first slide on page load and start the slider
  showSlide(currentSlide);
  startSlider();
});
