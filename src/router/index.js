import Vue from 'vue';
import VueRouter from 'vue-router';
import HikeDetails from '@/components/Hike/HikeDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/calculator',
    component: () => import('@/views/CalculatorView.vue'),
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
    path: '/links',
    component: () => import('@/views/LinksView.vue'),
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
  routes,
});

export default router;
