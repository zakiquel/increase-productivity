import { FC, lazy } from 'react';

import { ShowEmployeeFormProps } from './ShowEmployeeForm';

export const ShowEmployeeFormAsync = lazy<FC<ShowEmployeeFormProps>>(
  () => import('./ShowEmployeeForm'),
);
