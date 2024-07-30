import { rtkApi } from '@/shared/api/rtkApi';

interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface LoginSchema {
  email: string;
  password: string;
}

const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loginByPass: build.mutation<LoginResponse, LoginSchema>({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const loginByPass = loginApi.endpoints.loginByPass.initiate;
