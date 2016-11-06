(function () {
  var $img = $('#index_img');
  var $nav_height = $('nav').outerHeight();
  var $arrow = $('#arrow');
  var $arrowbg = $('#arrowbg');

  function putArrow($ar) {
    var windowWidth = document.body.offsetWidth;
    var windowHeight = innerHeight;
    if (windowHeight > $img.children().height()) {
      windowHeight = $img.children().height();
    }
    $ar.css({
      'left': windowWidth / 2 - $ar.width() / 2 + 'px',
      'top': windowHeight - $ar.height() + 1 + 'px'
    });
  }

  function setJumbotron() {
    // Jumbotron Styles
    $img.children().css({
      'width': document.body.offsetWidth + 'px',
      'margin-top': '-' + $nav_height + 'px'
    });
    $img.css('max-height', innerHeight - $nav_height + 'px');

    putArrow($arrow);
    putArrow($arrowbg);
  }

  // Jquery Codes
  $(function () {
    setJumbotron();
    // When window is resize
    $(window).resize(function () {
      setJumbotron();
    });

    /* scroll down to container*/
    $arrow.click(function() {
      $('html,body').animate({scrollTop:$('.container').offset().top}, 800);
    });
  });
})();

