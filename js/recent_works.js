$(document).ready(function() {
    loadImg();
});

function loadImg(){
    loadRecentWork();
    //other data loads
}

function loadRecentWork(){
    var $container = $(".Recent_Works .images");
    $(".Recent_Works .item").on("click", function(){
        var self = this;
        $.ajax({
          url: "/recent_works_" + self.id + ".html",
        })
        .done(function( data ) {
            if ( data ) {
              $container.empty();
              $container.append(data);
            }
        });
    });
}
