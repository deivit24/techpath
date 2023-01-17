import { defineStore } from 'pinia';
import router from '@/router/index';
import AuthApi from '@/api/modules/login';
import { LocalStorage, LocalKey } from 'ts-localstorage';
import { User } from '@/models/user.model';
import { Tokens } from '@/models/tokens.model';
interface Login {
  password?: string;
  email?: string;
}
interface Register {
  password?: string;
  email?: string;
  name?: string;
}
const userKey = new LocalKey('user', '');
const userValue = LocalStorage.getItem(userKey);

const refreshKey = new LocalKey('refreshToken', '');
const refreshToken = LocalStorage.getItem(refreshKey);

type Nullable<T> = T | null;
interface AuthState {
  user: Nullable<User>;
  tokens: Nullable<Tokens>;
  refreshToken: Nullable<string>;
}
const authStore = defineStore({
  // The id here must be a unique ID
  id: 'auth',
  state: (): AuthState => ({
    user: null,
    tokens: null,
    refreshToken: refreshToken,
  }),
  // Equivalent to vuex's getter
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.tokens?.access?.token,
    getRefreshToken: (state) => state.refreshToken,
  },
  // pinia dropped mutations and only used actions
  actions: {
    // Actions can be made asynchronous with async
    async login(login: Login) {
      const res = await AuthApi.login(login);

      this.user = res.user;
      this.tokens = res.tokens;
      this.refreshToken = res.tokens.refresh.token;

      LocalStorage.setItem(refreshKey, this.refreshToken);

      router.push('/dashboard');
    },
    async register(data: Register) {
      const res = (await AuthApi.register(data)).data;
      console.log(res);

      this.user = res.user;
      this.tokens = res.tokens;
      this.refreshToken = res.tokens.refresh.token;

      LocalStorage.setItem(refreshKey, this.refreshToken);

      router.push('/dashboard');
    },
    async refreshTokens() {
      const res = await AuthApi.refreshToken({ refreshToken: this.getRefreshToken });

      this.tokens = res.tokens;
      this.user = res.user;
      this.refreshToken = res.tokens.refresh.token;

      LocalStorage.setItem(refreshKey, res.tokens.refresh.token);
    },
    logout() {
      this.user = null;
      this.tokens = null;
      this.refreshToken = null;
      LocalStorage.removeItem(refreshKey);
      router.push('/login');
    },
  },
});

export default authStore;
