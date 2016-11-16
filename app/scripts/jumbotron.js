
(function () {
  const $slider = $('#slider');

  class JumbComp {
    constructor($comp, width = $comp.width(), height = $comp.height()) {
      this.comp = $comp;
      this.width = width;
      this.height = height;
    }

    put(windowWidth = document.body.offsetWidth, windowHeight = innerHeight) {
      const header_height = $('nav').height() + $slider.children().height();
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

    new JumbComp($('#arrow')).put();
    new JumbComp($('#arrowbg'), 163, 48).put();
  }

  // Jquery Codes
  $(function () {
    setJumbotron();
    // When window is resize
    $(window).resize(() => setJumbotron());

    /* scroll down to container*/
    $('#arrow, #arrowbg').click(() => $('html,body').animate(
      { scrollTop:$('.container').offset().top }, 800));
  });
})();
