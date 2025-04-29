const toggleInput = document.getElementById('mode-toggle');
const body = document.body;

toggleInput.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

// localStorage check for saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleInput.checked = true; // Dark
} else {
  body.classList.remove('dark-mode');
  toggleInput.checked = false; // Light
}

// Toggle when interacted with the switch
toggleInput.addEventListener('change', () => {
  if (toggleInput.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Dark
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Light
  }
});
