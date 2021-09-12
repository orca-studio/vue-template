import Router from 'vue-router';
import { getMeta } from '@/router/util';
import { useUserStore } from '@/store/modules/user';

/**
 * 认证守卫
 * @param router
 */
export function createAuthGuard(router: Readonly<Router>): void {
  router.beforeEach((to, _, next) => {
    const meta = getMeta(to);

    if (!meta?.auth) {
      next();
      return;
    }
    //  如果当前需要登录,获取当前用户,进行认证
    const userStore = useUserStore();

    userStore
      .getUserInfo()
      .then(() => {
        next();
      })
      .catch(() => {
        //  失败跳转登录页
        next('/account/login');
      });
  });
}
