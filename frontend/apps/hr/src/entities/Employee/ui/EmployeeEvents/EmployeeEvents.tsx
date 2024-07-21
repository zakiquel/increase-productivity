import { Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import { Event } from '../../model/types/employee';

import cls from './EmployeeEvents.module.scss';

interface EmployeeEventsProps {
  events?: Event[];
}

export const EmployeeEvents = memo((props: EmployeeEventsProps) => {
  const { events } = props;
  return (
    <Card className={cls.EmployeeEvents} variant="light" padding="16">
      <Text text="История мероприятий" />
      <div className={cls.title}>
        <Text text="Мероприятие" variant="grey" size="s" />
        <Text text="Дата" variant="grey" size="s" />
        <Text text="Статус" variant="grey" size="s" />
      </div>
      {events && (
        <ul>
          {events.map((event) => (
            <li className={cls.event} key={event.name}>
              <Text text={event.name} size="s" bold />
              <Text text={event.date} size="s" bold />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
});
