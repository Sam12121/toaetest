import { ActionFunction } from 'react-router-dom';

import { getAuthenticationApiClient } from '@/api/api';
import { ApiDocsBadRequestResponse } from '@/api/generated';
import { apiWrapper } from '@/utils/api';
import { handleLoginAndRedirect } from '@/utils/auth';

export type LoginActionReturnType = {
  error?: string;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
};

export const loginAction: ActionFunction = async ({
  request,
}): Promise<LoginActionReturnType> => {
  const url = new URL(request.url);
  const formData = await request.formData();
  const body = Object.fromEntries(formData);

  const login = apiWrapper({
    fn: getAuthenticationApiClient().login,
    options: { handleAuthError: false },
  });

  const loginResponse = await login({
    modelLoginRequest: {
      email: body.email as string,
      password: body.password as string,
    },
  });

  if (!loginResponse.ok) {
    if (
      loginResponse.error.response.status === 404 ||
      loginResponse.error.response.status === 401
    ) {
      return {
        error: 'Invalid credentials',
      };
    } else if (loginResponse.error.response.status === 400) {
      const modelResponse: ApiDocsBadRequestResponse =
        await loginResponse.error.response.json();
      return {
        fieldErrors: {
          email: modelResponse.error_fields?.email,
          password: modelResponse.error_fields?.password,
        },
      };
    }
    throw loginResponse.error;
  }

  handleLoginAndRedirect(loginResponse.value, url.searchParams);
};
