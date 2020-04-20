$(function(){

	var button = $(".header__hidden-menu");
	button.click(function(){
		$(".header__hidden-menu-container").slideToggle(400);
  });

	$(".form-fadein").click(function() {
	  $(".hidden-pop-up-call-container").fadeToggle(600);
	});

  $(".pricelist-fadein").click(function() {
	  $(".hidden-pop-up-pricelist-container").fadeToggle(600);
	});

  $(".know-more-fadein").click(function() {
    $(".hidden-pop-up-know-more-container").fadeToggle(600);
	});
 	
  $(".hidden-pop-up__cross").click(function() {
    $(".hidden-pop-up-call-container, .hidden-pop-up-know-more-container, .hidden-pop-up-pricelist-container").fadeOut(600)
    
   $("input").val(''); // Очищение полей после закрития окна

  });


  $(window).resize(function() {  // Скрывание открытово меню 
    if($(window).width() > 1200) {
      $(".header__hidden-menu-container").hide();	
    }
  });	
});

$(function(){  // Численность картинок Свайпера при различном разрешении

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

$(function() { // Плавный скрол по якорям
  $(".anchor-animation").on("click", "a", function(event) {
    event.preventDefault();

    var anchor = $(this).attr("href"),
        top = $(anchor).offset().top;

    $("body,html").animate({scrollTop: top}, 1500);
  });    
});

$(function() {   // Закрытие окна по клику в сторону

  $(document).mouseup(function(e) {

    let div = $(".hidden-pop-up-call-container, .hidden-pop-up-pricelist-container, .hidden-pop-up-know-more-container");

    if(!div.is(e.target) && div.has(e.target).length === 0) {

      div.fadeOut(600);

      $("input").val('');

    }

  });

});

$(document).ready(function() {  // Validation

    $('form').each(function() {  // Эррор при пустом поле
      $(this).validate({
        errorPlacement(error, element) {
          return true;
        },
        focusInvalid: false,
        rules: {
          Телефон: {
            required: true,
          },
          Имя: {
            required: true,
            maxlength: 5,
          },
        },

    submitHandler(form) {  // Отправка формы
    let th = $(form);

    $.ajax ({
      type: "post",
      url: "mail.php",
      data: th.serialize(),

    }).done(() => {

      th.trigger("reset");

    });

    return false;
  }
  
     });
    });
  });












    



   
      

      



      



 







     	

     	

     
     	

 










