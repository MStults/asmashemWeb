
window.fbAsyncInit = function() {
    FB.init({
      appId      : '300837453632691',
      xfbml      : true,
      version    : 'v2.6'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//gml_Script_fbpost

function gml_Script_fbpost(reactor, lvl, score, stars) {
    FB.ui(
        {
            method: 'feed'
            , name: 'Atom Smashem'
            , caption: 'BY SUPER NOMI'
            , description: 'I have an unbeatable score of ' + 12452 + '. I doubt anyone could do better!'
            , link: 'http://atomsmashem.com/'
            , picture: 'https://atomsmashem.com/resources/img/fbIcon-min.jpg'
        },
        // callback
        function (response) { }
    );
}


(function(window, document){
    window.asm = window.asm || {};
   
    window.asm.fb = {
        post: function(reactor, lvl, score, stars){            
            var name = "Pleasant Nuclear";
            if (reactor === "BCP") name = "Big City Power";
            if (reactor === "GVR") name = "Golden Valley Reactor";
            name += " Level " + lvl;

            var dscr = 'I have completed ' + name + ' with score of ' + score + ' and I have earned ' + stars + ' stars. ' + starwars();
         
            FB.ui({
                method: 'feed'
                , name: name
                , caption: 'BY Atom Smashem'
                , description: dscr
                , link: 'http://atomsmashem.com/'
                , picture: 'https://atomsmashem.com/resources/img/fbIcon-min.jpg'
            },
                // callback
                function (response) { }
            );            
        }
        
        , showbrag: function(reactor, lvl, score, stars){
            $('#fb-btn').show("fast");
            $('#fb-btn').off().on('click', function(){             
                try{$("#snd_click")[0].play(); } catch(e) {}     
                asm.fb.post(reactor, lvl, score, stars);                
            });
        }
        
        , hidebrag: function(){
            $('#fb-btn').hide();
        }
        
    };
    
    function starwars() {
        var i = Math.floor((Math.random() * 30) + 1);

        switch (i) {
            case 1: return "Never tell me the odds!";
            case 2: return "You do have your moments. Not many, but you have them.";
            case 3: return "Everything is proceeding as I have foreseen.";
            case 4: return "Now, witness the power of this fully operational battle station.";
            case 5: return "I have a bad feeling about this.";
            case 6: return "Hmm! Adventure. Hmmpf! Excitement. A Jedi craves not these things.";
            case 7: return "That... is why you fail.";
            case 8: return "Laugh it up, fuzzball!";
            case 9: return "No reward is worth this.";
            case 10: return "I'll never join you.";
            case 11: return "Only at the end do you realize the power of the Dark Side.";
            case 12: return "I used to bullseye womp rats in my T-16 back home.";
            case 13: return "Awww! But I was going into Tosche Station to pick up some power converters!!!";
            case 14: return "IT'S A TRAP!!";
            case 15: return "Give yourself to the Dark Side. It is the only way you can save your friends.";
            case 16: return "The circle is now complete.";
            case 17: return "Why, you stuck up, half-witted, scruffy-looking Nerf herder.";
            case 18: return "Try not... Do... or Do Not... There is no try.";
            case 19: return "All too easy.";
            case 20: return "You will find that it is you who are mistaken… about a great many things.";
            case 21: return "Aren't you a little short for a Stormtrooper?";
            case 22: return "It's against my programming to impersonate a deity.";
            case 23: return "Travelling through hyperspace ain’t like dustin’ crops, boy!";
            case 24: return "Great, kid. Don’t get cocky.";
            case 25: return "You know better than to trust a strange computer!";
            case 26: return "You switched off your targeting computer -- what’s wrong?";
            case 27: return "Told you I did. Reckless is he. ...Now, matters are worse.";
            case 28: return "I've just made a deal that will keep the Empire out of here forever.";
            case 29: return "These aren’t the droids you’re looking for.";
            default: return "You'll find I'm full of surprises!";
        }
    }
    
})(window, document);