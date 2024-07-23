import { Button, Icon } from '@repo/shared/ui';

import { getEvents } from '../../model/lib/getEvents';
import { type Event } from '../../model/types/event';
import { EventCard } from '../EventCard/EventCard';

import plus from '@/shared/assets/icons/plus.svg';

import cls from './EventsList.module.scss';

interface EventsListProps {
  className?: string;
  events: Event[];
  setIsOpen: (value: boolean) => void;
  setActiveEvent: (value: Event) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const EventsList = (props: EventsListProps) => {
  const { className, events, setIsOpen, setActiveEvent, setIsModalOpen } =
    props;

  const sortedEvents = getEvents(events);

  if (!events) {
    return (
      <div className={cls.not}>
        Нет доступных мероприятий на данный момент.
        <Button
          addonLeft={<Icon Svg={plus} className={cls.icon} />}
          className={cls.btn}
          onClick={() => setIsOpen(true)}
        >
          Создать мероприятие
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className={cls.wrapper}>
        {sortedEvents?.Ожидание.map((event) => (
          <EventCard
            event={event}
            setIsModalOpen={setIsModalOpen}
            setActiveEvent={setActiveEvent}
          />
        ))}
      </div>
      <div className={cls.wrapper}>
        {sortedEvents?.Одобрено.map((event) => (
          <EventCard
            event={event}
            setIsModalOpen={setIsModalOpen}
            setActiveEvent={setActiveEvent}
          />
        ))}
      </div>
      <div className={cls.wrapper}>
        {sortedEvents?.Закрыто.map((event) => (
          <EventCard
            event={event}
            setIsModalOpen={setIsModalOpen}
            setActiveEvent={setActiveEvent}
          />
        ))}
      </div>
    </>
  );
};
