import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'companies' },
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import(/* webpackChunkName: "companies" */ '../views/TheCompanies.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      // will match everything
      path: '*',
      redirect: { name: 'companies' },
    },
  ],
});

export default router;
