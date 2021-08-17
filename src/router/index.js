import Vue from 'vue';
import VueRouter from 'vue-router';
import HikeDetails from '@/components/Hike/HikeDetails';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/hikes' },
  { path: '*', redirect: '/hikes' },
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
