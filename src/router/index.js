import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Mooc from '@/pages/Mooc';
import Projects from '@/pages/Projects';
import AboutUs from '@/pages/AboutUs';

Vue.use(Router);

export default new Router({
  mode: 'history',
  hashbang: false,
  base: __dirname,
  scrollBehavior: (to) => {
    if (to.hash) return { selector: to.hash };
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '/home', component: Home },
    { path: '/contact', component: AboutUs },
    { path: '/projects', component: Projects },
    { path: '/mooc', component: Mooc },
    { path: '/:id?', redirect: '/home' },
  ],
});
