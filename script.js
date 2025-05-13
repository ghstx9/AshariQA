document.addEventListener('DOMContentLoaded', () => {
  const toggleInput = document.getElementById('mode-toggle');
  const body = document.body;
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  // ngeload theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleInput.checked = true;
  } else {
    body.classList.remove('dark-mode');
    toggleInput.checked = false;
  }

  // theme toggle handler
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

  // hamburger toggle handler
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
