const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdownMenu');
const subLink = document.querySelector('.subLink');
const subMenu = document.querySelector('.subMenu');

function menu(e){
    dropdownMenu.classList.toggle('open');
}
function link(e){
    subMenu.classList.toggle('open');
    this.classList.toggle('arrowOpen');
}

hamburger.addEventListener('click', menu);
subLink.addEventListener('click', link);