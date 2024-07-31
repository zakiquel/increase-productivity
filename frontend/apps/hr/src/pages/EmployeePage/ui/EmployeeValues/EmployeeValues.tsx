import { Card } from '@repo/shared/ui';
import { memo } from 'react';

import { PersonalValuesChart } from '@/entities/Diagrams';

interface EmployeeValuesProps {}

export const EmployeeValues = memo((props: EmployeeValuesProps) => (
  <Card variant="light" padding="16">
    <PersonalValuesChart />
  </Card>
));
