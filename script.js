$(function(){

	var button = $(".header__hidden-menu");
	button.click(function(){
		$(".header__hidden-menu-container").slideToggle(400);
  });

	$(".header__call button, .header__hidden-button, .projects-examples__button button, .footer-container button").click(function() {
	  $(".hidden-pop-up-call-container").fadeIn(600);
	});

  $(".hidden-pop-up-call button").click(function(event) {
    $(".hidden-pop-up-call-container").fadeOut(600); 
	});

  $(".projects-container__button button").click(function() {
	  $(".hidden-pop-up-pricelist-container").fadeIn(600);
	});

  $(".hidden-pop-up-pricelist").click(function(event) {
    $(".hidden-pop-up-pricelist-container").fadeOut(600);
	});

  $(".front-container__main-info button").click(function() {
    $(".hidden-pop-up-know-more-container").fadeIn(600);
	});

  $(".hidden-pop-up-know-more").click(function(event) {
    $(".hidden-pop-up-know-more-container").fadeOut(600);
  });

  $(".hidden-container__main-info button").click(function() {
    $(".hidden-pop-up-know-more-container").fadeIn(600);
	});

  $(".hidden-pop-up-know-more").click(function(event) {
    $(".hidden-pop-up-know-more-container").fadeOut(600);
	});	
     	
  $(window).resize(function() {
    if($(window).width() > 1200) {
      $(".header__hidden-menu-container").hide();	
    }
  });	
});

$(function(){

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
    nextEl: '.swiper-button-next',
   	prevEl: '.swiper-button-prev',
 		},

   	pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets',
    	clickable: true,
 		},

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,  
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });
});

$(function() {
  $("header nav").on("click", "a", function(event) {
    event.preventDefault();

    var anchor = $(this).attr("href"),
        top = $(anchor).offset().top;

    $("body,html").animate({scrollTop: top}, 1500);
  });    
});

$(function() {
  $("footer nav").on("click", "a", function(event) {
    event.preventDefault();

    var anchor = $(this).attr("href"),
        top = $(anchor).offset().top;

    $("body,html").animate({scrollTop: top}, 1500);
  });    
});



    



   
      

      



      



 







     	

     	

     
     	

 










