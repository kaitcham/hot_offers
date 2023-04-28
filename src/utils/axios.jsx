import axios from 'axios';

const customBaseUrl = axios.create({
  baseURL: 'https://hotoffers-backend-production.up.railway.app/api',
});

export default customBaseUrl;
