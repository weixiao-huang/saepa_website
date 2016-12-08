'use strict';

$(function () {
  var stretchyNavs = $('.cd-stretchy-nav');
  stretchyNavs.hide();

  if (stretchyNavs.length > 0) {
    stretchyNavs.each(function () {
      var stretchyNav = $(this),
          stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

      stretchyNavTrigger.on('click', function (event) {
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function (event) {
      !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') && stretchyNavs.removeClass('nav-is-visible');
    });
  }
  $(window).on('scroll', function () {
    if ($(document).scrollTop() < $('.container').offset().top) {
      stretchyNavs.fadeOut(300);
    } else {
      stretchyNavs.fadeIn(300);
    }
  });
});
//# sourceMappingURL=stretchy-nav.js.map
