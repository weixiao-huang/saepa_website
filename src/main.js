'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _ContactUs = require('./components/ContactUs');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Projects = require('./components/Projects');

var _Projects2 = _interopRequireDefault(_Projects);

var _Mooc = require('./components/Mooc');

var _Mooc2 = _interopRequireDefault(_Mooc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  routes: [{
    path: '/',
    components: _Home2.default
  }, {
    path: '/projects',
    components: _Projects2.default
  }, {
    path: '/mooc',
    components: _Mooc2.default
  }, {
    path: '/contact',
    components: _ContactUs2.default
  }]
});

new _vue2.default({
  routers: router,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');
//# sourceMappingURL=main.js.map