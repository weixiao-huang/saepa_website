
(function () {
  var $img = $('#slider');
  var $arrow = $('#arrow');
  var $arrowbg = $('#arrowbg');

  function putArrow($ar) {
    var windowWidth = document.body.offsetWidth;
    var windowHeight = $(window).height();
    var nav_height = $('nav').height();

    var nav_img_height = $img.height();
    if ($img.height() < $img.children().height()) {
      nav_img_height = $img.children().height()
    }
    nav_img_height += nav_height;

    if (windowHeight > nav_img_height) {
      windowHeight = nav_img_height;
    }

    $ar.css({
      'left': windowWidth / 2 - $ar.width() / 2 + 'px',
      'top': windowHeight - $ar.height() + 1 + 'px'
    });
    console.log('$img.height(): ' + $img.children().height());
  }

  function setJumbotron() {
    // Jumbotron Styles
    $img.children().css('width', document.body.offsetWidth + 'px');
    $img.css('max-height', innerHeight - $('nav').height() + 'px');

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
