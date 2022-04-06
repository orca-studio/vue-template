import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({ token: '' }),
  getters: {
    getToken(state): string {
      return state.token;
    }
  },

  actions: {
    /**
     *  获取用户信息
     * @returns
     */
    getUserInfo(): Promise<string> {
      return new Promise((resolve) => {
        if (this.token) {
          resolve(this.token);
          return;
        }

        // TODO: 模拟登录
        this.token = '123';
        resolve(this.token);
      });
    },

    /**
     * 登录
     */
    login() {},

    /**
     * 登出
     * @param goLogin
     */
    logout() {
      // goLogin && router.push(PageEnum.BASE_LOGIN);
    }
  }
});
