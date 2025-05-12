document.addEventListener('DOMContentLoaded', () => {
  const toggleInput = document.getElementById('mode-toggle');
  const body = document.body;

  if (!toggleInput) return; // return biar ga error kalau elemen missing

  // ngeload theme dari localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleInput.checked = true;
  } else {
    body.classList.remove('dark-mode');
    toggleInput.checked = false;
  }

  toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
