$(document).ready(function () {
  if (window.innerWidth > 800) {
    var controller = new ScrollMagic.Controller();

    var tween1 = new TimelineMax()
      .from(".offTheTreeContainer .menuCategoryContent", 1, {
        x: 200,
        autoAlpha: 0,
        ease: Bounce.easeOut,
      })
      .from(
        ".offTheTreeContainer .menuCategoryImgBox",
        1,
        { x: -200, autoAlpha: 0, ease: Circ.easeOut },
        "-=.8"
      );

    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".offTheTreeContainer",
      triggerHook: 0.8,
      reverse: false,
    })
      .setTween(tween1)
      //.addIndicators()
      .addTo(controller);

    var tween2 = new TimelineMax()
      .from(".functionalContainer .menuCategoryContent", 1, {
        x: -200,
        autoAlpha: 0,
        ease: Bounce.easeOut,
      })
      .from(
        ".functionalContainer .menuCategoryImgBox",
        1,
        { x: 200, autoAlpha: 0, ease: Circ.easeOut },
        "-=.8"
      );

    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".functionalContainer",
      triggerHook: 0.8,
      reverse: false,
    })
      .setTween(tween2)
      //.addIndicators()
      .addTo(controller);

    var tween3 = new TimelineMax()
      .from(".pamperContainer .menuCategoryContent", 1, {
        x: 200,
        autoAlpha: 0,
        ease: Bounce.easeOut,
      })
      .from(
        ".pamperContainer .menuCategoryImgBox",
        1,
        { x: -200, autoAlpha: 0, ease: Circ.easeOut },
        "-=.8"
      );

    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".pamperContainer",
      triggerHook: 0.8,
      reverse: false,
    })
      .setTween(tween3)
      //.addIndicators()
      .addTo(controller);

    var tween4 = new TimelineMax()
      .from(".hotMenuContainer .menuCategoryContent", 1, {
        x: -200,
        autoAlpha: 0,
        ease: Bounce.easeOut,
      })
      .from(
        ".hotMenuContainer .menuCategoryImgBox",
        1,
        { x: 200, autoAlpha: 0, ease: Circ.easeOut },
        "-=.8"
      );

    var scene4 = new ScrollMagic.Scene({
      triggerElement: ".hotMenuContainer",
      triggerHook: 0.8,
      reverse: false,
    })
      .setTween(tween4)
      //.addIndicators()
      .addTo(controller);

    var tween5 = new TimelineMax()
      .from(".foodContainer .menuCategoryContent", 1, {
        x: 200,
        autoAlpha: 0,
        ease: Bounce.easeOut,
      })
      .from(
        ".foodContainer .menuCategoryImgBox",
        1,
        { x: -200, autoAlpha: 0, ease: Circ.easeOut },
        "-=.8"
      );

    var scene5 = new ScrollMagic.Scene({
      triggerElement: ".foodContainer",
      triggerHook: 0.38,
      reverse: false,
    })
      .setTween(tween5)
      //.addIndicators()
      .addTo(controller);


    var tween6 = new TimelineMax()
      .from(".umbrellaLeft", 2, {
        x: -8,
        y: 10,
        rotation: 2,
        yoyo: true,
        repeat: -1,
        ease: SteppedEase.config(40),
      })
      .from(
        ".umbrellaRight",
        1.5,
        {
          x: 5,
          y: 12,
          rotation: -2,
          yoyo: true,
          repeat: -1,
          ease: SteppedEase.config(40),
        },
        "-=1"
      )
      .from(
        ".ball",
        2,
        {
          x: -8,
          y: 10,
          rotation: 3,
          yoyo: true,
          repeat: -1,
          ease: SteppedEase.config(40),
        },
        "-=2"
      )
      .from(".dumbell", 1, {
        y: -10,
        yoyo: true,
        repeat: -1,
        ease: Power0.easeNone,
      });

    var scene6 = new ScrollMagic.Scene({
      triggerElement: ".menuBanner",
      triggerHook: 1,
      reverse: false,
    })
      .setTween(tween6)
      .addTo(controller);
  }
  //   search text for menu page


});
