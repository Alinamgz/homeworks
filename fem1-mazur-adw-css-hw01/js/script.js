const menuBtn = document.querySelector('.menu__btn');
const menuBtnImg = document.querySelector('.fas');
const menu = document.querySelector('.menu');


menuBtn.addEventListener('click', ()=>{

    if (menuBtnImg.classList.contains('fa-bars')){
        menuBtnImg.classList.remove('fa-bars');
        menuBtnImg.classList.add('fa-times');
        menu.classList.add('menu--active');
    } else if (menuBtnImg.classList.contains('fa-times')) {
        menuBtnImg.classList.remove('fa-times');
        menuBtnImg.classList.add('fa-bars');
        menu.classList.remove('menu--active');
    }
});