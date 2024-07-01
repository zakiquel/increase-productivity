import { Button, Card } from '@repo/shared/ui';
import React, { memo, useState } from 'react';

import { Value, ValueList } from '@/entities/Value';
import { AddValueModal } from '@/features/AddValue';
import { EditQualitiesModal } from '@/features/EditQualities';

import cls from './ValuesAndQualities.module.scss';

const testValues = [
  {
    id: 1,
    name: 'Самоотдача',
    qualities: [
      { id: 2, name: 'Обучаемость' },
      { id: 9, name: 'Серьезность' },
      { id: 16, name: 'Умение заниматься рутинной работой' },
      { id: 21, name: 'Чувство юмора' },
      { id: 26, name: 'Лидерство' },
    ],
  },
  {
    id: 2,
    name: 'Страсть',
    qualities: [],
  },
  {
    id: 3,
    name: 'Честность',
    qualities: [
      { id: 3, name: 'Честность' },
      { id: 9, name: 'Серьезность' },
    ],
  },
  {
    id: 4,
    name: 'Открытость',
    qualities: [
      { id: 4, name: 'Умение говорить' },
      { id: 10, name: 'Коммуникабельность' },
      { id: 8, name: 'Этичность' },
      { id: 27, name: 'Умение слушать' },
    ],
  },
  {
    id: 5,
    name: 'Практичный подход',
    qualities: [],
  },
  {
    id: 6,
    name: 'Самоотдача',
    qualities: [
      { id: 2, name: 'Обучаемость' },
      { id: 9, name: 'Серьезность' },
      { id: 16, name: 'Умение заниматься рутинной работой' },
      { id: 21, name: 'Чувство юмора' },
      { id: 26, name: 'Лидерство' },
    ],
  },
];

export const ValuesAndQualities = memo(() => {
  const [isAddValueModal, setIsValueModal] = useState(false);
  const [isEditQualitiesModal, setIsEditQualitiesModal] = useState(false);
  const [editingValue, setEditingValue] = useState<Value | null>(null);

  const handleEditQualities = (value: Value) => {
    setEditingValue(value);
    setIsEditQualitiesModal(true);
  };

  return (
    <div className={cls.ValuesAndQualities}>
      <Card variant='light' padding='32' border='normal'>
        <h2>Ценности и качества</h2>
        <p>Добавьте до 8 ценностей, к каждой ценности до 5 качеств.</p>
      </Card>
      <ValueList
        values={testValues}
        className={cls.company_values}
        cardAction={handleEditQualities}
      />
      <Button
        size='l'
        fullWidth
        onClick={() => setIsValueModal(true)}
        className={cls.addValue_button}
      >
        Нажмите, чтобы добавить ценность
      </Button>
      {isAddValueModal && (
        <AddValueModal
          isOpen={isAddValueModal}
          onClose={() => setIsValueModal(false)}
        />
      )}
      {isEditQualitiesModal && editingValue && (
        <EditQualitiesModal
          value={editingValue}
          isOpen={isEditQualitiesModal}
          onClose={() => setIsEditQualitiesModal(false)}
        />
      )}
    </div>
  );
});
