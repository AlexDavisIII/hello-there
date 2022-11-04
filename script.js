const menuToggle = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const navBar= document.querySelector('.navigation');

menuToggle.addEventListener('click',function(){
    const open = JSON.parse(menuToggle.getAttribute('aria-expanded'));
    menuToggle.setAttribute('aria-expanded', !open);
    menu.hidden = !menu.hidden;

    if (!menu.hidden){
        menu.querySelector('a').focus();
        navBar.classList.add('fullscreenNav');
        menuToggle.classList.add('hideMe');
    }else {
        navBar.classList.remove('fullscreenNav');
        menuToggle.classList.remove('hideMe');
    }
});