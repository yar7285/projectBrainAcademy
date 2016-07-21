var subscribeModule = (function(){

    var private = function(opt){

        var options = {
             email:  null,
             button:  null,
             sendOnEnter: false
        };

        // jquery contains method 'extend' for next code
        options.email = opt.email || null;
        options.button = opt.button || null;
        options.sendOnEnter = opt.sendOnEnter || false;

        var showNotification = function(){
            alert("Email was sent");
        };

        var sentEmail = function(){
            //send email to options.email
            showNotification();
        };

        if(options.sendOnEnter){
            options.email.addEventListener('keypress', function(e){
                if(e.keyCode === 13)
                {
                   sentEmail();
                }
            });
        }

        if(options.button){
            options.button.addEventListener('click', function(){
               sentEmail();
            });
        }
    };

    return {
        init: function(opt){
             private(opt);
        }
   };
})();
