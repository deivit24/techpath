import service from '@/api/http';

const AuthApi = {
  login: (params: object) => service.post(`/auth/login`, params),
  register: (params: object) => service.post(`/auth/register`, params),
  refreshToken: (params: object) => service.post(`/auth/refresh-tokens`, params),
};

export default AuthApi;
