import { FC, lazy } from 'react';

import { AddValueFormProps } from './AddValueForm';

export const AddValueFormAsync = lazy<FC<AddValueFormProps>>(
  () => import('./AddValueForm')
);
