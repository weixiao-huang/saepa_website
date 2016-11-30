$(function () {
  $('#slider').nivoSlider();
});

let id = '#rotate'

$(window).on('scroll', function () {
  for (let i = 0; i < 4; i++) {
    if ($(document).scrollTop() + innerHeight * 0.8 > $(id + i).offset().top) {
      $(id + i).removeClass('flipped');
      $(id + i).addClass('flipping');
    }
    else {
      $(id + i).addClass('flipped');
      $(id + i).removeClass('flipping');
    }
  }
});
