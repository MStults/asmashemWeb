
(function(window){
    "use strict"; 
    
    window.game_loader = function(_graphics, _width, _height, _total, _current, _loadingscreen){        
        if(_total == _current) {
            $("#loading-div").addClass('lightSpeedOut');
            //$("#loading-div").addClass('animated zoomOutDown');
            
            $('#main').addClass('makeRoom'); 
            
            setTimeout ( function(){  
                $("#loading-div").hide();
                $('#game-div').show();
                $('#game-div').addClass('animated zoomInUp');    
                $('#highscore-sec').addClass('slideInUp');  
                     
            }, 1500);
        }
    };  
    
    
    
 
})(window);
