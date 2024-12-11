'use client'

import axios from 'axios';
import axiosInstance from './axiosConfig';

const axiosCustomerConfig = axios.create({
  baseURL: 'http://localhost:5035/api/v1',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

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

        await axiosCustomerConfig.post("/Auth/RefreshToken")
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        return axiosInstance

        } else {
          localStorage.clear();
          return Promise.reject(error.response.data);
        }
      }
      // Handle 402 - Insufficient permissions
      if (error.response.status === 402) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(error.response.data);
    }
   
);

export default axiosCustomerConfig;
