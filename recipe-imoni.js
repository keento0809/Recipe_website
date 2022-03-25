$(function(){
  $(".wrapper__modal—imoni").hide();
  $(".btn—modal").click(function(){
    $(".wrapper__modal—imoni").fadeIn(1500);
    $("body").css("background-color", "rgba(105, 105, 105, 0.8)");
    $(".event-video").css("opacity", 0.5);
    $(".wrapper__map").css("opacity", 0.5);
    $(".imoni-main").css("opacity", 0.5);
    $(".imoni-curry").css("opacity", 0.5);

  });
  $(".btn—center").click(function(){
    $(".wrapper__modal—imoni").fadeOut(1500);
    $("body").css("background-color", "rgba(255, 255, 255, 1)");
    $(".event-video").css("opacity", 1);
    $(".wrapper__map").css("opacity", 1);
    $(".imoni-main").css("opacity", 1);
    $(".imoni-curry").css("opacity", 1);
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