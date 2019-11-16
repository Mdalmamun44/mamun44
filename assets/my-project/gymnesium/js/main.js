$(function(){
     $('.backtotop').click(function(){
     $('body,html').animate({
         scrollTop:0
     },400);

});
    //    header section
    $dis = $('#header_area').offset().top;
     
    
    $(window).scroll(function(){
        $scrolling = $(this).scrollTop();
        
        if($scrolling >=200){
            $('.backtotop').fadeIn();
        }
        else{
            $('.backtotop').fadeOut();
        }
        
//        for menu fixed
        if($scrolling>=$dis){
            $('#header_area').addClass('fixed_menu');
        }
        else{
            $('#header_area').removeClass('fixed_menu');
        }
    });  
    //    about section 
    $('.venobox').venobox(); 
    
//    our_team slider
     $('.team_slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
         arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
         arrows: false,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
        });
      
    
//    testimonial slider
    $('.testimonial_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
         arrows: false,
  autoplay: true,
 arrows: false,
        dots: true,
  autoplaySpeed: 2000,
         responsive: [

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
   
    //    slider option
        $('.your-class').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
         arrows: false,
  autoplaySpeed: 2000,
             responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
   
    //    counter start
        
        $('.timer').countTo();
});
    
 

//
