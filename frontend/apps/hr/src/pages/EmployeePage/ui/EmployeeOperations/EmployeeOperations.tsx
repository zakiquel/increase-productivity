import { Button, Card, Text } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { OperationEmployeeBar, EmployeeOperation } from '@/entities/Employee';

import cls from './EmployeeOperations.module.scss';

interface EmployeeOperationsProps {
  operations?: EmployeeOperation[];
}

const tempOperationsList: EmployeeOperation[] = [
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '-1500',
    date: '14.07.2024',
  },
  {
    id: 2,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '-1500',
    date: '14.07.2024',
  },
  {
    id: 3,
    name: 'Изменения баланса от HR',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '-1500',
    date: '14.07.2024',
  },
  {
    id: 4,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '-1500',
    date: '14.07.2024',
  },
  {
    id: 5,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '+1500',
    date: '14.07.2024',
  },
  {
    id: 6,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '+1500',
    date: '14.07.2024',
  },

  {
    id: 7,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '+1500',
    date: '14.07.2024',
  },

  {
    id: 8,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    status: '+1500',
    date: '14.07.2024',
  },
];

export const EmployeeOperations = memo((props: EmployeeOperationsProps) => {
  const { operations } = props;
  const [maxCount, setMaxCount] = useState(5);
  const [isOpen, setOpen] = useState(false);
  return (
    <Card className={cls.EmployeeOperations} variant="light" padding="16">
      <Text text="История операций" bold />
      <div className={cls.title}>
        <Text text="Описание" variant="grey" size="s" />
        <Text text="Дата" variant="grey" size="s" />
        <Text text="Статус" variant="grey" size="s" />
      </div>
      {tempOperationsList ? (
        <ul>
          {tempOperationsList.slice(0, maxCount).map((operation) => (
            <li>
              <OperationEmployeeBar operation={operation} />
            </li>
          ))}
        </ul>
      ) : (
        <Text
          size="xs"
          text="На данный момент операции не были совершены"
          className={cls.textEmpty}
        />
      )}
      {tempOperationsList.length > 5 && !isOpen && (
        <Button
          variant="ghost"
          size="s"
          onClick={() => {
            setMaxCount(tempOperationsList.length);
            setOpen(true);
          }}
        >
          Открыть все
        </Button>
      )}
      {isOpen && (
        <Button
          variant="ghost"
          size="s"
          onClick={() => {
            setMaxCount(5);
            setOpen(false);
          }}
        >
          Скрыть
        </Button>
      )}
    </Card>
  );
});
