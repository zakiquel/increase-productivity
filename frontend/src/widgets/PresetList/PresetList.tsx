import React, { memo } from 'react';

import { Value, ValueList } from '@/entities/Value';

import cls from './PresetList.module.scss';

const presets = [
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
    qualities: [
      { id: 1, name: 'Командный дух (команда-семья)' },
      { id: 9, name: 'Серьезность' },
      { id: 15, name: 'Амбициозность' },
      { id: 21, name: 'Чувство юмора' },
      { id: 26, name: 'Лидерство' },
    ],
  },
  {
    id: 3,
    name: 'Честность',
    qualities: [
      { id: 3, name: 'Честность' },
      { id: 9, name: 'Серьезность' },
      { id: 17, name: 'Ответсвенность' },
      { id: 4, name: 'Умение говорить' },
      { id: 27, name: 'Умение слушать' },
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
    qualities: [
      { id: 5, name: 'Системность мышления' },
      { id: 11, name: 'Тайм-менеджмент и пунктуальность' },
      { id: 18, name: 'Профессионализм и компетентность ' },
      { id: 24, name: 'Безопасность' },
    ],
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

export const PresetList = memo(() => {
  const handleAddPreset = (value: Value) => {};
  return (
    <div className={cls.PresetList}>
      <ValueList values={presets} isPreset cardAction={handleAddPreset} />
    </div>
  );
});
