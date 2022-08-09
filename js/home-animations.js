$(document).ready(function(){
    
    if($(window).innerWidth() > 800){
        var controller = new ScrollMagic.Controller();
        
        var tween1 = new TimelineMax()
            .from('.homeTopText', .8, {y: -80, autoAlpha: 0, ease: Circ.easeOut})
            .from('.homeTopTag', .8, {y: -80, autoAlpha: 0, ease: Circ.easeOut}, "-=.6")
    
        var scene1 = new ScrollMagic.Scene({
            triggerElement: ".homeTop",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween1)
//        .addIndicators()  
        .addTo(controller);
        
        var homeTopLine = CSSRulePlugin.getRule(".homeTopLineBox:after");
        
        var tween1a = new TimelineMax()
            .add(TweenMax.from(homeTopLine, 3, {cssRule:{height: 0}, ease: Circ.easeOut}))
    
        var scene1a = new ScrollMagic.Scene({
            triggerElement: ".homeCloudsContainer",
            duration: 1500,
            tweenChanges: true,
//            reverse: false
        })
        .setTween(tween1a)
//        .addIndicators()  
        .addTo(controller);
        
        var tween2 = new TimelineMax()
            .from('.homeCloudsLeft', 1, {x: 1000, autoAlpha: 0, ease: Circ.easeOut})
            .from('.homeCloudsRight', 1, {x: -1000, autoAlpha: 0, ease: Circ.easeOut}, "-=.6")
    
        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".homeCloudsContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween2)
//        .addIndicators()  
        .addTo(controller);
        
        var tween3 = new TimelineMax()
            .from('.poolImg', .5, {x: 0, autoAlpha: 0, ease: Circ.easeOut})
            .from('.bottleSnakeContainer', .8, {x: 300, autoAlpha: 0, ease: Circ.easeOut})
            .from('.poolImgTxtBox', .8, {x: -300, autoAlpha: 0, ease: Circ.easeOut},"-=.6")    
    
        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".poolImgContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween3)
//        .addIndicators()  
        .addTo(controller);
        
        var tween4 = new TimelineMax()
            .from('.titleNameLine', 1.5, {y: -100, height: 0, autoAlpha: 0, ease: Bounce.easeOut})
            // .add(TweenMax.from('.titleNameLine', 3, {height: 0, ease: Circ.easeOut}))
            .from('.homeAboutTitle', 1.5, {y: 0, autoAlpha: 0, ease: Bounce.easeOut}, "-=1.5")
            .from('.homeAboutText1', .7, {y: 60, autoAlpha: 0, ease: Circ.easeOut})
            .from('.homeAboutText2 ', .7, {y: 60, autoAlpha: 0, ease: Circ.easeOut}, "-=.5")
    
        var scene4 = new ScrollMagic.Scene({
            triggerElement: ".homeAboutContainer",
            triggerHook: .6,
            reverse: false
        })
        .setTween(tween4)
//        .addIndicators()  
        .addTo(controller);

        
        var tween5 = new TimelineMax()
            .from('.homeWolfContent p', 1, {y: 100, autoAlpha: 0, ease: Circ.easeOut})
            .from('.homeWolfContent a', 1, {y: 100, autoAlpha: 0, ease: Circ.easeOut}, "-=.5")
    
        var scene5 = new ScrollMagic.Scene({
            triggerElement: ".homeWolfContainer",
            triggerHook: .4,
            reverse: false
        })
        .setTween(tween5)
//        .addIndicators()  
        .addTo(controller);  
        
        var tween6 = new TimelineMax()
            .from('.homeProductsLinecontainer .homeProductsLine', 1, {y: 0, height: 0, autoAlpha: 0, ease: Circ.easeOut})
            .from('.homeProductsLinecontainer .homeProductsTitleBox', 1, {y: 0, autoAlpha: 0, ease: Circ.easeOut}, "-=1")
    
        var scene6 = new ScrollMagic.Scene({
            triggerElement: ".homeProductsLinecontainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween6)
//        .addIndicators()  
        .addTo(controller); 
        
        
        var tween7 = new TimelineMax()
            .from('.homeSmoothieBowlBoxContainer .homeSmoothieBowlBox', 1, {y: -100, autoAlpha: 0, ease: Circ.easeOut}, "+=1")
            .from('.homeSmoothieBowlBoxContainer .SmoothieBowlImageBox img:first-of-type', 1.5, {x: -400, autoAlpha: 0, ease: Power1.easeOut}, "-=1")
            .from('.homeSmoothieBowlBoxContainer .SmoothieBowlImageBox img:last-of-type', 1.5, {x: 400, autoAlpha: 0, ease: Power1.easeOut}, "-=1.5")
    
        var scene7 = new ScrollMagic.Scene({
            triggerElement: ".homeSmoothieBowlBoxContainer",
            triggerHook: .6,
            reverse: false
        })
        .setTween(tween7)
//        .addIndicators()  
        .addTo(controller);

        var tween7 = new TimelineMax()
        .from('.homeSmoothieByFruitsContainer .homeSmoothiesByFruits', 1, {y: -100, autoAlpha: 0, ease: Circ.easeOut}, "+=1")
        .from('.homeSmoothieByFruitsContainer .smoothiesByFruitsImageBox img:first-of-type', 1.5, {x: -400, autoAlpha: 0, ease: Power1.easeOut}, "-=1")
        .from('.homeSmoothieByFruitsContainer .smoothiesByFruitsImageBox img:last-of-type', 1.5, {x: 400, autoAlpha: 0, ease: Power1.easeOut}, "-=1.5")

    var scene7 = new ScrollMagic.Scene({
        triggerElement: ".homeSmoothieByFruitsContainer",
        triggerHook: .8,
        reverse: false
    })
    .setTween(tween7)
//        .addIndicators()  
    .addTo(controller);
        

        
        var tween9 = new TimelineMax()
            .from('.homeFunctionalBoxContainer .homeFunctionalBox', 1, {y: -100, autoAlpha: 0, ease: Circ.easeOut}, "+=1")
            .from('.homeFunctionalBoxContainer .functionalImageBox img:first-of-type', 1.5, {x: -400, autoAlpha: 0, ease: Power1.easeOut}, "-=1")
            .from('.homeFunctionalBoxContainer .functionalImageBox img:last-of-type', 1.5, {x: 400, autoAlpha: 0, ease: Power1.easeOut}, "-=1.5")
    
        var scene9 = new ScrollMagic.Scene({
            triggerElement: ".homeFunctionalBoxContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween9)
//        .addIndicators()  
        .addTo(controller);
          

        var tween10 = new TimelineMax()
            .from('.homeDetoxBoxContainer .homeDetoxBox', 1, {y: -100, autoAlpha: 0, ease: Circ.easeOut}, "+=1")
            .from('.homeDetoxBoxContainer .detoxImageBox img:first-of-type', 1.5, {x: -400, autoAlpha: 0, ease: Power1.easeOut}, "-=1")
            .from('.homeDetoxBoxContainer .detoxImageBox img:last-of-type', 1.5, {x: 400, autoAlpha: 0, ease: Power1.easeOut}, "-=1.5")
    
        var scene10 = new ScrollMagic.Scene({
            triggerElement: ".homeDetoxBoxContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween10)
//        .addIndicators()  
        .addTo(controller);
        
        var tween11 = new TimelineMax()
            .from('.homeIndulgenceBoxContainer .homeIndulgenceBox', 1, {y: -100, autoAlpha: 0, ease: Circ.easeOut}, "+=1")
            .from('.homeIndulgenceBoxContainer .IndulgenceImageBox img:first-of-type', 1.5, {x: -400, autoAlpha: 0, ease: Power1.easeOut}, "-=1")
            .from('.homeIndulgenceBoxContainer .IndulgenceImageBox img:last-of-type', 1.5, {x: 400, autoAlpha: 0, ease: Power1.easeOut}, "-=1.5")
    
        var scene11 = new ScrollMagic.Scene({
            triggerElement: ".homeIndulgenceBoxContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween11)
//        .addIndicators()  
        .addTo(controller);
        
        
        var tween12 = new TimelineMax()
            .from(".bottleSnakeContainer .snake", 1, {y: -5, yoyo: true, repeat: -1, ease: SlowMo.ease.config(0.1, 0.4, false)});
        
        var wolfClouds1 = new TimelineMax()
            .from(".wolfCloudsLeft", 4.5, {x: -20, y: 4, yoyo: true, repeat: -1, ease: SlowMo.ease.config(0.1, 0.1, false)}); 
        
        var wolfClouds2 = new TimelineMax()
            .from(".wolfCloudsRight", 4, {x: 20, y: -4, yoyo: true, repeat: -1, ease: SlowMo.ease.config(0.1, 0.1, false)});
        
    }
    
    function snowFunction(){
        $('.snow').snowfall({round : true, minSize: 1, maxSize:8,  flakeCount : 350});
    }
    
    setTimeout(snowFunction, 2000);
    
    
    //Parallax Banner Imgae
    
        var movementStrength = 5;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $(".homeFindMonkeyContainer").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 0.01;
          $('.homeFindMonkeyContainer').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    
   
    //Store Count in home page 
    
    $(window).scroll(startCounter);
    function startCounter() {
    var hT = jQuery('.homeLocationSearch').offset().top,
        hH = jQuery('.homeLocationSearch').outerHeight(),
        wH = jQuery(window).height();
    if ($(window).scrollTop() > hT+hH-wH) {
        $(window).off("scroll", startCounter);
        $('.storeCount').each(function () {
            var $this = jQuery(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
    
});