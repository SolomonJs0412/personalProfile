function clearTheme() {
    body.className = "";
}

const body = document.body;
const theme = localStorage.getItem('theme');

if (theme) {
    clearTheme();
    body.classList.add(theme);
}

