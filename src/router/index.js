import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "pages" */ '../views/Pages/Home.vue'),
    meta: {
      title: 'Панель управления',
    },
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users/Main.vue'),
    meta: {
      title: 'Пользователи',
    },
  },
  {
    path: '/places',
    name: 'Places',
    component: () => import(/* webpackChunkName: "places" */ '../views/Places/Main.vue'),
    meta: {
      title: 'Места',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to) => {
  const pageTitle = to.meta.title || 'Страница';
  document.title = `${pageTitle} | BP Admin`;

  return true;
});

export default router;
