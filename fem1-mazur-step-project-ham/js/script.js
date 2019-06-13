
// hover for header menu
const menuHover = $('.menu-itm-color');
menuHover.hover(function(){
    return $(this).toggleClass('green-txt underline');
});

//tabs for services
const activeTab = $('.services-tabbar-itm');

activeTab.on('click', function (e) {

    //adding decoration for active tab
    activeTab.removeClass('services-tabbar-active');
    $(this).addClass ('services-tabbar-active' );

    //calling content that belongs to this tab
    const sDataValue = $(e.target).data('content');
    $('.services-tabs-content-itm').hide();
    $('.services-tabs-content-parent').find(`[data-content = ${sDataValue}]`).show();
});


// tabs for our work

const activeWorkTab = $('.work-tabbar-itm');

activeWorkTab.on('click', function (e) {

    // decoration for active tab
    activeWorkTab.removeClass('active-work-tabbar-itm');
    $(this).addClass('active-work-tabbar-itm');

    const wDataValue = $(e.target).data('content');
    //first part - for tab All, after 'else' - for other tabs
    if (wDataValue === 'wAll'){
        $('.flip-wtc-itm').css({display: 'none'});
        $('.first-twelve').css({display:'block'});
        workBtn.style.display = 'block';
    } else {
        $('.flip-wtc-itm').css({display: 'none'});
        $('.work-tabs-content-parent').find(`[data-content = ${wDataValue}]`).css({display: 'block'});
    }
});

// load 12 more cards

const hiddenImgs = document.querySelectorAll('.hidden-itm');
const workBtn = document.getElementById('workBtn');
const showImgs = () => {
    hiddenImgs.forEach((i) => {
        i.style.display = 'block';
    });

    // and hide button
    workBtn.style.display = 'none';
};

workBtn.addEventListener('click', showImgs);


// What people say carousel

// arrow navigation
const sliderBox = document.querySelector('.sliderbox');
const slides = document.querySelectorAll('.wps-slider-itm-wrapper');
let slidesCounter = 0;
const amount = slides.length;
let currentSlide = slides[0];
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');

carousel = (function(){
    function arrowNavigate(direction){
        currentSlide.classList.remove('wps-current');
        slidesCounter = slidesCounter + direction;
        if (direction === -1 &&
            slidesCounter < 0) {
            slidesCounter = amount - 1;
        }
        if (direction === 1 &&
            !slides[slidesCounter]) {
            slidesCounter = 0;
        }
        currentSlide = slides[slidesCounter];
        currentSlide.classList.add('wps-current');
    }

    next.addEventListener('click', function() {
        arrowNavigate(1);
    });

    prev.addEventListener('click', function() {
        arrowNavigate(-1);
    });
    arrowNavigate(0);
})();

