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
