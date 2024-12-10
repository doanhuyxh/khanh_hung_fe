import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5123/api/v1/admin',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
});

export const postFormData = (url: string, data: any) => {

  let formData = new FormData();
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
        const refreshToken = localStorage.getItem('refreshToken');
        const user = localStorage.getItem('user') ?? "{}";
        const userId = JSON.parse(user).id;

        if (refreshToken) {
          try {
            const refreshResponse = await axiosInstance.post('/auth/RefreshToken', {
              userId,
              refreshToken
            });

            const { accessToken, refreshToken: newRefreshToken } = refreshResponse.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            // Retry original request with new token
            const originalRequest = error.config;
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return axiosInstance(originalRequest);

          } catch (refreshError) {
            localStorage.clear();
            window.location.href = '/admin_web/auth/login';
            return Promise.reject(refreshError);
          }
        } else {
          localStorage.clear();
          window.location.href = '/admin_web/auth/login';
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

export default axiosInstance;
