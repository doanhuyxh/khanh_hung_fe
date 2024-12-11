import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5035/api/v1/admin',
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

  return axiosInstance.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

axiosInstance.interceptors.response.use(
  async (response) => {
    const data = response.data;
    return data;
  },
  async (error) => {
    if (error.response) {
      // Handle 401 - Token expired, try refresh
      if (error.response.status === 401) {
        await axiosInstance.post("/auth/RefreshToken")
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        return axiosInstance
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

export default axiosInstance;
