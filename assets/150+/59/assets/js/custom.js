/**
 *   Template Functions
 *   Version: 1.0.0;
 *   Author: GalibWeb
 *   Copyright: GalibWeb @ 2018
 */

$(document).ready(function () {

    'use strict';

   

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
