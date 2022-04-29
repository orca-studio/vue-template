import type { RouteRecordRaw } from 'vue-router';
import { ErrorRouteName } from './const';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: ErrorRouteName.NOT_FOUND_ROUTER,
    component: () => import(/* webpackChunkName: "error" */ `@/page/error/404/index.vue`)
  }
];

export default routes;
