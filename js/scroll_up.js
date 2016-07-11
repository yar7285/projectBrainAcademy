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
