// hover for header menu
const menuHover = $('.menu-itm-color');
menuHover.hover(function(){
    $(this).toggleClass('green-txt underline');
});

//tabs for services
$('.services-tabbar-itm').on('click', (e) => {
    const dataValue = $(e.target).data('content');
    $('.tabs-content-itm').hide();
    $('.tabs-content-paarent').find(`[data-content = ${dataValue}]`).show();
});