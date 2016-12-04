/**
 * Created by huangwx on 16-11-30.
 */
import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import Contact from '../components/ContactUs';
import Projects from '../components/Projects';
import Mooc from '../components/Mooc';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  }
  const position = {};
  // new navigation.
  // scroll to anchor by returning the selector
  if (to.hash) {
    position.selector = to.hash;
  }
  // check if any matched route config has meta that requires scrolling to top
  if (to.matched.some(m => m.meta.scrollToTop)) {
    // cords will be used if no selector is provided,
    // or if the selector didn't match any element.
    position.x = 0;
    position.y = 0;
  }
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  return position;
};

export default new Router({
  mode: 'history',
  scrollBehavior,
  hashbang: false,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/saepa_website', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/contact', component: Contact },
    { path: '/projects', component: Projects },
    { path: '/mooc', component: Mooc },
  ],
});
