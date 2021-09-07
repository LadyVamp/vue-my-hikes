import Vue from 'vue';
import VueRouter from 'vue-router';
import HikeDetails from '@/components/Hike/HikeDetails';
import VueYandexMetrika from 'vue-yandex-metrika';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    path: "/calculator",
    component: () => import("@/views/Calculator"),
  },
  {
    path: '/hike/:id',
    component: HikeDetails
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

Vue.use(VueYandexMetrika, {
  id: 84106609,
  router: router,
  env: process.env.NODE_ENV
})

export default router;
