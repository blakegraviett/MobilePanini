const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const normalButton = document.getElementById('normal');
const body = document.body;

darkButton.onclick = () => {
    body.classList.replace('normal', 'dark');
    body.classList.replace('light', 'dark');
}

normalButton.onclick = () => {
    body.classList.replace('dark', 'normal');
    body.classList.replace('light', 'normal');
}
lightButton.onclick = () => {
    body.classList.replace('normal', 'light');
    body.classList.replace('dark', 'light');
}