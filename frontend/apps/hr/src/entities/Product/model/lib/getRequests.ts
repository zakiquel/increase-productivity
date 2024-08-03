import { ProductRequest } from '../types/product';

enum ListProductEnum {
  APPROVED = 'Одобрено',
  WAITING = 'Ожидание',
  RECIEVED = 'Получен',
  REFUSED = 'Отказано',
}

export interface RequestsList {
  Одобрено: ProductRequest[];
  Ожидание: ProductRequest[];
  Получен: ProductRequest[];
  Отказано: ProductRequest[];
}
export const getRequests = (requests: ProductRequest[]) => {
  const RequestsOnStatus: RequestsList = {
    Одобрено: [],
    Ожидание: [],
    Получен: [],
    Отказано: [],
  };

  requests.forEach((request) => {
    switch (request.tag) {
      case ListProductEnum.APPROVED:
        RequestsOnStatus[request.tag].push(request);
        break;
      case ListProductEnum.WAITING:
        RequestsOnStatus[request.tag].push(request);
        break;
      case ListProductEnum.RECIEVED:
        RequestsOnStatus[request.tag].push(request);
        break;
      case ListProductEnum.REFUSED:
        RequestsOnStatus[request.tag].push(request);
        break;

      default:
        break;
    }
  });
  return RequestsOnStatus;
};
