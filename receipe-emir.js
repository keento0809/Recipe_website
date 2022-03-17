$('#yogurt').on('click', function() {
  $('.overlay').css({ 'display': 'flex' })
});

$('#close, .overlay').on('click', function() {
  $('.overlay').css({ 'display': 'none' })
});

$('.modal').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
})


 

 