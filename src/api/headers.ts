import authStore from '@/store/auth';

const getHeaders = () => {
  const token = authStore().getToken;

  if (!token) {
    return {
      'Content-Type': 'application/json',
      Authorization: '',
    };
  } else {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }
};

export { getHeaders };
