import service from '@/api/http';

const loginApi = {

  postVerification: (params: object) => service.post(`/login`, params),
};

export default loginApi;
