import { SidebarItemType } from '../types/sidebar';

import {
  getRouteCatalog,
  getRouteCompany, getRouteEvents, getRouteInstructions,
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
      text: 'Ценности и метрики',
    },
    {
      path: getRouteEvents(),
      text: 'Мероприятия',
    },
    {
      path: getRouteCatalog(),
      text: 'Каталог',
    },
    {
      path: getRouteInstructions(),
      text: 'Инструкция',
    },
  ];

  return sidebarItemsList;
}
