// This has to be the same animation duration value set for .animated class.
var animationDuration = 1000; 

// Set opacity to 0 immediately to prevent flashing on page load.
$('.main').css('opacity', '0');

window.onload = function() {
  $('.main').css('opacity', '1').addClass('animated fadeInUp');
}

$('a').click(function(e) {
  if (e.currentTarget.target === '_blank') {
    return;
  }

  e.preventDefault();

  $('.main').removeClass('fadeInUp').addClass('fadeOutDown');
  setTimeout(function() {
    window.location.href = e.currentTarget.href;
  }, animationDuration)
});
