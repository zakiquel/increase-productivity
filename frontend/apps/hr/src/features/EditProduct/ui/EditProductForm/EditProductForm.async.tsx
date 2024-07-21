import { FC, lazy } from 'react';

import { EditProductFormProps } from './EditProductForm';

export const EditProductFormAsync = lazy<FC<EditProductFormProps>>(
  () => import('./EditProductForm'),
);
