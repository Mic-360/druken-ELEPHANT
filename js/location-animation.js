$(document).ready(function() {
        
     if(window.innerWidth > 800){
       var controller = new ScrollMagic.Controller();
    
       var tween1 = new TimelineMax()
            .staggerFrom('.locationBox', 1.5, {x: -100, autoAlpha: 0, ease: Power4.easeOut}, .30)            
    
        var scene1 = new ScrollMagic.Scene({
            triggerElement: ".locationListContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween1)
//        .addIndicators()  
        .addTo(controller);   
		   
        var tween2 = new TimelineMax()
            .from('.locationsSearchTitle', .5, {x: -100, autoAlpha: 0, ease: Power0.easeOut}) 
            .from('.searchBox', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})
    
        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".locationsSearchContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween2)
//        .addIndicators()  
        .addTo(controller);   
		   
         
   }
    
    
//Parallax Banner Imgae
    
        var movementStrength = 5;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $(".locationBanner").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 0.01;
          $('.locationBanner').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    
    
   //Store Count in home page 
    
    $(window).on("load",startCounter);
    function startCounter() {
    // var hT = jQuery('.locationBanner').offset().top,
       var hH = jQuery('.locationBanner').outerHeight(),
        wH = jQuery(window).height();
    if ($(window).scrollTop() > hH-wH) {
        $(window).off("scroll", startCounter);
        $('.storeCount').each(function () {
            var $this = jQuery(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
    
    
});
