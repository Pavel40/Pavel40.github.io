// Scrollspy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const sectionMargin = 200;
let lastSection = 0;

window.addEventListener('scroll', () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;
    if (current !== lastSection) {
        navLinks.forEach(link => link.classList.remove('nav-link-active'));
        lastSection = current;
        if (navLinks[current]) {
            navLinks[current].classList.add('nav-link-active');
        }
    }
});


// Dark theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let theme;
if (prefersDarkScheme.matches) {
    theme = 'dark';
}
else if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
}
else {
    theme = 'light'
}

function enableDarkTheme() {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
    theme = 'dark';
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-icon').innerHTML = '<i class="fas fa-sun"></i>';
}

function enableLightTheme() {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
    theme = 'light';
    localStorage.setItem('theme', 'light');
    document.getElementById('theme-icon').innerHTML = '<i class="fas fa-moon"></i>';
}

if (theme == 'dark') {
    enableDarkTheme();
}
else {
    enableLightTheme();
}

const themeButton = document.getElementById('change-theme-button');
themeButton.onclick = () => {
    if (theme == 'light') {
        enableDarkTheme();
    }
    else {
        enableLightTheme()
    }
};
