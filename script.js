const toggleInput = document.getElementById('mode-toggle');
const body = document.body;

// localStorage check to save theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleInput.checked = true; // Keep the switch in dark mode
} else {
  body.classList.remove('dark-mode');
  toggleInput.checked = false; // Keep the switch in light mode
}

// Toggle switch for theme
toggleInput.addEventListener('change', () => {
  if (toggleInput.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Save the theme as dark
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Save the theme as light
  }
});
