import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import exceptionRoutes from '@/router/route.exception';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';

const routes: Array<RouteRecordRaw> = [
  // Service routing without authentication ex: login
  ...commonRoutes,
  // Service routing with authentication
  ...asyncRoutes,
  // The exception page must be placed at the end of the route matching rule
  ...exceptionRoutes,
];

const router: Router = createRouter({
  // The new vue-router4 uses history routing mode and base prefix
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});

/**
 * @description: The global routing pre-guard is triggered before entering the route, and the navigation is waiting until all the guards resolve.
 * @param {RouteLocationNormalized} to  upcoming target
 * @param {RouteLocationNormalizedLoaded} from  The route the current navigation is leaving
 * @return {*}
 */
router.beforeEach((to, from) => {
  console.log('全局路由前置守卫：to,from\n', to, from);
  // set page title
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  console.log('Global routing back guard：to,from\n', to, from);
  NProgress.done();
});

export default router;
