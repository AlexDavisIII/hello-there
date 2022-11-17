const menuToggle = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const navBar= document.querySelector('.navigation');
const mediaQuery = window.matchMedia('(min-width: 650px)');

const mainNavigation = document.getElementById("navigation");
const hamburger = document.getElementById("menuNavigationBtn");
const menuList = document.getElementById("menuNavigationBtn")


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



function buttonDetailToggle(){
    /*if the media query matches the min-width: 650, this toggles the hidden attribute
    of the menu list (so when the hamburger menu reappears the menu stays hidden) and 
    removes the fullscreenNav I made.*/
    if(mediaQuery.matches){
        mainNavigation.classList.remove("fullscreenNav");
        menu.toggleAttribute("hidden");
    }
    
}

mediaQuery.addEventListener('change', buttonDetailToggle);