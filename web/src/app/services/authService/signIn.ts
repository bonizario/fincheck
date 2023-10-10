import { httpClient } from '../httpClient';

type SignInParams = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
};

export async function signIn(params: SignInParams) {
  const { data } = await httpClient.post<SignInResponse>(
    '/auth/signin',
    params
  );

  return data;
}
