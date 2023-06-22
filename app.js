const menu = document.getElementById('menu');
const ham = document.getElementById('ham-menu');
const hamtop = document.getElementById('top');
const mid = document.getElementById('mid');
const bottom = document.getElementById('bottom');

ham.addEventListener('click', () => {
    hamtop.classList.toggle("top-clicked");
    mid.classList.toggle("mid-clicked")
    bottom.classList.toggle("bottom-clicked");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
})