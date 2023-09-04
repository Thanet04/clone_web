document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
      const navbar = document.querySelector(".navbar-menu");
      navbar.classList.toggle("active");
    });
  });
  