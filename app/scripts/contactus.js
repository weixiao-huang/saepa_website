/**
 * Created by Mike Huang on 2016/11/30.
 */

$(function () {
  $(window).scroll(function(){
    $('.timeline p').each(function(){
      const scrollTop = $(window).scrollTop(),
        elementOffset = $(this).offset().top,
        distance = (elementOffset - scrollTop),
        windowHeight = $(window).height(),
        breakPoint = windowHeight * 0.9;

      if(distance > breakPoint) {
        $(this).addClass('more_padding');
      }  if(distance < breakPoint) {
        $(this).removeClass('more_padding');
      }
    });
  });
});
