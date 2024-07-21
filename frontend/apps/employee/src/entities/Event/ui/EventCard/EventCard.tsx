import { classNames } from '@repo/shared/lib';
import { Card, Status, Text as TextTag, TVariant } from '@repo/shared/ui';
import Image from 'next/image';
import { useState } from 'react';

import { IEventCard } from '../../../Event/model/types/eventCard';
import { EventCardModal } from '../EventCardModal/EventCardModal';

import event from '@/shared/assets/images/event.png';

import cls from './EventCard.module.scss';

export const EventCard = (props: IEventCard) => {
  const { tag, title, price, date } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      padding="0"
      variant="light"
      className={cls.event_card}
      style={{ borderRadius: '8px' }}
    >
      <div onClick={() => setIsOpen(true)}>
        <Image
          src={event}
          alt="event"
          width={404}
          height={221}
          className={classNames(cls.img, {}, [
            tag === 'Закрыто' ? cls.closed : undefined,
          ])}
        />

        <Status className={cls.tag} variant={tag as TVariant} size="xs" />

        <div className={cls.wrapper}>
          <TextTag size="m" text={title} />
          <div className={cls.wrp}>
            <span className={cls.price}>{`${price?.toString()} Б`}</span>
            <span className={cls.date}>{date}</span>
          </div>
        </div>
      </div>
      <EventCardModal
        isOpen={isOpen}
        setOpen={() => setIsOpen(false)}
        {...props}
      />
    </Card>
  );
};
