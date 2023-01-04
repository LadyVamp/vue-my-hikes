import Vue from 'vue';
import VueRouter from 'vue-router';
import HikeDetails from '@/components/Hike/HikeDetails';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home'),
  },
  {
    path: '/calculator',
    component: () => import('@/views/Calculator'),
  },
  {
    path: '/weekendhike',
    component: () => import('@/views/WeekendHike'),
  },
  {
    path: '/dev',
    component: () => import('@/views/DevView'),
  },
  {
    path: '/hike/:id',
    component: HikeDetails,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
