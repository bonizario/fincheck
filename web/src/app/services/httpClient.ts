import axios from 'axios';

import { localStorageKeys } from '../config/localStorageKeys';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

httpClient.interceptors.request.use(config => {
  const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (storedAccessToken) {
    config.headers.Authorization = `Bearer ${storedAccessToken}`;
  }

  return config;
});
