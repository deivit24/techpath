import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import showCodeMessage from '@/api/code';
import { formatJsonToUrlParams, instanceObject } from '@/utils/format';
import { getHeaders } from './headers';
import { LocalStorage, LocalKey } from 'ts-localstorage';
import router from '@/router';
const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

// create an instance
const axiosInstance: AxiosInstance = axios.create({
  // prefix
  baseURL: BASE_PREFIX,

  // time out
  timeout: 1000 * 30,

  // request header
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO Here you can add logic that you want to process before the request is sent
    // TODO such as loading etc.
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    console.log(response);

    if (response?.data?.message) {
      ElMessage.error(response?.data?.message);
      if (response?.status === 401) {
        const refreshKey = new LocalKey('refreshToken', '');
        LocalStorage.removeItem(refreshKey);
      }
      return Promise.reject(error);
    }
    if (response) {
      ElMessage.error(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    ElMessage.warning('The network connection is abnormal, please try again later!');
    return Promise.reject(error);
  },
);
const service = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data, headers: getHeaders() });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data, { headers: getHeaders() });
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    window.location.href = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
  },
};

export default service;
