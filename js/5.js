$(document).ready(function(){
    $('#toggle').click(function(){
        $('nav').slideToggle();
    });
});


$(document).ready(function() { 
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    })
});


