import { AppLink } from '@repo/shared/ui';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getSidebarItems } from '@/shared/lib';

import cls from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();

  if (
    useSelector(getSidebarItems).some((item) => item.path === location.pathname)
  ) {
    return null;
  }

  type path =
    | 'hr'
    | 'id'
    | 'values'
    | 'events'
    | 'catalog'
    | 'instructions'
    | 'constructor'
    | 'requests'
    | 'employees';

  const mapPathname: Record<path, string> = {
    hr: 'Главная',
    id: '',
    values: 'Ценности и метрики',
    events: 'Мероприятия',
    catalog: 'Каталог',
    requests: 'Заявки',
    constructor: 'Конструктор ценностей',
    instructions: 'Инструкция',
    employees: 'Сотрудник',
  };

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '' && Number.isNaN(parseInt(crumb, 10)))
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <AppLink to={currentLink} className={cls.crumb} key={crumb}>
          {mapPathname[crumb as path]}
        </AppLink>
      );
    });

  return <div className={cls.breadcrumbs}>{crumbs}</div>;
};
