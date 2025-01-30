// public/dropdown.js

document.addEventListener("DOMContentLoaded", function () {
  // Main dropdown toggle
  const dropdownBtns = document.querySelectorAll(".dropdown-toggle");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("show");
    });
  });
});
