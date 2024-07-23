import { getRequests } from '../../model/lib/getRequests';
import { EventRequest } from '../../model/types/event';
import { RequestCard } from '../RequestCard/RequestCard';

import cls from './RequestList.module.scss';

interface RequestsListProps {
  className?: string;
  requests: EventRequest[];
}

export const RequestsList = (props: RequestsListProps) => {
  const { className, requests } = props;

  const sortedRequests = getRequests(requests);

  if (!requests) {
    return <div className={cls.not}>Заявок нет</div>;
  }

  return (
    <>
      <div className={cls.wrapper}>
        {sortedRequests?.Ожидание.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
      <div className={cls.wrapper}>
        {sortedRequests?.Одобрено.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
      <div className={cls.wrapper}>
        {sortedRequests?.Отказано.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
      <div className={cls.wrapper}>
        {sortedRequests?.Закрыто.map((request) => (
          <RequestCard request={request} />
        ))}
      </div>
    </>
  );
};
