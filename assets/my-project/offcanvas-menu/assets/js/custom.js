/**
*   Template Functions
*   Version: 1.0.0;
*   Author: GalibWeb
*   Copyright: GalibWeb @ 2018
*/

$(document).ready(function() {
    $('.portfolio-list').masonry({

            percentPosition: true,

        });

$(".menu-trigger").on('click', function(){
    $(".offcanvas-menu").addClass("active");
});
    $(".menu-close i").on('click', function(){
    $(".offcanvas-menu").removeClass("active");
});
    });

    