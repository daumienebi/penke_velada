const menuButton = document.querySelector('.menuButton');
const closeButton = document.querySelector('.closeButton');
const sidebar = document.querySelector('.sidebar');

function toggleMenu() {
    sidebar.classList.toggle('show-menu');
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);


