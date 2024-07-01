export enum Routes {
	MAIN = 'main',
	PROFILE = 'profile',
	CATALOG = 'catalog',
	EVENTS = 'events',
}

export const getMainPath = () => '/'
export const getProfilePath = () => '/profile'
export const getCatalogPath = () => '/catalog'
export const getEventsPath = () => '/events'

export const pathNames = [
	{
		path: getProfilePath(),
		pathName: Routes.PROFILE,
		value: 'Личный кабинет /',
	},
	{
		path: getCatalogPath(),
		pathName: Routes.CATALOG,
		value: 'Каталог /',
	},
	{
		path: getEventsPath(),
		pathName: Routes.EVENTS,
		value: 'Мероприятия /',
	},
]
