// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/*eslint-disable */
import 'swiper/dist/css/swiper.css';
/*eslint-enable */
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
