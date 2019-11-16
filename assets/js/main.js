(function ($) {

    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('#preloader').delay(450).fadeOut('slow');
    })

    // wow animation script
    //new WOW().init();

    // Navbar animation on scroll
    $(window).scroll(function () {
        if ($(document).scrollTop() > 5) {
            $('.navbar').addClass('scrolling-header');
        } else {
            $('.navbar').removeClass('scrolling-header');
        }
    });
    //flipbox..........
    $(document).ready(function() {
            // set up hover panels
            // although this can be done without JavaScript, we've attached these events
            // because it causes the hover to be triggered when the element is tapped on a touch device
            $('.hover').hover(function() {
                $(this).addClass('flip');
            }, function() {
                $(this).removeClass('flip');
            });
        });

// Preloader
    $(window).on('load', function() { 
      $('.preloader').delay(350).fadeOut('slow'); 
    })

    // owl-carousel for main-slider 
    $('.main-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoplaySpeed: 1200,
        navText: [
                '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Light box - Portfolio Gallery
    lightbox.option({
        'imageFadeDuration': 500,
        'resizeDuration': 500,
        'wrapAround': true
    })


    // CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Filtering
    if ($('.filtr-container').length) {
        $('.filtr-container').imagesLoaded(function () {
            var filterizr = $('.filtr-container').filterizr();
        });
    }

    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });

    // Water ripples animation
    $('#water-animation').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });

    //Scroll-Up
    dyscrollup.init({
        showafter: 500,
        scrolldelay: 1000,
        position: 'right',
        shape: 'squre',
        width: "20",
        height: "20"
    });

    // circleMagic Animation
    $('.header').circleMagic({
        elem: '.header',
        radius: 35,
        densety: .3,
        color: 'rgba(255,255,255, .4)',
        // color: 'random',
        clearOffset: .3
    });



})(window.jQuery);
