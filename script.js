document.addEventListener('DOMContentLoaded', () => {
  const toggleInput = document.getElementById('mode-toggle');
  const body = document.body;
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleInput.checked = true;
  } else {
    body.classList.remove('dark-mode');
    toggleInput.checked = false;
  }

 
  if (toggleInput) {
    toggleInput.addEventListener('change', () => {
      if (toggleInput.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  
  const scrollElements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  scrollElements.forEach(el => observer.observe(el));
});
