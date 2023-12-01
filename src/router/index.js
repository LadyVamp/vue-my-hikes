import Vue from 'vue';
import VueRouter from 'vue-router';
import HikeDetails from '@/components/Hike/HikeDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/calculator',
    component: () => import('@/views/Calculator.vue'),
  },
  {
    path: '/weekendhike',
    component: () => import('@/views/WeekendHike.vue'),
  },
  {
    path: '/dev',
    component: () => import('@/views/DevView.vue'),
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
  mode: 'history',
  routes,
});

export default router;
