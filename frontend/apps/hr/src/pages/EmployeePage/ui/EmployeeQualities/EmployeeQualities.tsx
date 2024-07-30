import { Card } from '@repo/shared/ui';

import { PersonalQualitiesChart } from '@/entities/Diagrams';

import cls from './EmployeeQualities.module.scss';

interface EmployeeQualitiesProps {
  className?: string;
}

export const EmployeeQualities = (props: EmployeeQualitiesProps) => {
  const { className } = props;

  return (
    <div>
      {Array.from({ length: 11 }).map((_, index) => (
        <Card
          variant="light"
          padding="16"
          className={cls.canvas_container}
          key={index}
        >
          <PersonalQualitiesChart title={`Ценность ${index + 1}`} />
        </Card>
      ))}
      ;
    </div>
  );
};
