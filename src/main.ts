import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker.ts';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
