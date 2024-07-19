import { type RouteProps } from 'react-router-dom';

import { CatalogPage } from '@/pages/CatalogPage';
import { CompanyPage } from '@/pages/CompanyPage';
import { EmployeePage } from '@/pages/EmployeePage';
import { EventsPage } from '@/pages/EventsPage';
import { InstructionsPage } from '@/pages/InstructionsPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ValueConstructorPage } from '@/pages/ValueConstructorPage';
import { RequestsEventsPage } from '@/pages/RequestsEventsPage';
import { TestDiagramsPage } from '@/pages/TestDiagrams'; // TODO: Потом удалить
import {
  AppRoutes,
  getRouteCompany,
  getRouteValueConstructor,
  getRouteEmployee,
  getRouteEvents,
  getRouteCatalog,
  getRouteInstructions,
  getTestDiagrams, // TODO: Потом удалить
  getRouteMain,
  getRouteProfile,
  getRouteRequestsEvents,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
  },
  [AppRoutes.COMPANY]: {
    path: getRouteCompany(),
    element: <CompanyPage />,
  },
  [AppRoutes.VALUE_CONSTRUCTOR]: {
    path: getRouteValueConstructor(),
    element: <ValueConstructorPage />,
  },
  [AppRoutes.REQUESTS]: {
    path: getRouteRequestsEvents(),
    element: <RequestsEventsPage />,
  },
  [AppRoutes.EMPLOYEE]: {
    path: getRouteEmployee(':id'),
    element: <EmployeePage />,
  },
  [AppRoutes.EVENTS]: {
    path: getRouteEvents(),
    element: <EventsPage />,
  },
  [AppRoutes.CATALOG]: {
    path: getRouteCatalog(),
    element: <CatalogPage />,
  },
  [AppRoutes.INSTRUCTIONS]: {
    path: getRouteInstructions(),
    element: <InstructionsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
  [AppRoutes.TEST_DIAGRAMS]: {
    // TODO: Потом удалить
    path: getTestDiagrams(),
    element: <TestDiagramsPage />,
  },
};
