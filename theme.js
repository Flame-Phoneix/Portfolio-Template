const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark-theme';

// Apply saved theme on page load
if (currentTheme === 'light-theme') {
    htmlElement.classList.add('light-theme');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('light-theme');
    
    const isLightTheme = htmlElement.classList.contains('light-theme');
    
    // Save preference to localStorage
    localStorage.setItem('theme', isLightTheme ? 'light-theme' : 'dark-theme');
});
