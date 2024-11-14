import axios from 'axios';
import { API_BASE_URL, DEFAULT_HEADERS, getAuthHeader } from './config';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth header if token exists
    const authHeader = getAuthHeader();
    if (authHeader.Authorization) {
      config.headers = {
        ...config.headers,
        ...authHeader,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // Handle forbidden
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
        default:
          break;
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient; 