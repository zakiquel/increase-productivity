import { memo, useMemo } from 'react'

import { ProfileBlock } from '../ProfileBlock/ProfileBlock'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import { classNames } from '@repo/shared/lib'

import cls from './Sidebar.module.scss'
import { SidebarItemType } from '../../model/types/sidebar'
import { getCatalogPath, getEventsPath, getProductPath } from '@/shared/const/route'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getEventsPath(),
      text: 'Мероприятия',
    },
    {
      path: getCatalogPath(),
      text: 'Каталог',
    },
  ]

  const itemsList = useMemo(
    () => sidebarItemsList.map((item, key) => <SidebarItem item={item} key={key} />),
    [sidebarItemsList]
  )
  return (
    <aside className={classNames(cls.Sidebar, {}, [className])}>
      <ProfileBlock />
      <div className={classNames(cls.NavPanel)}>
        <div role="navigation" className={cls.items}>
          {itemsList}
        </div>
      </div>
    </aside>
  )
})
