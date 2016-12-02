/**
 * Created by huangwx on 16-10-30.
 */

// $("li").hover(function () {
//   $(this).addClass('nav_hover');
// }, function () {
//   $(this).removeClass('nav_hover');
// });

$(function () {
  function putNav() {
    $('#nav_right_img').children().css(
      'height', $('nav').height() - 2 + 'px');
    let toggleHeight = 0;
    let ulHeight = $('ul').height();
    if (ulHeight > 53.33)
      toggleHeight = 53.33;
    else
      toggleHeight =ulHeight;
    $('.logo').children().css(
      'max-height', toggleHeight + 'px');
  }

  putNav();
  $(window).resize(() => putNav());
});

