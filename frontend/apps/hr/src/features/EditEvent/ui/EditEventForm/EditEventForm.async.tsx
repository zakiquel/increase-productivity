import { FC, lazy } from 'react';

import { EditEventFormProps } from './EditEventForm';

export const EditEventFormAsync = lazy<FC<EditEventFormProps>>(
  () => import('./EditEventForm'),
);
