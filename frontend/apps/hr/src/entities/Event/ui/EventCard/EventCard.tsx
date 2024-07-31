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

  const dataEdit = (data: string) => {
    const splitData = data.split('-').reverse();
    const newData = `${splitData[0]}.${splitData[1]}.${splitData[2].slice(2)}`;
    return newData;
  };

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
      <div className={cls.img_wrap}>
        <AppImage
          src={img}
          alt="event"
          className={classNames(cls.img, {}, [])}
        />
      </div>

      <div className={cls.wrapper}>
        <Text text={event.name} />
        <div className={cls.wrp}>
          <span className={cls.price}>{`${event.reward?.toString()} Б`}</span>
          <span className={cls.date}>
            Создано: {dataEdit(event.event_date)}
          </span>
        </div>
      </div>
    </Card>
  );
};
