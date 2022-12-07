document.querySelectorAll('#themes a').forEach(theme => {
    theme.onclick = () => {
        setTheme(theme.id);
    }
})

function setTheme(name) {
    clearTheme();
    body.classList.add(name);
    localStorage.setItem('theme', name);
}
