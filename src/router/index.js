import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

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
  {
    path: '/places/new',
    name: 'New Place',
    component: () => import(/* webpackChunkName: "places" */ '../views/Places/New.vue'),
    meta: {
      title: 'Создать место',
    },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Authorization/Signin.vue'),
    meta: {
      title: 'Авторизация',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to) => {
  if (to.path !== '/signin' && !store.getters['authorization/isAuthorized']) {
    return {
      path: '/signin',
      query: { redirect: to.fullPath },
    };
  }

  const pageTitle = to.meta.title || 'Страница';
  document.title = `${pageTitle} | BP Admin`;

  return true;
});

export default router;
