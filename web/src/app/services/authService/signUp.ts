import { httpClient } from '../httpClient';

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
};

type SignUpResponse = {
  accessToken: string;
};

export async function signUp(params: SignUpParams) {
  const { data } = await httpClient.post<SignUpResponse>('/auth/signUp', params);

  return data;
}
