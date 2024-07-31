import { Button, Card, Text } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { EventEmployeeBar, EmployeeEvent } from '@/entities/Employee';

import cls from './EmployeeEvents.module.scss';

interface EmployeeEventsProps {
  events?: EmployeeEvent[];
}

const tempEventsList: EmployeeEvent[] = [
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Закрыто',
    date: '14.07.2024',
  },
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Отказано',
    date: '14.07.2024',
  },
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Отказано',
    date: '14.07.2024',
  },
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Закрыто',
    date: '14.07.2024',
  },
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Отказано',
    date: '14.07.2024',
  },
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Закрыто',
    date: '14.07.2024',
  },
  {
    id: 1,
    name: 'Мероприятие',
    description:
      'Описание до 300 символов с пробелами. Здесь как раз 300. Dynamic Labs is an IT consulting company that provides robust IT solutions for complex design and development needs. They offer cloud-based, real-time BIM-model analysis, a learning management system, and unique custom design automation tools.',
    duration: 1500,
    status: 'Закрыто',
    date: '14.07.2024',
  },
];

export const EmployeeEvents = memo((props: EmployeeEventsProps) => {
  const { events } = props;

  const [maxCount, setMaxCount] = useState(5);
  const [isOpen, setOpen] = useState(false);
  return (
    <Card className={cls.EmployeeEvents} variant="light" padding="16">
      <Text text="История мероприятий" bold />
      <div className={cls.title}>
        <Text text="Название" variant="grey" size="s" />
        <Text text="Дата" variant="grey" size="s" />
        <Text text="Вознаграждение" variant="grey" size="s" />
        <Text text="Статус" variant="grey" size="s" />
      </div>
      {tempEventsList ? (
        <ul>
          {tempEventsList.slice(0, maxCount).map((event) => (
            <li className={cls.event} key={event.name}>
              <EventEmployeeBar event={event} />
            </li>
          ))}
        </ul>
      ) : (
        <Text
          size="xs"
          text="Нет информации о посещении мероприятий"
          className={cls.textEmpty}
        />
      )}
      {tempEventsList.length > 5 && !isOpen && (
        <Button
          variant="ghost"
          size="s"
          onClick={() => {
            setMaxCount(tempEventsList.length);
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
