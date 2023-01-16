// Business routes that require authentication
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'Dashboard',
      icon: '',
    },
    component: () => import('@/views/dashboard/dashboard.vue'),
  },
];

export default asyncRoutes;
