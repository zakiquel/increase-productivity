import { FC, lazy } from 'react';

import { AddMetricFormProps } from './AddQualitiesForm';

export const AddQualitiesFormAsync = lazy<FC<AddMetricFormProps>>(
  () => import('./AddQualitiesForm'),
);
