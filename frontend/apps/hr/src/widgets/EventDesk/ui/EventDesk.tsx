import { useEffect, useState } from 'react';
import products from '../model/data/tempData.json';

import cls from './EventDesk.module.scss';
import plus from '@/shared/assets/icons/plus.svg';
import { EventCard } from '@/entities/EventCard';
import { Button, Icon } from '@repo/shared/ui';
import { getEvents, IEventsList } from '../model/selectors/getEvents';

const EventsDesk = () => {
  const [events, setEvents] = useState<IEventsList>();
  useEffect(() => {
    setEvents(getEvents(products));
  }, [products]);
  return (
    <div>
      {products.length !== 0 ? (
        <>
          <div className={cls.wrapper}>
            {events?.Ожидание.length !== 0 &&
              events?.Ожидание.map((data) => (
                <EventCard
                  date={data.date}
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  img={data.img}
                  description={data.description}
                  tag={data.tag}
                  id={data.id}
                />
              ))}
          </div>
          <div className={cls.wrapper}>
            {events?.Одобрено.length !== 0 &&
              events?.Одобрено.map((data) => (
                <EventCard
                  date={data.date}
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  img={data.img}
                  description={data.description}
                  tag={data.tag}
                  id={data.id}
                />
              ))}
          </div>
          <div className={cls.wrapper}>
            {events?.Закрыто.length !== 0 &&
              events?.Закрыто.map((data) => (
                <EventCard
                  date={data.date}
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  img={data.img}
                  description={data.description}
                  tag={data.tag}
                  id={data.id}
                />
              ))}
          </div>
        </>
      ) : (
        <div className={cls.not}>
          Нет доступных мероприятий на данный момент.
          <Button
            addonLeft={<Icon Svg={plus} className={cls.icon} />}
            className={cls.btn}
          >
            Создать мероприятие
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventsDesk;
