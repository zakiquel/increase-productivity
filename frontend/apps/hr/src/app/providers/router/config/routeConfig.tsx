import { type RouteProps } from 'react-router-dom';

import { AnalyticsPage } from "@/pages/AnalyticsPage";
import { CompanyPage } from "@/pages/CompanyPage";
import { EmployeePage } from "@/pages/EmployeePage";
import { EventsPage } from "@/pages/EventsPage";
import { InstructionsPage } from "@/pages/InstructionsPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import {
  AppRoutes,
  getRouteAnalytics,
  getRouteCompany,
  getRouteEmployee,
  getRouteEvents,
  getRouteCatalog,
  getRouteInstructions,
  getRouteMain,
  getRouteProfile
} from '@/shared/const/router'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />
  },
  [AppRoutes.COMPANY]: {
    path: getRouteCompany(':id'),
    element: <CompanyPage />
  },
  [AppRoutes.EMPLOYEE]: {
    path: getRouteEmployee(':id'),
    element: <EmployeePage />
  },
  [AppRoutes.EVENTS]: {
    path: getRouteEvents(),
    element: <EventsPage />
  },
  [AppRoutes.ANALYTICS]: {
    path: getRouteAnalytics(),
    element: <AnalyticsPage />
  },
  [AppRoutes.CATALOG]: {
    path: getRouteCatalog(),
    element: <NotFoundPage />
  },
  [AppRoutes.INSTRUCTIONS]: {
    path: getRouteInstructions(),
    element: <InstructionsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
}
