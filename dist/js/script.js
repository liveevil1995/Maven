$(document).ready(function() {
    $('.slider-demand').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/arrow_prev.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/arrow_next.svg"></button>',
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
              }
            },
        ]
    });
    $('.slider-reviews').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/arrow_prev.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/arrow_next.svg"></button>',
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
    });
});