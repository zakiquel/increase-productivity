import commonEvents from '../../model/data/tempData.json';
import employeeEvents from '../../model/data/tempDataUser.json';

import { Event, EventsList } from '@/entities/Event';

interface IEventInfiniteList {
  onOpen: (arg: boolean) => void;
  onEvent: (arg: Event) => void;
}

export const EventInfiniteList = (props: IEventInfiniteList) => {
  const { onOpen, onEvent } = props;
  return (
    <EventsList
      commonEvents={commonEvents}
      employeeEvents={employeeEvents}
      onOpen={onOpen}
      onEvent={onEvent}
    />
  );
};
