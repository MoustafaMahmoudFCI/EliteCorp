$(function(){
    'use strict';
    // slider
    let winHeight = $(window).height(),
        upperBarHeight = $('.upper-bar').innerHeight(),
        navbarHeight = $('.navbar').innerHeight();
        
    $('.slider , .carousel-item ').height(winHeight-(upperBarHeight+navbarHeight));


    // featured work 
    $('.featured-work ul li').on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // trigger mixitup plugin (shuffle portoflio images)
    var mixer = mixitup('.featured-work .portoflio');

    // trigger counterup plugin 
    $('[data-toggle = counter-up]').counterUp({
        delay : 10 ,
        time : 1000
    });

    // trigger wow plugin
    new WOW().init();
});