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
    activeWorkTab.removeClass('active-work-tabbar-itm');
    $(this).addClass('active-work-tabbar-itm');

    const wDataValue = $(e.target).data('content');
    $('.flip-wtc-itm').css({display:'none'});
    $('.work-tabs-content-parent').find(`[data-content = ${wDataValue}]`).css({display:'block'});
});

// load 12 imgs more

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

