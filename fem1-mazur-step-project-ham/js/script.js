
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

const sliderBox = document.querySelector('.sliderbox');
const slides = document.querySelectorAll('.wps-slider-itm-wrapper');
let slidesCounter = 0;
const amount = slides.length;
let currentSlide = slides[0];
// arrows
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
//miniatures
const ava = document.getElementById('ava');
const andy = document.getElementById('andy');
const hasan = document.getElementById('hasan');
const jennifer = document.getElementById('jennifer');

carousel = (function(){
    function arrowNavigate(direction){
        // arrows controls
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
        // for miniatures controls
        switch (direction) {
            case 'ava':
                slidesCounter = 0;
                break;
            case 'andy':
                slidesCounter = 1;
                break;
            case 'hasan':
                slidesCounter = 2;
                break;
            case 'jennifer':
                slidesCounter = 3;
                break
        }

        // decoration for active miniature
        switch (slidesCounter) {
            case 0:
                ava.classList.add('slider-nav-img-active');
                andy.classList.remove('slider-nav-img-active');
                hasan.classList.remove('slider-nav-img-active');
                jennifer.classList.remove('slider-nav-img-active');
                break;
            case 1:
                andy.classList.add('slider-nav-img-active');
                hasan.classList.remove('slider-nav-img-active');
                jennifer.classList.remove('slider-nav-img-active');
                ava.classList.remove('slider-nav-img-active');
                break;
            case 2:
                hasan.classList.add('slider-nav-img-active');
                jennifer.classList.remove('slider-nav-img-active');
                ava.classList.remove('slider-nav-img-active');
                andy.classList.remove('slider-nav-img-active');
                break;
            case 3:
                jennifer.classList.add('slider-nav-img-active');
                ava.classList.remove('slider-nav-img-active');
                andy.classList.remove('slider-nav-img-active');
                hasan.classList.remove('slider-nav-img-active');
                break
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

    ava.addEventListener('click', function () {
        arrowNavigate('ava')
    });
    andy.addEventListener('click', function () {
        arrowNavigate('andy')

    });
    hasan.addEventListener('click', function () {
        arrowNavigate('hasan')

    });
    jennifer.addEventListener('click', function () {
        arrowNavigate('jennifer')
    });
})();

