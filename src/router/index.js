import Vue from 'vue';
import VueRouter from 'vue-router';
import HikeDetails from '@/components/Hike/HikeDetails';
import VueYandexMetrika from 'vue-yandex-metrika';

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: '/hikes' },
  {
    path: '/hikes',
    name: 'Hikes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Hike'),
  },
  {
    path: '/hike/:id',
    component: HikeDetails
  },
  { path: "*", redirect: '/hikes' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Vue.use(VueYandexMetrika, {
  id: 84106609,
  router: router,
  env: process.env.NODE_ENV
})

export default router;
