/// <reference path="../asm.html" />

//$("#game").load("../asm.html");
/***
window.asm = window.asm || {};

window.asm.game_loader = function (_graphics, _width, _height, _total, _current, _loadingscreen) {
    var l = _loadingscreen;
    $(_graphics.canvas).hide();
};

***/

(function(){
    "use strict"; 
        
    $('body').on("mousewheel", function () {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
  
    
    $(".play-btn").click(function(){
        try{$("#snd_spark")[0].play(); } catch(e) {}        
    });
    
    
    var mobile_nav = $('.js--mobile-main-nav');
    var mobile_menu = $('.js--mobile-nav span');
 
    /* sticky navigation  */
    $('#about').waypoint(show_sticky, { offset: '60px' });
    function show_sticky(dir){
        if(dir == "down") $('nav').addClass("sticky");
        else $('nav').removeClass("sticky");
    }
    
    /* Nav Scroll */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            closeMobileMenu();
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
    });
    
    /*** mobile navigation **/
    $('.js--mobile-nav').click(function(){
        mobile_nav.slideToggle(200);      
        if(mobile_menu.hasClass('ion-navicon-round' )){
            mobile_menu.addClass('ion-close-round');
            mobile_menu.removeClass('ion-navicon-round');
        } else {
            mobile_menu.addClass('ion-navicon-round');
            mobile_menu.removeClass('ion-close-round');            
        }
    });
    
    function toggleMobileMenu(){       
        if(isMobileMenuActive()){ 
            mobile_nav.slideToggle(200);        
            if(mobile_menu.hasClass('ion-navicon-round' )){
                mobile_menu.addClass('ion-close-round');
                mobile_menu.removeClass('ion-navicon-round');
            } else {
                mobile_menu.addClass('ion-navicon-round');
                mobile_menu.removeClass('ion-close-round');            
            }
        }    
    }

    function isMobileMenuActive(){
        return $('#mobile-btn').is(':visible');
    }

    function closeMobileMenu(){
        if( mobile_nav.is(':visible')){
            mobile_nav.slideToggle(100);  
            mobile_menu.addClass('ion-navicon-round');
            mobile_menu.removeClass('ion-close-round'); 
        }        
    }    
        
    $(window).resize(closeMobileMenu);
    
    //bounce atoms
    var atoms = $('.atom');    
    for(var i=0; i<atoms.length; i++)
    {
        (function(e){
            var ant = 'animated rubberBand';
            var bounce = cssAnimationActivator(e, ant);

            //$(e).waypoint(bounce,{ offset: '30%' });

            function run() {
                   var timeArray = new Array(200, 300, 150, 250, 2000, 3000, 1000, 1500);
                   bounce();
                   clearInterval(timer);
                   timer = setInterval(run, randRange(timeArray));
            }
            var timer = setInterval(run, 1000);
        })(atoms[i]);
    }

    function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
    }

    function cssAnimationActivator(e, ancls){
        return function(){
            $(e).removeClass(ancls).addClass(ancls).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass(ancls);
            });
        };
    }
       
    $('#full-trigger').waypoint(function(dir){
        $('.div-iphone a').addClass('animated bounceIn');   
        $('.app-btns a').addClass('animated fadeInRight');
    },{
        offset: '50%'
    });   
    
    $('.js--hero').click(function(){        
         window.open('game.html','_blank');        
    });
       
})();





   






