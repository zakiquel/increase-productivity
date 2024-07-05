import { SegmentedControl } from '@repo/shared/ui';
import React, { memo } from 'react';

import { Employee } from '@/entities/Employee';

const segments = [
  { value: 'byDate', label: 'По дате добавления' },
  { value: 'byAlphabet', label: 'По алфавиту' },
];

interface SortEmployeesProps {
  employees: Employee[];
  onSorted: (sortedEmployees: Employee[]) => void;
  disabled?: boolean;
}

export const SortEmployees = memo((props: SortEmployeesProps) => {
  const { employees, onSorted, disabled } = props;

  const handleSortChange = (method: string) => {
    let sorted: Employee[];
    switch (method) {
      case 'byDate':
        sorted = [...employees].sort(
          (a, b) =>
            new Date(a.personalInfo.dateOfEmployment).getTime() -
            new Date(b.personalInfo.dateOfEmployment).getTime()
        );
        break;
      case 'byAlphabet':
        sorted = [...employees].sort((a, b) =>
          a.personalInfo.lastName.localeCompare(b.personalInfo.lastName)
        );
        break;
      default:
        sorted = [...employees];
        break;
    }
    onSorted(sorted);
  };

  return (
    <SegmentedControl
      name='sort'
      segments={segments}
      callback={handleSortChange}
      disabled={disabled}
    />
  );
});
