import { SidebarItemType } from '../types/sidebar';

import {
  getRouteAnalytics,
  getRouteCompany, getRouteEmployees, getRouteEvents, getRouteInstructions,
  getRouteMain,
} from '@/shared/const/router';

export const getSidebarItems = () => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Главная',
    },
    {
      path: getRouteCompany('id'),
      text: 'Моя компания',
    },
    {
      path: getRouteEmployees(),
      text: 'Сотрудники',
    },
    {
      path: getRouteEvents(),
      text: 'Мероприятия',
    },
    {
      path: getRouteAnalytics(),
      text: 'Аналитика',
    },
    {
      path: getRouteInstructions(),
      text: 'Инструкция',
    },
  ];

  return sidebarItemsList;
}
