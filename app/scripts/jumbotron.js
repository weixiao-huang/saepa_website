
(function () {
  const $slider = $('#slider');

  function putArrow($ar, width = $ar.width(), height = $ar.height()) {
    const windowWidth = document.body.offsetWidth;
    const header_height = $('nav').height() + $slider.children().height();
    let windowHeight = innerHeight;

    if (windowHeight > header_height) {
      windowHeight = header_height;
    }

    $ar.css({
      'left': windowWidth / 2 - width / 2 + 'px',
      'top': windowHeight - height + 1 + 'px'
    });
  }

  function setJumbotron() {
    // Jumbotron Styles
    $slider.children().css('width', document.body.offsetWidth + 'px');
    $slider.css('max-height', innerHeight - $('nav').height() + 'px');

    putArrow($('#arrow'));
    putArrow($('#arrowbg'), 163, 48);
  }

  // Jquery Codes
  $(function () {
    setJumbotron();
    // When window is resize
    $(window).resize(function () {
      setJumbotron();
    });

    /* scroll down to container*/
    $('#arrow, #arrowbg').click(function() {
      $('html,body').animate({scrollTop:$('.container').offset().top}, 800);
    });
  });
})();
