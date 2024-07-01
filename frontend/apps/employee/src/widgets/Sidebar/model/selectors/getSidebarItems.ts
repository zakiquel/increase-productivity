import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = () => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: '/catalog',
			text: 'Каталог',
		},
		{
			path: '/',
			text: 'Мероприятия',
		},
	]

	return sidebarItemsList
}
