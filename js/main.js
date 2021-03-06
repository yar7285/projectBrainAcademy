 var subscr = document.getElementsByClassName('keep_touch')[0];

subscribeModule.init({
   email:  subscr.children[1],
   button:  subscr.lastElementChild,
   sendOnEnter: true
});


$(document).ready(function() {
    loadData();
    new ScrollFlow();
});

function loadData(){


    loadWhatWeDoData();
    loadRecentWork();
    //other data loads
}

function loadWhatWeDoData(){
    var $container = $(".what_we_do");
    $.getJSON("json/what_we_do.json")
    .fail(function(jqXHR, textStatus, errorThrown) {
        alert('getJSON request failed! ' + textStatus);
    })
    .done(function(data) {
        if ( data ) {
            var items = data.items;
            for(var i =0; i < items.length; i++){
                var item = items[i];
                var $div = $('<div></div>');
                $div.attr('class', item.class);
                var $img = $('<div></div>');
                $img.attr('class','img' + i );
                $div.append($img);
                var $logo = $('<h3></h3>');
                $logo.text(item.name);
                $div.append($logo);
                var $text = $('<p></p>');
                $text.text(item.text);
                $div.append($text);
                $container.append($div);
            }
        }
    });
};


function loadRecentWork(){
    var $container = $(".Recent_Works .images");

    $.ajax({
   url: "/recent_works_all.html"
})
  .done(function( data ) {
    if ( data ) {
       $container.append(data);
    }
  });

    $(".Recent_Works .item").on("click", function(){
        var self = this;
        $.ajax({
          url: "/recent_works_" + self.id + ".html",
        })
        .fail(function() {
            $container.empty();
        })
        .done(function( data ) {
            if ( data ) {
              $container.empty();
              $container.append(data);
            }
        });
    });
}
$(".recent_works").on("click", function () {
    window.scrollTo(100,2330);
});

