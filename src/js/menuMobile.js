const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btnMenu');

function abreMenu() {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    btnMenu.setAttribute('onclick', 'fechaMenu()');
};

function fechaMenu() {
    menu.style.display = 'none';    
    btnMenu.setAttribute('onclick', 'abreMenu()');
};