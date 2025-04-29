const toggleInput = document.getElementById('mode-toggle');
const body = document.body;

// localStorage check for saved theme
function applySavedTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleInput.checked = true;
  } else {
    body.classList.remove('dark-mode');
    toggleInput.checked = false;
  }
}

// Update the datetime
function updateDateTime() {
  const now = new Date();
  const isDark = body.classList.contains('dark-mode');

  const options = {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: !isDark // 12-hour for light, 24-hour for dark
  };

  const formatted = now.toLocaleString('en-US', options);
  const datetimeElement = document.getElementById('datetime');
  if (datetimeElement) {
    datetimeElement.textContent = formatted;
  }
}

// Initial theme setup
applySavedTheme();

// Update the datetime immediately and every minute
updateDateTime();
setInterval(updateDateTime, 60000);

// Toggle when interacted with the switch
toggleInput.addEventListener('change', () => {
  if (toggleInput.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
  updateDateTime(); // Update time format immediately when theme changes
});
