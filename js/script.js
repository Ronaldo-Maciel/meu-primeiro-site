$(document).ready(function(){
// menu fixed
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll > 130) {
            $('header').addClass('fixed');
            $("#logo img").hide();
            $("#logo").addClass("logo-mobile");
            $(".slogan").hide();
            $(".icone-menu").addClass("animate");
            $(".menu ul").addClass("margin-active");
            var array = [ $("#home"), $("#portfolio"), $("#servico"), $("#sobre"), $("#contato") ]
            $(array).each(function(i) {
            if ($(this).position().top <= windscroll +130) {
                $('.menu a.active').removeClass('active');
                $('.menu a').eq(i).addClass('active');
                }
            });

        } else {
            $('header').removeClass('fixed');
            $("#logo img").show();
            $("#logo").removeClass("logo-mobile")
            $(".slogan").show();
            $(".icone-menu").removeClass("animate");
            $(".menu ul").removeClass("margin-active");
            $('.menu a.active').removeClass('active');
 
        }
    });

           
// fim menu fixed

  // banner
  
    $(".banner .slide:eq(0)").addClass("active");
    $(".slide.active span").addClass("animate");   

    $(".next").click(function(){
    
    if($(".active").next().size()){
  
    $(".active").removeClass("active").next().addClass("active");
    }else{
       
    $(".active").removeClass("active");
    $(".banner .slide:eq(0)").addClass("active");
    };
    if($(".banner .slide.active span.animate").next().size()){
        $(".animate").removeClass("animate").next().addClass("animate");
       
    }else{
        $(".animate").removeClass("animate");
        $(".slide.active span").addClass("animate");
    }
    
    if($(".slide:eq(1)").hasClass("active")){
        console.log("sou eu rapaz");
        $(".background-top").addClass("bg-roxo");
    }else{
        $(".background-top").removeClass("bg-roxo");
    }
    if($(".slide:eq(2)").hasClass("active")){
        console.log("sou eu rapaz");
        $(".background-top").addClass("bg-preto");
    }else{
        $(".background-top").removeClass("bg-preto");
    }

});
    
    
});

$(".prev").click(function(){
        if($(".active").prev().size()){
        $(".active").removeClass("active").prev().addClass("active");
        
    }else{
        $(".active").removeClass("active");
        $(".banner .slide:eq(2)").addClass("active");
    };
    if($(".slide.active span.animate").prev().size()){
        $(".animate").removeClass("animate").prev().addClass("animate");
    }else{
        $(".animate").removeClass("animate");
        $(".slide.active span").addClass("animate");
    }
    if($(".slide:eq(1)").hasClass("active")){
       
        $(".background-top").addClass("bg-roxo");
    }else{
        $(".background-top").removeClass("bg-roxo");
    }
    if($(".slide:eq(2)").hasClass("active")){
       
        $(".background-top").addClass("bg-preto");
    }else{
        $(".background-top").removeClass("bg-preto");
    }
    
});
// fim banner

// efeito scrollTo


    $('a').click(function(){
        $.scrollTo( this.hash || 0, 800);
    });
    $('.banner-full a').click(function(e){
        $.scrollTo( this.hash || 0, 800);
        e.preventDefault();
    });




/*
    Navegacacao scroll (VOLTAR ao TOPO)
*/
$(".voltar-topo").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
// fim ScrollTo

// menu mobile
	$('.icone-menu').click(function(){
		$('.menu').toggleClass('active');
        $('header').toggleClass('color');
	});
    $('.menu a').click(function(){
        $('.menu').removeClass('active');
        $('header').removeClass('color');
    });
   
    $('.btn-ler-mais').click(function(){
        $('.continue-texto').slideToggle('slow');
        $('.continue').css('display', 'none');
    });
// fim menu mobile

// Touch start mudar icone ronaldo
    $('#sobre').bind('touchstart', function(){
      
        $('.icon-figura').addClass('hover');
    });
     var sobre= $("#sobre") ;
    $("body").bind('touchstart', function (e) {
        if (sobre.has(e.target).length || e.target == sobre[0])
            return;
        $( ".icon-figura" ).removeClass("hover"); 
    });

// FIM Touch start //
// imgs load
$('#wrap-emkt img').fadeInScroll();
$('#wrap-emkt img').fadeInScroll({
minDistance:  70 * $(window).height() / 100
});



    
    
