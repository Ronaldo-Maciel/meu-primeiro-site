$(document).ready(function(){
	$('.icone-menu').click(function(){
		$('.menu').slideToggle('fast');
	});
    
    $('.btn-ler-mais').click(function(){
        $('.continue-texto').slideToggle('slow');
        $('.continue').css('display', 'none');
    });
});

    
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('fixed');
            $("#logo img").hide();
            $("#logo").addClass("logo-mobile");
            $(".slogan").hide();
            $(".icone-menu").addClass("animate");
        } else {
            $('header').removeClass('fixed');
            $("#logo img").show();
            $("#logo").removeClass("logo-mobile")
            $(".slogan").show();
            $(".icone-menu").removeClass("animate");

        }
    });
