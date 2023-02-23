const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const normalButton = document.getElementById('normal');
const body = document.body;

darkButton.onclick = () => {
    body.classList.remove('normal');
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}
normalButton.onclick = () => {
    body.classList.remove('dark');
    body.classList.remove('light');
    body.classList.add('normal');
    localStorage.setItem('theme', 'normal');
}
lightButton.onclick = () => {
    body.classList.remove('dark');
    body.classList.remove('normal');
    body.classList.add('light');
   localStorage.setItem('theme', 'light');
}

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}