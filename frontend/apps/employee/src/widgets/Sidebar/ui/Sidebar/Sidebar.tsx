import { classNames } from '@repo/shared/lib'
import { memo, useMemo } from 'react'

import { SidebarItemType } from "../../model/types/sidebar";
import { ProfileBlock } from '../ProfileBlock/ProfileBlock'
import { SidebarItem } from '../SidebarItem/SidebarItem'


import { getCatalogPath, getEventsPath } from '@/shared/const/route'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarItemsList: SidebarItemType[] = useMemo(() => [
    {
      path: getEventsPath(),
      text: 'Мероприятия',
    },
    {
      path: getCatalogPath(),
      text: 'Каталог',
    },
  ], []);

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
