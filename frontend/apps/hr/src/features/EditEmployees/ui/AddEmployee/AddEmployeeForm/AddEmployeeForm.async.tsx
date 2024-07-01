import { FC, lazy } from 'react';

import { AddEmployeeModalProps } from './AddEmployeeForm';

export const AddEmployeeModalAsync = lazy<FC<AddEmployeeModalProps>>(
  () => import('./AddEmployeeForm')
);