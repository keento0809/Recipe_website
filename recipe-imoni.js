$(function(){
  $(".modal-for-imoni").hide();
  $(".register-imoni").click(function(){
    $(".modal-for-imoni").fadeIn(1500);
    $("body").css("background-color", "rgba(105, 105, 105, 0.8)");
    $(".event-video").css("opacity", 0.5);
    $(".googlemap-yamagata").css("opacity", 0.5);
    $(".imoni-img").css("opacity", 0.5);
    $(".curry-udon-img").css("opacity", 0.5);

  });
  $(".close-imoni-modal").click(function(){
    $(".modal-for-imoni").fadeOut(1500);
    $("body").css("background-color", "rgba(255, 255, 255, 1)");
    $(".event-video").css("opacity", 1);
    $(".googlemap-yamagata").css("opacity", 1);
    $(".imoni-img").css("opacity", 1);
    $(".curry-udon-img").css("opacity", 1);
  });

});

var btn = $('#up');

$(window).scroll(function() {
  if($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:0},'300');
});