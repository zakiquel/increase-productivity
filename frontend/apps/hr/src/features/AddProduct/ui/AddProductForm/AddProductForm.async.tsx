import { FC, lazy } from 'react';

import { AddProductFormProps } from './AddProductForm';

export const AddProductFormAsync = lazy<FC<AddProductFormProps>>(
  () => import('./AddProductForm'),
);
