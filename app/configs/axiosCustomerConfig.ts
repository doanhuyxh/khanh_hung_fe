'use client'

import axios from 'axios';

const axiosCustomerConfig = axios.create({
  baseURL: 'https://localhost:44387/api/v1',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const postFormData = (url: string, data: any) => {

  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  return axiosCustomerConfig.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

axiosCustomerConfig.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosCustomerConfig.interceptors.response.use(
  async (response) => {
    const data = response.data;
    return data;
  },
  async (error) => {
    if (error.response) {
      // Handle 401 - Token expired, try refresh
      if (error.response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        const user = localStorage.getItem('user') ?? "{}";
        const userId = JSON.parse(user).id;

        if (refreshToken) {
          try {
            const refreshResponse = await axiosCustomerConfig.post('/Auth/RefreshToken', {
              userId,
              refreshToken
            });

            const { accessToken, refreshToken: newRefreshToken } = refreshResponse.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            // Retry original request with new token
            const originalRequest = error.config;
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return axiosCustomerConfig(originalRequest);

          } catch (refreshError) {
            localStorage.clear();
            window.location.href = '/';
            return Promise.reject(refreshError);
          }
        } else {
          localStorage.clear();
          window.location.href = '/';
          return Promise.reject(error.response.data);
        }
      }

      // Handle 402 - Insufficient permissions
      if (error.response.status === 402) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axiosCustomerConfig;
