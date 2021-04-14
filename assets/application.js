// Put your application javascript here

$(function(){
    $('#play-video').on('click', function(ev) {
        $(this).fadeOut();
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
});

