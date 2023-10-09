$(document).ready(function(){
    $('#toggle').click(function(){
        $('nav').slideToggle();
    });
});

$(document).ready(function() {
    $("#notification-button").click(function() {
      // Display the notification box
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

/// Lấy thẻ biểu tượng thông báo và khung chứa nội dung thông báo
const notificationIcon = document.getElementById("notification-icon");
const notificationPopup = document.getElementById("notification-popup");

// Sự kiện click vào biểu tượng thông báo
notificationIcon.addEventListener("click", () => {
    notificationPopup.style.display = "block"; // Hiển thị khung chứa nội dung
});

// Hàm đóng khung chứa nội dung thông báo
function closePopup() {
    notificationPopup.style.display = "none";
}




