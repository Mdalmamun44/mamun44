/**
 *   Template Functions
 *   Version: 1.0.0;
 *   Author: GalibWeb
 *   Copyright: GalibWeb @ 2018
 */

$(document).ready(function () {

    'use strict';

    jQuery(".factorian-preloader-wrap").fadeOut(500);
    jQuery(".factorian-site-preloader-wrap").fadeOut(3000);
    new WOW().init();
    
    $('.navigation').slicknav({
        prependTo:".responsive-menu-wrap",
    });
    
    $('.hompage-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        dots: true,
        thumbs: false,
        thumbsPrerendered: false,
        mouseDrag: false,
        touchDrag: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
            },
            1200: {
                items: 1
            }
        }
    });

    $(".hompage-slides").on("translate.owl.carousel", function () {
        $(".hompage-single-item p").removeClass("animated bounceIn").css("opacity", "0");
        $(".hompage-single-item h2").removeClass("animated fadeInUp").css("opacity", "0");
    });

    $(".hompage-slides").on("translated.owl.carousel", function () {
        $(".hompage-single-item p").addClass("animated bounceIn").css("opacity", "1");
        $(".hompage-single-item h2").addClass("animated fadeInUp").css("opacity", "1");
    });

    $(".gallery-lightbox").magnificPopup({
        type: 'image',
        gallery: {
            enabled: 'true',
        }
    });


});
