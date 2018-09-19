import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// eslint-disable-next-line
import 'swiper/dist/css/swiper.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
