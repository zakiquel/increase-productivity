import { classNames } from '@repo/shared/lib';
import { Card, Status, Text as TextTag, TVariant } from '@repo/shared/ui';
import Image from 'next/image';

import { Event } from '../../model/types/eventCard';

import eventImg from '@/shared/assets/images/event.png';

import cls from './EventCard.module.scss';

interface IEventCard {
  event: Event;
  onOpen: (arg: boolean) => void;
  onEvent: (arg: Event) => void;
}

export const EventCard = (props: IEventCard) => {
  const { event, onOpen, onEvent } = props;

  return (
    <Card
      padding="0"
      variant="light"
      className={cls.event_card}
      style={{ borderRadius: '8px' }}
      onClick={() => {
        onOpen(true);
        onEvent(event);
      }}
    >
      <Image
        src={eventImg}
        alt="event"
        width={404}
        height={221}
        className={classNames(cls.img, {}, [
          event.tag === 'Закрыто' ? cls.closed : undefined,
        ])}
      />

      <Status className={cls.tag} variant={event.tag as TVariant} size="xs" />

      <div className={cls.wrapper}>
        <TextTag size="m" text={event.title} />
        <div className={cls.wrp}>
          <span className={cls.price}>{`${event.price?.toString()} Б`}</span>
          <span className={cls.date}>{event.date}</span>
        </div>
      </div>
    </Card>
  );
};
