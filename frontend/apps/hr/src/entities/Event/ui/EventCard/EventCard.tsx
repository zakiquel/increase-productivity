import { classNames } from '@repo/shared/lib';
import { AppImage, Card, Text } from '@repo/shared/ui';

import { Event } from '../../model/types/event';

import img from '@/shared/assets/images/event.png';

import cls from './EventCard.module.scss';

interface EventCardProps {
  className?: string;
  event: Event;
  setIsModalOpen: (value: boolean) => void;
  setActiveEvent: (value: Event) => void;
}

export const EventCard = (props: EventCardProps) => {
  const { className, event, setIsModalOpen, setActiveEvent } = props;

  return (
    <Card
      padding="0"
      variant="light"
      className={cls.event_card}
      style={{ borderRadius: '8px' }}
      onClick={() => {
        setActiveEvent(event);
        setIsModalOpen(true);
      }}
    >
      <AppImage
        src={img}
        alt="event"
        width={404}
        height={221}
        className={classNames(cls.img, {}, [])}
      />
      <div className={cls.wrapper}>
        <Text text={event.name} />
        <div className={cls.wrp}>
          <span className={cls.price}>{`${event.reward?.toString()} Б`}</span>
          <span className={cls.date}>Создано: {event.event_date}</span>
        </div>
      </div>
    </Card>
  );
};
