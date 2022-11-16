const menuToggle = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');
const navBar= document.querySelector('.navigation');
/*const menuLine = document.querySelector('.line');*/
const contactButton = document.querySelector('.contactButton');
const contactButtonLink=document.querySelector('.contactButton p');

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



contactButton.addEventListener('mouseover',function(){
      contactButtonLink.target.style.color ="green";
})


menuToggle.addEventListener('mouseover',function(){
    menuLine.target.style.color="red";
    /*
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
    }*/
});