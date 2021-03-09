$(function(){
    //back -to- top start
    
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    });
    
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        
        if(scrolling>300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling>100){
        $('.navbar').addClass('bg') 
        }
        else{
            $('.navbar').removeClass('bg')
        }
    });
    //back -to- top end
    
   $(window).on('load', function(){
       $('.loading').delay(500).fadeOut(500);
   });
    
    
    
});