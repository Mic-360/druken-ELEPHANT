$(document).ready(function(){
    var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;

    function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
      translate2 = 'translate(' + x + 'px, ' + y + 'px) scale(1.4)';

      $('.homeCloudsLeft').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
      });
        
      $('.homeCloudsRight').css({
        '-webit-transform': translate2,
        '-moz-transform': translate2,
        'transform': translate2
      });

      window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();
    
    $(".locDot").hover(function(){
        $(this).next(".locInfoBox").toggleClass("active");
    })
    
//    openNav();
//    closeNav();
    
    $(window).on('load', function(){
        if($(document).scrollTop() > 50){
            $(".header").addClass("shrink");
            $(".mobileLogo").addClass("shrink")
        } else {
            $(".header").removeClass("shrink");
            $(".mobileLogo").removeClass("shrink")
        }
    });
    
    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $(".header").addClass("shrink");
            $(".mobileLogo").addClass("shrink");
            $(".menuLogo").addClass("shrink");
        } else {
            $(".header").removeClass("shrink");
            $(".mobileLogo").removeClass("shrink");
            $(".menuLogo").removeClass("shrink");
        }
    });
    
    
     $(".blogOfferBannerLink").on("click",function(){
        $("#blogPopup").modal("show");
    });
    
    $(".ResultNoFound").hide();
    $(".globalInputSearch").keyup(function () {
      // Retrieve the input field text and reset the count to zero
      var filter = $(this).val(),
        count = 0;
  
      if (count == 0) {
        $("ResultNoFound").hide();
      }
  
      // Loop through the comment list
      $(".globalTargetList .menuItems").each(function () {
        // If the list item does not contain the text phrase fade it out
  
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          $(this).hide(); // MY CHANGE
          if (count == 0) {
            $(".ResultNoFound").show();
          } else {
            $(".ResultNoFound").hide();
          }
          // Show the list item if the phrase matches and increase the count by 1
        } else {
          $(this).show(); // MY CHANGE
          count++;
        }
      });
    });
    $(".main-menu").hide();
    
    $(".resultNotFound").hide();
    $(".menuSearch").keyup(function () {
      // Retrieve the input field text and reset the count to zero
      var filter = $(this).val(),
        count = 0;
  
      if (count == 0) {
        $(".resultNotFound").hide();
      }
  
      // Loop through the comment list
      $(".main-menu-items .menuItems").each(function () {
        // If the list item does not contain the text phrase fade it out
  
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          $(this).hide(); // MY CHANGE
          if (count == 0) {
            $(".resultNotFound").show();
          } else {
            $(".resultNotFound").hide();
          }
          // Show the list item if the phrase matches and increase the count by 1
        } else {

          $(this).show(); // MY CHANGE
          count++;
          $(".main-menu-redirection").hide();
        }
      });

      document.querySelector(".menuSearch").addEventListener("keyup",function(){
        $(".main-menu").show();
        let key=document.querySelector(".menuSearch").value;
        // console.log(key);
        if(key==""){
         $(".main-menu").hide();
         $(".main-menu-redirection").show();
        }
       
      });


    });
      // main-menu search js
      


});


function openNav() {
        document.getElementById("sideNav").style.width = "100%";
//        $(".mobileNav").show();
//        $(".mobileLogo").hide();
//        $("body").css("overflow", "none");
    }

    function closeNav() {
//        $(".mobileNav").hide();
//        $(".mobileLogo").show();
        document.getElementById("sideNav").style.width = "0";
    }