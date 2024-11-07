document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Toggle navigation menu
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  
    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      updateDarkModeIcon();
      localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
  
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      body.classList.add('dark-mode');
      updateDarkModeIcon();
    }
  
    // Update dark mode icon
    function updateDarkModeIcon() {
      const icon = darkModeToggle.querySelector('i');
      if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });