import { getRequests } from '../../model/lib/getRequests';
import { ProductRequest } from '../../model/types/product';
import { RequestCard } from '../RequestCard/RequestCard';

import cls from './RequestList.module.scss';

interface RequestListProps {
  requests: ProductRequest[];
}

export const RequestList = (props: RequestListProps) => {
  const { requests } = props;

  if (!requests) return <div className={cls.not}>Заявок нет</div>;

  const SortedProductRequests = getRequests(requests);

  return (
    <>
      <div className={cls.wrapper}>
        {SortedProductRequests?.Ожидание.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
      <div className={cls.wrapper}>
        {SortedProductRequests?.Одобрено.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
      <div className={cls.wrapper}>
        {SortedProductRequests?.Получен.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
      <div className={cls.wrapper}>
        {SortedProductRequests?.Отказано.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
    </>
  );
};
