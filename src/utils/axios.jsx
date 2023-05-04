import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const customBaseUrl = axios.create({
  baseURL: 'https://hotoffers-backend-production.up.railway.app/api',
});

customBaseUrl.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers['Authorization'] = `Token ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customBaseUrl;
