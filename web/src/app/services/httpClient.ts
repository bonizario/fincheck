import axios from 'axios';

import { localStorageKeys } from '../config/localStorageKeys';
import { sleep } from '../utils/sleep';

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

httpClient.interceptors.response.use(async data => {
  await sleep(2000);

  return data;
});
