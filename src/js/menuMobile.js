const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btnMenu');
const header = document.querySelector('.headerContainer');

function abreMenu() {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    btnMenu.setAttribute('onclick', 'fechaMenu()');
    header.setAttribute('onmouseleave', 'fechaMenu()');
};

function fechaMenu() {
    menu.style.display = 'none';    
    btnMenu.setAttribute('onclick', 'abreMenu()');
};