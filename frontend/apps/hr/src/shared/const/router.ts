export enum AppRoutes {
	MAIN = 'main',
	PROFILE = 'profile',
	COMPANY = 'company',
	EMPLOYEE = 'employee',
	EVENTS = 'events',
	REQUESTS = 'requests',
	CATALOG = 'catalog',
	INSTRUCTIONS = 'instructions',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/hr/'
export const getRouteCompany = (id: string) => `/hr/company/${id}`
export const getRouteEmployees = () => '/hr/employees'
export const getRouteEmployee = (id: string) => `/hr/employees/${id}`
export const getRouteEvents = () => '/hr/events'
export const getRouteCatalog = () => '/hr/catalog'
export const getRouteInstructions = () => '/hr/instructions'
export const getRouteRequestsEvents = () => '/hr/events/requests'
export const getRouteProfile = (id: string) => `/hr/profile/${id}`

export const pathNames = [
	{
		path: getRouteEvents(),
		pathName: AppRoutes.EVENTS,
		value: 'Мероприятия',
	},
	{
		path: getRouteRequestsEvents(),
		pathName: AppRoutes.REQUESTS,
		value: 'Заявки',
	},
]
