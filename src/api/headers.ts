import authStore from '@/store/auth';

const getHeaders = (file: boolean = false) => {
  const token = authStore().getToken;

  if (!token) {
    return {
      'Content-Type': file ? 'multipart/form-data' : 'application/json',
      Authorization: '',
    };
  } else {
    return {
      'Content-Type': file ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }
};

export { getHeaders };
