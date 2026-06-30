import './style.css'

document.querySelector('#app').innerHTML = ``; // The content is in index.html directly to be statically generated or hydrated.
// Actually, with Vite vanilla template, the content usually goes in the DOM and Vite bundles the JS/CSS.
// Since we put everything in index.html, we just need to make sure main.js is loaded for CSS and interactivity.

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
