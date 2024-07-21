import { classNames } from '@repo/shared/lib';
import { AppImage, Card, Status, TVariant, Text } from '@repo/shared/ui';

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
        className={classNames(
          cls.img,
          { [cls.closed]: event.tag === 'Закрыто' },
          [],
        )}
      />
      <Status className={cls.tag} variant={event.tag as TVariant} size="xs" />
      <div className={cls.wrapper}>
        <Text text={event.title} />
        <div className={cls.wrp}>
          <span className={cls.price}>{`${event.price?.toString()} Б`}</span>
          <span className={cls.date}>Создано: {event.date}</span>
        </div>
      </div>
    </Card>
  );
};
