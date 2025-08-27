// === Smooth Scroll for Navigation ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// === Dynamic Footer Year ===
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// === Simple Mobile Nav Toggle (optional) ===
// If you want a hamburger menu for small screens later
// just add a button with id="menu-toggle" and class "nav-links"
const toggle = document.getElementById("menu-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });
}
