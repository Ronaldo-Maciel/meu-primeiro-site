var tam = $(window).width();
$(document).ready(function(){
	$('.icone-menu').click(function(){
		$('.menu').toggleClass('active');
	});
  if (tam > 700 ){

        $(".dropdown").hover(function(e){
        $('.sub-menu').toggleClass("active");
    });
    $(".dropdown > a").click(function(e){
    e.preventDefault();
    });
   }
	
    
});
$(function() {
	var wrapnav= $(".wrap-menu") ;
	$("body").on("click", function (e) {
		if (wrapnav.has(e.target).length || e.target == wrapnav[0])
			return;
		$( ".menu" ).removeClass("active");	
	});
});
$(document).ready(function(){
   
 
   if (tam <= 700 ){
     $(window).scroll(function () {
        if ($(this).scrollTop() > 270) {
            $('.wrap-menu').addClass('fixed');
        } else {
            $('.wrap-menu').removeClass('fixed');
        }
    });
     $(".dropdown > a").bind('touchstart', function(e){
        $('.sub-menu').toggleClass("active");
        e.preventDefault();
    });
   }
});


   
   