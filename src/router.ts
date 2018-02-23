import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mooc from './views/Mooc.vue';
import Projects from './views/Projects.vue';
import AboutUs from './views/AboutUs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: (to) => {
    if (to.hash) { return { selector: to.hash }; }
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
