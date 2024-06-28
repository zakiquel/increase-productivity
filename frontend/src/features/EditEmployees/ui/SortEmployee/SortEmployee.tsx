import React, { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import cls from './SortEmployee.module.scss';

type SortMethod = 'byDate' | 'byAlphabet';

export const SortEmployee = memo(() => {
  const [sortMethod, setSortMethod] = useState<SortMethod>('byDate');

  const handleSortChange = (method: SortMethod) => {
    setSortMethod(method);

  };

  return (
    <Card variant='default' border='normal' padding='0' className={classNames(cls.SortEmployee, {}, [])}>
      <Button
        onClick={() => handleSortChange('byDate')}
        variant={sortMethod === 'byDate' ? 'light' : 'ghost'}
        textDark
      >
        По дате добавления
      </Button>
      <Button
        onClick={() => handleSortChange('byAlphabet')}
        variant={sortMethod === 'byAlphabet' ? 'light' : 'ghost'}
        textDark>
        По алфавиту
      </Button>
    </Card>
  )
});
