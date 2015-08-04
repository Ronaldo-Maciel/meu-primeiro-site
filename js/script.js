$(document).ready(function(){
// menu fixed
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
// fim menu fixed

// menu mobile
	$('.icone-menu').click(function(){
		$('.menu').slideToggle('fast');
	});
   
    $('.btn-ler-mais').click(function(){
        $('.continue-texto').slideToggle('slow');
        $('.continue').css('display', 'none');
    });
// fim menu mobile

// Touch start mudar icone ronaldo
     $('#sobre').on('touchstart', function(){
      
        $('.icon-figura').addClass('hover');
    });
     var sobre= $("#sobre") ;
    $("body").on('touchstart', function (e) {
        if (sobre.has(e.target).length || e.target == sobre[0])
            return;
        $( ".icon-figura" ).removeClass("hover"); 
    });
// FIM Touch start //
});




    
    
