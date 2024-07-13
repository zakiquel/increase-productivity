import { FC, lazy } from 'react';

import { AuthorizationFormProps } from './AuthorizationForm';

export const AuthorizationFormAsync = lazy<FC<AuthorizationFormProps>>(
  () => import('./AuthorizationForm'),
);
