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


$(document).ready(function(){

    $("#ph").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 250);
    });

    $(".gallery_image").click(function(event){
        var img = $(this);
        var src = img.attr('src');
        var position = window.scrollY;
        var $newBox = $("<div ></div>")
            .attr("class", "popup")
            .css("top", position);

        var $insideBox = $("<div ></div>")
            .attr("class", "popup_bg");
        var $image = $("<img>")
            .attr("src", src)
            .attr("class", "popup_img");

        $("body").append($newBox);
        $newBox.append($insideBox);
        $insideBox.append($image);

        $(".popup").fadeIn(800);

        $(".popup_bg").click(function(){
            $(".popup").fadeOut(800);
            setTimeout(function() {
                $(".popup").remove();
            }, 800);
        });
    });
});

(function() {
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });
    $('#scroll_up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzdWJzY3JpYmUuanMiLCJtYWluLmpzIiwicG9wX3VwLmpzIiwic2Nyb2xsX3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzdWJzY3JpYmVNb2R1bGUgPSAoZnVuY3Rpb24oKXtcblxuICAgIHZhciBwcml2YXRlID0gZnVuY3Rpb24ob3B0KXtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICBlbWFpbDogIG51bGwsXG4gICAgICAgICAgICAgYnV0dG9uOiAgbnVsbCxcbiAgICAgICAgICAgICBzZW5kT25FbnRlcjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBqcXVlcnkgY29udGFpbnMgbWV0aG9kICdleHRlbmQnIGZvciBuZXh0IGNvZGVcbiAgICAgICAgb3B0aW9ucy5lbWFpbCA9IG9wdC5lbWFpbCB8fCBudWxsO1xuICAgICAgICBvcHRpb25zLmJ1dHRvbiA9IG9wdC5idXR0b24gfHwgbnVsbDtcbiAgICAgICAgb3B0aW9ucy5zZW5kT25FbnRlciA9IG9wdC5zZW5kT25FbnRlciB8fCBmYWxzZTtcblxuICAgICAgICB2YXIgc2hvd05vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGVydChcIkVtYWlsIHdhcyBzZW50XCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzZW50RW1haWwgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy9zZW5kIGVtYWlsIHRvIG9wdGlvbnMuZW1haWxcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZihvcHRpb25zLnNlbmRPbkVudGVyKXtcbiAgICAgICAgICAgIG9wdGlvbnMuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDEzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICBzZW50RW1haWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG9wdGlvbnMuYnV0dG9uKXtcbiAgICAgICAgICAgIG9wdGlvbnMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgIHNlbnRFbWFpbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24ob3B0KXtcbiAgICAgICAgICAgICBwcml2YXRlKG9wdCk7XG4gICAgICAgIH1cbiAgIH07XG59KSgpO1xuIiwiIHZhciBzdWJzY3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrZWVwX3RvdWNoJylbMF07XG5cbnN1YnNjcmliZU1vZHVsZS5pbml0KHtcbiAgIGVtYWlsOiAgc3Vic2NyLmNoaWxkcmVuWzFdLFxuICAgYnV0dG9uOiAgc3Vic2NyLmxhc3RFbGVtZW50Q2hpbGQsXG4gICBzZW5kT25FbnRlcjogdHJ1ZVxufSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbG9hZERhdGEoKTtcbiAgICBuZXcgU2Nyb2xsRmxvdygpO1xufSk7XG5cbmZ1bmN0aW9uIGxvYWREYXRhKCl7XG5cblxuICAgIGxvYWRXaGF0V2VEb0RhdGEoKTtcbiAgICBsb2FkUmVjZW50V29yaygpO1xuICAgIC8vb3RoZXIgZGF0YSBsb2Fkc1xufVxuXG5mdW5jdGlvbiBsb2FkV2hhdFdlRG9EYXRhKCl7XG4gICAgdmFyICRjb250YWluZXIgPSAkKFwiLndoYXRfd2VfZG9cIik7XG4gICAgJC5nZXRKU09OKFwianNvbi93aGF0X3dlX2RvLmpzb25cIilcbiAgICAuZmFpbChmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgYWxlcnQoJ2dldEpTT04gcmVxdWVzdCBmYWlsZWQhICcgKyB0ZXh0U3RhdHVzKTtcbiAgICB9KVxuICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKCBkYXRhICkge1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gZGF0YS5pdGVtcztcbiAgICAgICAgICAgIGZvcih2YXIgaSA9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIHZhciAkZGl2ID0gJCgnPGRpdj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkZGl2LmF0dHIoJ2NsYXNzJywgaXRlbS5jbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyICRpbWcgPSAkKCc8ZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICRpbWcuYXR0cignY2xhc3MnLCdpbWcnICsgaSApO1xuICAgICAgICAgICAgICAgICRkaXYuYXBwZW5kKCRpbWcpO1xuICAgICAgICAgICAgICAgIHZhciAkbG9nbyA9ICQoJzxoMz48L2gzPicpO1xuICAgICAgICAgICAgICAgICRsb2dvLnRleHQoaXRlbS5uYW1lKTtcbiAgICAgICAgICAgICAgICAkZGl2LmFwcGVuZCgkbG9nbyk7XG4gICAgICAgICAgICAgICAgdmFyICR0ZXh0ID0gJCgnPHA+PC9wPicpO1xuICAgICAgICAgICAgICAgICR0ZXh0LnRleHQoaXRlbS50ZXh0KTtcbiAgICAgICAgICAgICAgICAkZGl2LmFwcGVuZCgkdGV4dCk7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblxuZnVuY3Rpb24gbG9hZFJlY2VudFdvcmsoKXtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXCIuUmVjZW50X1dvcmtzIC5pbWFnZXNcIik7XG5cbiAgICAkLmFqYXgoe1xuICAgdXJsOiBcIi9yZWNlbnRfd29ya3NfYWxsLmh0bWxcIlxufSlcbiAgLmRvbmUoZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgaWYgKCBkYXRhICkge1xuICAgICAgICRjb250YWluZXIuYXBwZW5kKGRhdGEpO1xuICAgIH1cbiAgfSk7XG5cbiAgICAkKFwiLlJlY2VudF9Xb3JrcyAuaXRlbVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6IFwiL3JlY2VudF93b3Jrc19cIiArIHNlbGYuaWQgKyBcIi5odG1sXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGNvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcbiAgICAgICAgICAgIGlmICggZGF0YSApIHtcbiAgICAgICAgICAgICAgJGNvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4kKFwiLnJlY2VudF93b3Jrc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMTAwLDIzMzApO1xufSk7XG5cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICAkKFwiI3BoXCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDI1MCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLmdhbGxlcnlfaW1hZ2VcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB2YXIgaW1nID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIHNyYyA9IGltZy5hdHRyKCdzcmMnKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHZhciAkbmV3Qm94ID0gJChcIjxkaXYgPjwvZGl2PlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvcHVwXCIpXG4gICAgICAgICAgICAuY3NzKFwidG9wXCIsIHBvc2l0aW9uKTtcblxuICAgICAgICB2YXIgJGluc2lkZUJveCA9ICQoXCI8ZGl2ID48L2Rpdj5cIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb3B1cF9iZ1wiKTtcbiAgICAgICAgdmFyICRpbWFnZSA9ICQoXCI8aW1nPlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgc3JjKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvcHVwX2ltZ1wiKTtcblxuICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJG5ld0JveCk7XG4gICAgICAgICRuZXdCb3guYXBwZW5kKCRpbnNpZGVCb3gpO1xuICAgICAgICAkaW5zaWRlQm94LmFwcGVuZCgkaW1hZ2UpO1xuXG4gICAgICAgICQoXCIucG9wdXBcIikuZmFkZUluKDgwMCk7XG5cbiAgICAgICAgJChcIi5wb3B1cF9iZ1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChcIi5wb3B1cFwiKS5mYWRlT3V0KDgwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoXCIucG9wdXBcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCA4MDApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiKGZ1bmN0aW9uKCkge1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XG4gICAgICAgICAgICAkKCcjc2Nyb2xsX3VwJykuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjc2Nyb2xsX3VwJykuZmFkZU91dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnI3Njcm9sbF91cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
