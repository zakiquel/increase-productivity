import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = () => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: '/',
      text: 'Мероприятия',
    },
    {
      path: '/catalog',
      text: 'Каталог',
    },
  ]

  return sidebarItemsList
}
