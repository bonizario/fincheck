import { httpClient } from '../httpClient';

type MeResponse = {
  email: string;
  name: string;
};

export async function me() {
  const { data } = await httpClient.get<MeResponse>('/users/me');

  return data;
}
