/**
 *   Template Functions
 *   Version: 1.0.0;
 *   Author: GalibWeb
 *   Copyright: GalibWeb @ 2018
 */

$(document).ready(function () {

    'use strict';


    $(".project-filter").on('click', function () {
        $(".project-filter").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".project-list").isotope({
            filter: selector,
        });
    });

    var $project-list = $('.project-list').isotope({
        // options
    });


});

//owl carousel testimonial
$('.testimonail-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    thumbs: true,
    thumbsPrerendered: true,
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

//filter gallery with bs4
$(".filter-button").click(function () {
var value = $(this).attr('data-filter');

if (value == "all") {
    $('.filter').show('1000');
} else {
    $(".filter").not('.' + value).hide('3000');
    $('.filter').filter('.' + value).show('3000');

}
});



});
