import service from '@/api/http';

const UsersApi = {
  getUserSettings: () => service.get('/users/settings'),
  uploadAvatar: (file?: FormData) => service.upload(`/users/settings/avatar`, file),
};

export default UsersApi;
