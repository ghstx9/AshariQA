const toggleInput = document.getElementById('mode-toggle');
const body = document.body;

toggleInput.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
