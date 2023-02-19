import service from '@/api/http';

const UsersApi = {
  getUserSettings: () => service.get('/users/settings'),
  updateUserSettings: (settings?: object) => service.patch('/users/settings', settings),
  uploadAvatar: (file?: FormData) => service.upload(`/users/settings/avatar`, file),
};

export default UsersApi;
