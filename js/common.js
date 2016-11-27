$(window).resize(function() {
	var vw = $(window).width();
	var vh = $(window).height();
	if (vw > 767 && !$(".nav-main").is(":visible")){
		$('.nav-main').css({'display': ''});
	}
	
	if (window.is_wide && vw <= 767){
		window.is_wide = false;
		$('.content-new ul li a span .after, .sale_content ul li a span .after').html('Подробнее').css({'height': '40px'});
	}
	if (!window.is_wide && vw > 767){
		window.is_wide = true;
		$('.content-new ul li a span .after, .sale_content ul li a span .after').html('Смотреть в каталоге').css({'height': '55px'});;
	}
	
	var minH = 650;
	if (vw/vh > 2144/844){
		minH = parseInt(vw*844/2124);
		if (minH < 650) minH = 650;
	}
	$('#header').css({'min-height': minH+'px', 'height': vh+'px'});
	
		
	//min-height:650px;
});

$(window).scroll(function() {
	var vh = $('#header').height() - $('.nav').height();//$(window).height();
	var scrollPos = $(window).scrollTop();
	var nav = $('.nav');
	

	if (nav.hasClass('fixed') && scrollPos < vh){
		nav.removeClass('fixed');
	}
	
	if (!nav.hasClass('fixed') && scrollPos >= vh){
		nav.addClass('fixed');
	}
});

$(document).ready(function(){
	var vw = $(window).width();
	window.is_wide = vw > 767;

	$('.team-phone a, a.bottom-phone').bind('click', function(event){
		if (window.is_wide) event.preventDefault();
	});

	$('#nav-mob').bind('click', function(){
		if ($('.nav').hasClass('active')){
			$('.nav').removeClass('active');
			$('.nav .nav-main').slideUp(400);
		} else {
			$('.nav').addClass('active');
			$('.nav .nav-main').slideDown(400);
		}
	});

	$('#nav-mob-logo, .nav-logo, #bottom-logo').bind('click', function(){
		$('html, body').animate({scrollTop: 0}, 800);
	});
	
	$('.content-new ul li a span').append('<div class="before"></div><div class="after">'+(window.is_wide ? 'Смотреть в каталоге' : 'Подробнее')+'</div>');
	$('.sale_content ul li a span').append('<div class="before"></div><div class="after">'+(window.is_wide ? 'Смотреть в каталоге' : 'Подробнее')+'</div>');


	$('.content-new ul li a, .sale_content ul li a').bind('mouseenter', function(){
		$(this).find('.before').fadeTo(300, .25);
		$(this).find('.after').stop(true).slideToggle({direction: "up"}, 300);
	});
	$('.content-new ul li a, .sale_content ul li a').bind('mouseleave', function(){
		$(this).find('.before').fadeTo(300, 0);
		$(this).find('.after').stop(true).slideToggle({direction: "up"}, 300);
	});
	
	/*$('.content-new ul li a, .sale_content ul li a').bind('touchend', function(){
		window.location = $(this).attr('href');
	});*/
	
	window.touchmoved = false;
	$('.content-new ul li a, .sale_content ul li a').on('touchend', function(e){
		if(touchmoved != true){
			window.location = $(this).attr('href');
			//$(this).prev('input').val("");
		}
	}).on('touchmove', function(e){
		window.touchmoved = true;
	}).on('touchstart', function(){
		window.touchmoved = false;
	});


	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		var to = $(anchor.attr('href')).offset().top;
		if (to > 50) to -= 65;
		$('html, body').stop().animate({
			scrollTop: to
		}, 1000);
		if (!window.is_wide) $('.nav-mob-btn').trigger('click');
		e.preventDefault();
	});
	
	
	$(window).resize();
    
});

function validate(){
	$('#form input, #form textarea').removeClass('error');
	
	var name = $('#form input[name="name"]').val().trim();
	var phone = $('#form input[name="phone"]').val().trim();
	var email = $('#form input[name="email"]').val().trim();
	var message = $('#form textarea[name="message"]').val().trim();
	var error = false;
	
	if (name.length == 0){
		$('#form input[name="name"]').addClass('error');
		error = true;
	}

	if (phone.length == 0){ // phone.replace(/[\D]/g, "").length < 10
		$('#form input[name="phone"]').addClass('error');
		error = true;
	}

	if (!email.match(/^[a-z0-9]+([_\.-][a-z0-9_]+)*@[a-z0-9]+([\.-][a-z0-9]+)*\.[a-z]{2,}$/i)){
		$('#form input[name="email"]').addClass('error');
		error = true;
	}
	
	if (message.length == 0){
		$('#form textarea[name="message"]').addClass('error');
		error = true;
	}
	
	return !error;
}

/*
$(document)
	.bind('touchstart', function(e){ 
	  touchStartPos = $(window).scrollTop();
	})
	.bind('touchend', function(e){
		var distance = touchStartPos - $(window).scrollTop();
		var $clickableItem; 
		$clickableItem.addClass("touched");      

		if (distance > 20 || distance < -20){
		} else {
			whateverFunctionYouWantToTriggerOnTapOrClick()
		}
	});


	$($clickableItem).live('click',function(e){
		if ($(this).hasClass("touched")){
			$(this).removeClass("touched");
		} else {
			whateverFunctionYouWantToTriggerOnTapOrClick()
		}
	});
*/