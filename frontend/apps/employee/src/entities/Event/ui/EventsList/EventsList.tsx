import { EventCard } from '../..';
import { Event } from '../../model/types/eventCard';

import cls from './EventsList.module.scss';

interface IEventList {
  commonEvents: Event[];
  employeeEvents: Event[];
  onOpen: (arg: boolean) => void;
  onEvent: (arg: Event) => void;
}

export const EventsList = (props: IEventList) => {
  const { commonEvents, employeeEvents, onOpen, onEvent } = props;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {commonEvents || employeeEvents ? (
        <>
          <div className={cls.wrapper}>
            {commonEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onOpen={onOpen}
                onEvent={onEvent}
              />
            ))}
          </div>
          <div className={cls.wrapper}>
            {employeeEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onOpen={onOpen}
                onEvent={onEvent}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={cls.not}>
          Нет доступных мероприятий на данный момент.
        </div>
      )}
    </>
  );
};
