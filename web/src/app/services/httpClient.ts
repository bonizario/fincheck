import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '../config/constants';
import { sleep } from '../utils/sleep';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

httpClient.interceptors.request.use(config => {
  const storedAccessToken = localStorage.getItem(
    LOCAL_STORAGE_KEYS.ACCESS_TOKEN
  );

  if (storedAccessToken) {
    config.headers.Authorization = `Bearer ${storedAccessToken}`;
  }

  return config;
});

httpClient.interceptors.response.use(async data => {
  await sleep();

  return data;
});
