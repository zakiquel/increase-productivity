import { FC, lazy } from 'react';

import { EditQualitiesFormProps } from './EditQualitiesForm';

export const EditQualitiesFormAsync = lazy<FC<EditQualitiesFormProps>>(
  () => import('./EditQualitiesForm'),
);
