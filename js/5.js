$(document).ready(function(){
    $('#toggle').click(function(){
        $('nav').slideToggle();
    });
});

$(document).ready(function() {
    $("#notification-button").click(function() {

      $("#notification-box").show();
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

const notificationIcon = document.getElementById("notification-icon");
const notificationPopup = document.getElementById("notification-popup");

notificationIcon.addEventListener("click", () => {
    notificationPopup.style.display = "block";
});

function closePopup() {
    notificationPopup.style.display = "none";
}




