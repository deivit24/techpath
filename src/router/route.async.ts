// Business routes that require authentication
import { RouteRecordRaw } from 'vue-router';
// here
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
  {
    path: '/tool-manager',
    name: 'Tool Manager',
    meta: {
      title: 'Tool Manager',
      icon: '',
    },
    component: () => import('@/views/dashboard/ToolManager.vue'),
  },
];

export default asyncRoutes;
