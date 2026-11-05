/* js/components/theme.js */
export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    
    function setTheme(theme) {
        if (theme === 'system') {
            delete root.dataset.theme;
            localStorage.removeItem('theme');
            if(themeIcon) themeIcon.textContent = 'Auto';
        } else {
            root.dataset.theme = theme;
            localStorage.setItem('theme', theme);
            if(themeIcon) themeIcon.textContent = theme === 'dark' ? 'Dark' : 'Light';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
    else setTheme('system');

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (!root.dataset.theme) setTheme('dark');
            else if (root.dataset.theme === 'dark') setTheme('light');
            else setTheme('system');
        });
    }
}