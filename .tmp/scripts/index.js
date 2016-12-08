'use strict';

$(function () {
  $('#slider').nivoSlider();

  var id = '#rotate';

  $(window).on('scroll', function () {
    for (var i = 0; i < 4; i++) {
      if ($(document).scrollTop() + innerHeight * 0.8 > $(id + i).offset().top) {
        $(id + i).removeClass('flipped');
        $(id + i).addClass('flipping');
      } else {
        $(id + i).addClass('flipped');
        $(id + i).removeClass('flipping');
      }
    }
  });
});
//# sourceMappingURL=index.js.map
