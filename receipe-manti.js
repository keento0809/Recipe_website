$('#yogurt').on('click', function() {
  $('.overlay').css({ 'display': 'flex' })
});

$('#close, .overlay').on('click', function() {
  $('.overlay').css({ 'display': 'none' })
});

$('.modal').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
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



 

 