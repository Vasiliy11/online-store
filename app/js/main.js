$(function(){

    $('.banner-section__slider').slick({
        dots:true,
        prevArrow: '<button class="slick-arrows slick-arrows--prev"><img src="./images/arrow-left.svg" alt=""></button>' ,   
        nextArrow: '<button class="slick-arrows slick-arrows--next"><img src="./images/arrow-right.svg" alt=""></button>' ,
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]   
    });

    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrows product-arrowsprev slick-arrows--prev"><img src="./images/arrow-black-left.svg" alt=""></button>' ,   
        nextArrow: '<button class="slick-arrows product-arrowsnext slick-arrows--next"><img src="./images/arrow-black-right.svg" alt=""></button>'    
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $('.js-range-slider').ionRangeSlider({
        type: 'double',
        grid: false,
    });

    $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $('.rate-yo').rateYo({
        ratedFill: '#1C62CD',
        normalFill: '#c4c4c4',
        spacing: '10px'
    });

    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    });

});