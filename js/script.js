$(document).ready(function(){
	$('.icone-menu').click(function(){
		$('.menu').slideToggle('fast');
	});
});
    
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });