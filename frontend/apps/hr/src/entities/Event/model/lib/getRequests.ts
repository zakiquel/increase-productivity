import { EventRequest } from '../types/event';

import { ListEventEnum } from './getEvents';

export interface RequestsList {
  Одобрено: EventRequest[];
  Ожидание: EventRequest[];
  Закрыто: EventRequest[];
  Отказано: EventRequest[];
}
export const getRequests = (requests: EventRequest[]) => {
  const RequestsOnStatus: RequestsList = {
    Одобрено: [],
    Ожидание: [],
    Закрыто: [],
    Отказано: [],
  };

  requests.forEach((request) => {
    switch (request.tag) {
      case ListEventEnum.APPROVED:
        RequestsOnStatus[request.tag].push(request);
        break;
      case ListEventEnum.WAITING:
        RequestsOnStatus[request.tag].push(request);
        break;
      case ListEventEnum.CLOSED:
        RequestsOnStatus[request.tag].push(request);
        break;
      case ListEventEnum.REFUSED:
        RequestsOnStatus[request.tag].push(request);
        break;

      default:
        break;
    }
  });
  return RequestsOnStatus;
};
