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

// Javascript Correcao Internet Explorer//
var UA = navigator.userAgent;
var html = document.documentElement;
if (UA.indexOf("IEMobile") === -1) {
    if ((UA.indexOf("rv:11.") !== -1) && (!html.classList.contains('ie11')) && window.navigator.msPointerEnabled) {
        html.classList.add("ie11");
    } else if ((UA.indexOf("MSIE 10.") !== -1) && (!html.classList.contains('ie10')) && window.navigator.msPointerEnabled) {
        html.classList.add("ie10");
    }
}