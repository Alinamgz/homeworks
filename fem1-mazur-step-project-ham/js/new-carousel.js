// // // what people say carousel v2.  trying to rewrite it on jQuery
//
const sliderBox = $('.sliderbox');
const slides = $('.wps-slider-itm-wrapper');
let slidesAmount = slides.length;
let currentSlide = slides.eq(0);
console.log(slides);
let counter = 0;
// arrows
const next = $('.next');
const prev = $('.previous');
//miniatures
const miniatures = $('.slider-nav-img');
const miniaturesAmount = miniatures.length;
let currentMiniature = miniatures.eq(0);

//miniatures controls

miniatures.on('click', function(){
    miniatures.removeClass('slider-nav-img-active');
    $(this).addClass('slider-nav-img-active');

    counter =$(this).index()-1;

    slides.removeClass('wps-current');
    currentSlide = slides.eq(counter);
    currentSlide.addClass('wps-current');
});


(function ($) {
    $.fn.carousel = function () {
        const navigate = function(direction){

            slides.removeClass('wps-current');
            miniatures.removeClass('slider-nav-img-active');

            counter += direction;

            if (direction === -1 && counter <0 && slidesAmount === miniaturesAmount){
                counter += slidesAmount - 1;
            }
            if (direction === 1 && !slides[counter] && !miniatures[counter]){
                counter = 0;
            }

            currentSlide = slides.eq(counter);
            currentSlide.addClass('wps-current');

            currentMiniature = miniatures.eq(counter);
            currentMiniature.addClass('slider-nav-img-active');

        };

        next.on('click',function(){navigate(1)});
        prev.on('click', function () {navigate(-1)});
    }
}(jQuery));
sliderBox.carousel();

