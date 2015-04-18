$.fn.exist = function(){ return $(this).length > 0; }
function get_width() {
	return $(window).width();
}
$(function(){
	$('ul.nav li.nav-dropdown').hover(function() {
		if (get_width() >= 768) {
			$(this).addClass('open');
		}
	}, function() {
		if (get_width() >= 768) {
			$(this).removeClass('open');
		}
	});
	$('.have-sub .panel-title').append('<i class="glyphicon glyphicon-triangle-left pull-left"></i>');
	$('.have-sub a').on('click',function(){
		$('.have-sub .panel-title a').not(this).next('i').removeClass('glyphicon glyphicon-triangle-bottom pull-left');
		$('.have-sub .panel-title a').not(this).next('i').addClass('glyphicon glyphicon-triangle-left pull-left');
		$(this).next('i').toggleClass('glyphicon glyphicon-triangle-left pull-left glyphicon glyphicon-triangle-bottom pull-left');
	});
	$('.product-loader').hide();
	$('.product-thumb-image a').on('click',function(){
		var thumb = $(this).attr('href');
		$('.product-loader').show();
		$('.product-main-image img').attr('src',thumb);
		$('.product-main-image img').load(function(){
			$('.product-loader').hide();
		})
		return false
	})
	if ($('.product-main-image').exist()) {
		$('.product-main-image').zoom();
	}

	if ($('.bxslider').exist()) {
	    $('.bxslider').bxSlider({
	        auto: true,
	        pause: 3000,
	        pager: false
	    });
	}
        
	if ($('.bxslider2').exist()) {
	    $('.bxslider2').bxSlider({

    slideMargin: 10,
    minSlides: 2,
    maxSlides: 3,
    slideWidth: 300,
    moveSlides: 1,
    auto: true,
    pause: 3000,
    autoHover: true,
    captions: true,
    pager: false,
    adaptiveHeight: true,
//    controls: false,
    
	    });
	}

	if ($('.input-qty').exist()) {
		$('.input-qty').TouchSpin();
	}
    if ($(window).width() > 750) {
    	$('.link-p img').centerImage();
    }
    $(window).resize(function(){
    	var width = $(this).width();
    	if (width > 750) {
    		$('.link-p img').centerImage();
    		$('.link-p img').removeClass('def-img');
    	} else {
    		$('.link-p img').addClass('def-img');
    	}
    })
    $(window).scroll(function(){
		if ($(this).scrollTop()>70) {
			$('.back-top').fadeIn();
		} else {
			$('.back-top').fadeOut();
		}
	});
        
if ($('.slider1').exist()) {
$('.slider1').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10
});
}
  
})

//$(document).ready(function(){
//  $('.slider4').bxSlider({
//    slideWidth: 300,
//    minSlides: 2,
//    maxSlides: 3,
//    moveSlides: 1,
//    slideMargin: 10
//  });
//});