jQuery(document).ready(function($) {
	"use strict";

    
    /*------------------------------- Slider ---------------------------------------*/
    $(function(){
        $('#home-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            arrows: true,
            cssEase: 'linear',
            prevArrow:'.home-prev',
            nextArrow:'.home-next'
        });
        $('#about-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            arrows: false
        });
        
        $('#testimonial-slider').slick({
            
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: false,
            prevArrow:'.slick-prev',
            nextArrow:'.slick-next'
        });
        $('#testimonial-slider-arch').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });
        
        $('#slider-success-img').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            arrows: false,
            cssEase: 'linear',
            asNavFor: '#slider-success-text'
            
        });
        $('#slider-success-text').slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            arrows: false,
            cssEase: 'linear',
            asNavFor: '#slider-success-img'
        });
        $('#work-img').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            arrows: false,
            cssEase: 'linear',
            asNavFor: '#work-text'
            
        });
        $('#work-text').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            arrows: true,
            cssEase: 'linear',
            asNavFor: '#work-img',
            prevArrow:'.work-prev',
            nextArrow:'.work-next'
        });
        $('#gallery-slider').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow:'.gal-prev',
            nextArrow:'.gal-next',
            centerMode: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1385,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]
            
        });
        $('#blog-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            arrows: true,
            cssEase: 'linear',
            prevArrow:'.blog-prev',
            nextArrow:'.blog-next'
        });
    });
    /*------------------------------- map ---------------------------------------*/
    $(function() {
        new Maplace({
            show_markers: true,
            map_div: '#map',
            locations: [{
                lat: -6.9516915,
                lon: 107.6722733,
                zoom: 14,
            }]
        }).Load();
        new Maplace({
            show_markers: true,
            map_div: '#mmap',
            locations: [{
                lat: -6.9516915,
                lon: 107.6722733,
                zoom: 14,
            }]
        }).Load();
      
    });
    
    /*------------------------------- map ---------------------------------------*/
    $(function() {
        new WOW().init();
    });
    /*------------------------------- Respnsive menu ---------------------------------------*/
    $(function() {
		$("#btn-nav").on("click",function() {
		  $('.nav-item').toggle('fast', function() {
		  });
		});
	});

    

    /*------------------------------- smootscroll ---------------------------------------*/

    $(function() {
      $('a.button-to-book[href*=#]:not([href=#])').on("click",function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /*------------------------------- Gallery ---------------------------------------*/

    $(function() {
      $("a[data-gal^='prettyPhoto']").prettyPhoto({
          
          social_tools: false
      });
    });
    /*------------------------------- Counter ---------------------------------------*/

    $(function(){

	if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
	}
    });
    /*------------------------------- panel ---------------------------------------*/

    $(function(){

        $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
        if (e.type=='show'){
          $(this).addClass('active');
        }else{
          $(this).removeClass('active');
        }
        });
    });
    /*------------------------------- header ---------------------------------------*/

    $(function(){
       $(window).on("scroll",function(){
            if ($(window).scrollTop() >= 130) {
               $('.cover-z').addClass('fixed-header');
            }
            else {
               $('.cover-z').removeClass('fixed-header');
            }
       });
    });
    
});
    
    