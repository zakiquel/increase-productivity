import { type RouteProps } from 'react-router-dom'

import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { CompanyPage } from "@/pages/CompanyPage";
import { EmployeesPage } from "@/pages/EmployeesPage";
import { EventsPage } from "@/pages/EventsPage";
import { InstructionsPage } from "@/pages/InstructionsPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import {
  AppRoutes, getRouteAnalytics, getRouteCompany, getRouteEmployees, getRouteEvents, getRouteInstructions,
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
  [AppRoutes.EMPLOYEES]: {
    path: getRouteEmployees(),
    element: <EmployeesPage />
  },
  [AppRoutes.EVENTS]: {
    path: getRouteEvents(),
    element: <EventsPage />
  },
  [AppRoutes.ANALYTICS]: {
    path: getRouteAnalytics(),
    element: <AnalyticsPage />
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
