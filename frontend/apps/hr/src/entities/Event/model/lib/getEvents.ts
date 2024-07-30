import { Event } from '../types/event';

export enum ListEventEnum {
  APPROVED = 'Одобрено',
  WAITING = 'Ожидание',
  CLOSED = 'Закрыто',
  REFUSED = 'Отказано',
}

export interface IEventsList {
  Одобрено: Event[];
  Ожидание: Event[];
  Закрыто: Event[];
}
export const getEvents = (events: Event[]) => {
  const EventsOnStatus: IEventsList = {
    Одобрено: [],
    Ожидание: [],
    Закрыто: [],
  };

  // events.forEach((event) => {
  //   switch (event.tag) {
  //     case ListEventEnum.APPROVED:
  //       EventsOnStatus[event.tag].push(event);
  //       break;
  //     case ListEventEnum.WAITING:
  //       EventsOnStatus[event.tag].push(event);
  //       break;
  //     case ListEventEnum.CLOSED:
  //       EventsOnStatus[event.tag].push(event);
  //       break;
  //
  //     default:
  //       break;
  //   }
  // });

  return EventsOnStatus;
};
