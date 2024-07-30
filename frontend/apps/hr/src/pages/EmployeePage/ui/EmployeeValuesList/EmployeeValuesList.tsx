import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';

import { PersonalQualitiesChart } from '@/entities/Diagrams';

import cls from './EmployeeValuesList.module.scss';

interface EmployeeValuesListProps {
  className?: string;
}

export const EmployeeValuesList = (props: EmployeeValuesListProps) => {
  const { className } = props;

  return (
    <section className={classNames(cls.EmployeeValuesList, {}, [className])}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Card
          variant="light"
          padding="16"
          key={index}
          className={cls.canvas_container}
        >
          <PersonalQualitiesChart title={`Ценность ${index + 1}`} />
        </Card>
      ))}
    </section>
  );
};
