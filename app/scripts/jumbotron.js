
(function () {
  const $slider = $('#slider');

  class JumbComp {
    constructor($comp, width = $comp.width(), height = $comp.height()) {
      this.comp = $comp;
      this.width = width;
      this.height = height;
    }

    put(windowWidth = document.body.offsetWidth, windowHeight = innerHeight) {

      let picHeight = windowWidth / 16 * 9;
      const header_height = $('nav').height() + picHeight;

      if (windowHeight > header_height) windowHeight = header_height;

      this.comp.css({
        'left': windowWidth / 2 - this.width / 2 + 'px',
        'top': windowHeight - this.height + 1 + 'px'
      });
    }
  }

  function setJumbotron() {
    // Jumbotron Styles
    $slider.children().css('width', document.body.offsetWidth + 'px');
    $slider.css('max-height', innerHeight - $('nav').height() + 'px');

    let picHeight = document.body.offsetWidth / 16 * 9;

    if (innerHeight > $('nav').height() + picHeight) {

      $('#arrow, #arrowbg').hide();
      return;
    }
    else {
      $('#arrow, #arrowbg').show();
    }

    new JumbComp($('#arrow'), 18.52, 25.37).put();
    new JumbComp($('#arrowbg'), 163, 48).put();

  }

  // Jquery Codes
  $(function () {

    setJumbotron();
    // When window is resize
    $(window).resize(() => setJumbotron());

    /* scroll down to container*/
    $('#arrow, #arrowbg').click(() =>
    $('html,body').animate({ scrollTop:$('.container').offset().top }, 800));
  });

})();
