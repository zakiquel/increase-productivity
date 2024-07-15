import { IEventCard } from '@/entities/EventCard';

export interface IEventsList {
  Одобрено: IEventCard[];
  Ожидание: IEventCard[];
  Закрыто: IEventCard[];
}
export const getEvents = (events: IEventCard[]) => {
  const EventsOnStatus: IEventsList = {
    Одобрено: [],
    Ожидание: [],
    Закрыто: [],
  };
  events.forEach((event) => {
    switch (event.tag) {
      case 'Одобрено':
        EventsOnStatus[event.tag].push(event);
        break;
      case 'Ожидание':
        EventsOnStatus[event.tag].push(event);
        break;
      case 'Закрыто':
        EventsOnStatus[event.tag].push(event);
        break;

      default:
        break;
    }
  });
  console.log(EventsOnStatus);
  return EventsOnStatus;
};
