import { Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import { Event } from '../../../../entities/Employee/model/types/employee';

import cls from './EmployeeEvents.module.scss';

interface EmployeeEventsProps {
  events?: Event[];
}

export const EmployeeEvents = memo((props: EmployeeEventsProps) => {
  const { events } = props;
  return (
    <Card className={cls.EmployeeEvents} variant="light" padding="16">
      <Text text="История мероприятий" bold />
      <div className={cls.title}>
        <Text text="Название" variant="grey" size="s" />
        <Text text="Дата" variant="grey" size="s" />
        <Text text="Вознаграждение" variant="grey" size="s" />
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
