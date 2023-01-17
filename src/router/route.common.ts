// Business routes that do not require authentication
import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home | TechPath',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login | TechPath',
      icon: '',
    },
    component: () => import('@/views/login/login.vue'),
  },
];

export default commonRoutes;
