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
    const $nav_imgs = $('#nav_right_img, #nav_left_box');
    if (document.body.offsetWidth < 1000) {
      $nav_imgs.hide();
      return;
    }
    $('#nav_right_img').children().css('height', $('nav').height() + 'px');
    $nav_imgs.show();
  }

  putNav();
  $(window).resize(function () {
    putNav();
  })
});

