import { FC, lazy } from 'react';

import { AddMetricFormProps } from './AddMetricForm';

export const AddMetricFormAsync = lazy<FC<AddMetricFormProps>>(
  () => import('./AddMetricForm'),
);
