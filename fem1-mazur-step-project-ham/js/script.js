// hover for header menu
const menuHover = $('.menu-itm-color');
menuHover.hover(function(){
    return $(this).toggleClass('green-txt underline');
});

//tabs for services
const activeTab = $('.tabbar-itm');

activeTab.on('click', function (e) {

    //adding decoration for active tab
    activeTab.removeClass('tabbar-active');
    $(this).addClass ('tabbar-active' );

    //calling content that belongs to this tab
    const dataValue = $(e.target).data('content');
    $('.tabs-content-itm').hide();
    $('.tabs-content-parent').find(`[data-content = ${dataValue}]`).show();
});
