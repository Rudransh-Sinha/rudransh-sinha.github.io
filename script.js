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

// === Side-Sliding Nav Toggle ===
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    body.classList.toggle("menu-open");
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      body.classList.remove("menu-open");
    }
  });
});
