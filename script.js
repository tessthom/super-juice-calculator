// Nav bar toggler
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

// Get current year for footer
const getCurrentYear = () => {
  return new Date().getFullYear();
};

let year = document.querySelector('.year');
year.textContent = getCurrentYear();