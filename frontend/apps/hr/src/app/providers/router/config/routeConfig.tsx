import { type RouteProps } from 'react-router-dom'

import { CatalogPage } from '@/pages/CatalogPage'
import { CompanyPage } from '@/pages/CompanyPage'
import { EmployeePage } from '@/pages/EmployeePage'
import { EventsPage } from '@/pages/EventsPage'
import { InstructionsPage } from '@/pages/InstructionsPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { RequestsEventsPage } from '@/pages/RequestsEventsPage'
import {
	AppRoutes,
	getRouteCompany,
	getRouteEmployee,
	getRouteEvents,
	getRouteCatalog,
	getRouteInstructions,
	getRouteMain,
	getRouteProfile,
	getRouteRequestsEvents,
} from '@/shared/const/router'

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
		path: getRouteCompany(':id'),
		element: <CompanyPage />,
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
		element: <NotFoundPage />,
	},
	[AppRoutes.INSTRUCTIONS]: {
		path: getRouteInstructions(),
		element: <InstructionsPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />,
	},
}
