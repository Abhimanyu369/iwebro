import axios from 'axios';
import { BACKEND_COMMAN_URL } from './Api';

const API = axios.create({
  baseURL: BACKEND_COMMAN_URL + '/api/',
});

// Attach token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
