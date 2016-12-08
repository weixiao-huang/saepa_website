'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var $slider = $('#slider');

  var JumbComp = function () {
    function JumbComp($comp) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $comp.width();
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $comp.height();

      _classCallCheck(this, JumbComp);

      this.comp = $comp;
      this.width = width;
      this.height = height;
    }

    _createClass(JumbComp, [{
      key: 'put',
      value: function put() {
        var windowWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body.offsetWidth;
        var windowHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : innerHeight;


        var picHeight = windowWidth / 16 * 9;
        var header_height = $('nav').height() + picHeight;

        if (windowHeight > header_height) windowHeight = header_height;

        this.comp.css({
          'left': windowWidth / 2 - this.width / 2 + 'px',
          'top': windowHeight - this.height + 1 + 'px'
        });
      }
    }]);

    return JumbComp;
  }();

  function setJumbotron() {
    // Jumbotron Styles
    $slider.children().css('width', document.body.offsetWidth + 'px');
    $slider.css('max-height', innerHeight - $('nav').height() + 'px');

    var picHeight = document.body.offsetWidth / 16 * 9;

    if (innerHeight > $('nav').height() + picHeight) {

      $('#arrow, #arrowbg').hide();
      return;
    } else {
      $('#arrow, #arrowbg').show();
    }

    new JumbComp($('#arrow'), 18.52, 25.37).put();
    new JumbComp($('#arrowbg'), 163, 48).put();
  }

  // Jquery Codes
  $(function () {

    setJumbotron();
    // When window is resize
    $(window).resize(function () {
      return setJumbotron();
    });

    /* scroll down to container*/
    $('#arrow, #arrowbg').click(function () {
      return $('html,body').animate({ scrollTop: $('.container').offset().top }, 800);
    });
  });
})();
//# sourceMappingURL=jumbotron.js.map
